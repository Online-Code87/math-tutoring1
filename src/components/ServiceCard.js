import React from 'react';
import { Card } from 'react-bootstrap';
import './../App.css';

const ServiceCard = ({ImgUrl, title, description}) => {
  return (
    <Card >
      <Card.Img src={ImgUrl} variant='top' alt='service image'/>
      <Card.Body>
        <Card.Title >{title}</Card.Title>
        <Card.Text >{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ServiceCard

