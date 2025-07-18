import {Link} from 'react-router';

export const meta = () => {
  return [
    {title: 'FlashFog Security - Professional Security Fog Systems & Barriers'},
    {name: 'description', content: 'Leading provider of security fog systems, light barriers, and sound barriers. 25+ years of experience protecting properties worldwide with advanced security technology.'},
    {name: 'keywords', content: 'security fog system, fog security, burglary protection, security strobe, sound barrier, light barrier, property security'},
    {name: 'author', content: 'Arias Tech Ltd.'},
    {property: 'og:title', content: 'FlashFog Security - Professional Security Fog Systems'},
    {property: 'og:description', content: 'Advanced security fog systems and barriers for comprehensive property protection.'},
    {property: 'og:type', content: 'website'},
    {rel: 'canonical', href: 'https://flashfog.com'},
  ];
};

export default function Homepage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="logo">flashfog</div>
        <nav className="nav">
          <Link to="/collections/all">Fog Kits</Link>
          <Link to="/pages/security-foggers">Security Foggers</Link>
          <Link to="/pages/basics">Buying Basics</Link>
        </nav>
        <button className="store-button">Store</button>
      </header>

      <section className="hero-video">
        <img src="/app/assets/img1.jpg" alt="FlashFog video demo" />
      </section>

      <section className="main-headline">
        <h1>Think like a burglar!</h1>
        <p>(...This is How They See It)</p>
      </section>

      <section className="features-grid">
        <div className="feature-card red">
          <h2>Steal Quickly</h2>
          <p>Smash and grab burglars love 'verified' alarm policies that delay police response while they steal.</p>
        </div>
        <div className="feature-card green">
          <h2>Don't Get Caught</h2>
          <p>Your brazen bandits are probably past their 'first strike'. Not getting caught drives all their decisions.</p>
        </div>
        <div className="feature-card blue">
          <h2>Find Useful Victims</h2>
          <p>Juicy targets abound. Quiet areas invite every method of entry, including ram-raids.</p>
        </div>
      </section>

      <section className="testimonial-section">
        <h2>"56 seconds first time 1:09 minutes the second time"</h2>
        <div className="testimonial-content">
          <img src="/app/assets/img2.jpg" alt="Testimonial" />
          <div className="testimonial-text">
            Greg really tried, but never caught them stealing. Bandits pulled off ram raids, smashed windows...<br/>
            Full interview available upon request.
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Then the fog clears without a trace.</h2>
        <button className="cta-button">Learn More</button>
      </section>

      <section className="feature-grid-bottom">
        <div className="feature-box">
          <h3>You Teach 'Em</h3>
          <p>Once thieves have a taste of your security, they avoid your site and move on.</p>
        </div>
        <div className="feature-box">
          <h3>You Pull The Rug</h3>
          <p>Thieves can’t steal what they can’t see. They panic. They flee.</p>
        </div>
        <div className="feature-box">
          <h3>You Get Your Money</h3>
          <p>FlashFog turns alarm systems into real-world protection with immediate action.</p>
        </div>
      </section>

      <footer className="homepage-footer">
        <p>25 Years smashing smash & grab burglary.</p>
        <p>&copy; 2025 FlashFog Security. All rights reserved.</p>
      </footer>
    </div>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('react-router').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
