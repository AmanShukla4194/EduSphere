// data.js - static data for EduSphere
const COURSES = [
  {
    id: "web-design",
    title: "Web Design Fundamentals",
    category: "Creative",
    short: "Learn layout, typography, and responsive design.",
    overview:
      "This course covers HTML5, CSS3 fundamentals, responsive design principles and modern layout techniques including Flexbox and Grid.",
    instructor: {
      name: "Priya Singh",
      bio: "Frontend designer with 6 years experience.",
    },
    resources: ["#", "#", "#", "#"],
  },
  {
    id: "ai-basics",
    title: "AI Basics",
    category: "Tech",
    short: "Introduction to AI concepts, models and applications.",
    overview:
      "Fundamentals of AI, machine learning concepts, common algorithms, and real-world applications.",
    instructor: {
      name: "Dr. Rajiv Menon",
      bio: "Researcher in applied ML and AI.",
    },
    resources: ["#", "#", "#"],
  },
  {
    id: "data-ethics",
    title: "Data Ethics & Privacy",
    category: "Business",
    short: "Ethical considerations when working with data.",
    overview:
      "Covers privacy, bias, fairness, and regulations around data collection and use.",
    instructor: {
      name: "Neha Kapoor",
      bio: "Policy analyst and data ethicist.",
    },
    resources: ["#", "#", "#"],
  },
  {
    id: "js-basics",
    title: "JavaScript Essentials",
    category: "Tech",
    short: "Core JS concepts, DOM manipulation and ES6 features.",
    overview:
      "Detailed walk-through of JS fundamentals, modern syntax, asynchronous patterns and DOM APIs.",
    instructor: {
      name: "Aman Shukla",
      bio: "Software developer and ML enthusiast.",
    },
    resources: ["#", "#", "#", "#"],
  },
  {
    id: "ux-intro",
    title: "Intro to UX",
    category: "Creative",
    short: "User-centered design principles and usability testing.",
    overview:
      "Explore user research, wireframing, prototyping and testing methods to craft intuitive experiences.",
    instructor: {
      name: "Sophie Lee",
      bio: "UX researcher and product designer.",
    },
    resources: ["#", "#", "#"],
  },
  {
    id: "prod-mgmt",
    title: "Product Management 101",
    category: "Business",
    short: "Roadmapping, stakeholders, and MVP strategies.",
    overview:
      "Key concepts for managing product lifecycle, stakeholder communication, and building MVPs.",
    instructor: {
      name: "Rahul Gupta",
      bio: "Product lead with startup experience.",
    },
    resources: ["#", "#", "#"],
  },
];

// Simple quizzes mapped by course id
const QUIZZES = {
  "web-design": [
    {
      q: "Which CSS layout is best for 2D layouts?",
      options: ["Flexbox", "Grid", "Float", "Table"],
      a: 1,
    },
    {
      q: "What does 'responsive' mean?",
      options: ["Animations", "Adapts to screen", "Only mobile", "Uses JS"],
      a: 1,
    },
    {
      q: "Which tag contains main content in HTML5?",
      options: ["<main>", "<div>", "<section>", "<article>"],
      a: 0,
    },
    {
      q: "What property controls spacing between flex items?",
      options: ["gap", "space", "margin-between", "padding-gap"],
      a: 0,
    },
    {
      q: "Which unit is relative to viewport?",
      options: ["px", "em", "rem", "vw"],
      a: 3,
    },
  ],
  "ai-basics": [
    {
      q: "Which is a supervised learning task?",
      options: ["Clustering", "Regression", "Dimensionality reduction", "None"],
      a: 1,
    },
    {
      q: "What does 'overfitting' mean?",
      options: [
        "Model too simple",
        "Model memorizes training data",
        "Good generalization",
        "Faster training",
      ],
      a: 1,
    },
    {
      q: "Which activation is common in hidden layers?",
      options: ["ReLU", "Softmax", "Argmax", "Mean"],
      a: 0,
    },
    {
      q: "Which metric suits classification?",
      options: ["MSE", "Accuracy", "PSNR", "SSE"],
      a: 1,
    },
    {
      q: "What is 'feature' in ML?",
      options: [
        "Model weights",
        "Input variable",
        "Loss function",
        "Optimizer",
      ],
      a: 1,
    },
  ],
  "data-ethics": [
    {
      q: "What is data bias?",
      options: [
        "Accurate data",
        "Skewed data leading to unfair results",
        "Encrypted data",
        "None",
      ],
      a: 1,
    },
    {
      q: "Which law protects user data in EU?",
      options: ["GDPR", "HIPAA", "DMCA", "SOX"],
      a: 0,
    },
    {
      q: "Anonymization removes which info?",
      options: [
        "All metadata",
        "Personally identifying info",
        "All data",
        "None",
      ],
      a: 1,
    },
    {
      q: "Ethical AI should be:",
      options: ["Opaque", "Fair", "Expensive", "Slow"],
      a: 1,
    },
    {
      q: "Which can reduce bias?",
      options: [
        "Collect diverse data",
        "Ignore minorities",
        "Remove testing",
        "Use smaller models",
      ],
      a: 0,
    },
  ],
  "js-basics": [
    {
      q: "Which is used to select DOM elements?",
      options: ["querySelector", "selectDOM", "getIt", "pick"],
      a: 0,
    },
    {
      q: "Which keyword defines a constant?",
      options: ["let", "const", "var", "static"],
      a: 1,
    },
    {
      q: "How to create arrow function?",
      options: ["function => {}", "() => {}", "func() {}", "-> {}"],
      a: 1,
    },
    {
      q: "Promise represents:",
      options: ["A value now", "A future value", "A DOM node", "A string"],
      a: 1,
    },
    {
      q: "Which method adds item to array end?",
      options: ["push", "add", "append", "insert"],
      a: 0,
    },
  ],
  "ux-intro": [
    {
      q: "What is wireframing?",
      options: [
        "High-fidelity prototype",
        "Low-fidelity layout",
        "Final product",
        "Server setup",
      ],
      a: 1,
    },
    {
      q: "Primary goal of UX is:",
      options: ["Profit", "User satisfaction", "Long code", "No users"],
      a: 1,
    },
    {
      q: "Which method gathers qualitative feedback?",
      options: ["A/B testing", "Surveys", "Analytics", "None"],
      a: 1,
    },
    {
      q: "Accessibility ensures:",
      options: [
        "Faster site",
        "All users can access content",
        "Looks modern",
        "No tests",
      ],
      a: 1,
    },
    {
      q: "Prototype is used to:",
      options: ["Ship product", "Test ideas", "Delete product", "Encrypt data"],
      a: 1,
    },
  ],
  "prod-mgmt": [
    {
      q: "MVP stands for:",
      options: [
        "Most Valuable Product",
        "Minimum Viable Product",
        "Major Version Product",
        "Model Variant Product",
      ],
      a: 1,
    },
    {
      q: "Primary stakeholder is:",
      options: ["Competitors", "Users", "Unknown", "Hackers"],
      a: 1,
    },
    {
      q: "Roadmap shows:",
      options: [
        "Design details",
        "Planned features and timeline",
        "Only bugs",
        "Team birthdays",
      ],
      a: 1,
    },
    {
      q: "A stakeholder map helps:",
      options: [
        "Cook meals",
        "Identify influence and interest",
        "Run tests",
        "Ship code",
      ],
      a: 1,
    },
    {
      q: "Sprint is part of which methodology?",
      options: ["Waterfall", "Agile", "V-Model", "Big Bang"],
      a: 1,
    },
  ],
};
