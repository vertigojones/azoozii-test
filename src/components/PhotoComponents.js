import React, { Component } from "react";
import { Header, Icon, Dropdown, Segment, Button } from "semantic-ui-react";
import styled from "styled-components";
import IndividualImage from "./IndividualImage";
import _ from "lodash";
//import axios from "axios";

const testSubject = {
  _id: {
    $oid: "5b183f1588f92904825d5106"
  },
  state: "CREATED",
  project_name: "Unity Camp",
  project_id: "5b195917e7179a074bec4e35",
  program_name: "2018 Camp Barney",
  program_id: "5b195970e7179a074bec4e3e",
  environment: [
    {
      name: "firstName",
      value: "Adam"
    },
    {
      name: "nickName",
      value: ""
    },
    {
      name: "lastName",
      value: "Lisi"
    },
    {
      name: "cabin",
      value: "A"
    }
  ],
  products: [
    {
      name: "Book Content",
      slug: "bookContents",
      spreads: [
        {
          name: "Dining Hall",
          slug: "diningHall",
          swaps: [
            {
              image: [
                {
                  name: "Dining Hall",
                  slug: "diningHall",
                  routing: {
                    collection: "subject_xxxxxx",
                    set: "yyyyyy",
                    slug: "diningHall"
                  },
                  coordinates: {
                    top: "143",
                    left: "225",
                    width: "249",
                    height: "175"
                  },
                  assets: [
                    {
                      id: "aaaaa",
                      selected: false,
                      thumbnailUrl: "http://www.placecage.com/200/300",
                      photoUrl: "http://www.placecage.com/400/600"
                    },
                    {
                      id: "bbb",
                      selected: false,
                      thumbnailUrl: "http://www.fillmurray.com/200/300",
                      photoUrl: "http://www.fillmurray.com/400/600"
                    }
                  ]
                }
              ],
              text: [
                {
                  name: "Dining Hall Caption",
                  slug: "diningHallCaption",
                  associated_image: "diningHall",
                  preferred:
                    "<<FORMAT_SHORT_NAME(firstName, nickName, lastName, 30)>> is enjoying a meal.",
                  default: "Enjoying a meal.",
                  coordinates: {
                    width: "249",
                    height: "175",
                    top: "143",
                    left: "225"
                  },
                  style: {
                    font_family: "The name of the font family.",
                    font_size: "Font size in points. Default: 12.",
                    font_color:
                      "Name or RGB representation of the font's color. For example: 'red', '#ff0000'. Default: 'black'",
                    font_weight:
                      "Whether to use a 'normal' or a 'bold' font. Default: 'normal'",
                    font_style:
                      "Whether to use a 'normal' or an 'italic' font. Default: 'normal'",
                    line_spacing: "Line spacing in pixels",
                    letter_spacing: "Letter spacing in pixels",
                    background:
                      "Name or RGB representation of the background color of the generated image. For example: 'red', '#ff0000'. Default: 'transparent'",
                    opacity:
                      "Text opacity value between 0 (invisible) and 100. Default: 100.",
                    text_decoration:
                      "Set to 'underline' to define a line below the text. Default: 'none'",
                    angle: 0,
                    wrap_text: false
                  }
                },
                {
                  name: "Medical Tip",
                  slug: "medicalTip",
                  preferred_text:
                    "<<FORMAT_SHORT_NAME(firstName, nickName, lastName, 60)>>, do you measure your glucose levels...",
                  default_text:
                    "Measure your gluose levels at least 3 times a day before meals",
                  coordinates: {
                    top: "143",
                    left: "225",
                    width: "100",
                    height: "30"
                  },
                  style: {
                    font_family: "The name of the font family.",
                    font_size: "Font size in points. Default: 12.",
                    font_color:
                      "Name or RGB representation of the font's color. For example: 'red', '#ff0000'. Default: 'black'",
                    font_weight:
                      "Whether to use a 'normal' or a 'bold' font. Default: 'normal'",
                    font_style:
                      "Whether to use a 'normal' or an 'italic' font. Default: 'normal'",
                    line_spacing: "Line spacing in pixels",
                    letter_spacing: "Letter spacing in pixels",
                    background:
                      "Name or RGB representation of the background color of the generated image. For example: 'red', '#ff0000'. Default: 'transparent'",
                    opacity:
                      "Text opacity value between 0 (invisible) and 100. Default: 100.",
                    text_decoration:
                      "Set to 'underline' to define a line below the text. Default: 'none'",
                    angle: 0,
                    wrap_text: true
                  }
                }
              ]
            }
          ]
        },

        {
          name: "Playing Soccer",
          slug: "playingsoccer",
          swaps: [
            {
              image: [
                {
                  name: "Playing Soccer",
                  slug: "playingsoccer",
                  routing: {
                    collection: "subject_xxxxxx",
                    set: "yyyyyy",
                    slug: "playingsoccer"
                  },
                  coordinates: {
                    top: "143",
                    left: "225",
                    width: "249",
                    height: "175"
                  },
                  assets: [
                    {
                      id: "bbb",
                      selected: false,
                      thumbnailUrl: "http://www.stevensegallery.com/200/300",
                      photoUrl: "http://www.stevensegallery.com/400/600"
                    }
                  ]
                }
              ],
              text: [
                {
                  name: "Dining Hall Caption",
                  slug: "diningHallCaption",
                  associated_image: "diningHall",
                  preferred:
                    "<<FORMAT_SHORT_NAME(firstName, nickName, lastName, 30)>> is enjoying a meal.",
                  default: "Enjoying a meal.",
                  coordinates: {
                    width: "249",
                    height: "175",
                    top: "143",
                    left: "225"
                  },
                  style: {
                    font_family: "The name of the font family.",
                    font_size: "Font size in points. Default: 12.",
                    font_color:
                      "Name or RGB representation of the font's color. For example: 'red', '#ff0000'. Default: 'black'",
                    font_weight:
                      "Whether to use a 'normal' or a 'bold' font. Default: 'normal'",
                    font_style:
                      "Whether to use a 'normal' or an 'italic' font. Default: 'normal'",
                    line_spacing: "Line spacing in pixels",
                    letter_spacing: "Letter spacing in pixels",
                    background:
                      "Name or RGB representation of the background color of the generated image. For example: 'red', '#ff0000'. Default: 'transparent'",
                    opacity:
                      "Text opacity value between 0 (invisible) and 100. Default: 100.",
                    text_decoration:
                      "Set to 'underline' to define a line below the text. Default: 'none'",
                    angle: 0,
                    wrap_text: false
                  }
                },
                {
                  name: "Medical Tip",
                  slug: "medicalTip",
                  preferred_text:
                    "<<FORMAT_SHORT_NAME(firstName, nickName, lastName, 60)>>, do you measure your glucose levels...",
                  default_text:
                    "Measure your gluose levels at least 3 times a day before meals",
                  coordinates: {
                    top: "143",
                    left: "225",
                    width: "100",
                    height: "30"
                  },
                  style: {
                    font_family: "The name of the font family.",
                    font_size: "Font size in points. Default: 12.",
                    font_color:
                      "Name or RGB representation of the font's color. For example: 'red', '#ff0000'. Default: 'black'",
                    font_weight:
                      "Whether to use a 'normal' or a 'bold' font. Default: 'normal'",
                    font_style:
                      "Whether to use a 'normal' or an 'italic' font. Default: 'normal'",
                    line_spacing: "Line spacing in pixels",
                    letter_spacing: "Letter spacing in pixels",
                    background:
                      "Name or RGB representation of the background color of the generated image. For example: 'red', '#ff0000'. Default: 'transparent'",
                    opacity:
                      "Text opacity value between 0 (invisible) and 100. Default: 100.",
                    text_decoration:
                      "Set to 'underline' to define a line below the text. Default: 'none'",
                    angle: 0,
                    wrap_text: true
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

class PhotoComponents extends Component {
  state = {
    selectedPhotosArray: [],
    selectedPhotoId: null,
    currentSwapIndex: 0
  };

  selectPhoto = photoId => {
    this.setState({ selectedPhotoId: photoId });
  };

  // method for moving on to next swap
  // function that updates selectedPhotosArray with selected photo id
  // then adds 1 to currentSwapIndex
  NextSwap = async () => {
    try {
      const selectedPhotosArrayClone = [...this.state.selectedPhotosArray];
      selectedPhotosArrayClone.push(this.state.selectedPhotoId);
      this.setState({
        selectedPhotosArray: selectedPhotosArrayClone,
        currentSwapIndex: this.state.currentSwapIndex + 1,
        selectedPhotoId: null
      });
    } catch (err) {
      console.log(err);
      this.setState({ err: err.message });
    }
  };

  // method for going back to previous swap
  // removes 1 from currentSwapIndex
  // function that removes photo id of that previous swap
  PreviousSwap = async () => {
    try {
      this.setState({
        currentSwapIndex: this.state.currentSwapIndex - 1
      });
      const selectedPhotosArrayClone = [...this.state.selectedPhotosArray];
      if (this.state.currentSwapIndex >= 0) {
        delete selectedPhotosArrayClone[ this.state.currentSwapIndex ]
        this.setState({ selectedPhotosArray: selectedPhotosArrayClone });
      }
    } catch (err) {
      console.log(err);
      this.setState({ err: err.message });
    }
  };

  render() {
    const selectedPhoto = _.find(
      testSubject.products[0].spreads[0].swaps[0].image[0].assets,
      { id: this.state.selectedPhotoId }
    );

    const swapName =
      testSubject.products[0].spreads[this.state.currentSwapIndex].swaps[0]
        .image[0].name;

    const singleSwapComponent = testSubject.products[0].spreads[
      this.state.currentSwapIndex
    ].swaps[0].image[0].assets.map(picture => {
      return (
        <SelectionWrapper key={picture.id}>
          <IndividualImage
            thumbnailUrl={picture.thumbnailUrl}
            photoUrl={picture.photoUrl}
            id={picture.id}
            selectedPhotoId={this.state.selectedPhotoId}
            selectPhoto={this.selectPhoto}
          />
        </SelectionWrapper>
      );
    });

    return (
      <PhotoOptionsWrapper>
        <Header as="h2" icon textAlign="center">
          <Icon name="users" />
          <Header.Content>
            Swap Image Selector
            <Header.Subheader>Manage your photo preferences</Header.Subheader>
          </Header.Content>
        </Header>
        <DropdownWrapper>
          <Dropdown placeholder="User">
            <Dropdown.Item>
              {testSubject.environment[2].value},{" "}
              {testSubject.environment[0].value}
            </Dropdown.Item>
          </Dropdown>
        </DropdownWrapper>
        <hr />
        <HeaderWrapper>
          <h1>{swapName}</h1>
        </HeaderWrapper>
        <ComponentsWrapper>{singleSwapComponent}</ComponentsWrapper>
        <SegmentWrapper>
          <Segment>
            {selectedPhoto
              ? `You have selected ${selectedPhoto.id}`
              : "Please select a photo"}
          </Segment>
          <ButtonWrapper>
            <Button
              primary
              onClick={this.PreviousSwap}
              style={{ margin: "5px", width: "200px" }}
            >
              Previous
            </Button>
            <Button
              primary
              onClick={this.NextSwap}
              style={{ margin: "5px", width: "200px" }}
            >
              Next
            </Button>
          </ButtonWrapper>
        </SegmentWrapper>
      </PhotoOptionsWrapper>
    );
  }
}

export default PhotoComponents;

const PhotoOptionsWrapper = styled.div`
  margin: 0;

  hr {
    margin: 20px 0;
  }
`;

const SelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DropdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 220px;
  margin: 0 auto;
`;

const SegmentWrapper = styled.div`
  width: 220px;
  margin: 0 auto;
  padding: 40px 0;
`;

const HeaderWrapper = styled.div`
  margin: 10px;
  text-align: center;
`;

const ComponentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
