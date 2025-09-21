import React from 'react';
import { Col, Container, Row, Nav, Tab } from 'react-bootstrap';
import './../App.css';

const MathTutoring = () => {
  const levels = [
    {
      index1: "first",
      title1: "High School Topics",
      courses: "Algebra, Geometry, Trigonometry, Pre-Calculus, Calculus, etc.",
    },
    {
      index1: "second",
      title1: "Undergraduate Topics",
      courses: "Algebra, Calculus, Geometry and Topology, Number Theory, Linear Algebra, Discrete Mathematics, Arithmetic, Differential Equations, Probability and Statistics, etc.",
    },
    {
      index1: "third",
      title1: "Graduate Topics",
      courses: "Algebra, Geometry, Topology, Differential Geometry, Differential Equations, etc.",
    },
    {
      index1: "fourth",
      title1: "Postgraduate Topics",
      courses: "Cluster Algebras, Discrete Integrable Systems, Darboux and Backlund Transformations, Continuous Integrable Systems, Discretization, etc.",
    }
  ]


  return (
    <>
      <section className='course-levels' id='online-math-tutoring'>
        <Container>
          <Row>
            <Col >
              <div className='justify-content-left'>
                <h1 id='maths-tutoring'> Math Tutoring</h1>
                <h4> My Tutoring Approach:</h4>
                <ul >
                  <li key="1">I teach online via platforms such as Zoom, Google Meet, and alike (or other platforms suggested by the student). </li>
                  <li key="2">During meeting, I will try to focus on those parts on which the student has weaknesses and help him/her to learn better. </li>
                  <li key="3">If the student wants, we can first have a free half- hour meeting to review the specific subject the student wants to learn.</li>
                </ul>
                <p> Also, at university level, I can help student to solve their problems using mathematics software like Maple or Python.  </p>
                <h4>Topics Covered:</h4>
              </div>
              <Tab.Container defaultActiveKey='first'>
                <Nav variant="" className='nav nav-pills nav-fill mb-5 justify-content-center align-items-center flex flex-col flex-sm-row' id='pills-tab'>
                  <Nav.Item variant='success'>
                    <Nav.Link eventKey="first" id='high-school-math'>High School</Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link eventKey="second" id='college-math-tutoring'> Undergraduate</Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link eventKey="third" id='advanced-math-tutor'>Graduate</Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link eventKey="fourth" id='research-and-review-math'>Postgraduate</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content className='justify-items-center'>
                  {
                    levels.map((level, index) => {
                      return (
                        <Tab.Pane eventKey={level.index1} key={index}>
                          <h2 id={level.title1}>{level.title1}</h2>
                          <p>{level.courses}</p>
                        </Tab.Pane>
                      )
                    })
                  }
                </Tab.Content >
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='faqs'>
        <Container>
          <Row>
            <Col>
              <h4>❓ Frequently Asked Questions (FAQs)</h4>
              <div >
                <h5 >What subjects do you tutor online?</h5>
                <p>I offer private online tutoring in Algebra, Calculus, Linear Algebra, Discrete Mathematics, Trigonometry, and Maple. I also assist with graduate- and postgraduate-level topics in integrable systems, mathematical physics, SageMath, and Python.</p>
              </div>
              <div >
                <h5 >Who can benefit from your tutoring?</h5>
                <p>I work with high school, university, and graduate students, as well as professionals who need help with advanced mathematics, programming, or research-level problems.</p>
              </div>
              <div>
                <h5>How are the tutoring sessions conducted?</h5>
                <p>All sessions are held online, one-on-one, using platforms like Zoom or Google Meet. This allows flexible scheduling and interactive learning from anywhere in the world.</p>
              </div>
              <div>
                <h5 >What payment methods do you accept?</h5>
                <p>I currently accept cryptocurrency (USDT, TRC20). PayPal will be available soon.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section >
    </>
  )
}

export default MathTutoring


