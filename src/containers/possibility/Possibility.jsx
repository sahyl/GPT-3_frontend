
import React from 'react'
import './possibility.css'
import possibility from '../../assets/possibility.png'
const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibility} alt='possibility'/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request early access to get started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination.</h1>
        <p>With GPT-3's ability to generate human-like text, answer complex questions, and even write code, it can revolutionize industries from customer service to content creation. Its vast language understanding and generation capabilities enable unprecedented advancements in automation, creativity, and problem-solving, opening doors to innovations we haven't yet conceived</p>
        <h4>Request early access to get started</h4>
      </div>
      
    </div>
  )
}

export default Possibility
