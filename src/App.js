import React from "react";
import { Route, Link } from 'react-router-dom'
import Form from './Pizza'
import Home from './Home'

const App = () => {
  return (
    <>
    <div>
      <div>
        <h1>Lambda Eats</h1>
        <Link to="/">Home</Link>
        <Link to="/pizza">Order</Link>
      </div>

      <Route path='/'>
        <Home />
      </Route>
      

      <Route path='/pizza/'>
        <Form/>
      </Route>

       </div>
    </>
  );
};
export default App;
