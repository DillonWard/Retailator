import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import './footer.css';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer id='footer' className="font-small pt-4 mt-2">
                <Container fluid className="text-center text-md-center">
                    <Row>
                    <Col sm="3">
                    <a href="https://www.linkedin.com/in/dillonsward/" target="_blank"><i className="fa fa-2x fa-linkedin"></i></a>
                    </Col>
                    <Col sm= "3">
                    <a href="https://github.com/DillonWard" target="_blank"><i className="fa fa-2x fa-github"/></a>
                    </Col>

                    <Col sm="6">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://github.com/DillonWard/Retailator" target="_blank"> Retailator - Dillon Ward </a>
                    </Container>
                    </Col>
                    </Row>
                </Container>
            </Footer>
        );
    }
}

export default FooterPage;