import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import styled from "styled-components";

class IndividualImage extends Component {
  handleClick = () => {
    this.props.selectPhoto();
  };

  render() {
    const selectedImageStyle = {
      borderStyle:
        this.props.id === this.props.selectedPhotoId ? "solid" : "solid",
      padding: this.props.id === this.props.selectedPhotoId ? "10px" : "10px",
      borderWidth:
        this.props.id === this.props.selectedPhotoId ? "20px" : "20px",
      borderColor:
        this.props.id === this.props.selectedPhotoId ? "green" : "#e8e8e8",
      borderRadius: this.props.id === this.props.selectedPhotoId ? "5px" : "5px"
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
