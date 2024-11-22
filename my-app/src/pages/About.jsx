import React from 'react';

const About = () => {
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
        <section className='py-16 px-6 text-center'>
          <h2 className='text-4xl font-bold'>About Apple</h2>
          <p className='mt-4 text-xl'>
            Apple Inc. is an American multinational technology company that specializes in consumer electronics,
            software, and online services.
          </p>
          <p className='mt-4 text-xl'>
            Apple is the world's largest technology company by revenue and, as of January 2021, the world's most
            valuable company.
          </p>
          <p className='mt-4 text-xl'>
            Apple was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in April 1976 to develop and sell personal
            computers.
          </p>
          <p className='mt-4 text-xl'>
            The company's best-known hardware products include the iPhone smartphone, the iPad tablet computer, the Mac
            personal computer, the iPod portable media player, the Apple Watch smartwatch, the Apple TV digital media
            player, and the HomePod smart speaker.
          </p>
          <p className='mt-4 text-xl'>
            Apple's software includes the macOS, iOS, iPadOS, watchOS, and tvOS operating systems, the iTunes media
            player, the Safari web browser, the Shazam music identifier, and the iLife and iWork creativity and
            productivity suites, as well as professional applications like Final Cut Pro, Logic Pro, and Xcode.
          </p>
          <p className='mt-4 text-xl'>
            Apple is known for its innovation in hardware, software, and services. The company has a large and loyal
            customer base, and its products are highly regarded for their quality and design.
          </p>
          <p className='mt-4 text-xl'>
            Apple has a significant presence in the technology industry and is a major player in the global market. The
            company continues to push the boundaries of technology and design, and its products are used by millions of
            people around the world.
          </p>
        </section>

        {/* Vision Section */}
        <section className='py-16 px-6 bg-gray-200'>
          <h2 className='text-3xl font-bold text-center'>Our Vision</h2>
          <p className='mt-4 text-xl text-center'>
            Apple’s mission is to create the best products on earth, and to leave the world better than we found it.
            Through innovation, sustainability, and cutting-edge design, we aim to empower individuals and create a
            positive impact on the world.
          </p>
        </section>

        {/* Key Events Timeline */}
        <section className='py-16 px-6'>
          <h2 className='text-3xl font-bold text-center'>Timeline of Key Events</h2>
          <ul className='mt-8 space-y-4'>
            <li className='text-xl'>
              <span className='font-bold'>1976:</span> Apple is founded by Steve Jobs, Steve Wozniak, and Ronald Wayne.
            </li>
            <li className='text-xl'>
              <span className='font-bold'>1984:</span> Apple launches the Macintosh computer.
            </li>
            <li className='text-xl'>
              <span className='font-bold'>2001:</span> Introduction of the iPod, revolutionizing the music industry.
            </li>
            <li className='text-xl'>
              <span className='font-bold'>2007:</span> Launch of the first iPhone, transforming mobile phones.
            </li>
            <li className='text-xl'>
              <span className='font-bold'>2010:</span> Apple introduces the iPad, leading the tablet market.
            </li>
            <li className='text-xl'>
              <span className='font-bold'>2020:</span> Apple becomes the first company to reach a $2 trillion market
              value.
            </li>
          </ul>
        </section>

        {/* Our Leadership Section */}
        <section className='py-16 px-6 bg-gray-100'>
          <h2 className='text-3xl font-bold text-center'>Our Leadership</h2>
          <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='text-center'>
              <img
                src='https://avatars.mds.yandex.net/i?id=97e9d481b4b7f8236e6efb35870aee650fa0ee0b-5869993-images-thumbs&n=13'
                alt='CEO'
                className='rounded-full mx-auto'
              />
              <h3 className='mt-4 font-semibold text-xl'>Tim Cook</h3>
              <p className='mt-2 text-lg'>CEO of Apple Inc.</p>
            </div>
            <div className='text-center'>
              <img
                src='https://avatars.mds.yandex.net/i?id=5ed0daa7366c300ed9f1203312b6204c_l-5232864-images-thumbs&n=13'
                alt='COO'
                className='rounded-full mx-auto'
              />
              <h3 className='mt-4 font-semibold text-xl'>Jeff Williams</h3>
              <p className='mt-2 text-lg'>COO of Apple Inc.</p>
            </div>
            <div className='text-center'>
              <img
                src='https://avatars.mds.yandex.net/i?id=028d489bf0c4e1774144eedc3561277bb3473121-4080348-images-thumbs&n=13'
                alt='CFO'
                className='rounded-full mx-auto'
              />
              <h3 className='mt-4 font-semibold text-xl'>Luca Maestri</h3>
              <p className='mt-2 text-lg'>CFO of Apple Inc.</p>
            </div>
          </div>
        </section>

        {/* Corporate Social Responsibility Section */}
        <section className='py-16 px-6 bg-gray-200'>
          <h2 className='text-3xl font-bold text-center'>Corporate Social Responsibility</h2>
          <p className='mt-4 text-xl text-center'>
            Apple is committed to environmental sustainability, diversity and inclusion, and community engagement. We
            strive to reduce our carbon footprint, provide a safe and inclusive workplace, and contribute to communities
            globally.
          </p>
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

export default About;
