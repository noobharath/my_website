import React from 'react'
import Nav from './components/Nav'
import Landing from './components/Landing'
import Bio from './components/Bio'
import Skills from './components/Skills'
import SocialHandels from './components/SocialHandels'
import AnimatedCursor from "react-animated-cursor"
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Aos from "aos"
import "aos/dist/aos.css"

export default function App() {
  React.useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={25}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        hasBlendMode={true}
        outerStyle={{
          border: '3px solid var(--cursor-color)'
        }}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)'
        }}
        />
        <Nav/>
        <Landing/>
        <Skills/>
        <Bio/>
        <SocialHandels/>
        <Portfolio/>
        <Footer/>
    </div>
  )
}
