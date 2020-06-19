import React from 'react'
import './KnowledgeBase.scss'
import deleteq from "../../assets/deleteq.png"
import createNewExam from "../../assets/createNewExam.png"
import { useHistory } from 'react-router'
import sectionEdit from "../../assets/sectionEdit.png"

const examData = [
    {
        id:1,
        titleName:"Name",
        titleExam:"Exam Details",
        titleEdit:"Edit",
        titleDelete:"Delete",
        name:"Exam Name",
        examDetails:"View",
        sectionEdit:sectionEdit,
        img: deleteq
    },
    {
        id:2,
        name:"Exam Name",
        examDetails:"View",
        sectionEdit:sectionEdit,
        img: deleteq

    },
    {
        id:3,
        name:"Exam Name",
        examDetails:"View",
        sectionEdit:sectionEdit,
        img: deleteq

    },
    {
        id:4,
        name:"Exam Name",
        examDetails:"View",
        sectionEdit:sectionEdit,
        img: deleteq

    },
    {
        id:5,
        name:"Exam Name",
        examDetails:"View",
        sectionEdit:sectionEdit,
        img: deleteq

    },
    {
        id:6,
        name:"Exam Name",
        examDetails:"View",
        sectionEdit:sectionEdit,
        img: deleteq

    }
]

const KnowledgeBase = () => {
    const history = useHistory();
    
    return (
        <section className="KnowledgeBase">
            <div className="KnowledgeBase-Cont">
                <div className="KnowledgeBase-Cont-TitleForm">
                    <h2>Exam Management</h2>
                </div>
                <div className="KnowledgeBase-Cont-All">
                    <div className="KnowledgeBase-Cont-All-MainFlex">
                        <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex">
                            <img src={createNewExam}/>
                            <p >Create New Exam</p>
                        </div>
                        <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex">
                            <input placeholder="Search"/>
                            <button>Search</button>
                        </div>
                    </div>

                    <div className="KnowledgeBase-Cont-All-Table">
                        <div className="KnowledgeBase-Cont-All-Table-Main">
                            <div className="KnowledgeBase-Cont-All-Table-Main-Name">Name</div>
                            <div className="KnowledgeBase-Cont-All-Table-Main-View">Exam Details</div>
                            <div className="KnowledgeBase-Cont-All-Table-Main-Edit">Edit</div>
                            <div className="KnowledgeBase-Cont-All-Table-Main-Delete">Delete</div>
                        </div>
                        {examData.map((el)=>(
                        // <table>
                     
                        <div className="KnowledgeBase-Cont-All-Table-Flex">
                            <div className="KnowledgeBase-Cont-All-Table-Flex-Name">{el.name}</div>
                            <div className="KnowledgeBase-Cont-All-Table-Flex-View" onClick = {() => history.replace(`${process.env.PUBLIC_URL}/sectionManagment`)}>{el.examDetails}</div>
                            <div className="KnowledgeBase-Cont-All-Table-Flex-Edit"><img src={sectionEdit}/></div>
                            <div className="KnowledgeBase-Cont-All-Table-Flex-Delete"><img src={deleteq}/></div>
                        </div>
                        // </table>                
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default KnowledgeBase