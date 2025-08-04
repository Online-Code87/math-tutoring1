import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import telegramIcon from './../assets/img/telegramIcon.png';
import gmail from './../assets/img/gmail.png';


const Footer = () => {
  return (
    <footer className='footer'>
      <Container >
        <Row>
          <Col><h3 id='Services'>Services</h3><br/><a href='#math-tutoring'><p id='math tutor'>Tutoring Mathematics</p></a><br/><a href='#other-services' id='website development'><p>Website Development</p></a><br/><a href='#other-services'><p id='maple'>Mathematics Software</p></a></Col>
          <Col>
             <h3>Contact Information:</h3>
             <br/>
             <p><img src={telegramIcon} alt='math-tutor-id'/>Telegram ID: @MathTutorSS </p> 
             <br/>
             <p><img src={gmail} alt='Math-tutor-email'/> Email Address: saeedenoori2@gmail.com </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
