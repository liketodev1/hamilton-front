import React, { useState } from 'react'
import './Navbar.scss'
import logo  from "../../assets/logo.png"
import NavbarWithoutSignIn from "../Navbar/NavbarWithoutSignIn/NavbarWithoutSignIn"
import NavbarSignIn from "../Navbar/NavbarSignIn/NavbarSignIn"

const Navbar = () => {
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    
    return (
        <section className="Navbar">
            <div className="Navbar-Cont">
                <div className="Navbar-Cont-LogoAndSearch">
                    <div >
                        <img src={logo} alt=""/>
                    </div>
                    <div className="Navbar-Cont-LogoAndSearch-Search">
                        <input className="Navbar-Cont-LogoAndSearch-Search-Input" placeholder="Search"/> 
                        
                    </div>
                </div>
                {/* <NavbarWithoutSignIn/>
                <NavbarSignIn/> */}

                {isLoggedIn ? <NavbarWithoutSignIn/> :  <NavbarSignIn/> }
            </div>
        </section>
    )
}

export default Navbar