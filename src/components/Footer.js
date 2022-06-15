import React from 'react'
import './styles/Footer.scss'
import product11 from '../images/product11.jpg'
import product6 from '../images/product6.jpg'
import product7 from '../images/product7.jpg'
import product8 from '../images/product8.jpg'
import product from '../images/product.jpg'
import product12 from '../images/product12.jpg'

const Footer = () => {
  return (
    <div className='footer'>

        <div className="footer-header">
            <h1>Sales</h1>
        </div>

        <div className="footer-container">

            <div className="f-card first">
                <img src={product} alt='footer product' />
                <p>Lorem, ipsum dolor</p>
            </div>

            <div className="f-card">
                <img src={product11} alt='footer product' />
                <p>Lorem, ipsum dolor</p>
            </div>

            <div className="f-card">
                <img src={product12} alt='footer product' />
                <p>Lorem, ipsum dolor</p>
            </div>

            <div className="f-card">
                <img src={product11} alt='footer product' />
                <p>Lorem, ipsum dolor</p>
            </div>

            <div className="f-card">
                <img src={product11} alt='footer product' />
                <p>Brown Bag</p>
            </div>


        </div>
      




    </div>
  )
}

export default Footer
