import React, { useState, useEffect } from 'react'

import totalCandidate from "../../../assets/totalCandidate.png"
import totalQuestion from "../../../assets/totalQuestion.png"
import totalTest from "../../../assets/totalTest.png"
import totalProduct from "../../../assets/totalProduct.png"
import './CardSOfTitle.scss'

const CardSOfTitle = props => {
    const [content, setContent] = useState({
        img:"",
        title: '',
        quantity: '',
        
    })
    useEffect(() => {
        switch (props.id) {
            case 0: {
                setContent({
                    img:totalCandidate,
                    title: 'Total Candidate',
                    quantity: '788' ,
                })
                break;
            }
            case 1: {
                setContent({
                    img:totalQuestion,
                    title: 'Total Question',
                    quantity: '1356',

                })
                break;
            }
            case 2: {
                setContent({
                    img:totalTest,
                    title: 'Total Test',
                    quantity: '134',
                })
                break;
            }
            case 3: {
                setContent({
                    img:totalProduct,
                    title: 'Total Product',
                    quantity: '12', 
                })
            }
        }
    }, [props.id])

    return (
        <section className="CardSOfTitle">
            <div className="CardSOfTitle-Cont">
                <img src = {content.img}/>
                <div className="CardSOfTitle-Cont-TitleAndQuantity">
                    <h1 className="CardSOfTitle-Cont-TitleAndQuantity-Title">{content.title}</h1>
                    <h1 className="CardSOfTitle-Cont-TitleAndQuantity-Quantity">{content.quantity}</h1>
                </div>
            </div>
            <button className="CardSOfTitle-Cont-Button">+ add new candidate</button>
            

        </section>
    )
}

export default CardSOfTitle