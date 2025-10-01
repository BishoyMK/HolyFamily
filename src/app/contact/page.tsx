/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import Reveal from '../../components/Reveal';


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Reveal direction="up">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-gabarito font-bold text-[#0D0B05] mb-4">
              Contact Us
            </h1>
            <p className="text-base md:text-lg text-gray-600 font-open-sans">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </Reveal>

        <Reveal direction="up">
          <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-open-sans">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleChange}
                className=" text-black mt-1 px-3 block w-full h-10 rounded-xl border-gray-300 shadow-sm focus:border-[#071D54] focus:ring-[#071D54] font-open-sans"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-open-sans">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="text-black mt-1 block px-3 h-10 w-full rounded-xl border-gray-300 shadow-sm focus:border-[#071D54] focus:ring-[#071D54] font-open-sans"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 font-open-sans">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                id="phone"
                maxLength={11}
                minLength={11}
                value={formData.phone}
                onChange={handleChange}
                className="text-black mt-1 block px-3 w-full h-10 rounded-xl border-gray-300 shadow-sm focus:border-[#071D54] focus:ring-[#071D54] font-open-sans"
              />
            </div>

            <div>
              <label htmlFor="message" className=" block text-sm font-medium text-gray-700 font-open-sans">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Enter your message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-xl px-3 py-3 border-gray-300 shadow-sm focus:border-[#071D54] focus:ring-[#071D54] font-open-sans text-black"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-[#071D54] hover:bg-[#0a2a6e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#071D54] font-open-sans disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="text-green-600 text-center font-open-sans">
                Sent Successfully! <br /> 
                Thank you for your message!
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="text-red-600 text-center font-open-sans">
                {errorMessage || 'Sorry, there was an error sending your message. Please try again.'}
              </div>
            )}
          </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
} 