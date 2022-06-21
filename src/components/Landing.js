import React from 'react'
import { FaInstagram,FaTwitter , FaGithub} from "react-icons/fa";
import '../styles/Landing.css'
import Me from '../images/meRemoved.png'
import Aos from "aos"
import "aos/dist/aos.css"

export default function Landing() {
  
  React.useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <div className='Landing' id='landing'>
      <div>
        <h2 className='name'>Bharath <h4>Kannan.</h4> </h2>
        <div className='line'></div>
        <span className='Landing-links'>
            <a href='https://www.instagram.com/bharathnivas29/'><FaInstagram/></a>
            <a href='https://www.instagram.com/bharathnivas29/'><FaTwitter/></a>  
            <a href='https://www.instagram.com/bharathnivas29/'><FaGithub/></a>
        </span>
      </div>  
      <img src={Me} alt='Me'/>
      <div>
      <h3 data-aos="fade-up">Full-Stack Web developer and Designer based in Bangalore.</h3>
      <a href='mailto:bharathnivas29' className='connect_link'>Connect ➜</a>
      </div>
    </div>
  )
}