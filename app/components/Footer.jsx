import {Await, Link} from 'react-router';
import {Suspense, useState} from 'react';

export function Footer({footer, header, publicStoreDomain}) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="homepage-footer">
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
