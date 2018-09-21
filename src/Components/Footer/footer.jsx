import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import './footer.css';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer id='footer' className="font-small pt-4 mt-2">
                <Container fluid className="text-center text-md-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a id='cpr' href="https://github.com/DillonWard/Retailator" target="_blank"> Retailator - Dillon Ward </a>
                    </Container>
                </Container>
            </Footer>
        );
    }
}

export default FooterPage;