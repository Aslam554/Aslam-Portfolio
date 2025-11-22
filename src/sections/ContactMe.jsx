import React, { useEffect, useState } from 'react';
import Social from "../components/Social";
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

export default function ContactMe() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [textGradient, setTextGradient] = useState('text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500');

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'cyan-teal';
    const gradients = {
      'cyan-teal': 'text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-red-400',
      'blue-purple': 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500',
      'red-orange': 'text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500',
    };
    setTextGradient(gradients[theme] || gradients['cyan-teal']);
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    setErrors({});
    setFormStatus('Submitting...');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '13934743-89de-4a61-9d06-f64ebaf4bd69',
          ...formData,
        }),
      });
      if (response.ok) {
        setFormStatus('Success! Thank you for your message.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('Failed to send your message. Please try again later.');
      }
    } catch (error) {
      setFormStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto" id="contact">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-5xl font-bold mb-4 ${textGradient}`}
        >
          Contact Me
        </motion.h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Want to get in touch? Fill the form or message me directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="bg-gray-900/80 p-6 rounded-xl backdrop-blur-md border border-gray-800">
          <h3 className={`text-xl font-bold mb-6 ${textGradient}`}>Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-gray-300 text-sm">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-500"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="text-gray-300 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="text-gray-300 text-sm">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message"
                rows={5}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-500"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              <FaPaperPlane /> Submit
            </motion.button>
            {formStatus && <p className="text-sm text-green-400 mt-2">{formStatus}</p>}
          </form>
        </div>

        <div className="text-left md:text-right">
          <div className="mb-6">
            <h4 className={`text-lg font-semibold ${textGradient}`}>Email</h4>
            <p className="text-white text-xl mt-1">begaslam405@gmail.com</p>
          </div>

          <div className="mb-6">
            <h4 className={`text-lg font-semibold ${textGradient}`}>Location</h4>
            <p className="text-white text-xl mt-1">Ghazipur, Uttar Pradesh</p>
          </div>

          <div className="mb-6">
            <h4 className={`text-lg font-semibold ${textGradient}`}>Social</h4>
            <div className="flex justify-start md:justify-end mt-2">
              <Social />
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-16 text-center">
        <p className="text-sm text-gray-500">Created with ❤️ by Aslam Beg | All rights reserved</p>
      </footer>
    </section>
  );
}
