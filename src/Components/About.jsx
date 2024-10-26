import React from 'react';
import './AboutStyles.css'; 

function About() {
  return (
    <div className='cont1' id="about">
      <p className='head'><strong>ABOUT</strong></p>
      <div className='about-content d-flex'>
        <p className='w-50 fs-2'>
          <strong>
            Hello! I'm Srikar,<br />Delighted to connect. <br />
            Please take a look around.
          </strong>
        </p>
        <hr />
        <p className='w-50 fs-6'>
          I'm a passionate second-year Information Technology student at VNR VJIET, eager to impact software development. With a solid foundation in Python, C++, Java, and JavaScript, I'm equipped to tackle real-world challenges through innovative solutions. I enjoy exploring new technologies and continually honing my skills to stay at the forefront of the industry.
        </p>
      </div>
      <p className='w-50 fs'>
          ~Feel free to connect with me on <a href='https://www.linkedin.com/in/srikar-janjirala' target='_blank' rel='noopener noreferrer'>LinkedIn</a> or check out my projects on <a href='https://github.com/Janjirala-Srikar' target='_blank' rel='noopener noreferrer'>GitHub</a>.
        </p>
    </div>
  );
}

export default About;
