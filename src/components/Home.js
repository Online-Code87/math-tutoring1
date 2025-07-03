import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import BannerImg from './../assets/img/BannerImg.png';
import  './../App.css';

const Home = () => {
  return (
    <section className='banner' id='home'> 
        <Container>
            <Row className='align-items-center' >
                <Col xs={12} md={6} xl={7}>
                   <span className='tagline'> Welcome to my portfolio</span>
                   <h1> Hi, I'm Selina!</h1>
                   <p>I have a PhD degree in <strong>Mathematics </strong> and I love tutoring different subjects of Mathematics. With several years of teaching experience, I provide high school and university students with tutoring that is tailored to their specific styles of learning. I try to make students enjoy learning mathematics. </p>
                   <a href='#connect'><button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button></a>
                </Col>
                <Col xs={12} md={6} xl={5}>
                   <img src={BannerImg} alt='Header Img' />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Home
