import React from 'react'
import './styles/Contact.scss'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='contact'>
      <Link className='a_home' to='/' >Back</Link>
      <div className="inputs">
        <h1>Contact Us</h1>
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Phone Contact' />
        <input type="text" placeholder='Message' />
        <button>Send</button>
      </div>
    </div>
  )
}

export default Contact
