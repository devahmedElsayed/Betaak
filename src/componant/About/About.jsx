import React from 'react';
import './About.css';
import Aboutimg from '../Assets/Aboutimg.jpg';


const About = () => {
return (
    <div className='about'>
        
            <div className='side-p-img'>
                <div className='ph'>
            <h2>About Company</h2>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet blanditiis corporis aut labore nihil. Nisi, itaque nostrum suscipit natus, amet sed nemo alias mollitia vel eaque exercitationem harum nobis?</p>
            </div>
            <img src= {Aboutimg} alt='' className='Abimg'/>

            </div>
    </div>
  );
}

export default About