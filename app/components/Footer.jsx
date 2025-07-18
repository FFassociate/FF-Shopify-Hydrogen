import {Await, Link} from 'react-router';
import {Suspense, useState} from 'react';

/**
 * @param {FooterProps}
 */
export function Footer({footer, header, publicStoreDomain}) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-menu">
          <div className="footer-section">
            <h3 className="footer-title">FLASHFOG</h3>
            <ul className="footer-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/collections/all" className="footer-link">All products</Link></li>
              <li><Link to="/collections/all" className="footer-link">Store</Link></li>
              <li><Link to="/pages/photo-gallery" className="footer-link">Photo gallery</Link></li>
            </ul>
            <h4 className="footer-title footer-title-small">Company</h4>
            <ul className="footer-list">
              <li><Link to="/pages/about-us" className="footer-link">About us / Contact us</Link></li>
              <li><Link to="/pages/return-policy" className="footer-link">Return policy</Link></li>
              <li><Link to="/pages/privacy-policy" className="footer-link">Privacy policy</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Technologies</h3>
            <ul className="footer-list">
              <li><Link to="/pages/fog-details" className="footer-link">Security fog (details)</Link></li>
              <li><Link to="/pages/light-barrier" className="footer-link">Light barrier</Link></li>
              <li><Link to="/pages/sound-barrier" className="footer-link">Sound Barrier</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Get yours</h3>
            <ul className="footer-list">
              <li><Link to="/collections/all" className="footer-link">Store</Link></li>
              <li><Link to="/pages/photo-gallery" className="footer-link">Photo gallery</Link></li>
              <li><Link to="/collections/all" className="footer-link">All products</Link></li>
              <li><Link to="/pages/model-selection" className="footer-link">Model selection</Link></li>
              <li><Link to="/pages/installation" className="footer-link">Installation</Link></li>
              <li><Link to="/pages/is-my-site-right" className="footer-link">Is my site right?</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Dealers</h3>
            <ul className="footer-list">
              <li><Link to="/pages/installer-program" className="footer-link">Installer program</Link></li>
            </ul>
            <div className="footer-newsletter">
              <h4 className="footer-title footer-title-small">JOIN OUR MAILING LIST!</h4>
              <form onSubmit={handleSubmit} className="footer-newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="footer-input"
                  required
                />
                <button
                  type="submit"
                  className="footer-btn"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="footer-social">
              <h4 className="footer-title footer-title-small">FRIENDS TELL FRIENDS!</h4>
              <div className="footer-social-icons">
                <a href="#" className="footer-social-link">
                  <span className="footer-social-icon">📘</span>
                </a>
                <a href="#" className="footer-social-link">
                  <span className="footer-social-icon">🐦</span>
                </a>
                <a href="#" className="footer-social-link">
                  <span className="footer-social-icon">💼</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-brand">
          <div className="footer-brand-title">flashfog</div>
          <div className="footer-brand-years">25 YEARS</div>
          <div className="footer-brand-contact">
            <Link to="/pages/about-us" className="footer-link">Contact us</Link>
          </div>
        </div>

        <div className="footer-legal">
          <p>
            By entering your email address, you grant FlashFog permission to send you
            messages about FlashFog. You may unsubscribe at any time. Your information is
            protected by the <Link to="/pages/privacy-policy" className="footer-link">FlashFog Privacy Statement</Link>.
          </p>
          <p>
            Created by <span className="footer-legal-highlight">Arias Tech Ltd.</span> All rights reserved. ©2025
          </p>
          <p>
            <span className="footer-legal-highlight">98 Advance Rd, Toronto, Ontario, M8Z 2T7, Canada</span>
          </p>
          <p>
            <span className="footer-legal-highlight">(905) 502-0249 • (888) 282-7740</span>
          </p>
          <p>
            FlashFog® is a trade mark of <span className="footer-legal-highlight">Arias Tech Ltd.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/**
 * @typedef {Object} FooterProps
 * @property {Promise<FooterQuery|null>} footer
 * @property {HeaderQuery} header
 * @property {string} publicStoreDomain
 */

/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
