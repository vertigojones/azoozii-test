import React, { Component } from "react";
import {
  Button,
  Card,
  Image,
  Header,
  Icon,
  Dropdown,
  Menu,
  Segment
} from "semantic-ui-react";
import styled from "styled-components";
import IndividualImage from "./IndividualImage";
//import axios from "axios";

const testSubject = {
  name: "Orders API Get All",
  status: "SUCCESS",
  timestamps: {
    timestamp: 1530303194.811859,
    timestamp_formatted: "2018-06-29_04:13:14pm",
    elapsed_time: 0.21451020240783691
  },
  data: {
    orders: [
      {
        _id: {
          $oid: "5b183f1588f92904825d5105"
        },
        state: "CREATED",
        project_name: "Unity Camp",
        project_id: "5b195917e7179a074bec4e35",
        program_name: "2018 Camp Barney",
        program_id: "5b195970e7179a074bec4e3e",
        name: "Hollahan, Thomas",
        environment: [
          {
            name: "firstName",
            value: "Thomas"
          },
          {
            name: "nickName",
            value: ""
          },
          {
            name: "lastName",
            value: "Hollahan"
          },
          {
            name: "cabin",
            value: "A"
          }
        ],
        reference_asset: true,
        headshot_asset: true,
        headshot_verified: true
      },
      {
        _id: {
          $oid: "5b3458af88f929566736aa31"
        },
        state: "CREATED",
        project_name: "Unity Camp",
        project_id: "5b195917e7179a074bec4e35",
        program_name: "2018 Camp Barney",
        program_id: "5b195970e7179a074bec4e3e",
        ID: "5b195970e7179a074bec4e3e",
        reference_asset: false,
        headshot_asset: false,
        headshot_verified: true,
        name: "Allen, Bryson",
        environment: [
          {
            firstName: "Bryson"
          },
          {
            nickName: ""
          },
          {
            lastName: "Allen"
          },
          {
            cabin: "B"
          }
        ]
      }
    ]
  }
};

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
  state = {
    selectedPhotoId: null
  };

  render() {
    const sampleUsers = testSubject.data.orders.map(
      (individualOrder, index) => {
        return (
          <Dropdown.Item key={index}>{individualOrder.name}</Dropdown.Item>
        );
      }
    );

    const samplePictures = pictures.map(picture => {
      return (
        <div>
          <IndividualImage key={picture.id} photoUrl={picture.photoUrl} />
        </div>
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
          <Menu vertical>
            <Dropdown item text="User">
              <Dropdown.Menu>{sampleUsers}</Dropdown.Menu>
            </Dropdown>
          </Menu>
        </DropdownWrapper>
        <PhotoGroupWrapper>{samplePictures}</PhotoGroupWrapper>
        <SegmentWrapper>
          <Segment>Please select an image</Segment>
        </SegmentWrapper>
      </PhotoOptionsWrapper>
    );
  }
}

export default PhotoOptions;

const PhotoOptionsWrapper = styled.div`
  /* margin: 0 10vw; */
`;

const PhotoGroupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 50px;
`;

const DropdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const SegmentWrapper = styled.div`
  width: 200px;
  margin: 0 auto;
`;
