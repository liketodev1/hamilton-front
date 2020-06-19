import React, { useState } from 'react'
import './SectionManagment.scss'
import deleteq from "../../assets/deleteq.png"
import createNewExam from "../../assets/createNewExam.png"
import sectionEdit from "../../assets/sectionEdit.png"
import { useHistory } from 'react-router'
import close from "../../assets/close.png"


const sectionData = [
    {
        id:1,
        sectionName:"Writing and Language Test",
        sectionDetails:"View",
        sectionTime:"65 Minutes",
        sectionEdit:sectionEdit,
        deleteq: deleteq
    },
    {
        id:2,
        sectionName:"Reading Test",
        sectionDetails:"View",
        sectionTime:"45 Minutes",
        sectionEdit:sectionEdit,
        deleteq: deleteq
    },
    {
        id:3,
        sectionName:"Math Test With Calculator",
        sectionDetails:"View",
        sectionTime:"25 Minutes",
        sectionEdit:sectionEdit,
        deleteq: deleteq
    },
    {
        id:4,
        sectionName:"Math Test With No Calculator",
        sectionDetails:"View",
        sectionTime:"45 Minutes",
        sectionEdit:sectionEdit,
        deleteq: deleteq
    },

]

const SectionManagment = () => { 
    const [isAddSectionOpen, setIsAddSectionOpen] = useState(false)
    const [isAddPassage, setIsAddPassage]= useState(false)

    return (
        <section className="SectionManagment">
            <div className="SectionManagment-Cont">
                <div className="SectionManagment-Cont-TitleForm">
                    <h2>Section Management</h2>
                </div>
                <div className="SectionManagment-Cont-All">
                    <div className="SectionManagment-Cont-All-MainFlex">
                        <div className="SectionManagment-Cont-All-MainFlex-InsideFlex">
                            <img src={createNewExam}/>
                            <p onClick={()=> setIsAddSectionOpen(true)}>Add Section </p>
                            {isAddSectionOpen && (
                                <div className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain">
                                    <div className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv">
                                        <div className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-Flex">
                                            <h1>Add Section </h1>
                                            <img onClick={()=> setIsAddSectionOpen(false)} src={close}/>
                                        </div>
                                        <div className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv">
                                            <div className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-FlexMain">
                                                <div className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-FlexMain-FlexInside">
                                                    <h1>Section Name:</h1>
                                                    <input placeholder="Section"/>
                                                </div>
                                                <div className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-FlexMain-FlexInside">
                                                    <h1>Time:</h1>
                                                    <input placeholder="Enter time"/>
                                                </div>
                                            </div>
                                            <div className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-InfoAndInput" >
                                                <h1>Info:</h1>
                                                <input/>
                                            </div>
                                            <div className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-UploadAndButton">
                                                <h1>Upload Image:</h1>
                                                <button>Browse Files:</button>
                                            </div>
                                            <div className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-InfoAndInput" >
                                                <h1>Directions:</h1>
                                                <input/>
                                            </div>
                                            <div className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-CancelAndNext">
                                                <button className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-CancelAndNext-Cancel">Cancel</button>
                                                <button className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-CancelAndNext-Next">Next</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                    </div>                        
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="SectionManagment-Cont-Table">
                        <div  className="SectionManagment-Cont-Table-Main">
                            <div className="SectionManagment-Cont-Table-Main-Name">Test Name</div>
                            <div className="SectionManagment-Cont-Table-Main-View">Test Details</div>
                            <div className="SectionManagment-Cont-Table-Main-Time">Test Time</div>
                            <div className="SectionManagment-Cont-Table-Main-Edit">Edit</div>
                            <div className="SectionManagment-Cont-Table-Main-Delete">Delete</div>
                        </div>
                        {sectionData.map((el)=>(
                        <div  className="SectionManagment-Cont-Table-Flex">
                            <div className="SectionManagment-Cont-Table-Flex-Name">{el.sectionName}</div>
                            <div className="SectionManagment-Cont-Table-Flex-View"onClick= {()=> setIsAddPassage(true)} >{el.sectionDetails}</div>
                            <div className="SectionManagment-Cont-Table-Flex-Time">{el.sectionTime}</div>
                            <div className="SectionManagment-Cont-Table-Flex-Edit"><img src={sectionEdit}/></div>
                            <div className="SectionManagment-Cont-Table-Flex-Delete"><img src={deleteq}/></div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SectionManagment