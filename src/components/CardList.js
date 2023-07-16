import React, { Component } from "react";
import Card from './Card'

class CardList extends Component {

    constructor() {
        super()

        this.state = { nbrObject: 0 }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        console.log(this.state.nbrObject)
        // incrementation de la vateur du nombre des object à afficher :
        this.setState(prevState => {
            return { nbrObject: prevState.nbrObject + 1 }
        })

        // refrech the page : 
        this.mapping()
    }

    mapping() {
        return (
            this.props.Data.slice(0, this.state.nbrObject).map((cardData) => (
                <Card cardData={cardData} key={cardData.id} />
            ))
        )
    }



    render() {

        return (
            <>
                
                <button className="btn btn-primary btn-lg btn-block btnAfficher" onClick={this.clickHandler}>Click me !</button>

                {/* afficher les objects */}
                {this.mapping()}
            </>
        );
    }
}

export default CardList;
