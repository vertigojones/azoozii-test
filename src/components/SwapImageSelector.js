import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";

import CoverOptions from "./CoverOptions";
import PhotoComponents from "./PhotoComponents";

class SwapImageSelector extends Component {
  state = {
    photoOptionsView: false,
    buttonText: false
  };

  togglePhotoOptions = async () => {
    try {
      this.setState({ photoOptionsView: !this.state.photoOptionsView });
      this.setState({ buttonText: !this.state.buttonText });
    } catch (err) {
      console.log(err);
      this.setState({ err: err.message });
    }
  };

  render() {
    return (
      <SelectorWrapper>
        <ButtonWrapper>
          <Button style={{ width: "220px" }} inverted color="blue" onClick={this.togglePhotoOptions}>
            {this.state.buttonText
              ? "Switch to Picture View"
              : "Switch to Cover View"}
          </Button>
        </ButtonWrapper>
        {this.state.photoOptionsView ? <CoverOptions /> : <PhotoComponents />}
      </SelectorWrapper>
    );
  }
}

export default SwapImageSelector;

const SelectorWrapper = styled.div`
  text-align: center;
`;

const ButtonWrapper = styled.div`
  margin: 20px 0;
`;
