import React from 'react'
import '../styles/Bio.css'
import Aos from "aos"
import "aos/dist/aos.css"

export default function Bio() {

  React.useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className='Bio'>
      <h3 className='BioTitle' data-aos="zoom-right">About Me</h3>
      <div>
        <p className='bio_content' data-aos="fade-in">I'm a small kid who is thriving for some real fun and adventure. I started web
           development because of my interest to make something new. I believe in consistency and punctuality.
           Born and raised in town with dream of achieving something in life.
        </p>
      </div>
    </div>
  )
}
