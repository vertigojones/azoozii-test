import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import PhotoOptions from "./components/PhotoOptions"

class App extends Component {
  render() {
    return (
      <Body>
        <Router>
          <Switch>
            <Route exact path="/" component={PhotoOptions} />
          </Switch>
        </Router>
      </Body>
    );
  }
}

export default App;

const Body = styled.div`
  width: 80%;
`
