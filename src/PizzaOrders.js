import React from 'react'

export default function Orders(props) {
    const { ingredients } = props


    return (
        <div>
        <h3>Name: {ingredients.name}</h3>
        <p>Size: {ingredients.size}</p>
        <div>
        <h3>Toppings:</h3>
        <p>Cheese: {ingredients.cheese ? 'yes' : 'no'}</p>
        <p>Pepperoni: {ingredients.pepp ? 'yes' : 'no'}</p>
        <p>Olives: {ingredients.olive ? 'yes' : 'no'}</p>
        <p>Tomatoes: {ingredients.tomat ? 'yes' : 'no'}</p>
        <br />
        <h3>Special Instructions</h3>
        {ingredients.specInstruct === '' ? '' : ingredients.specInstruct}

            </div>
        </div>
    )
}
