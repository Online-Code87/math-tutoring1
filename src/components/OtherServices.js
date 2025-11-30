import React from 'react';
import MathSoftwareCard from './../assets/img/MathSoftwareCard.jpg';
import CodingCard from './../assets/img/CodingCard.jpg';
import WDcard from './../assets/img/WDcard.jpg';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
import './../App.css';


const OtherServices = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  const services = [
    {
      title: 'Tutoring Mathematics Software',
      description: 'Maple, Mathematica, Python (using libraries such as Math, Numpy, etc.).',
      ImgUrl: MathSoftwareCard,
    },
    {
      title: 'Tutoring Coding Languages',
      description: 'Python, JavaScript.',
      ImgUrl: CodingCard,
    },
    {
      title: 'Website Design and Development',
      description: 'Onlineshop, commercial, and personal portfolio websites.',
      ImgUrl: WDcard
    }
  ]

  return (
    <section className='services' id='other-services'>
      <Container>
        <Row className='align-items-center'>
          <h1 id='python'>Other Services</h1>
          <Col xs={6} md={3} xl={3}>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <Carousel responsive={responsive} infinite="true" className='service-slider' fade>
              {
                services.map((service, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <ServiceCard ImgUrl={service.ImgUrl} title={service.title} description={service.description} />
                    </Carousel.Item>
                  )
                })
              }
            </Carousel>
          </Col>
          <Col xs={6} md={3} xl={3}>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default OtherServices
