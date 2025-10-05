const { initializeApp } = require('firebase/app');
const { getDatabase, ref, set } = require('firebase/database');

const firebaseConfig = {
  databaseURL: 'https://space-apps-challenge-310-default-rtdb.firebaseio.com/',
  apiKey: 'AIzaSyAJnx5jghEsE8W48dlw6zIT3zd66_OJqCE',
  authDomain: 'space-apps-challenge-310-default-rtdb.firebaseapp.com',
  projectId: 'space-apps-challenge-310-default-rtdb',
  storageBucket: 'space-apps-challenge-310-default-rtdb.appspot.com',
  messagingSenderId: '310-default-rtdb',
  appId: '1:310-default-rtdb:web:1234567890abcdef'
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Sample NASA space biology articles
const sampleArticles = [
  {
    title: "Plant Growth in Microgravity: A Comprehensive Study",
    abstract: "This study examines the effects of microgravity on plant growth and development, focusing on Arabidopsis thaliana grown aboard the International Space Station. Results show significant changes in root architecture and gene expression patterns.",
    link: "https://example.com/plant-microgravity-study",
    graphical_abstract_url: "https://picsum.photos/seed/plant-microgravity/400/300.jpg",
    year: 2023,
    category: "Plant Biology",
    author: "Dr. Sarah Johnson"
  },
  {
    title: "Radiation Effects on Human Cells in Space Environment",
    abstract: "Investigation of cellular responses to cosmic radiation exposure in space conditions. Study reveals DNA damage mechanisms and potential protective strategies for long-duration space missions.",
    link: "https://example.com/radiation-cells-study",
    graphical_abstract_url: "https://picsum.photos/seed/radiation-cells/400/300.jpg",
    year: 2022,
    category: "Human Biology",
    author: "Dr. Michael Chen"
  },
  {
    title: "Microbial Communities in Closed Life Support Systems",
    abstract: "Analysis of microbial ecosystem dynamics in closed-loop life support systems for space habitats. Findings suggest potential for bioregenerative life support applications.",
    link: "https://example.com/microbial-communities",
    graphical_abstract_url: "https://picsum.photos/seed/microbial-space/400/300.jpg",
    year: 2023,
    category: "Microbiology",
    author: "Dr. Emily Rodriguez"
  },
  {
    title: "Bone Density Loss Prevention in Astronauts",
    abstract: "Novel therapeutic approaches to prevent bone density loss during extended spaceflight. Clinical trials show promising results with combined exercise and pharmacological interventions.",
    link: "https://example.com/bone-density-study",
    graphical_abstract_url: "https://picsum.photos/seed/bone-density/400/300.jpg",
    year: 2021,
    category: "Human Biology",
    author: "Dr. James Wilson"
  },
  {
    title: "Photosynthetic Efficiency in Space-Grown Crops",
    abstract: "Evaluation of photosynthetic performance and crop yield potential of various plant species grown in space agricultural systems. Wheat and lettuce show exceptional adaptation capabilities.",
    link: "https://example.com/photosynthesis-space",
    graphical_abstract_url: "https://picsum.photos/seed/photosynthesis-crops/400/300.jpg",
    year: 2023,
    category: "Plant Biology",
    author: "Dr. Lisa Anderson"
  },
  {
    title: "Circadian Rhythm Disruption in Space",
    abstract: "Study of circadian clock disruption in astronauts and its impact on sleep patterns and cognitive performance. Light therapy interventions show significant improvement in sleep quality.",
    link: "https://example.com/circadian-rhythm",
    graphical_abstract_url: "https://picsum.photos/seed/circadian-space/400/300.jpg",
    year: 2022,
    category: "Human Biology",
    author: "Dr. Robert Taylor"
  },
  {
    title: "Extremophile Bacteria for Mars Terraforming",
    abstract: "Investigation of extremophile bacteria species that could survive Martian conditions and contribute to terraforming efforts. Radiation-resistant strains show particular promise.",
    link: "https://example.com/extremophile-mars",
    graphical_abstract_url: "https://picsum.photos/seed/extremophile-bacteria/400/300.jpg",
    year: 2023,
    category: "Microbiology",
    author: "Dr. Maria Garcia"
  },
  {
    title: "Protein Crystal Growth in Microgravity",
    abstract: "Enhanced protein crystal growth in microgravity environments enables better structural analysis for drug development. Results show improved crystal quality and size.",
    link: "https://example.com/protein-crystals",
    graphical_abstract_url: "https://picsum.photos/seed/protein-crystals/400/300.jpg",
    year: 2021,
    category: "Biochemistry",
    author: "Dr. David Lee"
  },
  {
    title: "Vestibular System Adaptation to Space",
    abstract: "Comprehensive study of vestibular system changes during spaceflight and recovery post-mission. Findings inform countermeasure development for motion sickness prevention.",
    link: "https://example.com/vestibular-adaptation",
    graphical_abstract_url: "https://picsum.photos/seed/vestibular-system/400/300.jpg",
    year: 2022,
    category: "Human Biology",
    author: "Dr. Jennifer Brown"
  },
  {
    title: "Synthetic Biology for Space Life Support",
    abstract: "Development of synthetic biology approaches for creating self-sustaining life support systems. Engineered microorganisms show potential for air revitalization and waste recycling.",
    link: "https://example.com/synthetic-biology",
    graphical_abstract_url: "https://picsum.photos/seed/synthetic-bio/400/300.jpg",
    year: 2023,
    category: "Synthetic Biology",
    author: "Dr. Thomas Martinez"
  }
];

async function seedDatabase() {
  try {
    console.log('Seeding Firebase database with sample articles...');
    
    for (let i = 0; i < sampleArticles.length; i++) {
      const article = sampleArticles[i];
      const articleRef = ref(database, `articles/${i + 1}`);
      await set(articleRef, article);
      console.log(`Added article ${i + 1}: ${article.title}`);
    }
    
    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase();