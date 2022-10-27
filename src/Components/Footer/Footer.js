import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer background">
            <div className="py-5 text-center shadow-lg font-ubuntu background">
                <h6 className="text-white fs-5">Copyright 2022 <span className="logo-color">Better</span> <span className="text-warning">Learning</span></h6>

                <small className='text-white text-center my-3 d-block'>Follow Us On Social Media</small>
                <div className='text-white fs-4'>
                    <FaFacebook className='mx-3 social-icon'></FaFacebook>
                    <FaTwitter className='mx-3 social-icon'></FaTwitter>
                    <FaInstagram className='mx-3 social-icon'></FaInstagram>
                    <FaLinkedin className='mx-3 social-icon'></FaLinkedin>
                </div>
            </div>
        </footer>
    );
};

export default Footer;