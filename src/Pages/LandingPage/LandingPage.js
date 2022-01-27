import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './landingPage.css'
import { links } from '../../data'

const LandingPange = () => {
  return (
    <>
      <header id='home'>
        <Navbar />
        <div className='banner'>
          <div className='container'>
            <h1>City Hospital</h1>
            <p>A multispeciality hospital</p>
            <Link to='/login' id='log-in' className='btn'>
              log in
            </Link>
          </div>
        </div>
      </header>
      {links.map((Link) => {
        const { id, text, heading } = Link
        if (Link.id !== 1)
          return (
            <section id={text} className='section' key={id}>
              <div className='title'>
                <h2>{heading}</h2>
              </div>
            </section>
          )
      })}
      <Footer company_name='City Hospital' />
    </>
  )
}
export default LandingPange
