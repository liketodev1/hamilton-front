import React, { useState } from 'react'
import { NavLink, withRouter, useHistory } from 'react-router-dom';
import arrowAsside from "../../assets/arrowAsside.png"
import dashboardLogo from "../../assets/dashboardLogo.png"
import questionBanklogo  from "../../assets/questionBankLogo.png"
import examSchedulerLogo from "../../assets/examSchedulerLogo.png"
import candidatesLogo from "../../assets/candidatesLogo.png"
import resultLogo from "../../assets/resultLogo.png"
import knowledgeBaseLogo from "../../assets/knowledgeBaseLogo.png" 
import communicationLogo from "../../assets/communicationLogo.png"
import organizationLogo from "../../assets/organizationLogo.png"

import './Asside.scss'
 

const Asside = (props) => {
    const history = useHistory()
    console.log(history);

    const { pathname } = props.location;
    return (
        <aside className="Asside">
            <div className="Asside-Wrapper">
                <ul>
                    <div className="Asside-Wrapper-Flex">
                        <div className="Asside-Wrapper-Flex-Navlink1">
                            <NavLink to={{
                                pathname: `${process.env.PUBLIC_URL}/dashboard` 
                            }}
                                >
                                <li>
                                    <img src={dashboardLogo} alt='' /> 
                                    <p className={pathname === `${process.env.PUBLIC_URL}/dashboard` ? 'isActive' : ""}>Dashboard</p>
                                </li>
                            </NavLink>
                            {/* <NavLink to={{
                                pathname: `${process.env.PUBLIC_URL}/exam`  
                            }}
                                >
                                <li>
                                    <img src={examSchedulerLogo} alt='' /> 
                                    <p className={pathname === `${process.env.PUBLIC_URL}/exam` ? 'isActive' : ""}>Exam Scheduler</p>
                                    <img src={arrowAsside}/>
                                </li>
                            </NavLink> */}
                            <NavLink to={{
                                pathname: `${process.env.PUBLIC_URL}/examManagment`  
                            }}
                                >
                                <li>
                                    <img src={knowledgeBaseLogo} alt='' /> 
                                    <p className={pathname === `${process.env.PUBLIC_URL}/examManagment` ? 'isActive' : ""}>Exam Managment</p>
                                    <img src={arrowAsside}/>
                                </li>
                            </NavLink>
                            <NavLink to={{
                                pathname: `${process.env.PUBLIC_URL}/result`  
                            }}
                                >
                                <li>
                                    <img src={resultLogo} alt='' /> 
                                    <p className={pathname === `${process.env.PUBLIC_URL}/result` ? 'isActive' : ""}>Result</p>
                                    <img src={arrowAsside}/>
                                </li>
                            </NavLink>
                            {/* <NavLink to={{
                                pathname: `${process.env.PUBLIC_URL}/communication`  
                            }}
                                >
                                <li>
                                    <img src={communicationLogo} alt='' /> 
                                    <p className={pathname === `${process.env.PUBLIC_URL}/communication` ? 'isActive' : ""}>Communication</p>
                                    <img src={arrowAsside}/>
                                </li>
                            </NavLink> */}
                            </div>
                            {/* <div className="Asside-Wrapper-Flex-Navlink2">   
                                <NavLink to={{
                                    pathname: "/signin"
                                }}
                                    >
                                    <li >
                                        <button className="Asside-Wrapper-Flex-Navlink2-SignIn">Sign In</button>
                                    </li>
                                </NavLink>
                                <NavLink to={{
                                    pathname: "/signup"
                                }}
                                    >
                                    <li >
                                        <button className="Asside-Wrapper-Flex-Navlink2-SignUp" >Sign Up</button>
                                    </li>
                                </NavLink>
                            </div> */}
                        </div>
                </ul>
            </div>
        </aside>
    )
}

export default withRouter(Asside)