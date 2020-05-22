import React, { useState, useEffect } from 'react'


import './CardSOfNameTestS.scss'

const CardSOfNameTestS = props => {
    const [content, setContent] = useState({
        title: '',
        assignedCandidates: '',
        totalTime:'',
        totalQuestions:"2",
        marksPerQuestion:"",
        negativeMarking:"",
        passingMark:"",
        randomizeQuestion:""
    }) 
    useEffect(() => {
        switch (props.id) {
            case 0: {
                setContent({
                    title: 'name of test',
                    assignedCandidates: '1',
                    totalTime:'60 min',
                    totalQuestions:"2",
                    marksPerQuestion:"2",
                    negativeMarking:"Yes",
                    passingMark:"30",
                    randomizeQuestion:"No"
                })
                break;
            }
            case 1: {
                setContent({
                    title: 'name of test' ,
                    assignedCandidates: '1',
                    totalTime:'60 min',
                    totalQuestions:"2",
                    marksPerQuestion:"2",
                    negativeMarking:"Yes",
                    passingMark:"30",
                    randomizeQuestion:"No"
                })
                break;
            }
            case 2: {
                setContent({
                    title: 'name of test',
                    assignedCandidates: '1',
                    totalTime:'60 min',
                    totalQuestions:"2",
                    marksPerQuestion:"2",
                    negativeMarking:"Yes",
                    passingMark:"30",
                    randomizeQuestion:"No"
                })
                break;
            }
            case 3: {
                setContent({
                    title: 'name of test',
                    assignedCandidates: '1',
                    totalTime:'60 min',
                    totalQuestions:"2",
                    marksPerQuestion:"2",
                    negativeMarking:"Yes",
                    passingMark:"30",
                    randomizeQuestion:"No"
                })
            }
        }
    }, [props.id])

    return (
        <section className="CardSOfNameTestS">
            <div className="CardSOfNameTestS-Cont">
                {/* <div > */}
                    <h2>{content.title}</h2>
                    <div className="CardSOfNameTestS-Cont-H1AndP">
                        <h1>Assigned candidates</h1>
                        <p>-{content.assignedCandidates}</p>   
                    </div>
                    <div className="CardSOfNameTestS-Cont-H1AndP">
                        <h1>Total Time </h1>
                        <p>-{content.totalTime}</p>
                    </div>
                    <div className="CardSOfNameTestS-Cont-H1AndP">
                        <h1>Total Questions </h1>
                        <p>-{content.totalQuestions}</p>
                    </div>
                    <div className="CardSOfNameTestS-Cont-H1AndP">
                        <h1>Marks Per Question </h1>
                        <p>-{content.marksPerQuestion}</p>
                    </div>
                    <div className="CardSOfNameTestS-Cont-H1AndP">
                        <h1>Negative Marking </h1>
                        <p>-{content.negativeMarking}</p>
                    </div>
                    <div className="CardSOfNameTestS-Cont-H1AndP">
                        <h1>Passing Mark </h1>
                        <p>-{content.passingMark}</p>
                    </div>
                    <div className="CardSOfNameTestS-Cont-H1AndP"> 
                        <h1>Randomize Question </h1>
                        <p>-{content.randomizeQuestion}</p>
                    </div>
                {/* </div> */}
            </div>

        </section>
    )
}

export default CardSOfNameTestS