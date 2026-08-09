"use client";

import React, { useState, useEffect } from 'react';
import { FaPaperPlane, FaUsers, FaCopy, FaCheck, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactMe() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [copied, setCopied] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  const emailAddress = "begaslam405@gmail.com";

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem("aslam_total_views");
    if (saved) {
      setVisitorCount(parseInt(saved, 10));
    }

    fetch("/api/views")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.views === "number" && data.views > 0) {
          setVisitorCount(data.views);
          localStorage.setItem("aslam_total_views", data.views.toString());
        }
      })
      .catch(() => {});

    const handleUpdate = (e) => {
      if (e.detail) {
        setVisitorCount(e.detail);
      }
    };
    window.addEventListener("visitorUpdate", handleUpdate);
    return () => window.removeEventListener("visitorUpdate", handleUpdate);
  }, []);

  const handleCopyEmail = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(emailAddress)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2200);
        })
        .catch(() => fallbackCopy());
    } else {
      fallbackCopy();
    }
  };

  const fallbackCopy = () => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = emailAddress;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error('Fallback copy failed:', err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending message...');
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
        setFormStatus('Message sent successfully! I will reply shortly.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('Failed to send message. Please email directly.');
      }
    } catch (error) {
      setFormStatus('An error occurred. Please email directly.');
    }
  };

  const socials = [
    { icon: <FaXTwitter />, url: "https://x.com/aslambeg84", label: "X (Twitter)" },
    { icon: <FaGithub />, url: "https://github.com/Aslam554", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/mirza-aslam-beg-8347661ab/", label: "LinkedIn" }
  ];

  return (
    <section id="contact-me" className="py-16 px-6 md:px-12 bg-transparent transition-colors duration-300">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-10">
        
        {/* Left Info Column */}
        <div className="md:w-1/3 flex flex-col justify-between gap-6">
          <div>
            <div className="text-left mb-6">
              <span className="text-[10px] font-mono tracking-widest text-indigo-500 uppercase font-semibold block mb-1">
                GET IN TOUCH
              </span>
              <h2 className="text-2xl font-bold font-sans text-zinc-900 dark:text-white tracking-tight">
                Let's Connect
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs font-sans mt-1">
                Have a project idea or job opening? I'd love to chat.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Block */}
              <div className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-850/60 bg-white/80 dark:bg-[#0c0d11]/80 shadow-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1">
                    <FaEnvelope className="text-indigo-500 text-[10px]" /> Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer"
                    title="Copy Email"
                  >
                    {copied ? (
                      <span className="text-emerald-500 flex items-center gap-1 font-bold">
                        <FaCheck size={9} /> Copied!
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <FaCopy size={9} /> Copy
                      </span>
                    )}
                  </button>
                </div>
                <a 
                  href={`mailto:${emailAddress}`} 
                  className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-sans truncate block"
                >
                  {emailAddress}
                </a>
              </div>

              {/* Location Block */}
              <div className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-850/60 bg-white/80 dark:bg-[#0c0d11]/80 shadow-xs">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1 mb-1">
                  <FaMapMarkerAlt className="text-indigo-500 text-[10px]" /> Location
                </span>
                <p className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 font-sans">
                  Ghazipur, Uttar Pradesh, India
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
              Follow & Connect
            </p>
            <div className="flex items-center gap-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-zinc-200/80 dark:border-zinc-850/60 hover:border-indigo-500/40 dark:hover:border-indigo-400/40 bg-white dark:bg-[#0c0d11] hover:bg-indigo-50 dark:hover:bg-indigo-950/30 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl transition-all duration-200 text-xs shadow-xs"
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="md:w-2/3">
          <form 
            onSubmit={handleSubmit} 
            className="space-y-4 bg-white/90 dark:bg-[#0c0d11]/90 p-6 sm:p-7 rounded-2xl border border-zinc-200/80 dark:border-zinc-850/70 shadow-md"
          >
            <h3 className="text-base font-bold font-sans text-zinc-900 dark:text-white">Send a Message</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-3 py-2 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-indigo-500 transition-colors duration-200 text-xs font-sans"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-3 py-2 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-indigo-500 transition-colors duration-200 text-xs font-sans"
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Hi Mirza, I'd like to discuss a project..."
                rows={4}
                required
                className="w-full px-3 py-2 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-indigo-500 transition-colors duration-200 text-xs resize-none font-sans"
              ></textarea>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-sans text-xs font-bold rounded-xl active:scale-98 transition-all duration-200 cursor-pointer shadow-md"
            >
              Send Message <FaPaperPlane size={10} />
            </button>
            
            {formStatus && (
              <p className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 mt-2">
                &gt; {formStatus}
              </p>
            )}
          </form>
        </div>

      </div>

      {/* Footer & Live Visitor Counter */}
      <footer className="max-w-3xl mx-auto mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-850/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500 dark:text-zinc-400">
        <p>
          &copy; {new Date().getFullYear()}{" "}Mirza Aslam Beg &bull; Software Engineer
        </p>
        
        {/* Dynamic Visitor Counter Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0d11] text-zinc-600 dark:text-zinc-400 select-none shadow-xs">
          <FaUsers className="text-xs text-indigo-500" />
          <span>Views:</span>
          <span className="font-bold text-zinc-900 dark:text-zinc-100">
            {mounted ? visitorCount.toLocaleString() : "0"}
          </span>
        </div>
      </footer>
    </section>
  );
}
