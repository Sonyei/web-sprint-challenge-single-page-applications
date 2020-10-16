import React, { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom'
import Form from './Pizza'
import Home from './Home'
import Orders from './PizzaOrders'
import schema from './schema'
import * as yup from 'yup'


const initialFormValues = {
  name: '',
  size: '',
    cheese: false,
    pepp: false,
    olive: false,
    tomat: false,
  specInstruct: '',
  }

const initialFormErrors = {
  name: '',
  size: '',
  specInstruct: '',
}
const initialPizza = []
const initialDisabled = true;

const App = () => {

const [pizzas, setPizzas] = useState(initialPizza)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

const changePizza = (name, value) => {
  setFormValues({
    ...formValues, [name]: value
  })
}

const submitPizza = () => {
  setPizzas([...pizzas, formValues])
  setFormValues(initialFormValues)
}

const inputChange = (name, value) => {

yup
.reach(schema, name)
.validate(value)
.then(() => {
  setFormErrors({
    ...formErrors,
    [name]: '',
  })
})
.catch(err => {
  setFormErrors({
    ...formErrors,
    [name]: err.errors[0]
  })
})
  setFormValues({
    ...formValues,
    [name]: value,
  })
};

useEffect(() => {
  schema.isValid(formValues).then((valid) => {
    setDisabled(!valid);
  })
}, [formValues]);

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
        change={changePizza}
        submit={submitPizza}
        inputChange={inputChange}
        disabled={disabled}
        errors={formErrors}
        />
      
        {pizzas.map((order) => (
        <Orders ingredients={order} key={order.name} />
        ))}
        </Route>

       </div>
    </>
  );
};
export default App;
