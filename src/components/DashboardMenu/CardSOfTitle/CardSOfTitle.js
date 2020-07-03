import React, { useState, useEffect } from 'react'
// import totalCandidate from "../../../assets/totalCandidate.png"
import totalQuestion from "../../../assets/totalQuestion.png"
import totalTest from "../../../assets/totalTest.png"
import './CardSOfTitle.scss'

const cardSOfTitleData = [
    {
        id:1,
        type: 'exam_count',
        img: totalTest,
        title: 'Total Exam',
    },
    {
        id:2,
        img: totalQuestion,
        title: 'Total Question',
        type: 'question_count',
    }
]

const CardSOfTitle = () =>{
    const [cardData, setCardData] = useState(cardSOfTitleData)
    
    useEffect(()=> {
    const fetchData = async () => {
        const fetchData = await fetch ("http://freelancedeveloper.site/projects/laravel/hamilton/public/api/admin", {
            method: 'GET',
            headers: {
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNjU2NmMwZDBlZmRlNDZmYmZlYzk4ZDk5MDEwMjVkODAxYzFiNzgyYWVmYWNlYzY2NTVmM2EzODZkYzc1YTAyNzI4ODkwYTA0YTFiY2MyZTIiLCJpYXQiOjE1OTI5MDQyMzMsIm5iZiI6MTU5MjkwNDIzMywiZXhwIjoxNjI0NDQwMjMzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.d888ilWsI2pG8dKmhO6O4DSUVSP1IbzYE9kefniTdRxElB3Er2Xz-AgdNUacJscoVCH4MC4VLO8ri-5aN4OCCb0c_95NIb_msx17QqRITyHQCWiVD1O6SuLUVubUR1WJFt_LjjCd9u2DDn7-szrh7Vc7Zx3wsR-cDCXl5tv7C2JUh_lXoqfyPfjwdNkwQxYdOaK9POIZEcr2ZdWtMG29AL2KGBbPChNDIT4Xj7xgSqsxlYyMSBsiWYvFO6Igj5Xf_Sce1KMFtjQu-008ZHUllTCb_HVirp6181oyOEKlJRMb1JjDji2pUBpj1wzfX7cZp3O-6NuQDoUO-unupvH1bF_fAiHN8dvPentuu5TkeRJ3YrHfisLjt0npYBDkIgLtC9uiO-pjkkH5HHnt20DHwcwm9uWQtCfw0W6C5pENjvOmnV9CAZwJHa4m0nno2-7yvqGL8-QvRpBY_4QWuNc6tPljChbB2bGw_HeQ_Jsd1F2Gg0CmECJkcXJaEKShE_AK40Y0YmQE-A3b_oMNLvoiyKyIujA_psD7gUDNndzHdsJYzhrIgBRLT4U4mC03ZUt1oV5BTSps_SmAGkXnmtyQONfm8Vym-f-44_SE7IDVuktGM4Hi09GV5nt__KioKgCq-DNMx7fTLseZc5-NXvCaobcO_vnMM_k0VgKVhX4iUtg" 
            }
        });
        const res = await fetchData.json();
        const newData = [...cardData];
        newData.map(el => {
            if (el.type === 'exam_count') {
                el.count = res.data.exam_count;
            }
            if (el.type === 'question_count') {
                el.count = res.data.question_count;
            }
            return el;
        })
        setCardData(newData);
    }
    fetchData()
    }, []);

    return (   
        <section className="CardSOfTitle">
            <div className="CardSOfTitle-Cont" >
            {cardSOfTitleData.map((el)=> (
                <div className="CardSOfTitle-Cont-Width" key={`questions-${el.id}`}>
                    <div  className="CardSOfTitle-Cont-Width-Flex">
                        <div className="CardSOfTitle-Cont-Width-Img">
                            <img src={el.img}/>
                        </div>
                        <div className="CardSOfTitle-Cont-Width-Flex-Margin">
                            <h1 className="CardSOfTitle-Cont-Width-Flex-TitleAndQuantity-Title">{el.title}</h1>
                            <h1 className="CardSOfTitle-Cont-Width-Flex-TitleAndQuantity-Quantity">{cardData && el.count}</h1>
                        </div>   
                    </div>
                    <button className="CardSOfTitle-Cont-Width-Flex-Button">+ add new candidate</button>
                </div>
            ))}
            </div>
        </section>
    )
}

export default CardSOfTitle


