import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'
const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is GPT-3 ?' text='GPT-3, or Generative Pre-trained Transformer 3, is an advanced language model developed by OpenAI. It uses deep learning techniques to generate human-like text based on the input it receives, making it capable of understanding and producing natural language. With 175 billion parameters, GPT-3 is one of the largest and most powerful language models available. Its applications range from creating conversational agents and content generation to aiding in research and automating tasks that require language understanding.'/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chatbots' text='GPT-3 enhances chatbots by enabling them to hold more natural, coherent, and contextually relevant conversations with users. '/>
        <Feature title='Knowledgebase'  text='GPT-3 improves knowledgebases by generating accurate and comprehensive responses to user queries based on vast amounts of information.'/>
        <Feature title='Education'  text='GPT-3 aids in education by providing personalized tutoring and generating educational content tailored to individual learning needs.'/>

      </div>

      

    </div>
  )
}

export default WhatGPT3
