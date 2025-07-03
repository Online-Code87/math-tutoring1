import React, { useRef } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import ContactUs from './../assets/img/ContactUs.jpeg';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        console.log("Email Sent Successfully!", result);
        alert("Email Sent Successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log("Something Went Wrong!");
        alert("Email Failed to Sent! Try Again.");
      })

  };


  return (
    <section id='connect'>
      <Container>
        <Row className='contact' >
          <h1>Contact Me </h1>
          <Col xs={12} md={6} xl={7}>
            <img src={ContactUs} alt='' />
          </Col>
          <Col xs={12} md={6} xl={5}>
            <Form ref={form}  onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group className='mb-3' as={Col} md="30">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='text' name='first' placeholder='Enter first name' required />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className='mb-3' >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type='text' name='last' placeholder='Enter last name' required />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className='mb-3' as={Col} md="30">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type='text' name='country' placeholder='Enter your country' required  />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className='mb-3' >
                    <Form.Label>Telegram ID</Form.Label>
                    <Form.Control type='text' name='telegram-id' placeholder='@Name' />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group as={Col} controlId="formGridEmail" className='mb-3'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name='email' placeholder="name@example.com" required />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridText" className='mb-3'>
                <Form.Label>Message</Form.Label>
                <Form.Control rows={8} as="textarea" name='message' placeholder="Leave a message"  />
                <Form.Text className='form-text'>Your information will not be shared with anyone!</Form.Text>
              </Form.Group>
              <button type="submit">Send</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
