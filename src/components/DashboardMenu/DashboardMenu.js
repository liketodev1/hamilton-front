import React from 'react'
import CardSOfTitle from "./CardSOfTitle"
import './DashboardMenu.scss'

const DashboardMenu = () => {

    return (
        <section className="DashboardMenu">
            <div className="DashboardMenu-Cont">
                <div className="DashboardMenu-Cont-CardSOfTitle">
                    {[0, 1].map(id => <CardSOfTitle key={id} id={id} />)}

                </div>
            </div>
            
        </section>
    )
}

export default DashboardMenu