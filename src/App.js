import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { Container} from 'react-bootstrap';
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {NavBar} from "./components/NavBar";
import {AlertComponent} from "./components/Alert";

function App() {
  return (
      <BrowserRouter>
          <NavBar/>
        <div className="container pt-4">
            <AlertComponent/>
          <Switch>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/about'} exact component={About}/>
          </Switch>
        </div>

      </BrowserRouter>
  );
}

export default App;
