import React, { Fragment } from 'react'
import './PropertyAg.css';
import man_1 from '../Assets/man1.jpg'
import man_2 from '../Assets/man2.jpg'
import women_1 from '../Assets/women1.jpg'
import women_2 from '../Assets/women2.jpg'
import Card from 'react-bootstrap/Card';

const PropertyAg = () => {
return (
    <Fragment>
        <div className='head'>
            <h2>Our Clients Say!</h2>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
    <div className='agent'>
        <div className='dad'>
       <Card border="primary" style={{ width: '30rem' }}>
        <Card.Header><img src={man_1}/></Card.Header>
        <Card.Body>
          <Card.Title className='h_name'>Clint Name</Card.Title>
          <Card.Text className='ppcard' >
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text >
        </Card.Body>
      </Card>
      <br />
      </div>
        <div className='dad'>
       <Card border="primary" style={{ width: '30rem' }}>
        <Card.Header><img src={women_1}/></Card.Header>
        <Card.Body>
          <Card.Title className='h_name'>Clint Name</Card.Title>
          <Card.Text className='ppcard' >
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text >
        </Card.Body>
      </Card>
      <br />
      </div>
        <div className='dad'>
       <Card border="primary" style={{ width: '30rem' }}>
        <Card.Header> <img src={man_2}/> </Card.Header>
        <Card.Body>
          <Card.Title className='h_name'>Clint Name</Card.Title>
          <Card.Text className='ppcard'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text >
        </Card.Body>
      </Card>
      <br />
      </div>
        <div className='dad'>
       <Card border="primary" style={{ width: '30rem' }}>
        <Card.Header><img src={women_2}/></Card.Header>
        <Card.Body>
          <Card.Title className='h_name'>Clint Name</Card.Title>
          <Card.Text className='ppcard'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text >
        </Card.Body>
      </Card>
      <br />
      </div>
      

      

    </div>
    </Fragment>
  )
}

export default PropertyAg