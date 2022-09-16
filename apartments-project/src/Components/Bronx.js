import React from "react";
import { BroughListing, DisplayApartmentListing, SubmitApartmentListing } from "./Apartment";

export const Bronx = () => {
    const brough = "Bronx";
    
    return(
        <div>
            <BroughListing
                brough={brough}
            />
        </div>
    )
}