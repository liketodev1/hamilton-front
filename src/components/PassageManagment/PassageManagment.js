import React, { useState, useEffect } from 'react'
import './PassageManagment.scss'
import deleteq from "../../assets/deleteq.png"
import createNewExam from "../../assets/createNewExam.png"
import sectionEdit from "../../assets/sectionEdit.png"
import { useHistory } from 'react-router'
import close from "../../assets/close.png"

const SectionManagment = ({ activeSection }) => { 
    const history = useHistory()
    const [isAddSectionOpen, setIsAddSectionOpen] = useState(false)
    const [activeElemId, setActiveElemId] = useState(false)
    const [isAddPassage, setIsAddPassage]= useState(false)
    const [dataPassage, setDataPassage] = useState(null)
    const [form, setForm] = useState(null)
    const [isUpdateSectionOpen, setIsUpdateSectionOpen] = useState(false)

    const [isUpdateExamOpen, setIsUpdateExamOpen] = useState(false)


    const handleChange = (e) =>{
        setForm ({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const fileHandleChange = (e)=>{
        setForm({
            ...form,
            img_url: e.target.files[0],
        })
    }


    useEffect(()=> {
        const fetchData = async () => {

            const fetchData = await fetch (`http://freelancedeveloper.site/projects/laravel/hamilton/public/api/admin/section/${activeSection}`, {
                method: 'GET',
                headers: {
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNjU2NmMwZDBlZmRlNDZmYmZlYzk4ZDk5MDEwMjVkODAxYzFiNzgyYWVmYWNlYzY2NTVmM2EzODZkYzc1YTAyNzI4ODkwYTA0YTFiY2MyZTIiLCJpYXQiOjE1OTI5MDQyMzMsIm5iZiI6MTU5MjkwNDIzMywiZXhwIjoxNjI0NDQwMjMzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.d888ilWsI2pG8dKmhO6O4DSUVSP1IbzYE9kefniTdRxElB3Er2Xz-AgdNUacJscoVCH4MC4VLO8ri-5aN4OCCb0c_95NIb_msx17QqRITyHQCWiVD1O6SuLUVubUR1WJFt_LjjCd9u2DDn7-szrh7Vc7Zx3wsR-cDCXl5tv7C2JUh_lXoqfyPfjwdNkwQxYdOaK9POIZEcr2ZdWtMG29AL2KGBbPChNDIT4Xj7xgSqsxlYyMSBsiWYvFO6Igj5Xf_Sce1KMFtjQu-008ZHUllTCb_HVirp6181oyOEKlJRMb1JjDji2pUBpj1wzfX7cZp3O-6NuQDoUO-unupvH1bF_fAiHN8dvPentuu5TkeRJ3YrHfisLjt0npYBDkIgLtC9uiO-pjkkH5HHnt20DHwcwm9uWQtCfw0W6C5pENjvOmnV9CAZwJHa4m0nno2-7yvqGL8-QvRpBY_4QWuNc6tPljChbB2bGw_HeQ_Jsd1F2Gg0CmECJkcXJaEKShE_AK40Y0YmQE-A3b_oMNLvoiyKyIujA_psD7gUDNndzHdsJYzhrIgBRLT4U4mC03ZUt1oV5BTSps_SmAGkXnmtyQONfm8Vym-f-44_SE7IDVuktGM4Hi09GV5nt__KioKgCq-DNMx7fTLseZc5-NXvCaobcO_vnMM_k0VgKVhX4iUtg" 
                }
            });
            const res = await fetchData.json();
            setDataPassage(res.data);
        }
        fetchData()
    }, []);

    console.log(dataPassage)


    const addName = async (el) => {
        setIsAddSectionOpen(false)
        const formData = new FormData();
        formData.append('title', form.title);
        formData.append('passage', form.passage)
        formData.append("img_url", form.img_url)
        formData.append("section_id", activeSection)

            let addSection = await fetch ("http://freelancedeveloper.site/projects/laravel/hamilton/public/api/admin/passage/store", {
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
        let deleteExam = await fetch (`http://freelancedeveloper.site/projects/laravel/hamilton/public/api/admin/passage/delete/${el.id}`, {
            method:"DELETE",
            headers:{
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNjU2NmMwZDBlZmRlNDZmYmZlYzk4ZDk5MDEwMjVkODAxYzFiNzgyYWVmYWNlYzY2NTVmM2EzODZkYzc1YTAyNzI4ODkwYTA0YTFiY2MyZTIiLCJpYXQiOjE1OTI5MDQyMzMsIm5iZiI6MTU5MjkwNDIzMywiZXhwIjoxNjI0NDQwMjMzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.d888ilWsI2pG8dKmhO6O4DSUVSP1IbzYE9kefniTdRxElB3Er2Xz-AgdNUacJscoVCH4MC4VLO8ri-5aN4OCCb0c_95NIb_msx17QqRITyHQCWiVD1O6SuLUVubUR1WJFt_LjjCd9u2DDn7-szrh7Vc7Zx3wsR-cDCXl5tv7C2JUh_lXoqfyPfjwdNkwQxYdOaK9POIZEcr2ZdWtMG29AL2KGBbPChNDIT4Xj7xgSqsxlYyMSBsiWYvFO6Igj5Xf_Sce1KMFtjQu-008ZHUllTCb_HVirp6181oyOEKlJRMb1JjDji2pUBpj1wzfX7cZp3O-6NuQDoUO-unupvH1bF_fAiHN8dvPentuu5TkeRJ3YrHfisLjt0npYBDkIgLtC9uiO-pjkkH5HHnt20DHwcwm9uWQtCfw0W6C5pENjvOmnV9CAZwJHa4m0nno2-7yvqGL8-QvRpBY_4QWuNc6tPljChbB2bGw_HeQ_Jsd1F2Gg0CmECJkcXJaEKShE_AK40Y0YmQE-A3b_oMNLvoiyKyIujA_psD7gUDNndzHdsJYzhrIgBRLT4U4mC03ZUt1oV5BTSps_SmAGkXnmtyQONfm8Vym-f-44_SE7IDVuktGM4Hi09GV5nt__KioKgCq-DNMx7fTLseZc5-NXvCaobcO_vnMM_k0VgKVhX4iUtg"
            },                
        })
        let res = await deleteExam.json();
        if(res.status === 200 ) {
            const newData = [...dataPassage.passages].filter(item => item.id !== el.id)
            setDataPassage({
                ...dataPassage,
                data:newData
            })

        }     
    }

    const updateName = async (el) => {
        setIsUpdateSectionOpen(false)
        const formData = new FormData();
        formData.append('title', form.title);
        formData.append('passage', form.passage)
        formData.append("img_url", form.img_url)
        formData.append("_method", "PUT")
            let updateExam = await fetch (`http://freelancedeveloper.site/projects/laravel/hamilton/public/api/admin/passage/update/${activeElemId}`, {
                method:"POST",
                headers:{
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNjU2NmMwZDBlZmRlNDZmYmZlYzk4ZDk5MDEwMjVkODAxYzFiNzgyYWVmYWNlYzY2NTVmM2EzODZkYzc1YTAyNzI4ODkwYTA0YTFiY2MyZTIiLCJpYXQiOjE1OTI5MDQyMzMsIm5iZiI6MTU5MjkwNDIzMywiZXhwIjoxNjI0NDQwMjMzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.d888ilWsI2pG8dKmhO6O4DSUVSP1IbzYE9kefniTdRxElB3Er2Xz-AgdNUacJscoVCH4MC4VLO8ri-5aN4OCCb0c_95NIb_msx17QqRITyHQCWiVD1O6SuLUVubUR1WJFt_LjjCd9u2DDn7-szrh7Vc7Zx3wsR-cDCXl5tv7C2JUh_lXoqfyPfjwdNkwQxYdOaK9POIZEcr2ZdWtMG29AL2KGBbPChNDIT4Xj7xgSqsxlYyMSBsiWYvFO6Igj5Xf_Sce1KMFtjQu-008ZHUllTCb_HVirp6181oyOEKlJRMb1JjDji2pUBpj1wzfX7cZp3O-6NuQDoUO-unupvH1bF_fAiHN8dvPentuu5TkeRJ3YrHfisLjt0npYBDkIgLtC9uiO-pjkkH5HHnt20DHwcwm9uWQtCfw0W6C5pENjvOmnV9CAZwJHa4m0nno2-7yvqGL8-QvRpBY_4QWuNc6tPljChbB2bGw_HeQ_Jsd1F2Gg0CmECJkcXJaEKShE_AK40Y0YmQE-A3b_oMNLvoiyKyIujA_psD7gUDNndzHdsJYzhrIgBRLT4U4mC03ZUt1oV5BTSps_SmAGkXnmtyQONfm8Vym-f-44_SE7IDVuktGM4Hi09GV5nt__KioKgCq-DNMx7fTLseZc5-NXvCaobcO_vnMM_k0VgKVhX4iUtg",
                    Accept:'application/json',
                },
                body: formData       
            })
            let res = await updateExam.json();
            if (res.status === 200){

            }
    }


    

    return (
        <section className="PassageManagement">
            <div className="PassageManagement-Cont">
                <div className="PassageManagement-Cont-TitleForm">
                    <h2>Passage Management</h2>
                </div>
                <div className="PassageManagement-Cont-All">
                    <div className="PassageManagement-Cont-All-MainFlex">
                        <div className="PassageManagement-Cont-All-MainFlex-InsideFlex">
                            <img src={createNewExam}/>
                            <p onClick={()=> setIsAddSectionOpen(true)}>Add Passage </p>
                            {isAddSectionOpen && (
                                <div className="PassageManagement-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain">
                                    <div className="PassageManagement-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv">
                                        <div className="PassageManagement-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-Flex">
                                            <h1>Add Section </h1>
                                            <img onClick={()=> setIsAddSectionOpen(false)} src={close}/>
                                        </div>
                                        <div className="PassageManagement-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv">
                                            <div className="PassageManagement-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-FlexMain">
                                                    <h1>Passage Title:</h1>
                                                    <input 
                                                        placeholder="Title"
                                                        type="text"
                                                        id= "title"
                                                        name="title"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="PassageManagement-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-FlexMain-FlexInside">
                                                    <h1>Passage:</h1>
                                                    <textarea 
                                                        placeholder="Passage"
                                                        type="text"
                                                        id= "passage"
                                                        name="passage"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            <div className="PassageManagement-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-UploadAndButton">
                                                <h1>Upload Image:</h1>
                                                {/* <button>Browse Files:</button> */}
                                                <input className="PassageManagement-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-UploadAndButton-Input" type="file" id="img_url" name="img_url" onChange={fileHandleChange}/> 
                                            </div>
                                            <div className="PassageManagement-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-CancelAndNext">
                                                <button className="PassageManagement-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-CancelAndNext-Cancel">Cancel</button>
                                                <button className="PassageManagement-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-CancelAndNext-Next" onClick={addName}>Next</button>
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
                                            <h1>Title:</h1>
                                            <input  
                                                placeholder="Title"
                                                type="text"
                                                id= "title"
                                                name="title"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-MainDiv">
                                            <h1>Passage:</h1>
                                            <input  
                                                placeholder="Passage"
                                                type="text"
                                                id= "passage"
                                                name="passage"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="PassageManagement-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-UploadAndButton">
                                                <h1>Upload Image:</h1>
                                                {/* <button>Browse Files:</button> */}
                                                <input className="PassageManagement-Cont-All-MainFlex-InsideFlex-isAddSectionOpenMain-MainDiv-InsideDiv-UploadAndButton-Input" type="file" id="img_url" name="img_url" onChange={fileHandleChange}/> 
                                            </div>
                                        
                                    </div>      
                                    <div className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-CancelAndNext"> 
                                        <button className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-CancelAndNext-Cancel" onClick={()=> setIsUpdateSectionOpen(false)}>Cancel</button>
                                        <button className="KnowledgeBase-Cont-All-MainFlex-InsideFlex-AddExam-CancelAndNext-Next" onClick={updateName} >Next</button>
                                    </div>
                                </div>
                        )}

                    </div>
                    <div className="PassageManagement-Cont-Table">
                        <div  className="PassageManagement-Cont-Table-Main">
                            <div className="PassageManagement-Cont-Table-Main-Name">Test Name</div>
                            <div className="PassageManagement-Cont-Table-Main-View">Test Details</div>
                            <div className="PassageManagement-Cont-Table-Main-Edit">Edit</div>
                            <div className="PassageManagement-Cont-Table-Main-Delete">Delete</div>
                        </div>
                        {dataPassage ? dataPassage.passages.map((el)=>(
                        <div className="PassageManagement-Cont-Table-Flex">
                            <div className="PassageManagement-Cont-Table-Flex-Name">{el.title}</div>
                            <div className="PassageManagement-Cont-Table-Flex-View" onClick = {() => history.replace(`${process.env.PUBLIC_URL}/passageManagment`)}>Views</div>
                            <div className="PassageManagement-Cont-Table-Flex-Edit"><img src={sectionEdit} onClick={()=> {
                                setActiveElemId(el.id);
                                setIsUpdateSectionOpen(true)
                            }} /></div>
                            <div className="PassageManagement-Cont-Table-Flex-Delete"><img src={deleteq} onClick={() => deleteName(el)}/></div> 
                        </div>
                         )) : null}

                    </div>
                </div>
            </div>

        </section>
    )
}

export default SectionManagment