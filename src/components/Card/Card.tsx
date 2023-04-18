import React from "react";

import SwipeButtons from "../SwipeButtons/SwipeButtons";
import './Card.scss'

type CardProps = {
    image: string;
    name: string;
    age: number;
}

const Card = ({image, name, age}: CardProps) => {
    return (
        <div>
            <img src={image} alt={name} />
            <h3>{name}, {age}</h3>
            <SwipeButtons />
        </div>
    )
};

export default Card;