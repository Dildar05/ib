import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/submit', formData);
      console.log('Response:', response.data);
      setSuccessMessage('Ваше сообщение было успешно отправлено!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSuccessMessage('Произошла ошибка при отправке сообщения.');
    }
  };

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
          <h2 className='text-4xl font-bold'>Contact Us</h2>
          <p className='mt-4 text-xl'>
            We would love to hear from you! Please fill out the form below to get in touch with us.
          </p>
          <form className='mt-8 max-w-lg mx-auto' onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-left text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                name='name'
                type='text'
                placeholder='Your name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-left text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                Email
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                name='email'
                type='email'
                placeholder='Your email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-left text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
                Message
              </label>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='message'
                name='message'
                rows='5'
                placeholder='Your message'
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className='flex items-center justify-between'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Send
              </button>
            </div>
          </form>
          {successMessage && <p className='mt-4 text-green-500'>{successMessage}</p>}
        </section>

        {/* Contact Information Section */}
        <section className='py-16 px-6 bg-gray-200'>
          <h2 className='text-3xl font-bold text-center'>Our Contact Information</h2>
          <div className='mt-8 text-center'>
            <p className='text-xl'>
              <strong>Address:</strong> 1 Apple Park Way, Cupertino, CA 95014, USA
            </p>
            <p className='text-xl mt-4'>
              <strong>Phone:</strong> +1 (408) 996-1010
            </p>
            <p className='text-xl mt-4'>
              <strong>Email:</strong> contact@apple.com
            </p>
          </div>
        </section>

        {/* Map Section */}
        <section className='py-16 px-6'>
          <h2 className='text-3xl font-bold text-center'>Find Us Here</h2>
          <div className='mt-8'>
            <iframe
              title='Apple Park'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.933823743448!2d-122.032547684692!3d37.33478997984148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5a6d5c6b1b1%3A0x4c7c8f7d0b0b0b0b!2sApple%20Park!5e0!3m2!1sen!2sus!4v1633021234567!5m2!1sen!2sus'
              width='100%'
              height='450'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
            ></iframe>
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

export default Contact;
