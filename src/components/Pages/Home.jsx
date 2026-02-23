import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as FiIcons from 'react-icons/fi'

const Home = () => {
  const featuredProjects = [
    {
      title: 'The Game of Life',
      description: 'Conway\'s cellular automaton implemented in p5.js',
      icon: <FiIcons.FiCode />,
      tech: ['JavaScript', 'p5.js'],
      link: '/projects#game-of-life',
    },
    {
      title: 'Blackjack Agent',
      description: 'AI agent that learns optimal blackjack strategy',
      icon: <FiIcons.FiCode />,
      tech: ['Python', 'ML'],
      link: '/projects#blackjack',
    },
    {
      title: 'Hand Detection',
      description: 'Real-time hand pose estimation using ML',
      icon: <FiIcons.FiCode />,
      tech: ['JavaScript', 'TensorFlow.js'],
      link: '/projects#hand-detection',
    },
  ]

  const skills = ['Python', 'C', 'Java', 'JavaScript', 'React', 'Git', 'CI/CD', 'French scrambled eggs', 'OG fornite player']

  // Sprite animation state
  const [currentFrame, setCurrentFrame] = useState(0)
  const base = import.meta.env.BASE_URL
  const frames = [
    `${base}assets/frame1-removebg-preview.png`,
    `${base}assets/frame2-removebg-preview.png`,
    `${base}assets/frame3-removebg-preview.png`,
  ]

  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length)
    }, 500) // Change frame every 500ms

    return () => clearInterval(interval)
  }, [frames.length])

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="mb-8">
          <div className="profile-sprite-container mx-auto mb-6">
            {/* Animated sprite */}
            <img 
              src={frames[currentFrame]} 
              alt="Animated character sprite" 
              className="profile-sprite-image"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            Brian <span className="text-accent">Nguyen</span>
          </h1>
          <p className="text-xl text-text-secondary mb-6">
            Software Engineer @ University of Victoria
          </p>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-text-primary">
            Third-year software engineering student passionate about building 
            interactive applications, machine learning projects, and clean, 
            efficient code.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-md mx-auto">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-secondary rounded-full text-sm border border-border text-text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors flex items-center justify-center space-x-2 no-underline"
            >
              <span>View Projects</span>
              <FiIcons.FiArrowRight />
            </Link>
            <a
              href="/assets/BrianNguyen_d.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors no-underline"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-text-primary">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card-bg rounded-xl border border-border p-6 shadow-card hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl text-accent mb-4">{project.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-text-primary">{project.title}</h3>
              <p className="text-text-secondary mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary rounded-full text-xs text-text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                to={project.link}
                className="text-accent hover:text-accent-hover flex items-center space-x-1 no-underline"
              >
                <span>Learn more</span>
                <FiIcons.FiArrowRight className="text-sm" />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 text-accent hover:text-accent-hover no-underline"
          >
            <span>View all projects</span>
            <FiIcons.FiArrowRight />
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8 text-text-primary">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-text-secondary mb-8">
            Interested in collaborating? Have questions about my projects?
            Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors no-underline"
            >
              Send Message
            </Link>
            <a
              href="mailto:nguyen.brian1403@gmail.com"
              className="px-6 py-3 bg-secondary rounded-lg hover:bg-border transition-colors no-underline text-text-primary"
            >
              Email Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
