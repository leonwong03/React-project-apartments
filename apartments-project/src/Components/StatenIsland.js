import React from "react";
import { BroughListing, DisplayApartmentListing, SubmitApartmentListing } from "./Apartment";

export const StatenIsland = () => {
    const brough = "StatenIsland";
    
    return(
        <div>
            <BroughListing
                brough={brough}
            />
        </div>
    )
}