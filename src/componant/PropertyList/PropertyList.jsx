import React from 'react';
import './PropertyList.css';
import prop_1 from '../Assets/property-1.jpg'
import prop_2 from '../Assets/property-2.jpg'
import prop_3 from '../Assets/property-3.jpg'
import prop_4 from '../Assets/property-4.jpg'
import prop_5 from '../Assets/property-5.jpg'
import prop_6 from '../Assets/property-6.jpg';
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";




const PropertyList = () => {
    
    
    
  return (
    <div className='prop'>
        
        <div className='name_list'>
            <h2>Property Listing</h2>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>

        </div>
        <div className='cardimg animate__backInLeft'>
            <div className='c-img'>
                <div className='sell'>For Sell</div>
                <img src={prop_1} alt="" />
                <p className='know'>Appartment</p>
                <p className='salary'>$12,345</p>
                <h3>Golden Urban House </h3>
                <p className='loc'><FaLocationDot />123 Street, New York, USA</p>
                <div className='icons'>
                    <p className='icons1'><AiOutlineColumnWidth />1000 </p>
                    <p className='icons2'><FaBed />Bed</p>
                    <p className='icons3'><FaBath />Bath</p>
                </div>
            </div>
                    {/*  */}
            <div className='c-img' id='immg'>
                <p className='sell'>For Sell</p>
                <img src={prop_2} alt="" />
                <p className='know'>Villa</p>
                <p className='salary'>$12,345</p>
                <h3>Golden Urban House </h3>
                <p className='loc'><FaLocationDot />123 Street, New York, USA</p>
                <div className='icons'>
                    <p className='icons1'><AiOutlineColumnWidth />1000 </p>
                    <p className='icons2'><FaBed />Bed</p>
                    <p className='icons3'><FaBath />Bath</p>
                </div>
            </div>
                    {/*  */}
            <div className='c-img'>
                <p className='sell'>For Sell</p>
                <img src={prop_3} alt="" />
                <p className='know'>Office</p>
                <p className='salary'>$12,345</p>
                <h3>Golden Urban House </h3>
                <p className='loc'><FaLocationDot />123 Street, New York, USA</p>
                <div className='icons'>
                    <p className='icons1'><AiOutlineColumnWidth />1000 </p>
                    <p className='icons2'><FaBed />Bed</p>
                    <p className='icons3'><FaBath />Bath</p>
                </div>
            </div>
                    {/*  */}
            <div className='c-img'>
                <p className='sell'>For Sell</p>
                <img src={prop_4} alt="" />
                <p className='know'>Building</p>
                <p className='salary'>$12,345</p>
                <h3>Golden Urban House </h3>
                <p className='loc'><FaLocationDot />123 Street, New York, USA</p>
                <div className='icons'>
                    <p className='icons1'><AiOutlineColumnWidth />1000 </p>
                    <p className='icons2'><FaBed />Bed</p>
                    <p className='icons3'><FaBath />Bath</p>
                </div>
            </div>
                    {/*  */}
            <div className='c-img'>
                <p className='sell'>For Sell</p>
                <img src={prop_5} alt="" />
                <p className='know'>Home</p>
                <p className='salary'>$12,345</p>
                <h3>Golden Urban House </h3>
                <p className='loc'><FaLocationDot />123 Street, New York, USA</p>
                <div className='icons'>
                    <p className='icons1'><AiOutlineColumnWidth />1000 </p>
                    <p className='icons2'><FaBed />Bed</p>
                    <p className='icons3'><FaBath />Bath</p>
                </div>
            </div>
                    {/*  */}
            <div className='c-img'>
                <p className='sell'>For Sell</p>
                <img src={prop_6} alt="" />
                <p className='know'>Shop</p>
                <p className='salary'>$12,345</p>
                <h3>Golden Urban House </h3>
                <p className='loc'><FaLocationDot />123 Street, New York, USA</p>
                <div className='icons'>
                    <p className='icons1'><AiOutlineColumnWidth />1000 </p>
                    <p className='icons2'><FaBed />Bed</p>
                    <p className='icons3'><FaBath />Bath</p>
                </div>
            </div>
                    {/*  */}

                    </div>
                    <button className='btn_more'>browse more property </button>

    </div>
  )
}

export default PropertyList