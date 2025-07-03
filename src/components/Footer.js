import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import telegramIcon from './../assets/img/telegramIcon.png';
import gmail from './../assets/img/gmail.png';


const Footer = () => {
  return (
    <footer className='footer'>
      <Container >
        <Row>
          <Col><h3>Services</h3><br/><a href='#math-tutoring'><p>Tutoring Mathematics</p></a><br/><a href='#other-services'><p>Website Development</p></a><br/><a href='#other-services'><p>Mathematics Software</p></a></Col>
          <Col>
             <h3>Contact Information:</h3>
             <br/>
             <p><img src={telegramIcon} alt=''/>Telegram ID: @SelinaMath </p> 
             <br/>
             <p><img src={gmail} alt=''/> Email Address: mcselina87@gmail.com </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
