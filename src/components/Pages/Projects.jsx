import React, { useState } from 'react'
// Temporarily removed framer-motion due to errors
import { motion, AnimatePresence } from 'framer-motion'
import { projects, categories, technologies } from '../../utils/projectData'
import * as FiIcons from 'react-icons/fi'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTech, setSelectedTech] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = projects.filter(project => {
    //const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory
    const techMatch = selectedTech === 'All' || project.technologies.includes(selectedTech)
    return techMatch
  })

  const categoryIcons = {
    'Interactive': <FiIcons.FiCode className="text-blue-500" />,
    'Machine Learning': <FiIcons.FiCode className="text-green-500" />,
    'Computer Vision': <FiIcons.FiCode className="text-purple-500" />,
    'Creative AI': <FiIcons.FiCode className="text-red-500" />,
  }

  const ProjectCard = ({ project }) => (
    <div
      className="bg-card-bg rounded-xl border border-border overflow-hidden shadow-card hover:shadow-lg transition-shadow"
    >
      {/* Project Image */}
      <div className="h-48 bg-secondary flex items-center justify-center">
        <div className="text-4xl">
          {categoryIcons[project.category] || <FiIcons.FiCode className="text-accent" />}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
            <div className="flex items-center space-x-2">
              {/* <span className="px-2 py-1 bg-secondary text-xs rounded-full">
                {project.category}
              </span> */}
            </div>
          </div>
        </div>

        <p className="text-text-secondary mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-secondary text-xs rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setSelectedProject(project)}
            className="text-accent hover:text-accent-hover text-sm font-medium"
          >
            View Details
          </button>
          <div className="flex space-x-2">
            {project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-lg hover:bg-border transition-colors"
                aria-label="Live Demo"
              >
                <FiIcons.FiCode />
              </a>
            )}
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-secondary rounded-lg hover:bg-border transition-colors"
              aria-label="View Code"
            >
              <FiIcons.FiCode />
            </a>
          </div>
        </div>
      </div>
    </div>
  )

  const ProjectModal = ({ project, onClose }) => (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-card-bg rounded-xl border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-card-bg border-b border-border p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <div className="flex items-center space-x-2 mt-1">
              {/* <span className="px-3 py-1 bg-secondary text-sm rounded-full">
                {project.category}
              </span> */}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Close"
          >
            <FiIcons.FiCode size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* Project Image */}
          <div className="h-64 bg-secondary rounded-lg mb-6 flex items-center justify-center">
            <div className="text-6xl">
              {categoryIcons[project.category] || <FiIcons.FiCode className="text-accent" />}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Description</h3>
            <p className="text-text-secondary">{project.longDescription}</p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Features</h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-accent mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-secondary rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Learnings */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">What I Learned</h3>
            <ul className="space-y-2">
              {project.learnings.map((learning, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-accent mt-1">→</span>
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex space-x-4">
            {project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors flex items-center justify-center space-x-2"
              >
                <FiIcons.FiCode />
                <span>Live Demo</span>
              </a>
            )}
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors flex items-center justify-center space-x-2"
            >
              <FiIcons.FiCode />
              <span>View Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <section 
        className="mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-text-secondary max-w-3xl">
          A collection of my work spanning interactive simulations, machine learning,
          computer vision, and creative applications. Each project represents a learning
          journey and technical challenge overcome.
        </p>
      </section>

      {/* Filters */}
      <section 
        className="mb-8"
      >
        <div className="flex items-center space-x-2 mb-4">
          <FiIcons.FiCode className="text-accent" />
          <h2 className="text-xl font-bold">Filters</h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          {/* Category Filter */}
          {/* <div className="flex-1">
            <label className="block text-sm font-medium mb-2">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category
                      ? 'bg-accent text-white'
                      : 'bg-secondary hover:bg-border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div> */}

          {/* Technology Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">Technology</label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTech('All')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedTech === 'All'
                    ? 'bg-accent text-white'
                    : 'bg-secondary hover:bg-border'
                }`}
              >
                All
              </button>
              {technologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedTech === tech
                      ? 'bg-accent text-white'
                      : 'bg-secondary hover:bg-border'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-text-secondary">
          Showing {filteredProjects.length} of {projects.length} projects
          {(selectedTech !== 'All') && (
            <button
              onClick={() => {
                setSelectedCategory('All')
                setSelectedTech('All')
              }}
              className="ml-2 text-accent hover:text-accent-hover"
            >
              Clear filters
            </button>
          )}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mb-12">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">No projects found</h3>
              <p className="text-text-secondary">
                Try adjusting your filters to see more projects.
              </p>
            </div>
          )}
      </section>

      {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
    </div>
  )
}

export default Projects
