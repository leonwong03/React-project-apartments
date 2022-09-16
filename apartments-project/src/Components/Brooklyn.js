// import React from "react";

// export const Brooklyn = () => {
//     return (
//         <div>
//             <h3>owo</h3>
//         </div>
//     )
// }
import React, { useEffect, useState } from "react"

function DisplayApartmentListing({ list, brough }) {
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
                <div>
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

export const Brooklyn = () => {
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
                brough={"Brooklyn"}
            />
        </div>
    )
}

