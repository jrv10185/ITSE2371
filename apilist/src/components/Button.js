import classes from './Button.module.css';
import {useState} from 'react';

function Button ({text, onClick}){
    return(
        <button className = {classes.btn}
        onClick={onClick}>
            {!text ? 'Clicky' : text}
        </button>
    )
}





export default Button;