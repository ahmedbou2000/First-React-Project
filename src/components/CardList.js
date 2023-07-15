import React from "react";
import Card from './Card.js'

function CardList(props){

    return (
        props.Data.map((cardData) => (
            <Card  cardData={cardData} />
          ))
    );
}

export default CardList;
