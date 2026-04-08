export const projects = [
  {
    id: 'game-of-life',
    title: 'The Game of Life',
    description: 'Interactive implementation of Conway\'s Game of Life using p5.js with real-time simulation and customizable rules.',
    longDescription: 'A zero-player game that simulates cellular automata based on simple rules. Features include adjustable RGB values and a randomize button.',
    technologies: ['JavaScript', 'HTML/CSS' ,'Node.js'],
    demoUrl: '#',
    codeUrl: 'https://briannguyen03.github.io/website3.0/Projects/game_of_life.html',
    image: 'assets/game_of_life.png',
    features: [
      'Aesthetically pleasing',
      'Adjustable RGB',
      'Random colours',
    ],
    learnings: [
      'Understanding of simple automata',
      'Canvas rendering optimization techniques',
      'State management for large 2D arrays',
      'User interface design for interactive simulations'
    ]
  },
  {
    id: 'blackjack-agent',
    title: 'Blackjack Agent',
    description: 'AI agent that learns optimal blackjack strategy through reinforcement learning (Q-learning).',
    longDescription: 'An RL-based agent trained to play Blackjack using Q-Learning and epsilon decay. After simulating 10,000 hands, the model reached a ~41% win rate, approximating the optimal basic strategy through a simple model.',
    technologies: ['C','Machine Learning'],
    demoUrl: '#',
    codeUrl: 'https://github.com/briannguyen03/blackjack-agent',
    image: 'assets/blackjackAgentscreenshot.png',
    features: [
      'Q-learning implementation',
      'Visualization of learning progress',
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
    longDescription: "Built a Python pipeline that automates the job search process. The system uses Selenium and BeautifulSoup to scrape live listings from co-op portal, handling session authentication to bypass manual logins. Extracted roles are then processed by Deepseek's R1 model that analyzes job descriptions against a user’s specific skillset to provide compatibility scores.",
    technologies: ['Python', 'Bash', 'Web Scraping', 'HTML/CSS'],
    demoUrl: '#',
    codeUrl: 'https://github.com/briannguyen03/lim_scraper',
    image: 'assets/lim_scraper_demo.png',
    features: [
      'Integrated runner script',
      'Session Persistence',
      'Structured .tsv output for easy export',
      'Logging to easily track/check for errors',
      'Auto Dependency Management'
    ],
    learnings: [
      'Bash scripting',
      'Handle HTML layout for scraping',
      'Cookies detection and saving',
      'Developed RESTful APIs to facilitate communication between the scraper and the matcher'
    ]
  },
  {
    id: 'drawing-with-ai',
    title: 'Drawing Using AI',
    description: 'A drawing application that uses computer vision.',
    longDescription: "A simple usage of a vision model to detect hands, and translate finger movements to paint on the live webcam canvas",
    technologies: ['JavaScript', 'Node.js', 'Machine Learning'],
    demoUrl: '#',
    codeUrl: 'https://www.linkedin.com/posts/bnguyen2027_near-the-end-of-december-i-started-experimenting-ugcPost-7284449290159058944-Nz2u?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQEeQUBrdVoBA-wQlT4jWn0rKIlG5mG8b4',
    image: 'assets/handpose_img.png',
    features: [
      'Left and right hand dectection for different tools',
      'Variable brush size',
      'Pinch to draw',
    ],
    learnings: [
      'Loading and configuring an ml model in javascript',
      'Writing logic to extract data for each finger',
      'Drawing on a canvas in p5.js'
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
