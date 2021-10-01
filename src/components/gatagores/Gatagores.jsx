import React from 'react'
import './Gatagores.css'
import fictionImg from '../../assets/fiction.jpg'
import seinceFiction from '../../assets/seinceFiction.jpg'
import adoltStorys from '../../assets/adoltStorys.jpg'

function Gatagores() {
    return (
        <div className='gatagores'>
            <div className="gatagores_container clean">
                <h2 className="gatagore">
                    Gatagores
                </h2>
            </div>
            <div className="gatagores_container">
               <GatagoreyCard image={fictionImg} title='Fiction' text='lorem10ndejanjc da cjkdjcndjoanckc da;ncdoa;m' />
               <GatagoreyCard image={seinceFiction} title='Seince Fiction' text='newnjked wjks' />
               <GatagoreyCard image={adoltStorys} title='18+' text='cnmwcan;cjkf;nasvjfn;ejavk;nfejak;nvjfkanvjfnavjrjefmak'/>
            </div>
        </div>
    )

}

const GatagoreyCard = ({image,title,text}) =>{
    return(
        <div className="gatagores_card">
                    <div className="gatagore_card_head">
                        <img src={image} className='top' width='130px' alt=""/>
                        <img src={image} width='130px' className='center'alt=""/>
                        <img src={image} className='bottom' width='130px' alt=""/>
                    </div>
                    <div className="gatagore_card_body">
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
                </div>
    )
}

export default Gatagores
