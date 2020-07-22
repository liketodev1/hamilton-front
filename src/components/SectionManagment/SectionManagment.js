import React, { useState, useEffect } from 'react'
import './SectionManagment.scss'
import deleteq from "../../assets/deleteq.png"
import createNewExam from "../../assets/createNewExam.png"
import sectionEdit from "../../assets/sectionEdit.png"
import { useHistory } from 'react-router'
import close from "../../assets/close.png"

const SectionManagment = ({ activeId }) => { 
    const history = useHistory()
    const [isAddSectionOpen, setIsAddSectionOpen] = useState(false)
    const [isAddPassage, setIsAddPassage]= useState(false)
    const [dataSection, setDataSection] = useState(null)
    const [form, setForm] = useState(null)
    const [isUpdateSectionOpen, setIsUpdateSectionOpen] = useState(false)

    const [isUpdateExamOpen, setIsUpdateExamOpen] = useState(false)


    const handleChange = (e) =>{
        setForm ({
            ...form,
            [e.target.name]: e.target.value
        })
        // console.log(form)
    }

    const fileHandleChange = (e)=>{
        setForm({
            ...form,
            reference_img: e.target.files[0],
        })
    }


    useEffect(()=> {
        const fetchData = async () => {
            const fetchData = await fetch (`http://freelancedeveloper.site/projects/laravel/hamilton/public/api/admin/exam/${activeId}`, {
                method: 'GET',
                headers: {
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNjU2NmMwZDBlZmRlNDZmYmZlYzk4ZDk5MDEwMjVkODAxYzFiNzgyYWVmYWNlYzY2NTVmM2EzODZkYzc1YTAyNzI4ODkwYTA0YTFiY2MyZTIiLCJpYXQiOjE1OTI5MDQyMzMsIm5iZiI6MTU5MjkwNDIzMywiZXhwIjoxNjI0NDQwMjMzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.d888ilWsI2pG8dKmhO6O4DSUVSP1IbzYE9kefniTdRxElB3Er2Xz-AgdNUacJscoVCH4MC4VLO8ri-5aN4OCCb0c_95NIb_msx17QqRITyHQCWiVD1O6SuLUVubUR1WJFt_LjjCd9u2DDn7-szrh7Vc7Zx3wsR-cDCXl5tv7C2JUh_lXoqfyPfjwdNkwQxYdOaK9POIZEcr2ZdWtMG29AL2KGBbPChNDIT4Xj7xgSqsxlYyMSBsiWYvFO6Igj5Xf_Sce1KMFtjQu-008ZHUllTCb_HVirp6181oyOEKlJRMb1JjDji2pUBpj1wzfX7cZp3O-6NuQDoUO-unupvH1bF_fAiHN8dvPentuu5TkeRJ3YrHfisLjt0npYBDkIgLtC9uiO-pjkkH5HHnt20DHwcwm9uWQtCfw0W6C5pENjvOmnV9CAZwJHa4m0nno2-7yvqGL8-QvRpBY_4QWuNc6tPljChbB2bGw_HeQ_Jsd1F2Gg0CmECJkcXJaEKShE_AK40Y0YmQE-A3b_oMNLvoiyKyIujA_psD7gUDNndzHdsJYzhrIgBRLT4U4mC03ZUt1oV5BTSps_SmAGkXnmtyQONfm8Vym-f-44_SE7IDVuktGM4Hi09GV5nt__KioKgCq-DNMx7fTLseZc5-NXvCaobcO_vnMM_k0VgKVhX4iUtg" 
                }
            });
            const res = await fetchData.json();
            setDataSection(res.data);

        }
        fetchData()
    }, []);

    console.log(dataSection)


    const addName = async (el) => {
        setIsAddSectionOpen(false)
        const formData = new FormData();
        formData.append('title', form.title);
        formData.append('time', form.time)
        formData.append('info', form.info)
        formData.append('note', form.note)
        formData.append('directions[1][text]', form.direction_1)
        formData.append('directions[2][text]', form.direction_2)
        formData.append("reference_img", form.reference_img)
        formData.append("exam_id", activeId)

            let addSection = await fetch ("http://freelancedeveloper.site/projects/laravel/hamilton/public/api/admin/section/store", {
                method:"POST",
                headers:{
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNjU2NmMwZDBlZmRlNDZmYmZlYzk4ZDk5MDEwMjVkODAxYzFiNzgyYWVmYWNlYzY2NTVmM2EzODZkYzc1YTAyNzI4ODkwYTA0YTFiY2MyZTIiLCJpYXQiOjE1OTI5MDQyMzMsIm5iZiI6MTU5MjkwNDIzMywiZXhwIjoxNjI0NDQwMjMzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.d888ilWsI2pG8dKmhO6O4DSUVSP1IbzYE9kefniTdRxElB3Er2Xz-AgdNUacJscoVCH4MC4VLO8ri-5aN4OCCb0c_95NIb_msx17QqRITyHQCWiVD1O6SuLUVubUR1WJFt_LjjCd9u2DDn7-szrh7Vc7Zx3wsR-cDCXl5tv7C2JUh_lXoqfyPfjwdNkwQxYdOaK9POIZEcr2ZdWtMG29AL2KGBbPChNDIT4Xj7xgSqsxlYyMSBsiWYvFO6Igj5Xf_Sce1KMFtjQu-008ZHUllTCb_HVirp6181oyOEKlJRMb1JjDji2pUBpj1wzfX7cZp3O-6NuQDoUO-unupvH1bF_fAiHN8dvPentuu5TkeRJ3YrHfisLjt0npYBDkIgLtC9uiO-pjkkH5HHnt20DHwcwm9uWQtCfw0W6C5pENjvOmnV9CAZwJHa4m0nno2-7yvqGL8-QvRpBY_4QWuNc6tPljChbB2bGw_HeQ_Jsd1F2Gg0CmECJkcXJaEKShE_AK40Y0YmQE-A3b_oMNLvoiyKyIujA_psD7gUDNndzHdsJYzhrIgBRLT4U4mC03ZUt1oV5BTSps_SmAGkXnmtyQONfm8Vym-f-44_SE7IDVuktGM4Hi09GV5nt__KioKgCq-DNMx7fTLseZc5-NXvCaobcO_vnMM_k0VgKVhX4iUtg",
                    Accept: "application/json"
                },
                body: formData
            })
            let res = await addSection.json()
    }

    const deleteName = async (el) => {
        let deleteExam = await fetch (`http://freelancedeveloper.site/projects/laravel/hamilton/public/api/admin/section/delete/${el.id}`, {
            method:"DELETE",
            headers:{
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNjU2NmMwZDBlZmRlNDZmYmZlYzk4ZDk5MDEwMjVkODAxYzFiNzgyYWVmYWNlYzY2NTVmM2EzODZkYzc1YTAyNzI4ODkwYTA0YTFiY2MyZTIiLCJpYXQiOjE1OTI5MDQyMzMsIm5iZiI6MTU5MjkwNDIzMywiZXhwIjoxNjI0NDQwMjMzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.d888ilWsI2pG8dKmhO6O4DSUVSP1IbzYE9kefniTdRxElB3Er2Xz-AgdNUacJscoVCH4MC4VLO8ri-5aN4OCCb0c_95NIb_msx17QqRITyHQCWiVD1O6SuLUVubUR1WJFt_LjjCd9u2DDn7-szrh7Vc7Zx3wsR-cDCXl5tv7C2JUh_lXoqfyPfjwdNkwQxYdOaK9POIZEcr2ZdWtMG29AL2KGBbPChNDIT4Xj7xgSqsxlYyMSBsiWYvFO6Igj5Xf_Sce1KMFtjQu-008ZHUllTCb_HVirp6181oyOEKlJRMb1JjDji2pUBpj1wzfX7cZp3O-6NuQDoUO-unupvH1bF_fAiHN8dvPentuu5TkeRJ3YrHfisLjt0npYBDkIgLtC9uiO-pjkkH5HHnt20DHwcwm9uWQtCfw0W6C5pENjvOmnV9CAZwJHa4m0nno2-7yvqGL8-QvRpBY_4QWuNc6tPljChbB2bGw_HeQ_Jsd1F2Gg0CmECJkcXJaEKShE_AK40Y0YmQE-A3b_oMNLvoiyKyIujA_psD7gUDNndzHdsJYzhrIgBRLT4U4mC03ZUt1oV5BTSps_SmAGkXnmtyQONfm8Vym-f-44_SE7IDVuktGM4Hi09GV5nt__KioKgCq-DNMx7fTLseZc5-NXvCaobcO_vnMM_k0VgKVhX4iUtg"
            },                
        })
        let res = await deleteExam.json();
        console.log(res)
        // if(res.status === 200){
        //     const newData = [...dataSection.sections].filter(item => item.id !== el.id);
        //     setDataSection({
        //         // ...dataExam,
        //         data: newData,
        //     })
        // }
        if(res.status === 200 ) {
            const newData = [...dataSection.sections].filter(item => item.id !== el.id)
            setDataSection({
                ...dataSection,
                data:newData
            })
        }
        
}

    const updateName = async (el) => {
        setIsUpdateSectionOpen(false)
        const formData = new FormData();
        formData.append('title', form.title);
        formData.append("time", form.time)
        formData.append('directions', form.directions)
            let updateExam = await fetch (`http://freelancedeveloper.site/projects/laravel/hamilton/public/api/admin/section/${el.id}`, {
                method:"PUT",
                headers:{
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNjU2NmMwZDBlZmRlNDZmYmZlYzk4ZDk5MDEwMjVkODAxYzFiNzgyYWVmYWNlYzY2NTVmM2EzODZkYzc1YTAyNzI4ODkwYTA0YTFiY2MyZTIiLCJpYXQiOjE1OTI5MDQyMzMsIm5iZiI6MTU5MjkwNDIzMywiZXhwIjoxNjI0NDQwMjMzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.d888ilWsI2pG8dKmhO6O4DSUVSP1IbzYE9kefniTdRxElB3Er2Xz-AgdNUacJscoVCH4MC4VLO8ri-5aN4OCCb0c_95NIb_msx17QqRITyHQCWiVD1O6SuLUVubUR1WJFt_LjjCd9u2DDn7-szrh7Vc7Zx3wsR-cDCXl5tv7C2JUh_lXoqfyPfjwdNkwQxYdOaK9POIZEcr2ZdWtMG29AL2KGBbPChNDIT4Xj7xgSqsxlYyMSBsiWYvFO6Igj5Xf_Sce1KMFtjQu-008ZHUllTCb_HVirp6181oyOEKlJRMb1JjDji2pUBpj1wzfX7cZp3O-6NuQDoUO-unupvH1bF_fAiHN8dvPentuu5TkeRJ3YrHfisLjt0npYBDkIgLtC9uiO-pjkkH5HHnt20DHwcwm9uWQtCfw0W6C5pENjvOmnV9CAZwJHa4m0nno2-7yvqGL8-QvRpBY_4QWuNc6tPljChbB2bGw_HeQ_Jsd1F2Gg0CmECJkcXJaEKShE_AK40Y0YmQE-A3b_oMNLvoiyKyIujA_psD7gUDNndzHdsJYzhrIgBRLT4U4mC03ZUt1oV5BTSps_SmAGkXnmtyQONfm8Vym-f-44_SE7IDVuktGM4Hi09GV5nt__KioKgCq-DNMx7fTLseZc5-NXvCaobcO_vnMM_k0VgKVhX4iUtg",
                    Accept:'application/json',
                },
                body: formData       
            })
            let res = await updateExam.json();
            console.log(res)
    }


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
                                                    <input 
                                                        placeholder="Section"
                                                        type="text"
                                                        id= "title"
                                                        name="title"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-FlexMain-FlexInside">
                                                    <h1>Time:</h1>
                                                    <input 
                                                        placeholder="Enter time"
                                                        type="number"
                                                        id= "time"
                                                        name="time"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-InfoAndInput" >
                                                <h1>Info:</h1>
                                                <textarea
                                                    type="text"
                                                    id= "info"
                                                    name="info"
                                                    onChange={handleChange}>
                                                </textarea>
                                            </div>
                                            <div className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-InfoAndInput" >
                                                <h1>Note:</h1>
                                                <textarea               
                                                    type="text"
                                                    id= "note"
                                                    name="note"
                                                    onChange={handleChange}>
                                                </textarea>
                                            </div>
                                            <div className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-UploadAndButton">
                                                <h1>Upload Image:</h1>
                                                {/* <button>Browse Files:</button> */}
                                                <input className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-UploadAndButton-Input" type="file" id="reference_img" name="reference_img" onChange={fileHandleChange}/> 
                                            </div>
                                            <div  >
                                                <div className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-InfoAndInput">
                                                    <h1>Directions 1:</h1>
                                                    <textarea               
                                                        type="text"
                                                        id= "direction_1"
                                                        name="direction_1"
                                                        onChange={handleChange}>
                                                    </textarea>
                                                    {/* <input type="file" id="reference_img" name="reference_img" onChange={handleChange}/>  */}
                                                </div>
                                                <div className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-InfoAndInput">
                                                    <h1>Directions 2:</h1>
                                                    <textarea               
                                                        type="text"
                                                        id= "direction_2"
                                                        name="direction_2"
                                                        onChange={handleChange}>
                                                    </textarea>
                                                    {/* <input type="file" id="reference_img" name="reference_img" onChange={handleChange}/>  */}
                                                </div>                                        
                                            </div>
                                            <div className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-CancelAndNext">
                                                <button className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-CancelAndNext-Cancel">Cancel</button>
                                                <button className="SectionManagment-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-CancelAndNext-Next" onClick={addName}>Next</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    </div>                        
                                </div>
                            )}
                        </div>

                        {isUpdateSectionOpen && (
                                <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam">
                                    <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-MainTitle">
                                        <h2>Edit Section </h2>
                                        <img onClick={()=> setIsUpdateSectionOpen(false)} src={close}/>
                                    </div>
                                    <div >
                                        <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-MainDiv">
                                            <h1>Name:</h1>
                                            <input  
                                                placeholder="Title"
                                                type="text"
                                                id= "title"
                                                name="title"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-MainDiv">
                                            <h1>Time:</h1>
                                            <input  
                                                placeholder="Title"
                                                type="text"
                                                id= "time"
                                                name="time"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-MainDiv">
                                            <h1>Directiion:</h1>
                                            <input  
                                                placeholder="Title"
                                                type="text"
                                                id= "directions"
                                                name="directions"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        
                                    </div>
                                    <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-CancelAndNext"> 
                                        <button className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-CancelAndNext-Cancel" onClick={()=> setIsUpdateSectionOpen(false)}>Cancel</button>
                                        <button className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-CancelAndNext-Next" onClick={updateName} >Next</button>
                                    </div>
                                </div>
                        )}

                    </div>
                    <div className="SectionManagment-Cont-Table">
                        <div  className="SectionManagment-Cont-Table-Main">
                            <div className="SectionManagment-Cont-Table-Main-Name">Test Name</div>
                            <div className="SectionManagment-Cont-Table-Main-View">Test Details</div>
                            <div className="SectionManagment-Cont-Table-Main-Time">Test Time</div>
                            <div className="SectionManagment-Cont-Table-Main-Edit">Edit</div>
                            <div className="SectionManagment-Cont-Table-Main-Delete">Delete</div>
                        </div>
                        {dataSection ? dataSection.sections.map((el)=>(
                        <div className="SectionManagment-Cont-Table-Flex">
                            <div className="SectionManagment-Cont-Table-Flex-Name">{el.title}</div>
                            <div className="SectionManagment-Cont-Table-Flex-View" onClick = {() => history.replace(`${process.env.PUBLIC_URL}/questionManagment`)}>Views</div>
                            <div className="SectionManagment-Cont-Table-Flex-Time">{el.time}</div>
                            <div className="SectionManagment-Cont-Table-Flex-Edit"><img src={sectionEdit} onClick={()=> setIsUpdateSectionOpen(true)} /></div>
                            <div className="SectionManagment-Cont-Table-Flex-Delete"><img src={deleteq} onClick={() => deleteName(el)}/></div> 
                        </div>
                         )) : null}

                    </div>
                </div>
            </div>

        </section>
    )
}

export default SectionManagment