import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from 'react-router-dom';
import './App.scss';
import SubmitEmail from './pages/SubmitEmail';
import SubmitItem from './pages/SubmitItem';
import Products from './pages/Products';
import Home from './pages/Home';


function App() {
  return (
    <Router>
       
      <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
         <Route exact path="/submitemail" component={SubmitEmail} />
        <Route exact path="/submititem" component={SubmitItem} />
        <Route exact path="/products" component={Products} />
         </Switch>
    </Router>
  );
}

export default App;