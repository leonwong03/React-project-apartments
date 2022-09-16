import React from "react";
import { BroughListing, DisplayApartmentListing, SubmitApartmentListing } from "./Apartment";

export const StatenIsland = () => {
    const brough = "Staten Island";
    
    return(
        <div>
            <BroughListing
                brough={brough}
            />
        </div>
    )
}