import React, { useState } from 'react';
import { Section, Button, Loading } from '../components/common';
import { CONTACT_CONTENT } from '../constants/content';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitForm = async (): Promise<void> => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void submitForm();
  };

  return (
    <div className="min-h-screen">
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/assets/images/backgrounds/contactbanner.webp)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            {CONTACT_CONTENT.hero.title}
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mt-4">
            {CONTACT_CONTENT.hero.description}
          </p>
        </div>
      </div>

      <Section background="white" className="py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="fade-up">
            <h2 className="text-3xl font-bold mb-8">{CONTACT_CONTENT.form.title}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="stagger-fade-up">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="medium"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Loading size="sm" /> : 'Send Message'}
                </Button>
              </div>
            </form>

            {/* Success Message */}
            {isSuccess && (
              <div className="mt-6 p-4 bg-green-50 text-green-700 rounded-lg fade-in">
                Thank you for your message! We&apos;ll get back to you soon.
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="fade-up">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-8">{CONTACT_CONTENT.info.title}</h2>
              <div className="space-y-6 stagger-fade-up">
                <div className="flex items-start space-x-4">
                  <div className="text-accent">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-gray-600">{CONTACT_CONTENT.info.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-accent">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-600">{CONTACT_CONTENT.info.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-accent">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600">{CONTACT_CONTENT.info.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-8">{CONTACT_CONTENT.faq.title}</h2>
              <div className="space-y-6 stagger-fade-up">
                {CONTACT_CONTENT.faq.items.map((item, index) => (
                  <div key={index} className="card p-6 hover-spotlight">
                    <h3 className="text-xl font-bold mb-4">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact; 