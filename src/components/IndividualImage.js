import React, { Component } from "react";
import { Image, Button, Modal } from "semantic-ui-react";
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
      <div>
        <IndividualPhotoWrapper>
          <Image
            style={selectedImageStyle}
            src={this.props.thumbnailUrl}
            alt={this.props.id}
            onClick={this.handleClick}
          />
        </IndividualPhotoWrapper>
        <ModalWrapper>
          <Modal
            size="small"
            trigger={<Button>Full Size Image</Button>}
            closeIcon
          >
            <Modal.Content image>
              <Image src={this.props.photoUrl} centred />
            </Modal.Content>
          </Modal>
        </ModalWrapper>
      </div>
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

const ModalWrapper = styled.div``;
