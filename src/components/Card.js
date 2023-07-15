import React, { Component } from "react";

class Card extends Component {
    constructor(){
        super()
    }

    render() {
        return (
            <div className="card bg-dark text-white">
                <img className="card-image" src={this.props.cardData.image} alt="User Image" />
                <h1 className="card-name">{this.props.cardData.name}</h1>
                <h2 className="card-function">{this.props.cardData.function}</h2>

                <h3 className="card-phone" style={{ display: this.props.cardData.phone == "" ? "none" : "block" }}>
                    {`Phone: ${this.props.cardData.phone}`}
                </h3>

                <h3 className="card-email" style={{ display: this.props.cardData.email == "" ? "none" : "block" }}>
                    {`Email: ${this.props.cardData.email}`}
                </h3>

                <h3 className="card-website" style={{ display: this.props.cardData.website == "" ? "none" : "block" }}>
                    {`Website: ${this.props.cardData.website}`}
                </h3>

            </div>
        );
    }
}

export default Card;
