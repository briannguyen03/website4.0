import React from 'react'
import * as FiIcons from 'react-icons/fi'
import { Link } from 'react-router-dom'

const About = () => {
  const education = [
    {
      degree: 'Bachelor of Software Engineering',
      school: 'University of Victoria',
      period: '2023 - Present',
      description: 'Third-year student focusing on software architecture, algorithms, and machine learning.',
    },
  ]

  const skills = [
    { category: 'Languages', items: ['Python', 'C', 'JavaScript', 'Java', 'HTML/CSS', 'SQL'] },
    { category: 'Frameworks', items: ['React', 'Node.js', 'Express', 'p5.js', 'TensorFlow.js'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Linux', 'VS Code', 'Jupyter'] },
    { category: 'Concepts', items: ['Data Structures', 'Algorithms', 'OOP', 'ML', 'APIs'] },
  ]

  const interests = [
    { name: 'Biking', icon: <FiIcons.FiCode />, color: 'text-blue-500' },
    { name: 'Hiking', icon: <FiIcons.FiCode />, color: 'text-green-500' },
    { name: 'Films', icon: <FiIcons.FiCode />, color: 'text-purple-500' },
    { name: 'Music', icon: <FiIcons.FiCode />, color: 'text-red-500' },
    { name: 'Coding', icon: <FiIcons.FiCode />, color: 'text-accent' },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Profile Image */}
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl border-4 border-accent overflow-hidden bg-secondary mx-auto">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <FiIcons.FiCode className="text-accent" />
                  <span>Victoria, BC, Canada</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <FiIcons.FiCode className="text-accent" />
                  <span>Third Year Student</span>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold mb-6">
              About <span className="text-accent">Me</span>
            </h1>
            <div className="space-y-4 text-lg">
              <p>
                Hey! I'm <strong>Brian</strong> — a software engineering student in my 
                <u> third year</u> at the <strong>University of Victoria</strong>.
              </p>
              <p>
                My core programming languages include <strong>Python, C, JavaScript, and Java</strong>. 
                I enjoy building everything from interactive web applications to machine learning 
                projects and system-level software.
              </p>
              <p>
                When I'm not at my desk, you'll find me out on my bike exploring Victoria's trails 
                or hitting the basketball court. I believe in balancing technical skills with 
                physical activity and creative hobbies.
              </p>
              <p>
                I've built some pretty cool things during my studies — check them out on my 
                <Link to="/projects" className="text-accent hover:text-accent-hover ml-1">
                   projects page
                </Link>!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="bg-card-bg rounded-xl border border-border p-6 shadow-card">
          {education.map((edu, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="p-3 bg-accent text-white rounded-lg">
                <FiIcons.FiCode size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                <p className="text-text-secondary mb-2">{edu.school} • {edu.period}</p>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillCategory) => (
            <div
              key={skillCategory.category}
              className="bg-card-bg rounded-xl border border-border p-6 shadow-card"
            >
              <h3 className="text-xl font-bold mb-4 text-accent">{skillCategory.category}</h3>
              <div className="space-y-2">
                {skillCategory.items.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-2 p-2 bg-secondary rounded-lg"
                  >
                    <FiIcons.FiCode className="text-accent" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Outside the Terminal</h2>
        <div className="text-center mb-8">
          <p className="text-lg text-text-secondary">
            Here are some things I like to do besides coding:
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
          {interests.map((interest) => (
            <div
              key={interest.name}
              className="bg-card-bg rounded-xl border border-border p-6 text-center shadow-card hover:shadow-lg transition-shadow"
            >
              <div className={`text-4xl mb-4 ${interest.color}`}>
                {interest.icon}
              </div>
              <h3 className="text-xl font-bold">{interest.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
