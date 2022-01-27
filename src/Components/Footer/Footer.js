import React from 'react'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'
import './footer.css'

const Footer = ({ company_name }) => {
  return (
    <footer className='section'>
      <p>
        copyright &copy; {company_name}&nbsp;
        <span id='date'>{new Date().getFullYear()}</span>. all rights reserved
      </p>
      <a href='#home' class='scroll-link top-link'>
        <BsFillArrowUpSquareFill />
      </a>
    </footer>
  )
}

export default Footer
