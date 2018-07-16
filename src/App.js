import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import SwapImageSelector from "./components/SwapImageSelector"

class App extends Component {
  render() {
    return (
      <Body>
        <Router>
          <Switch>
            <Route exact path="/" component={SwapImageSelector} />
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
