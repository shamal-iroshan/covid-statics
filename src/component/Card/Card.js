import React from 'react';
import './Card.css';

const Card = (props) => {
    return(
        <div className={"card-body"}>
            <div className={"icon-border"}>
                <i className={props.icon} style={{color: props.color}}/>
            </div>
            <h1 className={"value"} style={{color: props.color}}>{props.value}</h1>
            <p className={"title"}>{props.title}</p>
        </div>
    );
};

export default Card;