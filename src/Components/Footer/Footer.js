import React from 'react'
import './footer.css'

const Footer = ({ company_name }) => {
  return (
    <footer className='section'>
      <p>
        copyright &copy; {company_name}&nbsp;
        <span id='date'>{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </footer>
  )
}

export default Footer
