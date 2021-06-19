import React from 'react';
import classes from "../../UI/Input/Input.module.css";

const Input = (props) => {
    return <div
        className={`${classes.control} ${
            props.isValid === false ? props.invalid : ''
        }`}>
        <label htmlFor="email">{props.label}</label>
        <input
            type={props.type}
            id={props.type}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onChange}
        />
    </div>
}

export default Input;