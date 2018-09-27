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
import landlord from "./landlord.jpg";
import tenants from "./tenants.jpg";
import { Route } from "react-router-dom";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ currentTarget }) {
    // history.push('/select/', {currentTarget})
  }

  render() {
    return (
      <div id="welcome">
        <Container>
          <Row>
            <Col id="info">
              <h1 className="animated fadeIn">Welcome to Retailator</h1>
              <Row id="abt">
                <Col>
                  <h5 id="start" className="animated fadeIn">
                    Start searching for your future or selling your current home
                    now.
                  </h5>
                  <br />
                  <h5 id="about" className="animated fadeIn">
                    Retailator is a decentralized web application that was
                    created to allow for private individuals to buy, rent, or
                    even sell their homes.
                  </h5>

                  <br />
                  <br />
                  <h3 id="begin" className="animated fadeIn">
                    Start your search now...
                  </h3>
                </Col>
              </Row>
            </Col>
            <Col>
              <Card>
                <CardImage className="img-fluid" src={landlord} waves />
                <CardBody>
                  <CardTitle>I want to find my new home</CardTitle>
                  <CardText>
                    Here you can find listing for your future home, be it buying
                    or selling. We have a large selection of Houses, Co-ops,
                    Apartments, you name it.
                  </CardText>

                  <Route
                    render={({ history }) => (
                      <Button
                        value="homes"
                        onClick={() => {
                          history.push("/selection/homes");
                        }}
                      >
                        Show Me
                      </Button>
                    )}
                  />

                  {/* <Button value="homes" onClick={this.handleClick}>
                    Show Me
                  </Button> */}
                </CardBody>
              </Card>
            </Col>

            <Col>
              <Card>
                <CardImage className="img-fluid" src={tenants} waves />
                <CardBody>
                  <CardTitle>I want to find new tenants</CardTitle>
                  <CardText>
                    Here you can find a list of potential tenants for your
                    properties. Tenants can be filtered based off of preference,
                    be it age, martial status, or profession.
                  </CardText>
                  <Button value="tenants" onClick={this.handleClick}>
                    Show Me
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
