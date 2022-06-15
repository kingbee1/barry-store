import React from 'react'
import './styles/Content.scss'
import product1 from '../images/product1.jpg'
import product2 from '../images/product2.jpg'
import product3 from '../images/product3.jpg'
import product4 from '../images/product4.jpg'
import product5 from '../images/product5.jpg'
import product6 from '../images/product6.jpg'
import product7 from '../images/product7.jpg'
import product8 from '../images/product8.jpg'
import product9 from '../images/product9.jpg'
import product10 from '../images/product10.jpg'

const Content = () => {
  return (
    <div className='section'>

        <div className="grid_container">

            <div className="cards long">
                <img src={product1} alt='product' />
                <div className="card_text">
                    <p>You what it is</p>
                </div>
            </div>

            <div className="cards">
                <img src={product2} alt='product' />
                <div className="card_text">
                    <p>You what it is</p>
                </div>
            </div>

            <div className="cards">
                <img src={product3} alt='product' />
                <div className="card_text">
                    <p>You what it is</p>
                </div>
            </div>

            <div className="cards">
                <img src={product4} alt='product' />
                <div className="card_text">
                    <p>You what it is</p>
                </div>
            </div>

            <div className="cards">
                <img src={product5} alt='product' />
                <div className="card_text">
                    <p>You what it is</p>
                </div>
            </div>

            <div className="cards">
                <img src={product6} alt='product' />
                <div className="card_text">
                    <p>You what it is</p>
                </div>
            </div>

            <div className="cards">
                <img src={product7} alt='product' />
                <div className="card_text">
                    <p>You what it is</p>
                </div>
            </div>

            <div className="cards long2">
                <img src={product8} alt='product' />
                <div className="card_text">
                    <p>You what it is</p>
                </div>
            </div>

            <div className="cards">
                <img src={product9} alt='product' />
                <div className="card_text">
                    <p>You what it is</p>
                </div>
            </div>

            <div className="cards">
                <img src={product10} alt='product' />
                <div className="card_text">
                    <p>You what it is</p>
                </div>
            </div>



        </div>
      
    </div>
  )
}

export default Content
