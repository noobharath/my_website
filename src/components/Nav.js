import React from 'react'
import favicon from '../images/favicon.ico';
import '../styles/Nav.css'
import '../styles/nav.scss'

export default function Nav() {
  return (
    <div className='navBar'>
        <img className='navBar-logo' alt='Logo' src={favicon} width='35px'/>
        <a href='mailto:bharathnivas@gmail.com' className='navBar-link  btn-2' >Mail Me</a>
    </div>
  )
}
