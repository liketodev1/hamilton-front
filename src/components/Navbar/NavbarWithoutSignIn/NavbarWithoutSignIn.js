import React from 'react'
import './NavbarWithoutSignIn.scss'

import notification from "../../../assets/notification.png"
import user from "../../../assets/user.png"
import arrow from "../../../assets/arrow.png"

const NavbarWithoutSignIn = () => {

    return (
        <section className="NavbarWithoutSignIn">
            <div className="NavbarWithoutSignIn-Cont">
                <h4 className="NavbarWithoutSignIn-Cont-Help">Help</h4>
                <img className="NavbarWithoutSignIn-Cont-Notification" src={notification} alt=""/>
                <img className="NavbarWithoutSignIn-Cont-User"src={user} alt=""/>
                <img src={arrow} alt=""/>
            </div>
        </section>
    )
}

export default NavbarWithoutSignIn