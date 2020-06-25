import React, { useState, useEffect, useCallback } from 'react'
import './KnowledgeBase.scss'
import deleteq from "../../assets/deleteq.png"
import createNewExam from "../../assets/createNewExam.png"
import { useHistory } from 'react-router'
import sectionEdit from "../../assets/sectionEdit.png"
import close from "../../assets/close.png"

// import AddExam from "./AddExam"
const KnowledgeBase = () => {
    const [isAddExamOpen, setIsAddExamOpen] = useState(false)
    const [isUpdateExamOpen, setIsUpdateExamOpen] = useState(false)
    const [dataExam, setDataExam] = useState(null)
    const [form, setForm] = useState([]);

    const history = useHistory();

    const handleChange = (e) => {
        setForm ({
            ...form,
            [e.target.name]:e.target.value 
        })
    };

    useEffect(()=> {
        const fetchData = async () => {
            const fetchData = await fetch ("http://freelancedeveloper.site/projects/laravel/hamilton/public/api/admin/exams", {
                method: 'GET',
                headers: {
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNjU2NmMwZDBlZmRlNDZmYmZlYzk4ZDk5MDEwMjVkODAxYzFiNzgyYWVmYWNlYzY2NTVmM2EzODZkYzc1YTAyNzI4ODkwYTA0YTFiY2MyZTIiLCJpYXQiOjE1OTI5MDQyMzMsIm5iZiI6MTU5MjkwNDIzMywiZXhwIjoxNjI0NDQwMjMzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.d888ilWsI2pG8dKmhO6O4DSUVSP1IbzYE9kefniTdRxElB3Er2Xz-AgdNUacJscoVCH4MC4VLO8ri-5aN4OCCb0c_95NIb_msx17QqRITyHQCWiVD1O6SuLUVubUR1WJFt_LjjCd9u2DDn7-szrh7Vc7Zx3wsR-cDCXl5tv7C2JUh_lXoqfyPfjwdNkwQxYdOaK9POIZEcr2ZdWtMG29AL2KGBbPChNDIT4Xj7xgSqsxlYyMSBsiWYvFO6Igj5Xf_Sce1KMFtjQu-008ZHUllTCb_HVirp6181oyOEKlJRMb1JjDji2pUBpj1wzfX7cZp3O-6NuQDoUO-unupvH1bF_fAiHN8dvPentuu5TkeRJ3YrHfisLjt0npYBDkIgLtC9uiO-pjkkH5HHnt20DHwcwm9uWQtCfw0W6C5pENjvOmnV9CAZwJHa4m0nno2-7yvqGL8-QvRpBY_4QWuNc6tPljChbB2bGw_HeQ_Jsd1F2Gg0CmECJkcXJaEKShE_AK40Y0YmQE-A3b_oMNLvoiyKyIujA_psD7gUDNndzHdsJYzhrIgBRLT4U4mC03ZUt1oV5BTSps_SmAGkXnmtyQONfm8Vym-f-44_SE7IDVuktGM4Hi09GV5nt__KioKgCq-DNMx7fTLseZc5-NXvCaobcO_vnMM_k0VgKVhX4iUtg" 
                }
            });
            const res = await fetchData.json();
            setDataExam(res.data);
        }
        fetchData()
    }, []);

    const addName = async (el) => {
        setIsAddExamOpen(false)
        const formData = new FormData();
        formData.append('title', form.title);
            let addExam = await fetch ("http://freelancedeveloper.site/projects/laravel/hamilton/public/api/admin/exam/store", {
                method:"POST",
                headers:{
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNjU2NmMwZDBlZmRlNDZmYmZlYzk4ZDk5MDEwMjVkODAxYzFiNzgyYWVmYWNlYzY2NTVmM2EzODZkYzc1YTAyNzI4ODkwYTA0YTFiY2MyZTIiLCJpYXQiOjE1OTI5MDQyMzMsIm5iZiI6MTU5MjkwNDIzMywiZXhwIjoxNjI0NDQwMjMzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.d888ilWsI2pG8dKmhO6O4DSUVSP1IbzYE9kefniTdRxElB3Er2Xz-AgdNUacJscoVCH4MC4VLO8ri-5aN4OCCb0c_95NIb_msx17QqRITyHQCWiVD1O6SuLUVubUR1WJFt_LjjCd9u2DDn7-szrh7Vc7Zx3wsR-cDCXl5tv7C2JUh_lXoqfyPfjwdNkwQxYdOaK9POIZEcr2ZdWtMG29AL2KGBbPChNDIT4Xj7xgSqsxlYyMSBsiWYvFO6Igj5Xf_Sce1KMFtjQu-008ZHUllTCb_HVirp6181oyOEKlJRMb1JjDji2pUBpj1wzfX7cZp3O-6NuQDoUO-unupvH1bF_fAiHN8dvPentuu5TkeRJ3YrHfisLjt0npYBDkIgLtC9uiO-pjkkH5HHnt20DHwcwm9uWQtCfw0W6C5pENjvOmnV9CAZwJHa4m0nno2-7yvqGL8-QvRpBY_4QWuNc6tPljChbB2bGw_HeQ_Jsd1F2Gg0CmECJkcXJaEKShE_AK40Y0YmQE-A3b_oMNLvoiyKyIujA_psD7gUDNndzHdsJYzhrIgBRLT4U4mC03ZUt1oV5BTSps_SmAGkXnmtyQONfm8Vym-f-44_SE7IDVuktGM4Hi09GV5nt__KioKgCq-DNMx7fTLseZc5-NXvCaobcO_vnMM_k0VgKVhX4iUtg"
                },
                body: formData
            })
            let res = await addExam.json();


            if(res.status === 200){
                
            }
            console.log(res)    

    }

    const updateName = async (el) => {
        const formData = new FormData();
        formData.append('title', form.title);

        console.log(form.title)

            let updateExam = await fetch (`http://freelancedeveloper.site/projects/laravel/hamilton/public/api/admin/exam/update/${el.id}`, {
                method:"PUT",
                headers:{
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNjU2NmMwZDBlZmRlNDZmYmZlYzk4ZDk5MDEwMjVkODAxYzFiNzgyYWVmYWNlYzY2NTVmM2EzODZkYzc1YTAyNzI4ODkwYTA0YTFiY2MyZTIiLCJpYXQiOjE1OTI5MDQyMzMsIm5iZiI6MTU5MjkwNDIzMywiZXhwIjoxNjI0NDQwMjMzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.d888ilWsI2pG8dKmhO6O4DSUVSP1IbzYE9kefniTdRxElB3Er2Xz-AgdNUacJscoVCH4MC4VLO8ri-5aN4OCCb0c_95NIb_msx17QqRITyHQCWiVD1O6SuLUVubUR1WJFt_LjjCd9u2DDn7-szrh7Vc7Zx3wsR-cDCXl5tv7C2JUh_lXoqfyPfjwdNkwQxYdOaK9POIZEcr2ZdWtMG29AL2KGBbPChNDIT4Xj7xgSqsxlYyMSBsiWYvFO6Igj5Xf_Sce1KMFtjQu-008ZHUllTCb_HVirp6181oyOEKlJRMb1JjDji2pUBpj1wzfX7cZp3O-6NuQDoUO-unupvH1bF_fAiHN8dvPentuu5TkeRJ3YrHfisLjt0npYBDkIgLtC9uiO-pjkkH5HHnt20DHwcwm9uWQtCfw0W6C5pENjvOmnV9CAZwJHa4m0nno2-7yvqGL8-QvRpBY_4QWuNc6tPljChbB2bGw_HeQ_Jsd1F2Gg0CmECJkcXJaEKShE_AK40Y0YmQE-A3b_oMNLvoiyKyIujA_psD7gUDNndzHdsJYzhrIgBRLT4U4mC03ZUt1oV5BTSps_SmAGkXnmtyQONfm8Vym-f-44_SE7IDVuktGM4Hi09GV5nt__KioKgCq-DNMx7fTLseZc5-NXvCaobcO_vnMM_k0VgKVhX4iUtg"
                },
                body: formData       
            })
            let res = await updateExam.json();
            console.log(res)    
    }

    const deleteName = async (el) => {
            let deleteExam = await fetch (`http://freelancedeveloper.site/projects/laravel/hamilton/public/api/admin/exam/delete/${el.id}`, {
                method:"DELETE",
                headers:{
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNjU2NmMwZDBlZmRlNDZmYmZlYzk4ZDk5MDEwMjVkODAxYzFiNzgyYWVmYWNlYzY2NTVmM2EzODZkYzc1YTAyNzI4ODkwYTA0YTFiY2MyZTIiLCJpYXQiOjE1OTI5MDQyMzMsIm5iZiI6MTU5MjkwNDIzMywiZXhwIjoxNjI0NDQwMjMzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.d888ilWsI2pG8dKmhO6O4DSUVSP1IbzYE9kefniTdRxElB3Er2Xz-AgdNUacJscoVCH4MC4VLO8ri-5aN4OCCb0c_95NIb_msx17QqRITyHQCWiVD1O6SuLUVubUR1WJFt_LjjCd9u2DDn7-szrh7Vc7Zx3wsR-cDCXl5tv7C2JUh_lXoqfyPfjwdNkwQxYdOaK9POIZEcr2ZdWtMG29AL2KGBbPChNDIT4Xj7xgSqsxlYyMSBsiWYvFO6Igj5Xf_Sce1KMFtjQu-008ZHUllTCb_HVirp6181oyOEKlJRMb1JjDji2pUBpj1wzfX7cZp3O-6NuQDoUO-unupvH1bF_fAiHN8dvPentuu5TkeRJ3YrHfisLjt0npYBDkIgLtC9uiO-pjkkH5HHnt20DHwcwm9uWQtCfw0W6C5pENjvOmnV9CAZwJHa4m0nno2-7yvqGL8-QvRpBY_4QWuNc6tPljChbB2bGw_HeQ_Jsd1F2Gg0CmECJkcXJaEKShE_AK40Y0YmQE-A3b_oMNLvoiyKyIujA_psD7gUDNndzHdsJYzhrIgBRLT4U4mC03ZUt1oV5BTSps_SmAGkXnmtyQONfm8Vym-f-44_SE7IDVuktGM4Hi09GV5nt__KioKgCq-DNMx7fTLseZc5-NXvCaobcO_vnMM_k0VgKVhX4iUtg"
                },                
            })
            let res = await deleteExam.json();


            if(res.status === 200){
                const newData = [...dataExam.data].filter(item => item.id !== el.id);
                setDataExam({
                    // ...dataExam,
                    data: newData,
                })
            }
            console.log(res)    
    }

    return (
        <section className="KnowledgeBase">
            <div className="KnowledgeBase-Cont">
                <div className="KnowledgeBase-Cont-TitleForm">
                    <h2>Exam Management</h2>
                </div>
                <div className="KnowledgeBase-Cont-All">
                    <div className="KnowledgeBase-Cont-All-MainFlex">
                        <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex">
                            <img  src={createNewExam}/>
                            <p onClick={()=> setIsAddExamOpen(true)}>Create New Exam</p>
                            {isAddExamOpen && (
                                <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam">
                                    <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-MainTitle">
                                        <h2>Add Exam </h2>
                                        <img onClick={()=> setIsAddExamOpen(false)} src={close}/>
                                    </div>
                                    <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-MainDiv">
                                        <h1>Exam Name:</h1>
                                        <input 
                                            placeholder="Title"
                                            type="text"
                                            id= "title"
                                            name="title"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-CancelAndNext"> 
                                        <button className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-CancelAndNext-Cancel" onClick={()=> setIsAddExamOpen(false)}>Cancel</button>
                                        <button className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-CancelAndNext-Next" onClick={addName} >Next</button>
                                    </div>
                                </div>
                            )}
                            {isUpdateExamOpen && (
                                <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam">
                                    <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-MainTitle">
                                        <h2>Edit Exam </h2>
                                        <img onClick={()=> setIsUpdateExamOpen(false)} src={close}/>
                                    </div>
                                    <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-MainDiv">
                                        <h1>Exam Name:</h1>
                                        <input  
                                            placeholder="Title"
                                            type="text"
                                            id= "title"
                                            name="title"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-CancelAndNext"> 
                                        <button className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-CancelAndNext-Cancel" onClick={()=> setIsUpdateExamOpen(false)}>Cancel</button>
                                        <button className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-CancelAndNext-Next" onClick={updateName} >Next</button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex">
                            <input placeholder="Search"/>
                            <button className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-Search">Search</button>
                        </div>
                    </div>
                    <div className="KnowledgeBase-Cont-All-Table">
                        <div className="KnowledgeBase-Cont-All-Table-Main">
                            <div className="KnowledgeBase-Cont-All-Table-Main-Name">Name</div>
                            <div className="KnowledgeBase-Cont-All-Table-Main-View">Exam Details</div>
                            <div className="KnowledgeBase-Cont-All-Table-Main-Edit"  >Edit</div>
             
                            <div className="KnowledgeBase-Cont-All-Table-Main-Delete">Delete</div>
                        </div>
                        {dataExam ? dataExam.data.map((el)=>(                     
                        <div className="KnowledgeBase-Cont-All-Table-Flex" key={`exam-${el.id}`}>
                            <div className="KnowledgeBase-Cont-All-Table-Flex-Name">{el.title}</div>
                            <div className="KnowledgeBase-Cont-All-Table-Flex-View" onClick = {() => history.replace(`${process.env.PUBLIC_URL}/sectionManagment`)}>View</div>
                            <div className="KnowledgeBase-Cont-All-Table-Flex-Edit"><img src={sectionEdit} onClick={()=> setIsUpdateExamOpen(true)} /></div>

                            <div className="KnowledgeBase-Cont-All-Table-Flex-Delete"><img onClick={() => deleteName(el)}src={deleteq}/></div>
                        </div>
                        )) : null}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default KnowledgeBase