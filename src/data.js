export const siteData = {
  project: {
    title: 'Descendants',
    subtitle: '3D Generative Agent Simulations',
    fullTitle:
      'Descendants: Architecture, Embodiment, and Emergent Behavior in Browser-Based 3D Generative Agent Simulations',
    university: 'University of Sri Jayewardenepura',
    faculty: 'Faculty of Technology',
    department: 'Department of Information and Communication Technology',
    degree: 'Bachelor of Information and Communication Technology (Honours)',
    year: 2025,
  },

  nav: [
    { label: 'Introduction', href: '#introduction' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Scenarios', href: '#scenarios' },
    { label: 'Contributions', href: '#contributions' },
    { label: 'Team', href: '#team' },
  ],

  hero: {
    tagline: 'Open-Source Research Platform',
    headline: 'Exploring LLM-Driven Agents in Continuous 3D Worlds',
    description:
      'An open-source, browser-based simulation platform investigating how large language models drive autonomous agent behaviour within rich, continuous 3D spatial environments.',
    ctaPrimary: { label: 'Explore Architecture', href: '#architecture' },
    ctaSecondary: { label: 'Download Thesis (PDF)', href: '/report.pdf' },
  },

  introduction: {
    label: 'Research Introduction',
    title: 'Bridging LLM Cognition with 3D Spatial Embodiment',
    description:
      'Large Language Model driven generative agents have shown remarkable capabilities in simulating human-like behaviour in virtual environments. However, existing research has been limited to simplified 2D or text-based worlds. Transitioning to continuous 3D environments introduces fundamental architectural and reasoning challenges that this research systematically addresses.',
    problem:
      'How can a multi-agent cognitive architecture be designed to reliably scale emergent generative agent behaviour within a dynamic, continuous 3D spatial environment?',
    challenges: [
      {
        title: 'Spatial Complexity',
        text: 'Agents must reason about vertical space, occlusion, and volumetric relationships beyond simple planar coordinates.',
      },
      {
        title: 'Perceptual Richness',
        text: '3D environments offer depth cues, perspective, and naturalistic spatial representations that influence agent reasoning.',
      },
      {
        title: 'Navigational Challenges',
        text: 'Pathfinding in 3D requires sophisticated navmesh-based algorithms affecting movement patterns and spatial decisions.',
      },
      {
        title: 'Computational Overhead',
        text: '3D rendering and physics simulation impose greater computational costs influencing system design choices.',
      },
      {
        title: 'Description Complexity',
        text: '3D spatial information requires richer linguistic descriptions and increased token consumption when interfacing with LLMs.',
      },
    ],
  },

  architecture: {
    label: 'Technical Architecture',
    title: 'A Neuro-Symbolic Multi-Agent Platform',
    description:
      'The Descendants platform features a modular architecture that cleanly separates agent cognition from the 3D simulation environment, enabling robust and reproducible experiments.',
    layers: [
      {
        title: 'IAC Library',
        subtitle: '@descendants-iac/core & react',
        text: 'Framework-agnostic agent orchestration layer providing the Agent class, CapabilityAdaptor system, SpatialOracle, and MemoryContext.',
      },
      {
        title: 'World Engine',
        subtitle: 'React Three Fiber + Three.js + Yuka AI',
        text: '3D simulation environment with procedural terrain, dynamic day/night cycle, multi-zone architecture, and autonomous navmesh-based navigation.',
      },
      {
        title: 'Implementation Harness',
        subtitle: 'Logging & Data Collection',
        text: 'Automated instrumentation capturing every perception, LLM response, action execution, and system metric for rigorous analysis.',
      },
    ],
    pipeline: {
      title: 'Agent Cognitive Pipeline',
      steps: [
        { name: 'Subconscious Tick', detail: 'Update internal needs based on time decay and personality' },
        { name: 'Perception', detail: 'SpatialOracle compiles spatial context; MemoryContext assembles history' },
        { name: 'LLM Reasoning', detail: 'Messages and tool schemas sent to LLM via Vercel AI SDK' },
        { name: 'Symbolic Verification', detail: 'Actions verified against spatial preconditions' },
        { name: 'Execution', detail: 'Valid actions proceed; invalid ones stored for LLM learning' },
      ],
    },
    techStack: [
      { label: 'Framework', value: 'Next.js 16 (React 19)' },
      { label: 'Language', value: 'TypeScript' },
      { label: '3D Rendering', value: 'React Three Fiber v9, Three.js' },
      { label: 'AI / ML', value: 'Vercel AI SDK, Groq Cloud API' },
      { label: 'LLM Models', value: 'Llama 4 Maverick, Llama 3.1 8B' },
      { label: 'Navigation', value: 'Yuka AI v0.7.8' },
      { label: 'State', value: 'Zustand v5' },
      { label: 'Validation', value: 'Zod v4' },
    ],
  },

  scenarios: {
    label: 'Experimental Scenarios',
    title: 'Testing Across Increasing Social Complexity',
    description:
      'Three scenarios of increasing complexity validate the platform\'s ability to support rich agent behaviours in continuous 3D space.',
    items: [
      {
        id: 'A',
        title: 'Daily Routine Execution',
        description:
          'Agents follow dynamic daily schedules in real time, adapting pathfinding and goals based on environmental events in a simulated 3D town.',
        metric: 'Schedule completion rate without spatial breakdown or pathing failure',
        icon: '📅',
      },
      {
        id: 'B',
        title: 'Information Propagation',
        description:
          'One agent receives novel information at simulation start. The system traces how information spreads through organic social interactions given spatial occlusion.',
        metric: 'Time until 100% of agents informed via spatial proximity conversations',
        icon: '💬',
      },
      {
        id: 'C',
        title: 'Collaborative Planning',
        description:
          'Agents collectively plan a surprise birthday party requiring spatial convergence, role allocation, synchronised arrival, and secrecy maintenance.',
        metric: 'Coordination Quality Rubric (CQR) score rated by trained human evaluators',
        icon: '🎯',
      },
    ],
  },

  contributions: {
    label: 'Research Contributions',
    title: 'Advancing 3D Generative Agent Research',
    description:
      'This study delivers contributions across multiple dimensions, establishing a new benchmark for spatial generative agent systems.',
    items: [
      {
        title: 'Empirical',
        text: 'First rigorous empirical evidence on how continuous 3D embodiment affects LLM-driven agent behaviour, coordination, and communication.',
      },
      {
        title: 'Methodological',
        text: 'A standardised open-source framework and methodology for conducting multi-agent research in continuous 3D environments.',
      },
      {
        title: 'Theoretical',
        text: 'Extension of embodied cognition theory to LLM-driven virtual agents, testing whether situated cognition principles apply to text-mediated spatial embodiment.',
      },
      {
        title: 'Technical',
        text: 'Novel Neuro-Symbolic Agent Pipeline combining LLM reasoning with deterministic symbolic verification and a Mixture-of-Experts context mixer.',
      },
      {
        title: 'Community',
        text: 'Complete open-source release under Apache 2.0 licence with public datasets, enabling replication and extension across the research community.',
      },
    ],
    links: [
      { label: 'GitHub Repository', href: '#', icon: 'github' },
      { label: 'Open Science Framework', href: '#', icon: 'science' },
      { label: 'Download Dataset', href: '#', icon: 'data' },
    ],
  },

  team: {
    label: 'Research Team',
    title: 'Our Team',
    supervisors: [
      { name: 'Dr. Senaka Amarakeerthi', role: 'Senior Lecturer & Supervisor' },
      { name: 'Mr. Chamila Karunatilake', role: 'Lecturer & Supervisor' },
      { name: 'Ms. Upeksha Hansani ', role: 'Lecturer & co-supervisor' },
    ],
    members: [
      { name: 'Thiwanka L.C.', role: 'Undergraduate Researcher' },
      { name: 'Karunarathna E.G.D.L.D.', role: 'Undergraduate Researcher' },
      { name: 'Manwasingha W.H.T.S.', role: 'Undergraduate Researcher' },
    ],
  },

  footer: {
    copyright: '2025 University of Sri Jayewardenepura, Faculty of Technology',
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'OSF', href: '#' },
      { label: 'Download Thesis', href: '/report.pdf' },
    ],
  },
}
