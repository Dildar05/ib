import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Secret = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
          <h2 className='text-4xl font-bold'>Secret Data</h2>
          <div className='mt-8 max-w-lg mx-auto'>
            {data.length > 0 ? (
              data.map((item) => (
                <div key={item.id} className='mb-4 p-4 bg-white rounded shadow-md'>
                  <p className='text-xl'>
                    <strong>Name:</strong> {item.name}
                  </p>
                  <p className='text-xl mt-4'>
                    <strong>Email:</strong> {item.email}
                  </p>
                  <p className='text-xl mt-4'>
                    <strong>Message:</strong> {item.message}
                  </p>
                </div>
              ))
            ) : (
              <p className='text-xl'>No data available</p>
            )}
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

export default Secret;
