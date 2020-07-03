import React from 'react'
import CardSOfTitle from "./CardSOfTitle"
import './DashboardMenu.scss'

const DashboardMenu = () => {

    return (
        <section className="DashboardMenu">
            <div className="DashboardMenu-Cont">
                <div className="DashboardMenu-Cont-CardSOfTitle">
                    <CardSOfTitle/>
                </div>
            </div>
            
        </section>
    )
}

export default DashboardMenu