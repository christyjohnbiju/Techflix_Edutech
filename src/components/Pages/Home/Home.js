 import React from 'react'
 import meta from '../../header/assets/img/meta.jpeg'
 import {AiOutlineWhatsApp} from 'react-icons/ai'
 import "./Home.css"
 import Courses from '..//Courses/Courses'
 
 function Home() {
    const handleClick=()=>{
        window.open('https://www.linkedin.com/in/christy-john-biju-906433240/?originalSubdomain=in','_blank')
    }
   return (
    <>
   <section>
    <div className='container'>

        <div className='home-container'>
            <div className='home-content'>
                <h2 className='section_title'>
                    Learn Everything for free!!
                </h2>
                <p>
                Master Trending Technologies with Techflix AI,Invest your time and return skills                </p>
                <div className='home-btns'>
                    <button className='register-btn'onClick={handleClick}>
                        Get Started
                    </button>
                    <button className='register-btn' onClick={handleClick}>
                        Watch Now
                    </button>
                </div>
            </div>
            <div className='home-img'>
                <div className='home-img-wrapper'>
                    <div className='box-01'>
                        <div className='box-image'>
                            <img src={meta}></img>
                        </div>
                    </div>
                    <div className='whatsapp-container'>
                        <h5>500+ Students</h5>
                        <AiOutlineWhatsApp color='green'/>
                    </div>
                    <div className='support'>
                        <h5>Active Support</h5>
                    </div>


                </div>


            </div>
        </div>
    </div>



   </section> 
   <Courses/> 
   </>
   )
 }
 
 export default Home
 