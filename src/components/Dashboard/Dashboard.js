import React, { useState } from 'react'
import { Route } from 'react-router-dom';

import Navbar from '../Navbar'
import './Dashboard.scss'
import Asside from '../Asside/Asside'
import DashboardMenu from "../DashboardMenu"
import QuestionBank from "../QuestionBank"
import ProblemUsers from '../ProblemUsers'
import ExamScheduler from "../ExamScheduler"
import Result from "../Result"
import Knowledge from "../KnowledgeBase"
import Communication from "../Communication"
import Organization from "../Organization"
import SignIn from '../SignIn';
import SignUp from '../SignUp/SignUp';
import QuestionSubject from "../QuestionSubject";
import Dropdown from "../Dropdown"

const Dashboard = () => {

    return (
        <section className="Dashboard">
            <div className="Dashboard-Main">
                <Navbar />
                <Asside />        
                
              

                {/* <Dropdown/> */}
                <Route path={`${process.env.PUBLIC_URL}/signin`} component={SignIn} />
                <Route path={`${process.env.PUBLIC_URL}/signup`} component={SignUp} />
                <Route path={`${process.env.PUBLIC_URL}/dashboard`} component={DashboardMenu} />
                <Route path={`${process.env.PUBLIC_URL}/questionSubject`} component={QuestionSubject} />
                <Route path={`${process.env.PUBLIC_URL}/questionBank`}  component={QuestionBank} />
                <Route path={`${process.env.PUBLIC_URL}/exam`} component={ExamScheduler} />
                <Route path={`${process.env.PUBLIC_URL}/problem`}  pcomponent={ProblemUsers} />
                <Route path={`${process.env.PUBLIC_URL}/result`}  component={Result} />
                <Route path={`${process.env.PUBLIC_URL}/knowledge`}  component={Knowledge} />
                <Route path={`${process.env.PUBLIC_URL}/communication`}  component={Communication} />
                <Route path={`${process.env.PUBLIC_URL}/organization`}  component={Organization} />
                

    
            </div>
            
        </section>
    )
}

export default Dashboard