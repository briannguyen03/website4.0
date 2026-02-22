import React from 'react'
import * as FiIcons from 'react-icons/fi'

const Contact = () => {
  // Social links - clean and simple
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/briannguyen03',
      icon: <FiIcons.FiGithub className="text-xl" />,
      buttonColor: 'bg-gray-900 text-white hover:bg-gray-800',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/brian-nguyen-19920027a/',
      icon: <FiIcons.FiLinkedin className="text-xl" />,
      buttonColor: 'bg-blue-600 text-white hover:bg-blue-700',
    },
    {
      name: 'Resume',
      url: '/assets/BrianNguyen_d.pdf',
      icon: <FiIcons.FiFileText className="text-xl" />,
      buttonColor: 'bg-accent text-white hover:bg-accent-hover',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header - Just "Contact" */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact</h1>
        
        {/* Email Me Button at the top */}
        <div className="mb-8">
          <a
            href="mailto:nguyen.brian1403@gmail.com"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors text-lg font-medium no-underline"
          >
            <FiIcons.FiMail className="text-xl" />
            <span>Email Me</span>
          </a>
        </div>

        {/* Email address below the button */}
        <div className="mb-12">
          <p className="text-text-primary text-lg">
            nguyen.brian1403@gmail.com
          </p>
        </div>

        {/* GitHub, LinkedIn, Resume row */}
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.buttonColor} rounded-xl p-4 text-center transition-all hover:scale-[1.02] active:scale-[0.98] flex flex-col items-center justify-center space-y-2 no-underline`}
              >
                <div className="text-2xl">{link.icon}</div>
                <div>
                  <span className="font-medium">{link.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact