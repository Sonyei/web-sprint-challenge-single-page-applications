import React from "react";
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
       <Route path='/'>Ordering Form</Route>
    </>
  );
};
export default App;
