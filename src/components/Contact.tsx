import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'default'
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: false });
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'default'
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact Us</h2>
          <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Ready to take your brand to the next level? Get in touch with our team to discuss 
            how we can help you achieve your advertising and marketing goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="bg-black text-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="mb-8">
                Whether you're looking to launch a new campaign, refresh your brand, or discuss a potential 
                partnership, we're here to help. Fill out the form or contact us directly using the information below.
              </p>
       <div className="space-y-6">
  <a href="tel:+923004302322" className="flex items-start hover:text-gray-300 transition-colors duration-300">
    <Phone size={20} className="mr-4 mt-1" />
    <div>
      <h4 className="font-medium mb-1">Phone</h4>
      <p className="text-gray-300">+92 300 4302322</p>
    </div>
  </a>
  <a href="mailto:mediabridgeall@yahoo.com" className="flex items-start hover:text-gray-300 transition-colors duration-300">
    <Mail size={20} className="mr-4 mt-1" />
    <div>
      <h4 className="font-medium mb-1">Email</h4>
      <p className="text-gray-300">mediabridgeall@yahoo.com</p>
    </div>
  </a>
  <a 
    href="https://www.google.com/maps/search/?api=1&query=Butt+Chowk+College+Road+Lahore" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-start hover:text-gray-300 transition-colors duration-300"
  >
    <MapPin size={20} className="mr-4 mt-1" />
    <div>
      <h4 className="font-medium mb-1">Address</h4>
      <p className="text-gray-300">
        12 G<br />
        Makkan Society Near butt chowk College Road<br />
        Lahore Pakistan
      </p>
    </div>
  </a>
</div>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Office Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>10:00 AM - 7:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>By appointment only</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            {formStatus.submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setFormStatus({submitted: false, submitting: false, error: false})}
                  className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option value="default" disabled>Select a service</option>
                    <option value="brand-strategy">Advertisement</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="creative-production">Creative Production</option>
                    <option value="MULTIMEDIA PROJECTION">Web Developemnt</option>
                    <option value="Brand Strategy">Brand Strategy</option>
                    <option value="analytics">Analytics & Reporting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="w-full px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center"
                >
                  {formStatus.submitting ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <Send size={18} className="mr-2" />
                  )}
                  {formStatus.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;