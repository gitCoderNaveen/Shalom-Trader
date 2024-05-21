import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import image1 from '../images/image1.webp'
import image2 from '../images/image2.jpg'
import image3 from '../images/image4.jpeg'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';
import carousel2 from '../images/carousel2.jpg'
import carousel1 from '../images/carousel1.jpg'
import carousel3 from '../images/carousel3.jpg'
import Image from 'react-bootstrap/Image';
import '../index.css'

export default function Home() {
  return (
    <div>
      <div className='carouserlDivision'>
      <Carousel>
      <Carousel.Item>
      <Image className='cImage' src={carousel1}/>
        <Carousel.Caption className='carouselCaption'> 
          <h3>Construction Machines</h3>
          <p>Avalibale for Rent All over Coimbatore</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <Image className='cImage' src={carousel2}/>
        <Carousel.Caption className='carouselCaption'>
        <h3>Pure Drinking Water Supply</h3>
          <p>Delivery Availbale in all over Coimbatore</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className='cImage' src={carousel3}/>
        <Carousel.Caption className='carouselCaption'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
      <div className='homeProductDiv'>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img className='cardImage' variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Demolition Machine</Card.Title>
                <Card.Text>
                  Quick Demolition of your old building with handy.
                </Card.Text>
                <Button variant="primary">For Rent</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img className='cardImage' variant="top" src={image2} />
              <Card.Body>
                <Card.Title>Driller Machine</Card.Title>
                <Card.Text>
                These are lightweight, versatile, and powerful, designed for general-purpose drilling and screwdriving tasks.
                </Card.Text>
                <Button variant="primary">For Rent</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img className='cardImage' variant="top" src={image3} />
              <Card.Body>
                <Card.Title>Grinding Machine</Card.Title>
                <Card.Text>
                Grinders are known for their robust performance, ergonomic design, and safety features, perfect for tasks such as cutting, grinding, and polishing.
                </Card.Text>
                <Button variant="primary">For Rent</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}
