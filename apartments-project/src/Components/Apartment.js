import React, { useEffect, useState } from "react"
import {v4 as uuid} from "uuid"
import Button from 'react-bootstrap/Button';

// Add like button on each apartment listing      

export function DisplayApartment({ apartment, newApartment }) {
    const [listing, setListing] = useState(apartment);

    // useEffect(() => {
    //     setListing(apartment)
    // }, [apartment])

    const handleLikeClick = (event, obj) => {
        console.log('handleClick', obj);

        obj.likes++;

        fetch(`http://localhost:8085/apartmentList/${obj.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then( () => {
            setListing(obj)
            newApartment(obj);
        });

    }

    return (
        <div>
            <div key={listing.id}>
                <div>{listing.brough}</div>
                <div>{listing.name}</div>
                <div>{listing.image}</div>
                <div>{listing.likes}
                    <Button 
                        variant="outline-primary" 
                        onClick={ (event) => {handleLikeClick(event, listing)}}
                    >
                        Like
                    </Button>
                </div>
                <div>{listing.review.rating} - {listing.review.comment}</div>
                <div>{listing.address}</div>
            </div>
        </div>
    );
}
      
export function DisplayApartmentListing({ list, brough }) {
    const [apartmentList, setApartmentList] = useState([]);
    
    useEffect(() => {
        filterList(list)
    }, [list, brough]);

    const filterList = (list) => {
        let broughList = list.filter(apartment => {
            if (apartment.brough == brough) {
                return apartment;
            }
        })

        setApartmentList(broughList);
    }

    const updateApartment = (obj) => {
        console.log(obj)
        let newList = [];
        apartmentList.forEach(element => {
            if (element.id == obj.id) {
                element = obj;
            }

            newList.push(element)
        });

        setApartmentList(newList)
    }

    return (
        <div>
            ({apartmentList.map(apartment => {
                return (
                    <DisplayApartment
                        key={apartment.id}
                        apartment={apartment}
                        newApartment={updateApartment}
                    />
                )
            })})
        </div>
    )
}

export function SubmitApartmentListing({addNewListing, brough}) {

    function handleSubmit(event) {
        event.preventDefault();
        const formElement = event.target;

        const newAddress = {
            id: uuid(),
            name: formElement["name"].value,
            image: formElement["image"].value,
            likes: 0,
            review: [{"rating": formElement["rating"].value, "comment": formElement["comment"].value}],
            address: formElement["address"].value,
            brough: brough
        }

        addNewListing(newAddress);

        formElement.reset();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="image" placeholder="Image" />
            <input type="text" name="rating" placeholder="Rating" />
            <input type="text" name="comment" placeholder="Comment" />
            <input type="text" name="address" placeholder="Address" />
            <input type="submit" value="Add"/>
        </form>
    );
}

export function BroughListing({ brough }) {
    const [apartmentList, setApartmentList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8085/apartmentList")
        .then(response => response.json())
        .then(apartmentJson => {
            console.log(apartmentJson)
            setApartmentList(apartmentJson);
        })
    }, []);

    function addNewApartment(apartment) {
        fetch("http://localhost:8085/apartmentList", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apartment)
        });

        setApartmentList([...apartmentList, apartment])
    }

    return(
        <div>
            <DisplayApartmentListing
                list={apartmentList}
                brough={brough}
            />
            <SubmitApartmentListing 
                addNewListing={addNewApartment}
                brough={brough}
            />
        </div>
    )
}