import React from "react";
import { BroughListing, DisplayApartmentListing, SubmitApartmentListing } from "./Apartment";

export const Queens = () => {
    const brough = "Queens";
    
    return(
        <div>
            <BroughListing
                brough={brough}
            />
        </div>
    )
}