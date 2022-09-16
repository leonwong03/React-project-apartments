import React, { useEffect, useState } from "react"
import { BroughListing, DisplayApartmentListing, SubmitApartmentListing } from "./Apartment";

export const Brooklyn = () => {
    const brough = "Brooklyn";
    
    return(
        <div>
            <BroughListing
                brough={brough}
            />
        </div>
    )
}

