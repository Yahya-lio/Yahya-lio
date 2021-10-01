import React from 'react'
import writersImage from '../../assets/writers.jpg'
import share from '../../assets/shareStory.jpg'
import storyTelling from '../../assets/storytelling.jpg'
import './ForHow.css'
function ForHow() {
    return (
        <div className='forhow'>
            <div className="forhow_container">
                <h1 className="maintext">How this is For</h1>
                <div className="answer">while Is For Everyone</div>
                <div className="forhow-component">
                    
                    <ForHowCard image={writersImage} title='story Writers' text='share with us some of your many story that you wrote' />
                    <ForHowCard image={share} title='share Your Story' text='tell us about your self your storys your jurny' />
                    <ForHowCard image={storyTelling} title='story Telling' text='telling and sharing is different feeling tell us about the old storys the you have been told' />
                   
                </div>
            </div>
        </div>
    )
}

export default ForHow

const ForHowCard = ({image,title,text})=>{
    return(
        <div className="card">
          <img src={image} alt=""/>
          <div className="card_body">
                <h3>{title}</h3>
                <small>{text} </small>
          </div>
        </div>
    )
}