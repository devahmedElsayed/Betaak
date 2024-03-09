import React, { Fragment, useEffect } from 'react';
import './Property.css';
import { MdOutlineApartment } from "react-icons/md";
import { MdOutlineHolidayVillage } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { HiBuildingOffice } from "react-icons/hi2";
import { FaBuilding } from "react-icons/fa6";
import { GiFamilyHouse } from "react-icons/gi";
import { FaShop } from "react-icons/fa6";
import { GiHomeGarage } from "react-icons/gi";

import Card from 'react-bootstrap/Card';
import 'animate.css';



const Property = () => {
  return (
    <Fragment>
    <div className='h_card'>
    <h2 >Property Types</h2>
    <hr/>
   <div className='cardss row '>
   
    <Card className='ccard col-xl-3 col-lg-3 col-md-6 col-sm-6' style={{ width: '18rem' }}>
    <MdOutlineApartment  className='aprt'/>
      <Card.Body>
        <h2>Apartment</h2>
        <Card.Text>
          123 Properties
        </Card.Text>
      </Card.Body>
    </Card>
    {/*  */}
    <Card  className='ccard col-xl-3 col-lg-3 col-md-6 col-sm-6'style={{ width: '18rem' }}>
    <MdOutlineHolidayVillage className='aprt' />
      <Card.Body>
        <h2>villa</h2>
        <Card.Text>
          123 Properties
        </Card.Text>
      </Card.Body>
    </Card>
    {/*  */}
    <Card  className='ccard col-xl-3 col-lg-3 col-md-6 col-sm-6' style={{ width: '18rem' }}>
    <FaHome className='aprt'/>
      <Card.Body>
        <h2>Home</h2>
        <Card.Text>
          123 Properties
        </Card.Text>
      </Card.Body>
    </Card>
    {/*  */}
    <Card  className='ccard col-xl-3 col-lg-3 col-md-6 col-sm-6' style={{ width: '18rem' }}>
    <HiBuildingOffice className='aprt' />
      <Card.Body>
        <h2>office</h2>
        <Card.Text>
          123 Properties
        </Card.Text>
      </Card.Body>
    </Card>
    {/*  */}
    <Card  className='ccard col-xl-3 col-lg-3 col-md-6 col-sm-6' style={{ width: '18rem' }}>
    <FaBuilding className='aprt' />
      <Card.Body>
        <h2>bulding</h2>
        <Card.Text>
          123 Properties
        </Card.Text>
      </Card.Body>
    </Card>
    {/*  */}
    <Card  className='ccard col-xl-3 col-lg-3 col-md-6 col-sm-6' style={{ width: '18rem' }}>
    <GiFamilyHouse  className='aprt'/>
      <Card.Body>
        <h2>townhouse</h2>
        <Card.Text>
          123 Properties
        </Card.Text>
      </Card.Body>
    </Card>
    {/*  */}
    <Card  className='ccard col-xl-3 col-lg-3 col-md-6 col-sm-6' style={{ width: '18rem' }}>
    <FaShop  className='aprt'/>
      <Card.Body>
        <h2>shop</h2>
        <Card.Text>
          123 Properties
        </Card.Text>
      </Card.Body>
    </Card>
    {/*  */}
    <Card  className='ccard col-xl-3 col-lg-3 col-md-6 col-sm-6' style={{ width: '18rem' }}>
    <GiHomeGarage  className='aprt'/>
      <Card.Body>
        <h2>garage</h2>
        <Card.Text>
          123 Properties
        </Card.Text>
      </Card.Body>
    </Card>
    
    {/*  */}
    
      </div>
      </div>
       <hr className='endpro'/>
       </Fragment>
  )
}

export default Property;