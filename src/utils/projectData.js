export const projects = [
  {
    id: 'game-of-life',
    title: 'The Game of Life',
    description: 'Interactive implementation of Conway\'s Game of Life using p5.js with real-time simulation and customizable rules.',
    longDescription: 'A zero-player game that simulates cellular automata based on simple rules. Features include adjustable grid size, speed control, pattern presets, and the ability to create custom starting configurations.',
    technologies: ['JavaScript', 'HTML/CSS' ,'Node.js'],
    demoUrl: '#',
    codeUrl: 'https://github.com/briannguyen03/',
    image: 'assets/game_of_life.png',
    features: [
      'Real-time cellular simulation',
      'Adjustable grid size and speed',
      'Pattern presets (gliders, pulsars, etc.)',
      'Custom drawing tools',
      'Rule customization'
    ],
    learnings: [
      'Understanding of cellular automata and emergent behavior',
      'Canvas rendering optimization techniques',
      'State management for large 2D arrays',
      'User interface design for interactive simulations'
    ]
  },
  {
    id: 'blackjack-agent',
    title: 'Blackjack Agent',
    description: 'AI agent that learns optimal blackjack strategy through reinforcement learning (Q-learning).',
    longDescription: 'A machine learning project that trains an agent to play blackjack optimally using reinforcement learning. The agent learns through self-play and develops strategies for hitting, standing, and doubling down.',
    technologies: ['C','Machine Learning'],
    demoUrl: '#',
    codeUrl: 'https://github.com/briannguyen03/blackjack-agent',
    image: 'assets/blackjackAgentscreenshot.png',
    features: [
      'Q-learning implementation',
      'Visualization of learning progress',
      'Strategy heatmaps',
      'Performance metrics',
      'Customizable learning parameters'
    ],
    learnings: [
      'Reinforcement learning fundamentals',
      'Q-learning algorithm implementation',
      'State-action value optimization'
    ]
  },
  {
    id: 'lim-scraper',
    title: 'Co-op Portal Scraper',
    description: 'An automated co-op job scraper custom made for UVic LIM portal.',
    longDescription: "This project provides a robust, two-stage workflow designed to bridge the gap between browsing a job portal and identifying relevant roles. The core functionality is driven by a Python scraper using Selenium and BeautifulSoup. The system also allows session cookies to be detected and saved, bypassing the need for manual logins in the future. Once the scraper extracts job data—including titles, qualifications, and descriptions—the information is passed to a matching client. This client calls an LLM API (such as ChatGPT or DeepSeek) using a custom system prompt containing the user's skillset to evaluate compatibility with the job description.",
    technologies: ['Python', 'Bash', 'Web Scraping', 'HTML/CSS'],
    demoUrl: '#',
    codeUrl: 'https://github.com/briannguyen03/lim_scraper',
    image: 'assets/lim_scraper_demo.png',
    features: [
      'Integrated runner script',
      'Session Persistence',
      'Structured .tsv output for easy export',
      'Logging to easily track/check for errors',
      'Auto-Dependency Management'
    ],
    learnings: [
      'Bash scripting',
      'Handle HTML layout for scraping',
      'Cookies detection and saving',
      'Communication between two running programs'
    ]
  },
  {
    id: 'drawing-with-ai',
    title: 'Drawing Using AI',
    description: 'Interactive drawing application enhanced with AI-assisted features and style transfer.',
    longDescription: "A creative tool that combines traditional drawing with AI capabilities. Features include style transfer, auto-completion, and intelligent brush suggestions based on drawing context.",
    technologies: ['JavaScript', 'Node.js', 'Machine Learning'],
    demoUrl: '#',
    codeUrl: 'https://www.linkedin.com/posts/bnguyen2027_near-the-end-of-december-i-started-experimenting-ugcPost-7284449290159058944-Nz2u?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQEeQUBrdVoBA-wQlT4jWn0rKIlG5mG8b4',
    image: 'assets/handpose_img.png',
    features: [
      'AI-assisted drawing',
      'Style transfer',
      'Auto-completion suggestions',
      'Multiple brush types',
      'Export functionality'
    ],
    learnings: [
      'Creative applications of machine learning',
      'Style transfer algorithms',
      'Human-AI collaboration interfaces',
      'Real-time drawing optimization'
    ]
  }
]

export const categories = [
  'All',
  'Interactive',
  'Machine Learning',
  'Computer Vision',
  'Creative AI'
]

export const technologies = [
  'JavaScript',
  'Python',
  'Node.js',
  'HTML/CSS',
  'Machine Learning'
]
