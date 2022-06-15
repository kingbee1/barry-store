import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.scss';

const Header = () => {
    
    const [active, setActive] = useState(false)
    const showItem = () => {
        setActive(!active)
    }


  return (
    <div className='header'>
        <div className='header-container'>
            <div className='header-text'>
                <h1>Barry Store</h1>
            </div>

            <nav className={active ? 'navbar active' : 'navbar'}>
                <ul>
                    <li>
                        <Link to='/'>Collections</Link>
                    </li>

                    <li>
                        <Link to='/'>Brands</Link>
                    </li>

                    <li>
                        <Link to='/contact'>contact</Link>
                    </li>

                    <li>
                        <Link to='/' onClick={showItem}>Menu</Link>
                    </li>

                </ul>

            </nav>

        </div>
      
    </div>
  )
}

export default Header
