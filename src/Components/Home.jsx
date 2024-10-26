import React from 'react'
import './HomeStyles.css'
function Home() {
  return (
    <div className='cont ' id="home" >
      <div className='boxOfHome pt-5'>
        <div className='intro'>
          <p className='fs-4 m-0 i'>Hello!,I am </p>
          <p className='name'>Srikar Janjirala</p>
          <p className='fs-3 ii'><strong>I'm a Full Stack Developer.</strong></p>
          <p className='fs-6'>I'm a passionate Full Stack Developer specializing in the MERN stack.I turn innovative ideas <br /> into dynamic web applications</p>
          <button>View Resume</button>
        </div>
        <img src="./src/assets/Deskpic-modified (1).png" alt="img" className='pic'/>
      </div>
    </div>
  )
}

export default Home