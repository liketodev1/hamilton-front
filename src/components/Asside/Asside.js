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

import DropDown from "../Dropdown"

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
                             <NavLink to={{
                                pathname: `${process.env.PUBLIC_URL}/questionBank` 
                            }}
                                > 
                                <li>
                                    <img src={questionBanklogo} alt='' /> 
                                    <p className={pathname === `${process.env.PUBLIC_URL}/questionBank` ? 'isActive' : ""} > <DropDown/> </p>

                                    <img src={arrowAsside}/>
                                    {/* <select className={pathname==="/"? "isActive": ""}>
                                        <option onClick={() => history.replace('/questionSubject')}>Question Subject</option>
                                        <option >Question Bank</option>
                                    </select> */}
                                </li>
                            </NavLink> 
                            <NavLink to={{
                                pathname: `${process.env.PUBLIC_URL}/exam`  
                            }}
                                >
                                <li>
                                    <img src={examSchedulerLogo} alt='' /> 
                                    <p className={pathname === `${process.env.PUBLIC_URL}/exam` ? 'isActive' : ""}>Exam Scheduler</p>
                                    <img src={arrowAsside}/>
                                </li>
                            </NavLink>
                            <NavLink to={{
                                pathname: `${process.env.PUBLIC_URL}/problem`  
                            }}
                                >
                                <li>
                                    <img src={candidatesLogo} alt='' /> 
                                    <p className={pathname === `${process.env.PUBLIC_URL}/problem` ? 'isActive' : ""}>Problem Users</p>
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
                            <NavLink to={{
                                pathname: `${process.env.PUBLIC_URL}/knowledge`  
                            }}
                                >
                                <li>
                                    <img src={knowledgeBaseLogo} alt='' /> 
                                    <p className={pathname === `${process.env.PUBLIC_URL}/knowledge` ? 'isActive' : ""}>Knowledge Base</p>
                                    <img src={arrowAsside}/>
                                </li>
                            </NavLink>
                            <NavLink to={{
                                pathname: `${process.env.PUBLIC_URL}/communication`  
                            }}
                                >
                                <li>
                                    <img src={communicationLogo} alt='' /> 
                                    <p className={pathname === `${process.env.PUBLIC_URL}/communication` ? 'isActive' : ""}>Communication</p>
                                    <img src={arrowAsside}/>
                                </li>
                            </NavLink>
                            <NavLink to={{
                                pathname: `${process.env.PUBLIC_URL}/organization` 
                            }}
                                >
                                <li>
                                    <img src={organizationLogo} alt='' /> 
                                    <p className={pathname === `${process.env.PUBLIC_URL}/organization` ? 'isActive' : ""}>Organization</p>
                                    <img src={arrowAsside}/>
                                </li>
                            </NavLink>
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