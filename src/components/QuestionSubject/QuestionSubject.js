import React from 'react'
import './QuestionSubject.scss'
import './QuestionSubject.css'
import exportq from "../../assets/exportq.png"
import importq from "../../assets/importq.png"
import deleteq from "../../assets/deleteq.png"
import newq from "../../assets/newq.png"
const QuestionSubject = () => {

    return (
        <section className="QuestionSubject">
            <div className="QuestionSubject-Cont">
                <div className="QuestionSubject-Cont-TextAndForm">
                    <h2>Question Subject</h2>
                    <div className="QuestionSubject-Cont-TextAndForm-TextSAndSearchAndForm">
                        <div className="QuestionSubject-Cont-TextAndForm-TextSAndSearchAndForm-TextAndSearch">
                            <div className="QuestionSubject-Cont-TextAndForm-TextSAndSearchAndForm-TextAndSearch-TextS">
                                <div className="QuestionSubject-Cont-TextAndForm-TextSAndSearchAndForm-TextAndSearch-TextS-ImgAndText">
                                    <img src={newq}/>
                                    <p>New</p>
                                </div>
                                <div className="QuestionSubject-Cont-TextAndForm-TextSAndSearchAndForm-TextAndSearch-TextS-ImgAndText">
                                    <img src={deleteq}/>
                                    <p>Delete</p>
                                </div>
                                <div className="QuestionSubject-Cont-TextAndForm-TextSAndSearchAndForm-TextAndSearch-TextS-ImgAndText">
                                    <img src={importq}/>
                                    <p>Import</p>
                                </div>
                                <div className="QuestionSubject-Cont-TextAndForm-TextSAndSearchAndForm-TextAndSearch-TextS-ImgAndText">
                                    <img src={exportq}/>
                                    <p>Export</p>
                                </div>
                            </div>
                            <div className="QuestionSubject-Cont-TextAndForm-TextSAndSearchAndForm-TextAndSearch-Search">
                                <input placeholder="Search"/>
                                <button>Search</button>
                            </div>
                        </div>
                        <form className="QuestionSubject-Cont-TextAndForm-TextSAndSearchAndForm-Form">
                            <div >
                                <label className="container" >
                                <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                    <div className="textInForm">
                                        <p >Lorem Ipsum dolor sit amet</p>
                                        <h1>Edit</h1>
                                    </div>
                                </label>
                                <label className="container" >
                                <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                    <div className="textInForm">
                                        <p>Lorem Ipsum dolor sit amet</p>
                                        <h1>Edit</h1>
                                    </div>
                                </label>
                                <label className="container" >
                                <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                    <div className="textInForm">
                                        <p>Lorem Ipsum dolor sit amet</p>
                                        <h1>Edit</h1>
                                    </div>
                                </label>
                                <label className="container" >
                                <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                    <div className="textInForm">
                                        <p>Lorem Ipsum dolor sit amet</p>
                                        <h1>Edit</h1>
                                    </div>
                                </label>
                                <label className="container" >
                                <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                    <div className="textInForm">
                                        <p>Lorem Ipsum dolor sit amet</p>
                                        <h1>Edit</h1>
                                    </div>
                                </label>
                                <label className="container" >
                                <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                    <div className="textInForm">
                                        <p>Lorem Ipsum dolor sit amet</p>
                                        <h1>Edit</h1>
                                    </div>
                                </label>
                                <label className="container" >
                                <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                    <div className="textInForm">
                                        <p>Lorem Ipsum dolor sit amet</p>
                                        <h1>Edit</h1>
                                    </div>
                                </label>
                                <label className="container" >
                                <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                    <div className="textInForm">
                                        <p>Lorem Ipsum dolor sit amet</p>
                                        <h1>Edit</h1>
                                    </div>
                                </label>
                                <label className="container" >
                                <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                    <div className="textInForm">
                                        <p>Lorem Ipsum dolor sit amet</p>
                                        <h1>Edit</h1>
                                    </div>
                                </label>
                                <label className="container" >
                                <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                    <div className="textInForm">
                                        <p>Lorem Ipsum dolor sit amet</p>
                                        <h1>Edit</h1>
                                    </div>
                                </label>
                            </div>
                            
                        </form>
                    </div> 
                </div>       
            </div>
        </section>
    )
}

export default QuestionSubject