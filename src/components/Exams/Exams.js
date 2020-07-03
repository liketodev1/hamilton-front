import React from 'react'
import exam from "../../assets/exam.png"
import './Exams.scss'
import './Exam.css'
import arrowLeft from "../../assets/arrowLeft.png"
import arrowRight from "../../assets/arrowRight.png"

const examData= [
    {
        id: 1,
        exam :"Exam1"
    },
    {
        id: 2,
        exam :"Exam2"
    },
    {
        id: 3,
        exam :"Exam3"
    },
    {
        id: 4,
        exam :"Exam4"
    },
    {
        id: 5,
        exam :"Exam5"
    },
    {
        id: 6,
        exam :"Exam6"
    },
    {
        id: 7,
        exam :"Exam7"
    },
    {
        id: 8,
        exam :"Exam8"
    },
    {
        id: 8,
        exam :"Exam9"
    },
    {
        id: 8,
        exam :"Exam10"
    },
    {
        id: 8,
        exam :"Exam11"
    },
    {
        id: 8,
        exam :"Exam12"
    },
    {
        id: 8,
        exam :"Exam13"
    },
    {
        id: 8,
        exam :"Exam14"
    },
    {
        id: 8,
        exam :"Exam15"
    },
    {
        id: 8,
        exam :"Exam16"
    },
    {
        id: 8,
        exam :"Exam17"
    },
    {
        id: 8,
        exam :"Exam18"
    },
    {
        id: 8,
        exam :"Exam19"
    },   
    {
        id: 8,
        exam :"Exam20"
    },
    {
        id: 8,
        exam :"Exam21"
    },
    {
        id: 8,
        exam :"Exam22"
    },
    {
        id: 8,
        exam :"Exam23"
    },
    {
        id: 8,
        exam :"Exam24"
    },
    {
        id: 8,
        exam :"Exam25"
    },
    {
        id: 8,
        exam :"Exam26"
    },
    {
        id: 8,
        exam :"Exam27"
    },
    {
        id: 8,
        exam :"Exam28"
    },
    {
        id: 8,
        exam :"Exam29"
    },
    {
        id: 8,
        exam :"Exam30"
    },
    // {
    //     id: 8,
    //     exam :"Exam31"
    // },
    // {
    //     id: 8,
    //     exam :"Exam32"
    // },
    // {
    //     id: 8,
    //     exam :"Exam33"
    // },
    // {
    //     id: 8,
    //     exam :"Exam34"
    // },
    // {
    //     id: 8,
    //     exam :"Exam35"
    // },
    
]
const Exams = () => {

    return (
        <section className="Exams">
            <div className="Cont">
                <div className="TitleAndSearch">
                    <div className = "Title">Exam</div>
                    <div className = "SearchAndButton">
                        <input className="SearchInput"placeholder="Search"/>
                        <button className="SearchButton">Search</button>
                    </div>
                </div>
                <div className="Flex">
                    {examData.map((el) =>(
                        <div key={`exams-${el.id}`}>
                            <div className="ExamAndImg" >
                                <img src={exam}/>
                                <div className="ExamText">{el.exam}</div>
                                <button className="Hide">Start Exam</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="Pagination">
                    <img src={arrowLeft}/>
                    <h4>1</h4>
                    <h4>2</h4>
                    <h4>3</h4>
                    <h4>4</h4>
                    <h4>5</h4>
                    <img src={arrowRight}/>
                </div>
                
            </div>
        </section>
    )
}

export default Exams