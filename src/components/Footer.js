import React from 'react'
import { FaInstagram,FaTwitter , FaGithub} from "react-icons/fa";
import '../styles/footer.css';
import '../styles/footer.scss';

export default function Footer() {
  return (
    <div className="footer">
        <h2>Bharath <p>K.</p></h2>
        <span className='footer_links'>
            <a href='https://www.instagram.com/bharathnivas29/'><FaInstagram/></a>
            <a href='https://www.instagram.com/bharathnivas29/'><FaTwitter/></a>  
            <a href='https://www.instagram.com/bharathnivas29/'><FaGithub/></a>
        </span>
        <a href="mailto:bharathnivas29@gmail.com" className='footer_mail'>Mail Me</a>
        <div className=''>
        <a href='#landing' className='landing_link btn btn-white btn-animate'>Go To Top ^</a>
        </div>
    </div>
  )
}