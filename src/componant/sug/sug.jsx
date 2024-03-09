import React from 'react';
import imgbg from '../Assets/cover.jpg'
import './sug.css';

function Sug() {
  return (
    <div className='cont1'>
        <div className='sugbg'>
            <img src={imgbg} alt="" className='bgimg' />
            <p className='find'>Find Your HouseFor Your <span> Beloved Family Dream</span></p>

        </div>

    </div>
  );
}

export default Sug;