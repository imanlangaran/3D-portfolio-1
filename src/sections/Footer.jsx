import React from 'react';
import { socialImgs } from '../constants';

const Footer = () => {
  const baseUrl = import.meta.env.BASE_URL; // Access the base URL

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='flex flex-col justify-center md:items-start items-center'>
          <a href='#'>My Resume</a>
        </div>

        <div className='socials'>
          {socialImgs.map((img) => (
            <a className='icon' target='_blank' href={img.url} key={img.url}>
              <img src={`${baseUrl}${img.imgPath}`} alt="social-icon" />
            </a>
          ))}
        </div>

        <div className='flex flex-col justify-center'>
          <p className='text-center md:text-end'>
            © {new Date().getFullYear()} Iman Langaran. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;