import React, { useState, useEffect } from 'react';
import classes from './UsersApp.module.css';
import Button from "./Button";
import Title from "./Title";

function UsersApp() {
    // useState for determining on changing in our button selection
    const [selection, setSelection] = useState('');
    // useState for when we get data back to know the data has changed
    const [items, setItems] = useState();
    // useEffect to fetch the data (it's a promise)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${selection}`)
            .then((response) => response.json())
            .then((json) => setItems(json));
    }, [selection]);

    // return and draw interface
    return (
        <div>
            <Title text={"All About Users"} />
            <Button text={"Todos"} onClick={() => setSelection("Todos")} />
            <Button text={"Photos"} onClick={() => setSelection("Photos")} />
            <Button text={"Albums"} onClick={() => setSelection("Albums")} />
            <Title text={!selection ? "Click a button" : selection} />

            {!items ? null : items.map((item) => {
                return (
                    <div className={classes.card} key={item.id}>
                        {item.name && <h2 className={classes["card-header"]}>{item.name}</h2>}
                        <div className={classes["card-body"]}>
                            <h4>{item.title}</h4>
                        </div>
                        {item.email && (
                            <small className={classes['card-footer']}>{item.email}</small>
                        )}
                    </div>
                )
            }
            )}
        </div>
    )
}

export default UsersApp;