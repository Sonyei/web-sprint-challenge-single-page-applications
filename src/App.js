import React, { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom'
import Form from './Pizza'
import Home from './Home'
import schema from './schema'
import * as yup from 'yup'
import axios from 'axios'


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

const initialDisabled = true;
const fakeAPI = 'https://reqres.in/api/users'

const App = () => {

const [pizzas, setPizzas] = useState([])
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
  postNewPizza(newPizza)
}

const postNewPizza = (newPizza) => {
  axios.post(fakeAPI, newPizza)
    .then(res => {
      setPizzas([res.data, ...pizzas])
    })
    .catch(err => {
      console.log('POST ERR -->', err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
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
