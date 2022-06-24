import React from 'react';
import logo from '../../images/logo.png'
import twitter from '../../images/twitter.png'
import instagram from '../../images/instagram.png'
import linkedin from '../../images/linkedin.png'
import facebook from '../../images/facebook.png'
import TextField from "@material-ui/core/TextField";
import './Footer.css'

const Footer = () => {
  return (
    <div className='FooterContainer'>
        <ul className='columns'>
            <li>
                <ul className='imp-link-list-1'>
                <li><img className='footer-logo' src={logo} alt="logo" /></li>
                <li className='companyDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil non pariatur exercitationem eos, officia ipsam.</li>
                <li>
                    <ul className='socialMedia'>
                        <li ><img className='socialMediaHandles' src={twitter} alt="" /></li>
                        <li><img className='socialMediaHandles' src={instagram} alt="" /></li>
                        <li><img className='socialMediaHandles' src={linkedin} alt="" /></li>
                        <li><img className='socialMediaHandles' src={facebook} alt="" /></li>
                        
                    </ul>
                </li>
                </ul>
            </li>

            <li>
                <ul className='imp-link-list-2'>
                <li><h1 className='imp-link-list-title'>Resources</h1></li>
                <li><h3 className='imp-link-list-items'>Services</h3></li>
                <li><h3 className='imp-link-list-items'>Pricing</h3></li>
                <li><h3 className='imp-link-list-items'>Testimonials</h3></li>
                <li><h3 className='imp-link-list-items'>Blogs</h3></li>
                </ul>
            </li>
           
            <li>
                <ul className='imp-link-list-3'>
                <li><h1 className='imp-link-list-title'>Useful Links</h1></li>
                <li><h3 className='imp-link-list-items'>Terms of Service</h3></li>
                <li><h3 className='imp-link-list-items'>Privacy Policy</h3></li>
                <li><h3 className='imp-link-list-items'>Cookie Policy</h3></li>
                <li><h3 className='imp-link-list-items'>Contact Us</h3></li>
                </ul>
            </li>

            <li>
                <ul className='imp-link-list-4'>
                <li><h1 className='imp-link-list-title'>Newsletter</h1></li>
                <li><h3 className='signup-text'>Sign up and receive the latest news via email</h3></li>
                <li>
                    
                    <ul className='email-btn'>
                        <li>
                            <TextField
                                id="outlined-basic" label="Email" variant="outlined" className='textfield'
                            />
                        </li>

                        <li>
                            <button className='SendBtn'>
                               Send
                            </button>
                        </li>
                    </ul>
                    
                </li>
                
                </ul>
            </li>
        </ul>
    </div>
  )
}

export default Footer


