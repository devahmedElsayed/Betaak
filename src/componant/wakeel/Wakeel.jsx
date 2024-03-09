import React from 'react';
import './Wakeel.css';
import wakel from '../Assets/wakeel.jpg';
import { IoMdCall } from "react-icons/io";

const Wakeel = () => {
  return (
    <div className='wakeel'>
        
            <div className="wakeel_left">
            <img className='pic_wakel' src={wakel} alt="" />    
            </div>
            <div className="wakeel_right">
                <h2 className='head_wakeel'>Contact With Our Certified Agent</h2>
                <p className='ph_wakeel'>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
                <button className='btn_call'><IoMdCall /> Make a Call</button>
            </div>
    </div>
  )
}

export default Wakeel