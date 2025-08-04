import React from 'react';
import { Card } from 'react-bootstrap';
import './../App.css';

const ServiceCard = ({ImgUrl, title, description}) => {
  return (
    <Card >
      <Card.Img src={ImgUrl} variant='top' alt={title}/>
      <Card.Body>
        <Card.Title id={title}>{title}</Card.Title>
        <Card.Text >{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ServiceCard

