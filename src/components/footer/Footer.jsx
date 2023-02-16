import React from 'react'
import './footer.css'
import logofooter from '../../assets/images/logo.svg'
import facebook from '../../assets/images/icon-facebook.svg'
import twitter from '../../assets/images/icon-twitter.svg'
import pinterest from '../../assets/images/icon-pinterest.svg'
import instagram from '../../assets/images/icon-instagram.svg'

const Footer = () => {
  return (
    <footer>
        <div className="footer-links">
            <img src={logofooter} alt='logo' />
            <ul>
                <li className="hvr-underline-from-center">About</li>
                <li className="hvr-underline-from-center">Careers</li>
                <li className="hvr-underline-from-center">Events</li>
                <li className="hvr-underline-from-center">Products</li>
                <li className="hvr-underline-from-center">Support</li>
              </ul>
        </div>
        <div className="footer-socials">
            <div className="footer-socials-images">
                <p className='hvr-underline-from-center'><img src={facebook} alt='' /></p>
                <p className='hvr-underline-from-center'><img src={twitter} alt='' /></p>
                <p className='hvr-underline-from-center'><img src={pinterest} alt='' /></p>
                <p className='hvr-underline-from-center'><img src={instagram} alt='' /></p>
            </div>
            <div className="footer-text">
                <p>&copy; 2023 Loopstudios. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer