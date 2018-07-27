import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import styled from "styled-components";

class IndividualImage extends Component {
  handleClick = () => {
    this.props.selectPhoto(this.props.id);
  };

  render() {
    const selectedImageStyle = {
      borderStyle: "solid",
      padding: "10px",
      borderWidth: "20px",
      borderRadius: "5px",
      borderColor:
        this.props.id === this.props.selectedPhotoId ? "green" : "#e8e8e8"
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
