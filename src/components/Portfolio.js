import React from 'react'
import '../styles/portfolio.css'
import Aos from "aos"
import "aos/dist/aos.css"


export default function Portfolio() {

    React.useEffect(() => {
        Aos.init({duration: 1000});
      }, []);

  return (
    <div className="main">
        <h2 className="heading">My Projects [Websites are made using React]</h2>
        <div className='Portfolio'>
        <div className='nerdPath' data-aos="fade-up">
            <h2>NerdPath</h2>
            <p>
                It's an online course finding website which helps you 
                to find top courses from internet
            </p>
            <a href='http://nerdpath.ml/' className='course_link'>Check it Out➜</a>
        </div>
        <div className='Ecomm' data-aos="fade-up">
            <h2>BatShop</h2>
            <p>
                It's an  E-commerce website [unfinished]
            </p>
            <a href='https://ecomm-stripe-beta.vercel.app/' className='course_link'>Check it Out➜</a>
        </div>
    </div>
    </div>
  )
}
