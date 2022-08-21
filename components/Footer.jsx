import React from 'react';

import {AiFillInstagram, AiOutlineTwitter, AiOutlineGithub} from 'react-icons/ai'
import {FaGitlab} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className ="footer-container">
      <p>
        <span>2022 </span>  
        <a href="https://ijchavez.github.io/react-portfolio-website/" target="_blank" rel='noreferrer'>Gerardo Chavez</a>
        <span> powered by </span>
        <a href="https://www.youtube.com/watch?v=4mOkFXyxfsU&t" target="_blank" rel='noreferrer'>Javascript Mastery</a>
      
      </p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <a href="https://www.github.com/ijchavez" target="_blank" rel='noreferrer'><AiOutlineGithub/></a>
        <a href="https://www.gitlab.com/ijchavez" target="_blank" rel='noreferrer'><FaGitlab/></a>
      </p>
    </div>
    
  )
}

export default Footer