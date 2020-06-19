import React from 'react'
import './Communication.scss'

const Communication = () => {

    return (
        <section className="Communication">
            <div className="Communication-Cont">
                <div className="Communication-Cont-AllDivS">
                    <div className="Communication-Cont-AllDivS-MainTitle">
                        <h2>Add Question</h2>
                    </div>
                    <div className="Communication-Cont-AllDivS-MainDiv">
                        <div className="Communication-Cont-AllDivS-MainDiv-Flex">
                            <h1>Passage:</h1>
                            <input placeholder="Section"/>
                        </div>
                        <div className="Communication-Cont-AllDivS-MainDiv-Flex">
                            <h1>Question:</h1>
                            <input placeholder="Section"/>
                            <button>Upload image</button>
                        </div>
                        <div className="Communication-Cont-AllDivS-MainDiv-Flex">
                            <h1>Options</h1>
                            <h1>Currect Choise</h1>
                        </div>
                        <div className="Communication-Cont-AllDivS-MainDiv-Flex">
                            <h1>Option1:</h1>
                            <input/>
                            <button>Upload image</button>
                        </div>
                        <div className="Communication-Cont-AllDivS-MainDiv-Flex">
                            <h1>Option1:</h1>
                            <input/>
                            <button>Upload image</button>
                        </div>
                        <div className="Communication-Cont-AllDivS-MainDiv-Flex">
                            <h1>Option1:</h1>
                            <input/>
                            <button>Upload image</button>
                        </div>
                        <div className="Communication-Cont-AllDivS-MainDiv-Flex">
                            <h1>Option1:</h1>
                            <input/>
                            <button>Upload image</button>
                        </div>
                        <div className="Communication-Cont-AllDivS-MainDiv-PreviousAndNext">
                            <button className="Communication-Cont-AllDivS-MainDiv-PreviousAndNext-Previous">Previous</button>
                            <button className="Communication-Cont-AllDivS-MainDiv-PreviousAndNext-Next">Next</button>
                        </div>
           
                    </div>   
                </div>
            </div>
        </section>
    )
}

export default Communication