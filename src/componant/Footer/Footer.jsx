import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Footer.css'
import { MdOutlineHomeWork } from "react-icons/md";





const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_slid'>
        <div className='footer_left'>
            <p><FaLocationDot className='ic1' /> 123 Street, New York, USA</p>
            <p><IoIosCall className='ic1'  /> +012 345 67890</p>

            <p> <MdEmail className='ic1'  /> mail@domain.com</p>
            <hr/>

            <div className='cons'>
            <div className="iccons">
            <FaSquareXTwitter />

            </div>
            <div className="iccons">
            <FaFacebook />

            </div>
            <div className="iccons">
           <FaYoutube />

            </div>
            <div className="iccons">
           <FaLinkedin />

            </div>
            </div>
        </div>
        <div className='footer_right'>
            <input type="email" name="" id="" placeholder='Put Email To get Offer'/>
            <button className='btn_go'>Go</button>
        </div>
        <div className='hheed'>   <MdOutlineHomeWork className='i'/> High Tower</div>
    </div>
    </div>
  )
}

export default Footer