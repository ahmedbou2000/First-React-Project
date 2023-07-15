import React from "react";

function SocialItem(props) {

    return (
        <li className="list-group-item">
            <img src={props.data.img} alt= {`icon for ${props.data.name}`} />
            <input type={"checkbox"} id={props.data.id} />
            <label htmlFor={props.data.id} >{props.data.name}</label>
        </li>
    )
}

export default SocialItem;
