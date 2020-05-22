import React, { useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom';


import './NavbarSignIn.scss'
 

const NavbarSignIn = (props) => {

    const { pathname } = props.location;
    return (
        <aside className="NavbarSignIn">
            <div className="NavbarSignIn-Wrapper">
                <ul>
                    <div className="NavbarSignIn-Wrapper-Flex">
                             <div className="NavbarSignIn-Wrapper-Flex-Navlink2">   
                                <NavLink to={{
                                    pathname: `${process.env.PUBLIC_URL}/signin` 
                                }}
                                    >
                                    <li >
                                        <button className="NavbarSignIn-Wrapper-Flex-Navlink2-SignIn">Sign In</button>
                                    </li>
                                </NavLink>
                                <NavLink to={{
                                    pathname: `${process.env.PUBLIC_URL}/signup` 
                                }}
                                    >
                                    <li >
                                        <button className="NavbarSignIn-Wrapper-Flex-Navlink2-SignUp" >Sign Up</button>
                                    </li>
                                </NavLink>
                            </div> 
                        </div>
                </ul>
            </div>
        </aside>
    )
}

export default withRouter(NavbarSignIn)