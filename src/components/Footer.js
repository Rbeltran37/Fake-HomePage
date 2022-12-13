import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/Fake-HomePage/'>How it works</Link>
            <Link to='/Fake-HomePage/'>Testimonials</Link>
            <Link to='/Fake-HomePage/'>Careers</Link>
            <Link to='/Fake-HomePage/'>Investors</Link>
            <Link to='/Fake-HomePage/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/Fake-HomePage/'>Contact</Link>
            <Link to='/Fake-HomePage/'>Support</Link>
            <Link to='/Fake-HomePage/'>Destinations</Link>
            <Link to='/Fake-HomePage/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/Fake-HomePage/'>Submit Video</Link>
            <Link to='/Fake-HomePage/'>Ambassadors</Link>
            <Link to='/Fake-HomePage/'>Agency</Link>
            <Link to='/Fake-HomePage/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/Fake-HomePage/'>Instagram</Link>
            <Link to='/Fake-HomePage/'>Facebook</Link>
            <Link to='/Fake-HomePage/'>Youtube</Link>
            <Link to='/Fake-HomePage/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/Fake-HomePage/' className='social-logo'>
              TRVL
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>TRVL © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/Fake-HomePage/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/Fake-HomePage/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/Fake-HomePage/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/Fake-HomePage/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/Fake-HomePage/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;