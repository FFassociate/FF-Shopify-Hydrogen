import {Link} from 'react-router';
import React from 'react';

export default function Homepage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Roboto', sans-serif; line-height: 1.6; color: #333; }
        img { max-width: 100%; display: block; }
        .container { width: 90%; max-width: 1200px; margin: 0 auto; padding: 24px 0; }
        .hero { text-align: center; padding: 60px 0; }
        .hero h1 { font-size: 2.5rem; margin-bottom: 16px; }
        .hero h2 { font-size: 1.5rem; color: #555; margin-bottom: 24px; }
        .hero .buttons a {
          display: inline-block;
          margin: 8px;
          padding: 12px 24px;
          background: #007bfc;
          color: #fff;
          text-decoration: none;
          border-radius: 4px;
          transition: background .3s;
        }
        .hero .buttons a:hover { background: #005bb5; }
        section { margin: 50px 0; }
        section h2 { font-size: 2rem; color: #007bfc; margin-bottom: 16px; }
        section p { margin-bottom: 16px; }
        .feature-list {
          list-style: none;
          margin: 24px 0;
          padding: 0;
        }
        .feature-list li {
          margin-bottom: 8px;
          padding-left: 1.2em;
          text-indent: -1.2em;
        }
        .feature-list li:before {
          content: '✔︎';
          margin-right: 8px;
          color: #007bfc;
        }
        .testimonials blockquote {
          border-left: 4px solid #007bfc;
          padding-left: 16px;
          margin: 24px 0;
          font-style: italic;
          color: #555;
        }
        .testimonials cite {
          display: block;
          text-align: right;
          font-size: 0.9rem;
          color: #777;
          margin-top: 8px;
        }
        footer {
          background: #f5f5f5;
          padding: 24px 0;
          font-size: 0.9rem;
          text-align: center;
          color: #555;
        }
        footer nav a {
          margin: 0 8px;
          color: #007bfc;
          text-decoration: none;
        }
        footer nav a:hover { text-decoration: underline; }
        .newsletter {
          margin-top: 24px;
        }
        .newsletter input {
          padding: 8px;
          margin: 4px 0;
          width: 100%;
          max-width: 300px;
        }
        .newsletter button {
          padding: 10px 20px;
          background: #007bfc;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 8px;
        }
        .newsletter button:hover { background: #005bb5; }
      `}</style>
      <header className="container hero">
        <h1>Commercial Burglary Prevention</h1>
        <h2>SMASH &amp; GRAB SOLVED.</h2>
        <p>High density fog with blinding strobe lights. Burglars don't have a chance.</p>
        <div className="buttons">
          <Link to="#">Learn More</Link>
          <Link to="#">See Videos</Link>
        </div>
        <img src="/assets/hero-image.jpg" alt="FlashFog in action" />
      </header>
      <main className="container">
        <section className="how-it-works">
          <h2>How FlashFog Works</h2>
          <p>Burglars can’t steal what they can’t see. When your alarm triggers, FlashFog fills the area with thick white fog and flashing strobe lights—stopping intruders in under 30 seconds.</p>
        </section>
        <section className="advantages">
          <h2>The FlashFog Advantage</h2>
          <ul className="feature-list">
            <li>Cannot be defeated with brute force.</li>
            <li>Stops any number of intruders.</li>
            <li>Extremely low maintenance cost.</li>
            <li>Completely safe to breathe, with no residue.</li>
            <li>Easy to relocate.</li>
          </ul>
        </section>
        <section className="comparison">
          <h2>Why choose FlashFog over...</h2>
          <div>
            <h3>Cameras</h3>
            <p>Burglaries often go unsolved — even cameras are useless if the criminal can’t see you filming them.</p>
          </div>
          <div>
            <h3>Bars &amp; Gates</h3>
            <p>Brute force entry and alternate access routes make perimeter devices unreliable and often more costly in damage.</p>
          </div>
        </section>
        <section className="testimonials">
          <h2>Customer Testimonials</h2>
          <blockquote>
            “The room filled up in less than 10 seconds… reminding the owner why he invested in the product.”
            <cite>— David, INNER‑I Security, California</cite>
          </blockquote>
          <blockquote>
            “I literally had to shuffle my feet, you can't see at all… this product works.”
            <cite>— Greg Blair, Community TV, Florida</cite>
          </blockquote>
        </section>
        <section className="installation">
          <h2>Quick and Easy Installation</h2>
          <p>Integrates with your current alarm. Installed in just a few hours. Comes with manual, video instructions, and full support.</p>
        </section>
        <section className="cta">
          <h2>Request Information</h2>
          <p>Share your store dimensions and we'll send a customized security fog protection plan.</p>
          <button>Become A Dealer</button>
          <button>FAQ</button>
        </section>
      </main>
      <footer>
        <nav>
          <Link to="#">Home</Link> |
          <Link to="#">Products</Link> |
          <Link to="#">Videos</Link> |
          <Link to="#">Dealers</Link> |
          <Link to="#">FAQ</Link> |
          <Link to="#">About Us</Link> |
          <Link to="#">Contact</Link> |
          <Link to="#">Terms of Sale</Link>
        </nav>
        <div className="newsletter">
          <p>Sign up for the FlashFog Newsletter</p>
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <button>Subscribe</button>
        </div>
        <p>©2025 FlashFog Security. 375 Brunel Road, Mississauga, Ontario L4Z 1Z5 Canada · Phone: 905‑502‑0249 · Toll Free: 1‑888‑282‑7740</p>
      </footer>
    </>
  );
}
