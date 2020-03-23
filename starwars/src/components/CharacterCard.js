import React from "react";
import styled from "styled-components";

import {
  Card,
  CardText,
  CardBody,
  CardSubtitle,
  Badge,
  Col
} from "reactstrap";

const SWCard = styled(Card)`
border: 2px solid black;
margin: 5px;
display: flex;
align-content: center;
justify-content: space-around;
background-color: black;
color: white;
background: rgba(0, 0, 0, 0.85);
`;

const SWBadge = styled(Badge)`
background: rgba(100, 100, 100, 0.3);
font-size: 1.30rem;

`
const CharacterCard = props => {
   
  return (
    <Col xs="10" sm="7" md="5" xl="4">
      <SWCard>
        <SWBadge>{props.char.name}</SWBadge>
        <CardBody>
          <CardText>Birth Year: {props.char.birth_year}</CardText>
          <CardText>Gender: {props.char.gender}</CardText>
          <CardText>Height: {props.char.height}cm</CardText>

          <CardSubtitle>Hair Color: {props.char.hair_color}</CardSubtitle>
        </CardBody>
      </SWCard>
    </Col>
  );
};

export default CharacterCard;
