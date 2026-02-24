import React, { useState } from 'react';
import Social from "../components/Social";
import { FaPaperPlane } from 'react-icons/fa';

export default function ContactMe() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('Failed to send.');
      }
    } catch (error) {
      setFormStatus('An error occurred.');
    }
  };

  return (
    <section id="contact-me" className="py-24 px-6 md:px-12 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <div className="text-left border-l-4 border-brand-cyan pl-6">
            <p className="text-brand-cyan font-bold tracking-widest text-sm mb-2 uppercase">Connect</p>
            <h2 className="text-4xl md:text-5xl font-black">
              Get In <span className="text-brand-gradient">Touch</span>
            </h2>
          </div>

          <div className="mt-12 space-y-8">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Email</p>
              <p className="text-xl font-bold hover:text-brand-cyan transition-colors">begaslam405@gmail.com</p>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Location</p>
              <p className="text-xl font-bold">Ghazipur, Uttar Pradesh</p>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Follow</p>
              <Social />
            </div>
          </div>
        </div>

        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/[0.02] p-10 rounded-3xl border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white focus:outline-none focus:border-brand-cyan transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white focus:outline-none focus:border-brand-cyan transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="How can I help you?"
                rows={4}
                className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white focus:outline-none focus:border-brand-cyan transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center gap-3 px-10 py-4 bg-brand-gradient text-white font-black uppercase tracking-widest text-sm rounded-full hover:opacity-90 transition-all active:scale-95"
            >
              Send Message <FaPaperPlane size={14} />
            </button>
            {formStatus && <p className="text-sm text-brand-cyan font-bold mt-4">{formStatus}</p>}
          </form>
        </div>
      </div>

      <footer className="mt-24 pt-12 border-t border-white/5 text-center">
        <p className="text-xs font-medium text-gray-600 uppercase tracking-widest animate-pulse">
          Crafted with focus by Aslam Beg
        </p>
      </footer>
    </section>
  );
}
