import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  Container,
  Row,
  Col
} from "mdbreact";
import "./home.css";

export default class Home extends React.Component {
  render() {
    return (
      <div id="welcome">
        <Container>
          <Row>
            <Col id="info">
              <h1 class="animated fadeIn">Welcome to Retailator</h1>
              <Row id="abt">
                <Col>
                  <h5 id='start' class="animated fadeIn">
                    Start searching for your future or selling your current home
                    now.
                  </h5>
<br></br>
                  <h5 id='about' class='animated fadeIn'>
                    Retailator is a decentralized web application that was
                    created to allow for private individuals to buy, rent, or
                    even sell their homes.
                  </h5>

                  <br/>
                  <br/>
                  <h3 id='begin' class='animated fadeIn'>Start your search now...</h3>
                </Col>
              </Row>
            </Col>
            <Col>
              <Card>
                <CardImage
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                  waves
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button href="#">Button</Button>
                </CardBody>
              </Card>
            </Col>

            <Col>
              <Card>
                <CardImage
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                  waves
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button href="#">Button</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
