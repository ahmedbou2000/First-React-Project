import React from "react";

function Card(props) {



    return (
        <div className="card bg-dark text-white">
            <img className="card-image" src={props.cardData.image} alt="User Image" />
            <h1 className="card-name">{props.cardData.name}</h1>
            <h2 className="card-function">{props.cardData.function}</h2>

            <h3 className="card-phone" style={{display: props.cardData.phone == ""? "none": "block"}}>
                {`Phone: ${props.cardData.phone}`}
            </h3>

            <h3 className="card-email" style={{display: props.cardData.email == "" ? "none" : "block"}}>
                {`Email: ${props.cardData.email}`}
            </h3>

            <h3 className="card-website" style={{display: props.cardData.website == "" ? "none": "block" }}>
                {`Website: ${props.cardData.website}`}
            </h3>

        </div>
    );

}

export default Card;
