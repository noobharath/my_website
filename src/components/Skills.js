import React from 'react'
import '../styles/skills.css'
import Data from '../skillsData'
import Aos from "aos"
import "aos/dist/aos.css"



export default function Skills() {

    React.useEffect(() => {
        Aos.init({duration: 1000});
      }, []);

  return (
    <div className='Skills'>
        <div className='skills_experience'>
            <h3>My Skills</h3>
        </div>
        <div className='skill_box'>
            {
                Data.map(skills => {
                return(
                    <div className='skill_individual_box' data-aos="fade-up">
                        <img src={skills.img} alt='img'/>
                        <h2>{skills.name}</h2>
                    </div>
                )})
            }
        </div>
    </div>
  )
}