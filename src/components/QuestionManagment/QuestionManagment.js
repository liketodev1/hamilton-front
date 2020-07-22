// import React, { useState } from 'react'
// import './QuestionManagment.scss'
// import deleteq from "../../assets/deleteq.png"
// import createNewExam from "../../assets/createNewExam.png"
// import sectionEdit from "../../assets/sectionEdit.png"
// import { useHistory } from 'react-router'
// import close from "../../assets/close.png"


// const sectionData = [
//     {
//         id:1,
//         sectionName:"Writing and Language Test",
//         sectionDetails:"View",
//         sectionTime:"65 Minutes",
//         sectionEdit:sectionEdit,
//         deleteq: deleteq
//     },
//     {
//         id:2,
//         sectionName:"Reading Test",
//         sectionDetails:"View",
//         sectionTime:"45 Minutes",
//         sectionEdit:sectionEdit,
//         deleteq: deleteq
//     },
//     {
//         id:3,
//         sectionName:"Math Test With Calculator",
//         sectionDetails:"View",
//         sectionTime:"25 Minutes",
//         sectionEdit:sectionEdit,
//         deleteq: deleteq
//     },
//     {
//         id:4,
//         sectionName:"Math Test With No Calculator",
//         sectionDetails:"View",
//         sectionTime:"45 Minutes",
//         sectionEdit:sectionEdit,
//         deleteq: deleteq
//     },

// ]

// const SectionManagment = ({activeSection}) => { 

//     const history = useHistory()
//     const [isAddSectionOpen, setIsAddSectionOpen] = useState(false)
//     const [isAddPassage, setIsAddPassage]= useState(false)



//     const addName = async (el) => {
//         setIsAddExamOpen(false)
//         const formData = new FormData();
//         formData.append('message', form.message);
//             let addExam = await fetch ("http://freelancedeveloper.site/projects/laravel/hamilton/public/api/admin/exam/store", {
//                 method:"POST",
//                 headers:{
//                     Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNjU2NmMwZDBlZmRlNDZmYmZlYzk4ZDk5MDEwMjVkODAxYzFiNzgyYWVmYWNlYzY2NTVmM2EzODZkYzc1YTAyNzI4ODkwYTA0YTFiY2MyZTIiLCJpYXQiOjE1OTI5MDQyMzMsIm5iZiI6MTU5MjkwNDIzMywiZXhwIjoxNjI0NDQwMjMzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.d888ilWsI2pG8dKmhO6O4DSUVSP1IbzYE9kefniTdRxElB3Er2Xz-AgdNUacJscoVCH4MC4VLO8ri-5aN4OCCb0c_95NIb_msx17QqRITyHQCWiVD1O6SuLUVubUR1WJFt_LjjCd9u2DDn7-szrh7Vc7Zx3wsR-cDCXl5tv7C2JUh_lXoqfyPfjwdNkwQxYdOaK9POIZEcr2ZdWtMG29AL2KGBbPChNDIT4Xj7xgSqsxlYyMSBsiWYvFO6Igj5Xf_Sce1KMFtjQu-008ZHUllTCb_HVirp6181oyOEKlJRMb1JjDji2pUBpj1wzfX7cZp3O-6NuQDoUO-unupvH1bF_fAiHN8dvPentuu5TkeRJ3YrHfisLjt0npYBDkIgLtC9uiO-pjkkH5HHnt20DHwcwm9uWQtCfw0W6C5pENjvOmnV9CAZwJHa4m0nno2-7yvqGL8-QvRpBY_4QWuNc6tPljChbB2bGw_HeQ_Jsd1F2Gg0CmECJkcXJaEKShE_AK40Y0YmQE-A3b_oMNLvoiyKyIujA_psD7gUDNndzHdsJYzhrIgBRLT4U4mC03ZUt1oV5BTSps_SmAGkXnmtyQONfm8Vym-f-44_SE7IDVuktGM4Hi09GV5nt__KioKgCq-DNMx7fTLseZc5-NXvCaobcO_vnMM_k0VgKVhX4iUtg"
//                 },
//                 body: formData
//             })
//             let res = await addExam.json()

//     }


//     return (
//         <section className="SectionManagment">
//             <div className="SectionManagment-Cont">
//                 <div className="SectionManagment-Cont-TitleForm">
//                     <h2>Question Management</h2>
//                 </div>
//                 <div className="SectionManagment-Cont-All">
//                     <div className="SectionManagment-Cont-All-MainFlex">
//                         <div className="SectionManagment-Cont-All-MainFlex-InsideFlex">
//                             <img src={createNewExam}/>
//                             <p onClick={()=> setIsAddSectionOpen(true)}>Add Section </p>
//                             {isAddExamOpen && (
//                                 <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam">
//                                     <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-MainTitle">
//                                         <h2>Add Exam </h2>
//                                         <img onClick={()=> setIsAddExamOpen(false)} src={close}/>
//                                     </div>
//                                     <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-MainDiv">
//                                         <h1>Exam Name:</h1>
//                                         <input 
//                                             placeholder="Title"
//                                             type="text"
//                                             id= "title"
//                                             name="title"
//                                             onChange={handleChange}
//                                         />
//                                     </div>
//                                     <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-CancelAndNext"> 
//                                         <button className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-CancelAndNext-Cancel" onClick={()=> setIsAddExamOpen(false)}>Cancel</button>
//                                         <button className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-CancelAndNext-Next" onClick={addName} >Next</button>
//                                     </div>
//                                 </div>
//                             )} 
//                         </div>
//                     </div>
//                     <div className="SectionManagment-Cont-Table">
//                         <div  className="SectionManagment-Cont-Table-Main">
//                             <div className="SectionManagment-Cont-Table-Main-Name">Test Name</div>
//                             <div className="SectionManagment-Cont-Table-Main-View">Test Details</div>
//                             <div className="SectionManagment-Cont-Table-Main-Time">Test Time</div>
//                             <div className="SectionManagment-Cont-Table-Main-Edit">Edit</div>
//                             <div className="SectionManagment-Cont-Table-Main-Delete">Delete</div>
//                         </div>
//                         {sectionData.map((el)=>(
//                         <div  className="SectionManagment-Cont-Table-Flex">
//                             <div className="SectionManagment-Cont-Table-Flex-Name">{el.sectionName}</div>
//                             <div className="SectionManagment-Cont-Table-Flex-View" onClick = {() => history.replace(`${process.env.PUBLIC_URL}/questionManagment`)}>{el.sectionDetails}</div>
//                             <div className="SectionManagment-Cont-Table-Flex-Time">{el.sectionTime}</div>
//                             <div className="SectionManagment-Cont-Table-Flex-Edit"><img src={sectionEdit}/></div>
//                             <div className="SectionManagment-Cont-Table-Flex-Delete"><img src={deleteq}/></div>
//                         </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//         </section>
//     )
// }

// export default SectionManagment