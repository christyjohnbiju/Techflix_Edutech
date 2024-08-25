 import React from 'react'
 import './Footer.css'
 import footer from '../../components/header/assets/img/footer.png'
 function Footer() {
   return (
    <footer className='footer'>
        <div className='container'>

        <div className='footer_wrapper'>

            <div className='footer-box'>
                <div className='logo'>
                    <div className='logo-img'>
                    <img src={footer}></img>                    
                    </div>
                    <h2>Techflix AI</h2>
                </div>
                <p>Embrace the future ofinnovation and technology with our cutting edge tech business solution</p>
            </div>
            <div className='footer-box'>
                <h4 className='footer_title'>Company</h4>
                    <ul className='footer_links'>

                        <li><a href=''>Our programs</a></li>
                        <li><a href=''>Our plan</a></li>   
                        <li><a href=''>Become a member</a></li>                
                    </ul>
                
            </div>
            <div className='footer-box'>
            <h4 className='footer_title'>Quick Links</h4>
                    <ul className='footer_links'>

                        <li><a href=''>About us</a></li>
                        <li><a href=''>Contact us</a></li>
                        <li><a href=''>Support us</a></li>
                    </ul>
                
            </div>
        </div>
        </div>

    </footer>
 )}
 
 export default Footer
 