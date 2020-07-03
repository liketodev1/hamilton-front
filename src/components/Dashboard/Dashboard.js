import React, { useState } from 'react'
import { Route } from 'react-router-dom';

import Navbar from '../Navbar'
import './Dashboard.scss'
import Asside from '../Asside/Asside'
import DashboardMenu from "../DashboardMenu"
import ExamScheduler from "../ExamScheduler"
import Result from "../Result"
import Knowledge from "../KnowledgeBase"
import Communication from "../Communication"
import SignIn from '../SignIn';
import SignUp from '../SignUp/SignUp';
import SectionManagment from "../SectionManagment"
import HomePage from "../Homepage"
import QuestionManagment from '../QuestionManagment/QuestionManagment';
import Exams from "../Exams"
const Dashboard = () => {

    return (
        <section className="Dashboard">
            <div className="Dashboard-Main">
                <Navbar />
                <Asside />        
                <Route path={`${process.env.PUBLIC_URL}/signin`} component={SignIn} />
                <Route path={`${process.env.PUBLIC_URL}/signup`} component={SignUp} />
                <Route path={`${process.env.PUBLIC_URL}/dashboard`} component={DashboardMenu} />
                <Route path={`${process.env.PUBLIC_URL}/exam`} component={ExamScheduler} />
                <Route path={`${process.env.PUBLIC_URL}/result`}  component={Result} />
                <Route path={`${process.env.PUBLIC_URL}/exams`}  component={Exams} />
                <Route path={`${process.env.PUBLIC_URL}/examManagment`}  component={Knowledge} />
                <Route path={`${process.env.PUBLIC_URL}/communication`}  component={Communication} />
                <Route path={`${process.env.PUBLIC_URL}/sectionManagment`}  component={SectionManagment} />
                {/* <Route path={`${process.env.PUBLIC_URL}/questionManagment`}  component={QuestionManagment} /> */}


                <Route path={`${process.env.PUBLIC_URL}/homePage`}  component={HomePage} />


            </div>
            
        </section>
    )
}

export default Dashboard