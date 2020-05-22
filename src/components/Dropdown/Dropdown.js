import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';

import './Dropdown.scss'

const Dropdown = () => {
const [isOpenDropdown, setisOpenDropdown] = useState(false)


    return (
        <section className="Dropdown">
            <div className="Dropdown-DivS">
                <div className="Dropdown-DivS-Select" onClick={()=> setisOpenDropdown(!isOpenDropdown)}  > Question Bank</div>
                {isOpenDropdown && (
                    <ul>
                        <div className="Dropdown-DivS-Select-AbsoluteDivS">
                            <NavLink to={{
                                pathname: `${process.env.PUBLIC_URL}/questionBank` 
                            }}
                            >
                                <li>
                                    <div className="Dropdown-DivS-Select-AbsoluteDivS-PDivS">
                                        <p  onClick={()=> setisOpenDropdown(false)} value={"Question Bank"}> Question Bank</p>
                                    </div>
                                </li>
                            </NavLink>
                            <NavLink to={{
                                pathname: `${process.env.PUBLIC_URL}/questionSubject` 
                            }}
                            >
                                <li>
                                    <div className="Dropdown-DivS-Select-AbsoluteDivS-PDivS">
                                        <p  onClick={()=> setisOpenDropdown(false)} value={"Question Select"}>Question Subject</p>
                                    </div>
                                </li>
                            </NavLink>
                            
                        </div>
                    </ul>

                )}
            </div>
        </section>
    )
}

export default Dropdown