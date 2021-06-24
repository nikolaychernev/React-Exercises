import React from "react";

import FeatureImage from "../images/feature-image.jpg";
import "./Feature.css";

const Feature = () => {
    return (
        <div>
            <img id={"feature-image"} src={FeatureImage} alt={"Feature"}/>
            <div id={"feature-text"}>
                <h1>Delicious Food, Delivered To You</h1>
                <p>Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or
                    dinner at home.</p>
                <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced
                    chefs!</p>
            </div>
        </div>
    );
}

export default Feature;