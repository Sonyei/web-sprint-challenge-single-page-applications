import React, { useState } from "react";
import { Route, Link } from 'react-router-dom'
import Form from './Pizza'
import Home from './Home'


const initialFormValues = {
  name: '',
  size: '',
  toppings: {
    cheese: false,
    pepp: false,
    olive: false,
    tomat: false
  }
}

const initialFormErrors = {
  name: '',
  size: '',
}

const initialPizzas = []
const initialDisabled = true;


const App = () => {

const [pizzas, setPizzas] = useState(initialPizzas)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

const formSubmit = () => {
  const newPizza = {
    name: formValues.name.trim(),
    size: formValues.size,
    toppings: ['cheese', 'pepp', 'olive', 'tomat'].filter(
      (topping) => formValues[topping]
    ),
  }
}

const inputChange = () => {
  
}

  return (
    <>
    <div>
      <div className='nav'>
        <h1>Lambda Eats</h1>
        <Link to="/">Home</Link>
        <Link to="/pizza">Order</Link>
      </div>

      <Route path='/'>
        <Home />
      </Route>
      

      <Route path='/pizza/'>
        <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        />
      </Route>

       </div>
    </>
  );
};
export default App;
