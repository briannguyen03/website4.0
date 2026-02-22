import React from 'react'
import * as FiIcons from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/briannguyen03',
      icon: <FiIcons.FiGithub />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/brian-nguyen-19920027a/',
      icon: <FiIcons.FiLinkedin />,
    },
    {
      name: 'Email',
      url: 'mailto:nguyen.brian1403@gmail.com',
      icon: <FiIcons.FiMail />,
    },
  ]

  return (
    <footer className="bg-secondary border-t border-border mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section - Info */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <FiIcons.FiMapPin className="text-accent" />
              <span className="text-text-secondary">Victoria, BC, Canada</span>
            </div>
          </div>

          {/* Middle Section - Social Links */}
          <div className="mb-6 md:mb-0">
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary border border-border hover:bg-accent hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-text-secondary">
              © {currentYear} Brian Nguyen. All rights reserved.
            </p>
            <p className="text-xs text-text-secondary mt-1">
              Built with React & Vite
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-text-secondary">
            Vibe coded with clawbot (Thanks Hank!) and is open source. Feel free to explore the code on{' '}
            <a
              href="https://github.com/briannguyen03/react_portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
