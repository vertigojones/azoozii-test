import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import styled from "styled-components";

class IndividualImage extends Component {
  state = {
    selected: false
  };

  handleClick = () => {
    this.setState(prevState => {
      return {
        selected: !prevState.selected
      };
    });
  };

  render() {
    const selectedImageStyle = {
      borderStyle: this.state.selected ? "solid" : "solid",
      padding: this.state.selected ? "10px" : "10px",
      borderWidth: this.state.selected ? "20px" : "20px",
      borderColor: this.state.selected ? "green" : "#e8e8e8",
      borderRadius: this.state.selected ? "5px" : "5px"
    };

    return (
      <IndividualPhotoWrapper>
        <Image
          style={selectedImageStyle}
          src={this.props.photoUrl}
          alt={this.props.id}
          onClick={this.handleClick}
        />
      </IndividualPhotoWrapper>
    );
  }
}

export default IndividualImage;

const IndividualPhotoWrapper = styled.div`
  margin: 20px;
  img:hover {
    cursor: pointer;
  }
`;
