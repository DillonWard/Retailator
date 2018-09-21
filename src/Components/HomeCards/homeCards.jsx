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
import './homeCards.css';

export default class HomeCards extends React.Component {
  render() {
    return (
      <div id="welcome-cards">
        <Container>
          <Row>
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
