import { Carousel, Row, Col } from 'react-bootstrap';
import React from 'react';
import { Container } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';

const Skills = () => {

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

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <h1 id='math-tutor'>
              Skills
            </h1>
            <p>
              In addition to Mathematics and Tutoring, I also have some skills related to programming languages.
            </p>
          </Col>
        </Row>
        <Row className='align-items-center'>
          <Col xs={6} md={3} xl={3}> </Col>
          <Col xs={12} md={6} xl={6}>
            <Carousel responsive={responsive} infinite="true" className='skill-slider'>
              <Carousel.Item>
                <div className='skill-bx'>
                  <div className='outer-circle-95'>
                    <div className='inner-circle'>
                      95%
                    </div>
                  </div>
                  <Carousel.Caption>
                    <h3 id='tutoring'>Tutoring</h3>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='skill-bx'>
                  <div className='outer-circle-90'>
                    <div className='inner-circle'>
                      90%
                    </div>
                  </div>
                  <Carousel.Caption>
                    <h3 id='problem-solving'>Problem Solving</h3>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='skill-bx'>
                  <div className='outer-circle-90'>
                    <div className='inner-circle'>
                      90%
                    </div>
                  </div>
                  <Carousel.Caption>
                    <h3 id='website-design-and-development'>Website Design and Development</h3>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='skill-bx'>
                  <div className='outer-circle-90'>
                    <div className='inner-circle'>
                      90%
                    </div>
                  </div>
                  <Carousel.Caption>
                    <h3 id='python'>Coding Languages</h3>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='skill-bx'>
                  <div className='outer-circle-95'>
                    <div className='inner-circle'>
                      95%
                    </div>
                  </div>
                  <Carousel.Caption>
                    <h3 id='maple-tutorial'> Mathematics Software</h3>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={6} md={3} xl={3}> </Col>
        </Row>
      </Container >
    </section >
  )
}

export default Skills
