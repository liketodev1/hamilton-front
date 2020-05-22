import React, { useState } from 'react'
import './QuestionBank.scss'
import './QuestionBank.css'
import questionsData from "./questionsData"

import arrow from "../../assets/arrowAsside.png"
import checkboxData from "./chekboxData"

// const questionsData = [
//     {
//         id: 1, 
//         text: '1. Which choice best summarizes the passage?'
//     }, {
//         id: 2, 
//         text: '2. As used in line 4, “expression of countenance” most nearly means?'
//     }, {
//         id: 3, 
//         text: '3. Which of the following best describes the opening dialogue (lines 1-10)?'
//     }, {
//         id: 4, 
//         text: '4. The passage indicates that Doctor Franck’s “quandary” (line 3) most directly involves?'
//     }, {
//         id: 5, 
//         text: '5. The passage indicates that Miss Dane’s . motivation for tending to the wounded Rebis mainly characterized by?'
//     }, {
//         id: 6, 
//         text: '6. Which choice provides the best evidence for the answer to the previous question?'
//     }, {
//         id: 7, 
//         text: '7. The passage almost clearly implies that Miss Dane’s initial reaction to the former slave helping her tend to the Reb is one of'
//     },
// ]

const QuestionBank = () => {
// const [isDropDownOpen, setisDropDownOpen]=useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);

    return (
        <section className="QuestionBank">
            <div className="QuestionBank-Cont">
                <div className="QuestionBank-Cont-TitleForm">
                    <h2>Reading Test</h2>
                    <p>65 MINUTES, 52 QUESTIONS</p>
                </div>
                <div className="QuestionBank-Cont-Flex">
                    <div className="QuestionBank-Cont-Flex-Texts"> 
                        <div className="QuestionBank-Cont-Flex-Texts-TitleAndDown">
                            <h1 >Questions 1-10 are based on the following passage</h1>
                            <h4>This passage is adapted from Louisa May Alcott, “The Brothers,” originally published in 1863.</h4>
                        </div> 
                        <div className="QuestionBank-Cont-Flex-Texts-Questions">
                            <div>
                                <div className="QuestionBank-Cont-Flex-Texts-Questions-Flex">
                                    <h1 className="QuestionBank-Cont-Flex-Texts-Questions-Flex-Number">1</h1>
                                    <div>Doctor Franck came in as I sat sewing up the</div>
                                </div>
                                <div>rents in an old shirt.</div>
                                <div>“Miss Dane, I’m in a quandary,” began the </div>
                                <div> Doctor, with that expression of countenance</div>
                                <div className="QuestionBank-Cont-Flex-Texts-Questions-Flex">
                                    <h1 className="QuestionBank-Cont-Flex-Texts-Questions-Flex-Number">5</h1>
                                    <div> which 5 says as plainly as words, “I want to ask</div>
                                </div>
                                <div>a favor, but I wish you’d save me the trouble.”</div>
                                <div>”Can I help you out of it?”</div>
                                <div>”Faith! I don’t like to propose it, but you</div>
                                <div>certainly can, if you please.”</div>
                                <div className="QuestionBank-Cont-Flex-Texts-Questions-Flex">
                                    <h1 className="QuestionBank-Cont-Flex-Texts-Questions-Flex-Number">10</h1>
                                    <div>”Then give it a name, I beg.”</div>
                                </div>
                                <div>“You see a Reb1 has just been brought in crazy</div>
                                <div>with typhoid; a bad case every way; a drunken,</div>
                                <div>rascally little captain somebody took the</div>
                                <div> trouble to capture, but whom nobody wants to</div>
                                <div className="QuestionBank-Cont-Flex-Texts-Questions-Flex">
                                    <h1 className="QuestionBank-Cont-Flex-Texts-Questions-Flex-Number">15</h1>
                                    <div>take the trouble to cure. The wards are full, </div>
                                </div>
                                <div>the ladies worked to death, and willing to be for </div>
                                <div>our own boys, but rather slow to risk their lives</div> 


                                <div>our own boys, but rather slow to risk their lives</div> 
                                <div>our own boys, but rather slow to risk their lives</div> 
                                <div>our own boys, but rather slow to risk their lives</div> 
                                <div>our own boys, but rather slow to risk their lives</div> 
                                <div>our own boys, but rather slow to risk their lives</div> 
                                <div>our own boys, but rather slow to risk their lives</div> 
                                <div>our own boys, but rather slow to risk their lives</div> 
                                <div>our own boys, but rather slow to risk their lives</div> 
                                <div>our own boys, but rather slow to risk their lives</div> 
                                <div>our own boys, but rather slow to risk their lives</div> 
                                <div>our own boys, but rather slow to risk their lives</div> 
                                <div>our own boys, but rather slow to risk their lives</div> 
                                <div>our own boys, but rather slow to risk their lives</div> 


                                
                                
                                
                                {/* <li>Doctor Franck came in as I sat sewing up the rents in an old shirt.</li>
                                <li>“Miss Dane, I’m in a quandary,” began the Doctor, with that expression of countenance which 5 says as plainly as words, “I want to ask a favor, but I wish you’d save me the trouble.”</li>
                                <li>”Can I help you out of it?”</li>
                                <li>”Faith! I don’t like to propose it, but you certainly can, if you please.”</li>
                                <li>”Then give it a name, I beg.”</li>
                                <li>“You see a Reb1 has just been brought in crazy with typhoid; a bad case every way; a drunken, rascally little captain somebody took the trouble to capture, but whom nobody wants to take the trouble to cure. The wards are full, the ladies worked to death, and willing to be for our own boys, but rather slow to risk their lives </li> */}
                            </div>
                            
                        </div>
                    </div>
                    <div className="QuestionBank-Cont-Flex-QuestionSAndDropdown">
                        <div className="QuestionBank-Cont-Flex-QuestionSAndDropdown-ContentCenter">
                            {questionsData.map((el, index) => (
                                <div key={`questions-${el.id}`}>
                                    <div className="QuestionBank-Cont-Flex-QuestionSAndDropdown-ContentCenter-Question " onClick={() => setActiveIndex(index)}>
                                        <h1>{el.text}</h1>
                                        <img src={arrow}/>
                                    </div>
                                    
                                    {activeIndex === index && (
                                        <div className="QuestionBank-Cont-Flex-QuestionSAndDropdown-ContentCenter-RadioS ">
                                            {checkboxData.map((el)=> (
                                                <h1>{el.text}</h1>
                                            ))}
                                            
                                            
                                            {/* <label class="containerBank">arrogant tone.
                                                <input type="radio"  name="radio"/>
                                                <span class="checkmarkBank"></span>
                                            </label>
                                            <label class="containerBank">facial appearance.
                                                <input type="radio"  name="radio"/>
                                                <span class="checkmarkBank"></span>
                                            </label>
                                            <label class="containerBank">tolerant approval.
                                                <input type="radio"  name="radio"/>
                                                <span class="checkmarkBank"></span>
                                            </label>
                                            <label class="containerBank">regional accent.
                                                <input type="radio"  name="radio"/>
                                                <span class="checkmarkBank"></span>
                                            </label> */}


                                    </div>
                                    )}
                                </div>
                            ))}
                            
                            
                            
                            {/* <div>
                                <div className="QuestionBank-Cont-Flex-QuestionSAndDropdown-ContentCenter-Question ">
                                    <h1>1. Which choice best summarizes the passage?</h1>
                                    <img src={arrow}/>
                                </div>
                            </div>
                            <div  className="QuestionBank-Cont-Flex-QuestionSAndDropdown-ContentCenter-MarginDropdown">
                                <div className="QuestionBank-Cont-Flex-QuestionSAndDropdown-ContentCenter-DivS " >
                                    <div className="QuestionBank-Cont-Flex-QuestionSAndDropdown-ContentCenter-DivS-OnClick " onClick={()=> setisDropDownOpen(!isDropDownOpen)} >
                                        <h1 >2. As used in line 4, “expression of countenance” most nearly means</h1>
                                        <img src={arrow}/>
                                    </div>
                                </div>
                                <div className="QuestionBank-Cont-Flex-QuestionSAndDropdown-ContentCenter-RadioS ">
                                    {isDropDownOpen && (
                                        <label class="containerBank">arrogant tone.
                                            <input type="radio"  name="radio"/>
                                            <span class="checkmarkBank"></span>
                                        </label>
                                    )}
                                    {isDropDownOpen && (
                                        <label class="containerBank">facial appearance.
                                            <input type="radio"  name="radio"/>
                                            <span class="checkmarkBank"></span>
                                        </label>
                                    )}
                                    {isDropDownOpen && (
                                        <label class="containerBank">tolerant approval.
                                            <input type="radio"  name="radio"/>
                                            <span class="checkmarkBank"></span>
                                        </label>
                                    )}
                                    {isDropDownOpen && (
                                        <label class="containerBank">regional accent.
                                            <input type="radio"  name="radio"/>
                                            <span class="checkmarkBank"></span>
                                        </label>
                                    )}
                                </div>
                            </div>
                            <div>
                                <div className="QuestionBank-Cont-Flex-QuestionSAndDropdown-ContentCenter-Question ">
                                    <h1>3. Which of the following best describes the opening dialogue (lines 1-10)?</h1>
                                    <img src={arrow}/>
                                </div>
                            </div>
                            <div>
                                <div className="QuestionBank-Cont-Flex-QuestionSAndDropdown-ContentCenter-Question ">
                                    <h1>4. The passage indicates that Doctor Franck’s “quandary” (line 3) most directly involves</h1>
                                    <img src={arrow}/>
                                </div>
                            </div>
                            <div>
                                <div className="QuestionBank-Cont-Flex-QuestionSAndDropdown-ContentCenter-Question ">
                                    <h1>5. The passage indicates that Miss Dane’s . motivation for tending to the wounded Rebis mainly characterized by</h1>
                                    <img src={arrow}/>
                                </div>
                            </div>
                            <div>
                                <div className="QuestionBank-Cont-Flex-QuestionSAndDropdown-ContentCenter-Question ">
                                    <h1>6. Which choice provides the best evidence for the answer to the previous question?</h1>
                                    <img src={arrow}/>
                                </div>
                            </div>
                            <div>
                                <div className="QuestionBank-Cont-Flex-QuestionSAndDropdown-ContentCenter-Question ">
                                    <h1>7. The passage almost clearly implies that Miss Dane’s initial reaction to the former slave helping her tend to the Reb is one of</h1>
                                    <img src={arrow}/>
                                </div>
                            </div> */}

                        </div>
                        
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default QuestionBank