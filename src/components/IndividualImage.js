import React, { Component } from "react";
import styled from "styled-components";

class IndividualImage extends Component {
  render() {
    return (
      <IndividualPhotoWrapper>
        <img src={this.props.photoUrl} />
      </IndividualPhotoWrapper>
    );
  }
}

export default IndividualImage;

const IndividualPhotoWrapper = styled.div``;
