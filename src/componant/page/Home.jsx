import React from 'react'
import NavbarB from '../Navbar/Navbar'
import Sug from '../sug/sug'
import Property from '../property type/Property'
import PropertyList from '../PropertyList/PropertyList'
import Wakeel from '../wakeel/Wakeel'
import PropertyAg from '../PropertyAgents/PropertyAg'
import Footer from '../Footer/Footer'


function Home() {
return (
    <div>
    <NavbarB/>
    <Sug/>
    <Property/>
    <PropertyList/>
    <Wakeel/>
    <PropertyAg/>
    </div>
)
}

export default Home