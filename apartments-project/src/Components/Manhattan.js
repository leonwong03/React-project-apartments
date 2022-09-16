import React from "react";
import { BroughListing, DisplayApartmentListing, SubmitApartmentListing } from "./Apartment";

export const Manhattan = () => {
    const brough = "Manhattan";
    
    return(
        <div>
            <BroughListing
                brough={brough}
            />
        </div>
    )
}