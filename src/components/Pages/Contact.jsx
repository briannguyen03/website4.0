import React, { useState } from 'react'
// import { motion } from 'framer-motion' // Temporarily disabled
import * as FiIcons from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <FiIcons.FiCode />,
      title: 'Email',
      value: 'nguyen.brian1403@gmail.com',
      action: 'mailto:nguyen.brian1403@gmail.com',
      color: 'text-red-500',
    },
    {
      icon: <FiIcons.FiCode />,
      title: 'Location',
      value: 'Victoria, BC, Canada',
      action: null,
      color: 'text-blue-500',
    },
    {
      icon: <FiIcons.FiCode />,
      title: 'Response Time',
      value: 'Usually within 24 hours',
      action: null,
      color: 'text-green-500',
    },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/briannguyen03',
      icon: 'github',
      color: 'hover:bg-gray-800 hover:text-white',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/brian-nguyen-19920027a/',
      icon: 'linkedin',
      color: 'hover:bg-blue-600 hover:text-white',
    },
    {
      name: 'Resume',
      url: '/assets/BrianNguyen_d.pdf',
      icon: 'file',
      color: 'hover:bg-accent hover:text-white',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <section 
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </section>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          
          {/* Info Cards */}
          <div className="space-y-4 mb-8">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-card-bg border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-secondary ${info.color}`}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{info.title}</h3>
                    {info.action ? (
                      <a
                        href={info.action}
                        className="text-text-secondary hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-text-secondary">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 px-4 py-3 bg-secondary rounded-lg text-center transition-colors ${link.color}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-8">
            <div className="h-48 bg-secondary rounded-xl flex items-center justify-center">
              <div className="text-center">
                <FiIcons.FiCode className="text-4xl text-accent mx-auto mb-2" />
                <p className="text-text-secondary">Victoria, BC</p>
                <p className="text-sm text-text-secondary">University of Victoria Area</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Status Message */}
            {status.message && (
              <div
                className={`p-4 rounded-lg ${
                  status.type === 'success'
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {status.type === 'success' ? (
                    <FiIcons.FiCode className="text-green-600" />
                  ) : (
                    <FiIcons.FiCode className="text-red-600" />
                  )}
                  <span>{status.message}</span>
                </div>
              </div>
            )}

            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="What's this about?"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                placeholder="Your message here..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <FiIcons.FiCode />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {/* Form Note */}
            <p className="text-sm text-text-secondary text-center">
              * Required fields. I'll respond as soon as possible.
            </p>
          </form>

          {/* Alternative Contact */}
          <div className="mt-8 p-6 bg-secondary rounded-xl">
            <h3 className="font-bold mb-2">Prefer email?</h3>
            <p className="text-text-secondary mb-4">
              You can also email me directly at{' '}
              <a
                href="mailto:nguyen.brian1403@gmail.com"
                className="text-accent hover:text-accent-hover"
              >
                nguyen.brian1403@gmail.com
              </a>
            </p>
            <a
              href="mailto:nguyen.brian1403@gmail.com"
              className="inline-flex items-center space-x-2 text-accent hover:text-accent-hover"
            >
              <FiIcons.FiCode />
              <span>Open in your email client</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
