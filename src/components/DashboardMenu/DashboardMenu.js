import React from 'react'
import CardSOfTitle from "./CardSOfTitle"
import CardSOfNameTestS from "./CardSOfNameTestS"
import './DashboardMenu.scss'

const DashboardMenu = () => {

    return (
        <section className="DashboardMenu">
            <div className="DashboardMenu-Cont">
                <div className="DashboardMenu-Cont-CardSOfTitle">
                    {[0, 1, 2, 3].map(id => <CardSOfTitle key={id} id={id} />)}

                </div>
                <div className="DashboardMenu-Cont-CardSOfNameTestS">
                    {[0, 1, 2, 3].map(id => <CardSOfNameTestS key={id} id={id} />)}
                </div>
            </div>
            
        </section>
    )
}

export default DashboardMenu