import React, { Component } from "react";
import { Button, Card, Image, Header, Icon, Modal } from "semantic-ui-react";
import styled from "styled-components";
//import axios from "axios";

const pictures = [
  {
    id: "001",
    photoUrl: "http://www.placecage.com/200/300"
  },

  {
    id: "002",
    photoUrl: "http://www.fillmurray.com/200/300"
  },

  {
    id: "003",
    photoUrl: "http://www.stevensegallery.com/200/300"
  }
];

class PhotoOptions extends Component {
  render() {
    const samplePictures = pictures.map(individualPicture => {
      return (
        <CardWrapper>
          <Card>
            <Card.Content>
              <Image
                key={individualPicture.id}
                src={individualPicture.photoUrl}
                size="large"
                bordered
              />
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Select
                </Button>
                <Modal
                  trigger={
                    <Button basic color="red">
                      Remove
                    </Button>
                  }
                >
                  <Header icon="delete" content="Remove Photo" />
                  <Modal.Content>
                    <p>Are you sure you want to delete this image?</p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color="red" inverted>
                      <Icon name="remove" /> No
                    </Button>
                    <Button color="green" inverted>
                      <Icon name="checkmark" /> Yes
                    </Button>
                  </Modal.Actions>
                </Modal>
              </div>
            </Card.Content>
          </Card>
        </CardWrapper>
      );
    });

    return (
      <PhotoOptionsWrapper>
        <CardGroupWrapper>
          <Card.Group>{samplePictures}</Card.Group>
        </CardGroupWrapper>
      </PhotoOptionsWrapper>
    );
  }
}

export default PhotoOptions;

const PhotoOptionsWrapper = styled.div``;

const CardGroupWrapper = styled.div`
  display: flex;
  flex-flow: row-reverse wrap-reverse;
  justify-content: space-around;
  align-items: flex-start;
  align-content: flex-start;
`;

const CardWrapper = styled.div`
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 20px;
`;
