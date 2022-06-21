import React from 'react'
import { FaInstagram,FaTwitter , FaGithub} from "react-icons/fa";
import '../styles/social.css'
import Aos from "aos"
import "aos/dist/aos.css"


export default function SocialHandels() {

    React.useEffect(() => {
        Aos.init({duration: 1000});
      }, []);
    
  return (
    <div>
        <div className="socialHeading">
            <h2 >Social Media </h2>
        </div>
        <div className='social'>
            <div className='box' data-aos="fade-up">
                <a href='https://www.instagram.com/bharathnivas29/' target='_blank'>
                    <img src='https://www.gatewayspesach.org/wp-content/uploads/2019/08/600px-Instagram_logo_2016.svg_-540x540.png'/>    
                </a>
            </div>
            <div className='box' data-aos="zoom-out">
                <a href='https://twitter.com/Bharathnivas29' target='_blank'>
                    <img src='https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png'/>    
                </a>
            </div>
            <div className='box' data-aos="fade-up">
                <a href='https://www.linkedin.com/in/bharath-kannan-19887a212/' target='_blank'>
                    <img src='https://pngimg.com/uploads/linkedIn/linkedIn_PNG39.png'/>    
                </a>
            </div>
        </div>
    </div>    
  )
}
