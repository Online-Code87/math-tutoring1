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
                   <h1 id='Private online math tutor teaching calclus'> Hi, I'm Saeideh!</h1>
                   <p>I have a PhD degree in <strong>Mathematics. </strong> I offer <strong id='one-on-one-online-math-tutoring'>one-on-one online math tutoring </strong> for both <strong id='high-school-and-university-students'>high school and university students </strong>. Whether you need help with <strong id='algebra'> algebra</strong>, <strong id='calculus'>calculus</strong>, <strong id='linear-algebra'>linear algebra </strong>, <strong id='discrete-mathematics'> discrete mathematics </strong>, <strong id='differential-equations'> differential equations</strong>, <strong id='geometry'>geometry</strong>, or <strong id='maple'>Mathematics software</strong>, I can help you understand the concepts clearly and improve your problem-solving skills. My lessons are personalized, flexible, and fully online. I try to make students enjoy learning mathematics. </p>
                   <a href='#connect'><button onClick={() => console.log('connect')}>Book your first session! <ArrowRightCircle size={25}/></button></a>
                </Col>
                <Col xs={12} md={6} xl={5}>
                   <img src={BannerImg} alt='top-math-tutors-online' />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Home
