import React, { Component } from "react";
import styled from "styled-components";

import CoverOptions from "./CoverOptions";
import PhotoOptions from "./PhotoOptions";

class SwapImageSelector extends Component {
  state = {
    photoOptionsView: false
  };

  togglePhotoOptions = async () => {
    try {
      this.setState({ photoOptionsView: !this.state.photoOptionsView });
    } catch (err) {
      console.log(err);
      this.setState({ err: err.message });
    }
  };

  render() {
    return (
      <SelectorWrapper>
        <button onClick={this.togglePhotoOptions}>Toggle View</button>
        {this.state.photoOptionsView ? <CoverOptions /> : <PhotoOptions />}
      </SelectorWrapper>
    );
  }
}

export default SwapImageSelector;

const SelectorWrapper = styled.div``;
