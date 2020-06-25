import React from 'react'
import './ExamScheduler.scss'

const ExamScheduler = () => {

    return (
        <section className="ExamScheduler">
            <div className="ExamScheduler-Cont">
                <div className="ExamScheduler-Cont-AllDivS">
                    <div className="ExamScheduler-Cont-AllDivS-MainTitle">
                        <h2>Add Passage</h2>
                    </div>
                    <div className="ExamScheduler-Cont-AllDivS-MainDiv">
                        <div className="ExamScheduler-Cont-AllDivS-MainDiv-Flex">
                            <h1>Selet section:</h1>
                            <input placeholder="Section"/>
                        </div>
                        <div className="ExamScheduler-Cont-AllDivS-MainDiv-Flex">
                            <h1>Passage title:</h1>
                            <input  placeholder="Title"/>
                        </div>
                        <div className="ExamScheduler-Cont-AllDivS-MainDiv-Flex">
                            <h1>Passage:</h1>
                            <textarea></textarea>
                        </div>
                        <div className="ExamScheduler-Cont-AllDivS-MainDiv-Flex">
                            <h1>Upload image:</h1>
                            <button>Browse Files</button>
                        </div>
                        <div className="ExamScheduler-Cont-AllDivS-MainDiv-CancelAndNext">
                            <button className="ExamScheduler-Cont-AllDivS-MainDiv-CancelAndNext-Cancel">Cancel</button>
                            <button className="ExamScheduler-Cont-AllDivS-MainDiv-CancelAndNext-Next">Next</button>
                        </div>  
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default ExamScheduler


