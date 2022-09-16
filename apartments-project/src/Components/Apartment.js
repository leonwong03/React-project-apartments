import React, { useEffect, useState } from "react"
import {v4 as uuid} from "uuid"

export function DisplayApartmentListing({ list, brough }) {
    const [apartmentList, setApartmentList] = useState([]);
    
    useEffect(() => {
        let broughList = list.filter(apartment => {
            if (apartment.brough == brough) {
                return apartment;
            }
        })

        setApartmentList(broughList);
    }, [list, brough]);
    
    const displayApartmentList = (list) => {
        let output = [];
        list.forEach(apartment => {
            output.push(
                <div key={apartment.id}>
                    <div>{apartment.brough}</div>
                    <div>{apartment.name}</div>
                    <div>{apartment.image}</div>
                    <div>{apartment.likes}</div>
                    <div>{apartment.review.rating} - {apartment.review.comment}</div>
                    <div>{apartment.address}</div>
                </div>
            )
        });

        console.log(output);

        return output;
    }

    return (
        <div>
            {displayApartmentList(apartmentList)}
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
    const [filterText, setFilterText] = useState("");


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