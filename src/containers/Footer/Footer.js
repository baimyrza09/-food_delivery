import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    const [value, setValue] = React.useState('recent')

    const handleFooter = (event, firstValue) => {
        setValue(firstValue)
    }


    return (
        <div style={{ backgroundColor: "black", width: "100%" }}>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>

            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Potato.KG <i className='fab fa-typo3'></i>
                        </Link>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.facebook.com"><FacebookIcon style={{ fontSize: "40", color: "00a082" }} /></a>
                        <a href="https://www.instagram.com"><InstagramIcon style={{ fontSize: "40", color: "00a082" }} /></a>
                        <a href="https://www.twitter.com"><TwitterIcon style={{ fontSize: "40", color: "00a082" }} /></a>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Footer;