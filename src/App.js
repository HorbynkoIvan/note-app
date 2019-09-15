import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { Container} from 'react-bootstrap';
import {Home} from "./pages/Home";
import {About} from "./pages/About";

function App() {
  return (
      <BrowserRouter>
        <Container>
          <Switch>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/about'} exact component={About}/>
          </Switch>
        </Container>

      </BrowserRouter>
  );
}

export default App;
