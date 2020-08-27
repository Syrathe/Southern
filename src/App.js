import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/home.js';
import ReadMore from './Components/ReadMore';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/ReadMore">
        <ReadMore/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
