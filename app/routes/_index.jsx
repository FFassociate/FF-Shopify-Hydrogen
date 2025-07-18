import {Link} from 'react-router';

/**
 * @type {MetaFunction}
 */
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
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-3 border-b border-yellow-500">
        <div className="text-2xl font-bold">flashfog</div>
        <nav className="space-x-4 hidden md:block">
          <Link to="#" className="hover:text-yellow-400">Fog Kits</Link>
          <Link to="#" className="hover:text-yellow-400">Security Foggers</Link>
          <Link to="#" className="hover:text-yellow-400">Buying Basics</Link>
        </nav>
        <button className="bg-yellow-400 text-black px-3 py-1 rounded-md">Store</button>
      </header>

      {/* Hero Video */}
      <section className="py-6 flex justify-center">
        <div className="rounded-2xl overflow-hidden border border-yellow-400">
          <img src="/video-placeholder.jpg" alt="FlashFog video" className="w-full max-w-2xl" />
        </div>
      </section>

      {/* Main Headline */}
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">Think like a burglar!</h1>
        <p className="italic mt-2 text-yellow-300">(...This is How They See It)</p>
      </section>

      {/* 3 Columns Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 text-center py-10">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-red-400">Steal Quickly</h2>
          <p className="mt-2 text-sm">Smash and grab burglars love 'verified' alarm policies that delay police response while they steal.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-green-400">Don't Get Caught</h2>
          <p className="mt-2 text-sm">Your brazen bandits are probably past their 'first strike'. Not getting caught drives all their decisions.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-blue-400">Find Useful Victims</h2>
          <p className="mt-2 text-sm">Juicy targets abound. Quiet areas invite every method of entry, including ram-raids.</p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-black border-t border-yellow-400 py-12 px-4">
        <h2 className="text-center text-2xl font-bold text-yellow-300 mb-6">"56 seconds first time 1:09 minutes the second time"</h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <img src="/testimonial-video.jpg" alt="Testimonial" className="rounded-xl" />
          </div>
          <div className="text-sm text-gray-300">
            Greg really tried, but never caught them stealing. Bandits pulled off ram raids, smashed windows...<br/>
            Full interview available upon request.
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-bold text-yellow-300 mb-4">Then the fog clears without a trace.</h2>
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-md">Learn More</button>
      </section>

      {/* Feature Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 pb-12">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-yellow-200">You Teach 'Em</h3>
          <p className="text-sm mt-2">Once thieves have a taste of your security, they avoid your site and move on.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-yellow-200">You Pull The Rug</h3>
          <p className="text-sm mt-2">Thieves can’t steal what they can’t see. They panic. They flee.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-yellow-200">You Get Your Money</h3>
          <p className="text-sm mt-2">FlashFog turns alarm systems into real-world protection with immediate action.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-400 text-center text-sm text-gray-400 py-6">
        <p>25 Years smashing smash &amp; grab burglary.</p>
        <p className="mt-2">&copy; 2025 FlashFog Security. All rights reserved.</p>
      </footer>
    </div>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('react-router').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
