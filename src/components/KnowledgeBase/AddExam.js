import React,{useState} from 'react'
// import './Result.scss'
import close from "../../assets/close.png"

const AddExam = () => {

    const [isAddExamOpen, setIsAddExamOpen] = useState(false);
    const [form, setForm] = useState([])

    const handleChange = (e) => {
        setForm ({
            ...form,
            [e.target.name]:e.target.value 
        })
    };

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

    return (
        <section className="Result">
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
                            )}        </section>
    )
}

export default AddExam