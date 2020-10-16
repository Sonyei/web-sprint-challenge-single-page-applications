import React from 'react'

export default function Orders(props) {
    const { values, ingredients } = props


    return (
        <Orders>
        <h3>Name: {values.name}</h3>
        <p>Size: {values.size}</p>
        <div>
        <h3>Toppings:</h3>
        <p>Cheese: {ingredients.cheese ? 'yes' : 'no'}</p>
        <p>Pepperoni: {ingredients.pepp ? 'yes' : 'no'}</p>
        <p>Olives: {ingredients.olive ? 'yes' : 'no'}</p>
        <p>Tomatoes: {ingredients.tomat ? 'yes' : 'no'}</p>
        <br />

        {values.specInstruct === '' ? '' : values.specInstruct}

        </div>
        </Orders>
    )
}
