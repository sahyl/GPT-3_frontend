import React from 'react'
import './features.css'
import { Feature } from '../../components'
const featuresData =[
  {
    title :' Natural Language Understanding ',
    text : 'GPT-3 can comprehend and generate human-like text, enabling it to understand context and nuances in conversations.'
  },
  {
    title :'Large-scale Knowledge',
    text : 'Trained on diverse datasets, GPT-3 has access to a vast amount of information, making it capable of providing detailed and accurate responses across various topics.'
  },
  {
    title :'Versatile Application',
    text : 'GPT-3 can be applied in numerous fields, such as writing assistance, code generation, content creation, and more, showcasing its adaptability.'
  },
  {
    title :'Few-shot Learning ',
    text : ' GPT-3 can perform tasks with minimal examples or instructions, allowing it to quickly adapt to new tasks without extensive retraining.'
  }
]
const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now. Step into the future and make it happen with GPT-3. Unlock Today and Tomorrow. Revolutionize your world with cutting-edge AI technology.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item , index)=>(
          <Feature title= {item.title} text ={item.text} key={item.title + index}/>
        ))}
      </div>

    </div>
  )
}

export default Features
