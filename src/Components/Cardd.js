import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import NavP from "./NavP";

function Cardd (){
  return (
    <React.Fragment>
        <Card>
        <CardBody>
          <NavP></NavP>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default Cardd;