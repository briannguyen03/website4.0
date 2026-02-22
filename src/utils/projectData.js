export const projects = [
  {
    id: 'game-of-life',
    title: 'The Game of Life',
    description: 'Interactive implementation of Conway\'s Game of Life using p5.js with real-time simulation and customizable rules.',
    longDescription: 'A zero-player game that simulates cellular automata based on simple rules. Features include adjustable grid size, speed control, pattern presets, and the ability to create custom starting configurations.',
    technologies: ['JavaScript', 'p5.js', 'HTML5', 'CSS3'],
    category: 'Interactive',
    demoUrl: '#',
    codeUrl: 'https://github.com/briannguyen03/website3.0/tree/main/Projects',
    image: '/assets/game_of_life.png',
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
    technologies: ['Python', 'NumPy', 'Matplotlib', 'Reinforcement Learning'],
    category: 'Machine Learning',
    demoUrl: '#',
    codeUrl: 'https://github.com/briannguyen03',
    image: '/assets/blackjackAgentscreenshot.png',
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
      'State-action value optimization',
      'Visualization of learning processes'
    ]
  },
  {
    id: 'hand-detection',
    title: 'Hand Detection',
    description: 'Real-time hand pose estimation using TensorFlow.js and computer vision techniques.',
    longDescription: 'A web-based application that uses machine learning to detect and track hand poses in real-time through a webcam. The system identifies 21 keypoints on the hand and can be used for gesture recognition.',
    technologies: ['JavaScript', 'TensorFlow.js', 'Computer Vision', 'MediaPipe'],
    category: 'Computer Vision',
    demoUrl: '#',
    codeUrl: 'https://github.com/briannguyen03/website3.0/tree/main/Projects',
    image: '/assets/handpose-keypoints-map.png',
    features: [
      'Real-time hand tracking',
      '21-point hand landmark detection',
      'Gesture recognition',
      'Webcam integration',
      'Visual feedback system'
    ],
    learnings: [
      'Real-time computer vision pipelines',
      'TensorFlow.js for browser-based ML',
      'Hand pose estimation techniques',
      'Performance optimization for real-time applications'
    ]
  },
  {
    id: 'drawing-with-ai',
    title: 'Drawing Using AI',
    description: 'Interactive drawing application enhanced with AI-assisted features and style transfer.',
    longDescription: 'A creative tool that combines traditional drawing with AI capabilities. Features include style transfer, auto-completion, and intelligent brush suggestions based on drawing context.',
    technologies: ['JavaScript', 'p5.js', 'ML5.js', 'Creative AI'],
    category: 'Creative AI',
    demoUrl: '#',
    codeUrl: 'https://github.com/briannguyen03/website3.0/tree/main/Projects',
    image: '/assets/handpose_img.png',
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
  'p5.js',
  'TensorFlow.js',
  'React',
  'Node.js',
  'HTML/CSS',
  'Machine Learning'
]
