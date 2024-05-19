import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className='gpt3__header section__padding'id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let’s build  with GPT-3 from OpenAI</h1>
        <p>Are you ready to create something incredible with GPT-3 from OpenAI? With its powerful natural language processing capabilities, we can build intelligent applications that understand and generate human-like text. Whether it's developing chatbots, content creation tools, or innovative AI-driven solutions, the possibilities are endless. Join us on this exciting journey to leverage GPT-3's potential and transform ideas into reality!</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email address'/>
          <button type='button'>Get Started </button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p> 1,600 people requested access a visit in last 24 hours</p>
        </div>   
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt='ai'/>
      </div>
    </div>
  )
}

export default Header
