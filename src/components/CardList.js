import React, { Component } from "react";
import Card from './Card'

class CardList extends Component{
    render(){

        return (
            this.props.Data.map((cardData) => (
                <Card  cardData={cardData} />
              ))
        );
    }
}

export default CardList;
