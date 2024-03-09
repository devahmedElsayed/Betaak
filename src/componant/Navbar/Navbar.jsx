  import React, { useEffect } from 'react';
  import './Navbar.css';
  import { MdOutlineHomeWork } from "react-icons/md";
  import { Link } from 'react-router-dom';
  import { IoIosCall } from "react-icons/io";



  const NavbarB = () => {
    

// const btnn = document.getElementById('btn_hide');
// if (btnn) {
//   btnn.onclick = function () {
//     btnn.right_side.style.display = 'block';
    
//   };
// } else {
//   console.error("no value'");
// }

    
    return (
      <div className='nav'>
        <div className='left_side'>
          <div className='logo'>
            <MdOutlineHomeWork className='llogo' />
            <h1>High Towers</h1>
          </div>
        </div>
        <div className='right_side'>
          <div className='center'>
            
          <ul>
            <li ><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/Property">Property Type</Link></li>

              <li><Link to="/PropertyList">Property List</Link></li>
            
          </ul>
          </div>
          <ul>
          <div className='phone'>
            <li><Link to="/Contact"><IoIosCall className='call_icon'/> Contact</Link></li>
            </div>
          </ul>
        </div> 

      </div>
    );
  }

  export default NavbarB;
