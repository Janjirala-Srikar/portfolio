import React from 'react';
import './contactStyles.css';
import { FaGithub } from "react-icons/fa"; 
import { CiLinkedin } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

function Contact() {
  return (
     <div className=' contain' id="contact">
      <p className='fs-1 text-center'>Contact</p>
      <div className='info '>
      <p className='w-50 fss text-center'>
          Mail ~ srikarjanjirala92@gmail.com
        </p>
      </div>
      <div className='d-flex gap-3 justify-content-center'>
        <a href="https://www.linkedin.com/in/srikar_janjirala" className='fs-1'><CiLinkedin /></a>
        <a href="https://github.com/Janjirala-Srikar" className='fs-1'><FaGithub /></a>
        <a href="https://github.com/Janjirala-Srikar" className='fs-1'><CiInstagram /></a>
        <a href="https://github.com/Janjirala-Srikar" className='fs-1'><FaDiscord /></a>
      </div>
      <p className='cpyryts'>Copyright © 2024 Srikar. All Rights Reserved.</p>
     </div>
  );
}

export default Contact;
