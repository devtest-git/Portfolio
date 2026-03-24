'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-100/50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Let's Connect</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">Open to Opportunities</h3>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 transition-colors duration-300">
              I'm actively seeking internship positions during my studies and cloud/DevOps engineer roles post-graduation in Ireland. Whether you have an opportunity or just want to chat about cloud infrastructure, I'd love to connect!
            </p>

            <div className="space-y-6">
              {/* Contact Methods */}
              <div className="glass-effect p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1 transition-colors duration-300">Email</h4>
                    <a
                      href="mailto:sandeep.ravindran.dev@gmail.com"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      sandeep.ravindran.dev@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-effect p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">💼</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1 transition-colors duration-300">LinkedIn</h4>
                    <a
                      href="https://linkedin.com/in/sandeep-ravindran-devops"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      linkedin.com/in/sandeep-ravindran-devops
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-effect p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🐙</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1 transition-colors duration-300">GitHub</h4>
                    <a
                      href="https://github.com/devtest-git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      github.com/devtest-git
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-effect p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1 transition-colors duration-300">Location</h4>
                    <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">
                      Relocating to Ireland - September 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opportunities highlight */}
            <div className="glass-effect p-6 border-l-4 border-green-500">
              <p className="text-green-700 dark:text-green-400 font-semibold mb-2 transition-colors duration-300">🎯 Currently Seeking:</p>
              <ul className="text-slate-700 dark:text-slate-300 space-y-1 text-sm transition-colors duration-300">
                <li>• Internship positions (2026-2027)</li>
                <li>• Cloud Engineer roles (Post-graduation)</li>
                <li>• DevOps Engineer positions</li>
                <li>• Enterprise Cloud Architecture roles</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">Send me a message</h3>

            {submitted ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 text-center">
                <p className="text-green-700 dark:text-green-400 font-semibold mb-2 transition-colors duration-300">✓ Message sent!</p>
                <p className="text-slate-700 dark:text-slate-300 text-sm transition-colors duration-300">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-900 dark:text-white font-medium mb-2 transition-colors duration-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-200 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-900 dark:text-white font-medium mb-2 transition-colors duration-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-200 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-slate-900 dark:text-white font-medium mb-2 transition-colors duration-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-200 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                    placeholder="Internship Opportunity / Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-900 dark:text-white font-medium mb-2 transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-200 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                    placeholder="Tell me about the opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>

                <p className="text-xs text-slate-500 dark:text-slate-500 text-center transition-colors duration-300">
                  I'll respond within 24 hours
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
