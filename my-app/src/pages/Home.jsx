import React from 'react';

const Home = () => {
  return (
    <div className='font-sans bg-gray-100 text-gray-900'>
      {/* Header Section */}
      <header className='bg-black text-white p-4'>
        <div className='flex justify-between items-center'>
          <a href='/' className='text-2xl font-bold'>
            Apple
          </a>
          <nav>
            <ul className='flex space-x-6'>
              <li>
                <a href='/mac' className='hover:text-gray-400'>
                  Mac
                </a>
              </li>
              <li>
                <a href='/iphone' className='hover:text-gray-400'>
                  iPhone
                </a>
              </li>
              <li>
                <a href='/ipad' className='hover:text-gray-400'>
                  iPad
                </a>
              </li>
              <li>
                <a href='/watch' className='hover:text-gray-400'>
                  Watch
                </a>
              </li>
              <li>
                <a href='/tv' className='hover:text-gray-400'>
                  TV
                </a>
              </li>
              <li>
                <a href='/support' className='hover:text-gray-400'>
                  Support
                </a>
              </li>
              <li>
                <a href='/contact' className='hover:text-gray-400'>
                  Contact
                </a>
              </li>
              <li>
                <a href='/about' className='hover:text-gray-400'>
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className='relative'>
        <section
          className='bg-cover bg-center h-[80vh] text-white'
          style={{
            backgroundImage:
              'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-government-202409?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1723821780374")',
            filter: 'brightness(80%)',
          }}
        >
          <div className='relative z-10 flex flex-col justify-center items-center h-full text-center'>
            <h2 className='text-4xl font-bold'>iPhone 15</h2>
            <p className='mt-4 text-xl'>A new era of innovation.</p>
            <a href='/learn-more' className='mt-6 bg-white text-black py-2 px-6 rounded-full text-lg hover:bg-gray-200'>
              Learn More
            </a>
          </div>
        </section>

        {/* Product Section */}
        <section className='py-16 px-6 text-center'>
          <h3 className='text-3xl font-semibold'>Explore More Products</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
            <div className='bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow'>
              <img
                src='https://www.apple.com/v/macbook-air/s/images/overview/design/color/design_top_midnight__fvf2p6124tqq_large.jpg'
                alt='MacBook Air'
                className='w-full rounded-lg mb-4'
              />
              <h4 className='text-xl font-semibold'>MacBook Air</h4>
              <p className='text-gray-700 mt-2'>Thin, light, and powerful.</p>
              <a href='/macbook-air' className='text-blue-500 hover:text-blue-400 mt-4 block'>
                Learn More
              </a>
            </div>
            <div className='bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow'>
              <img
                src='https://www.apple.com/v/watch/bo/images/overview/select/product_s10__deak4mdempoy_xlarge.png'
                alt='Apple Watch'
                className='w-full rounded-lg mb-4'
              />
              <h4 className='text-xl font-semibold'>Apple Watch</h4>
              <p className='text-gray-700 mt-2'>Your health. On your wrist.</p>
              <button className='text-blue-500 hover:text-blue-400 mt-4 block'>Learn More</button>
            </div>
            <div className='bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow'>
              <img
                src='https://www.apple.com/v/ipad-air/x/images/overview/ipados/ipad_air_purple__c5jrcy5mmliu_large.png'
                alt='iPad Air'
                className='w-full rounded-lg mb-4'
              />
              <h4 className='text-xl font-semibold'>iPad Air</h4>
              <p className='text-gray-700 mt-2'>The ultimate tablet experience.</p>
              <button className='text-blue-500 hover:text-blue-400 mt-4 block'>Learn More</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className='bg-black text-white py-8'>
        <div className='text-center'>
          <p>&copy; 2024 Apple Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
