import React, { Component } from "react";
import styled from "styled-components";
//import axios from "axios";

const pictures = [
  {
    id: "001",
    photoUrl: "http://www.placecage.com/200/300"
  },

  {
    id: "002",
    photoUrl: "http://www.placecage.com/201/300"
  },

  {
    id: "003",
    photoUrl: "http://www.placecage.com/202/300"
  }
];

class PhotoOptions extends Component {
  render() {
    const samplePictures = pictures.map(individualPicture => {
      return (
        <ImageWrapper>
          <img src={individualPicture.photoUrl} alt={individualPicture.id} />
        </ImageWrapper>
      );
    });

    return <PhotoOptionsWrapper>{samplePictures}</PhotoOptionsWrapper>;
  }
}

export default PhotoOptions;

const PhotoOptionsWrapper = styled.div``;

const ImageWrapper = styled.div``;
