import classes from "./AuthForm.module.css";
import React from "react";

const Input = props => {
    return <div className={`${classes.form__items} 
        ${props.isValid === false}
    `}>
        <label htmlFor={props.id}>{props.label}</label>
        <input
            type={props.type}
            id={props.id}
            value={props.value}
        />
    </div>
}

export default Input;