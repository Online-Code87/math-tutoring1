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
    <section className='course-levels' id='math-tutoring'>
      <Container>
        <Row>
          <Col >
            <div className='justify-content-left'>
              <h1> Math Tutoring</h1>
              <h4> My Tutoring Approach:</h4>
              <ul >
                <li key="1">I teach online via platforms such as Zoom, Google Meet, and alike (or other platforms suggested by the student). </li>
                <li key="2">During meeting, I will try to focus on those parts on which the student has weaknesses and help him/her to learn better. </li>
                <li key="3">If the student wants, we can first have a free half- hour meeting to review the specific subject the student wants to learn.</li>
              </ul>
              <p> Also, at university level, I can help student to solve their problems using mathematics software like Maple or Python.  </p>
              <h4>Topics Covered:</h4>
            </div>
            <Tab.Container  defaultActiveKey='first'>
              <Nav variant="" justify className='nav-pills mb-5 justify-content-center align-items-center flex flex-col' id='pills-tab'>
                <Nav.Item  variant='success'>
                  <Nav.Link eventKey="first">High School</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                  <Nav.Link eventKey="second"> Undergraduate</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                  <Nav.Link eventKey="third">Graduate</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                  <Nav.Link eventKey="fourth" >Postgraduate</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className='justify-items-center'>
                {
                  levels.map((level, index) => {
                    return (
                      <Tab.Pane eventKey={level.index1} key={index}>
                        <h2>{level.title1}</h2>
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
  )
}

export default MathTutoring


