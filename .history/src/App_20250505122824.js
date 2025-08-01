import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import { useRef, useState } from "react";
import "./index.css";
import profilePhoto from './assets/images/photo.jpg';
import Medease from './assets/images/Medease1.png';
import Medease1 from './assets/images/Medease2.png';
import Stocky from './assets/images/Stocky.jpg';


// Composant pour les particules interactives
const ParticleBackground = () => {
  const particles = Array.from({ length: 30 });
  
  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: 0
          }}
          animate={{
            x: [null, Math.random() * 100],
            y: [null, Math.random() * 100],
            opacity: [0, 0.8, 0],
            transition: {
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
          className="absolute rounded-full bg-gradient-to-r from-blue-400 to-cyan-300"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );
};

// Composant Section
const Section = ({ children, className = "" }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`relative py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};

function App() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("projects");
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.02]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);

  return (
    <motion.div 
      ref={containerRef}
      style={{ scale, opacity }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden"
    >
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
          >
            Bouha Maaye
          </motion.div>
          
          <div className="flex gap-6">
            {["projects", "about", "experience"].map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab 
                    ? "bg-blue-900/50 text-blue-300 border border-blue-700/50" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Votre photo de profil - Remplacer par votre image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto lg:mx-0">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    transition: {
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                  className="absolute inset-0 rounded-full border-2 border-blue-400/30"
                />
                <motion.div
                  animate={{
                    rotate: [0, -8, 8, 0],
                    transition: {
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1
                    }
                  }}
                  className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
                />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                <img 
  src={profilePhoto}
  alt="Bouha Maaye"
  className="w-full h-full object-contain scale-90"
/>
                </div>
              </div>
              
              {/* Effet Halo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 0.4 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 rounded-full bg-blue-500 blur-xl -z-10"
              />
            </motion.div>
          </div>
          
          <div className="text-center lg:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Bouha Maaye
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-blue-400">Ingénieur IA</span> &{" "}
              <span className="text-cyan-300">Développeur Full-Stack</span>
            </motion.p>
            
            <motion.p
              className="text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Spécialiste en solutions IA innovantes et développement d'applications haut de gamme.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full font-medium flex items-center justify-center gap-2"
              >
                Mes Projets <ArrowRight size={18} />
              </motion.a>
              
              <motion.a
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/cv-bouha-maaye.pdf" // Ajoutez votre CV
                download
                className="px-8 py-3 border border-blue-400/50 rounded-full font-medium flex items-center justify-center gap-2"
              >
                Télécharger CV <Download size={18} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-black/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Mon Parcours
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.p 
                className="text-gray-300 text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Passionné par l'IA et le développement depuis mon plus jeune âge, j'ai suivi un parcours académique exigeant qui m'a permis d'acquérir des compétences solides en intelligence artificielle et en ingénierie logicielle.
              </motion.p>
              
              <motion.p 
                className="text-gray-300 text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Mon alternance chez SPIE CityNetwork en collaboration avec Microsoft France a été déterminante dans mon approche des projets IA industriels.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                {[
                  "Machine Learning",
                  "Deep Learning",
                  "Computer Vision",
                  "NLP",
                  "Cloud Computing",
                  "Full-Stack Dev"
                ].map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ y: -3 }}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-video bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700">
                {/* Remplacez par une image de vous ou de votre travail */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/30 to-black">
                  <span className="text-xl text-gray-400">Image de présentation</span>
                </div>
              </div>
              
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  transition: {
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
                className="absolute -inset-4 border-2 border-blue-400/20 rounded-xl -z-10"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
     {/* Experience Section */}
<Section id="experience" className="bg-gradient-to-br from-black/50 to-gray-900/50">
  <div className="max-w-6xl mx-auto px-6">
    <motion.h2 
      className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Mon Alternance chez SPIE
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {[
        {
          title: "IA pour les Appels d'Offres",
          description: "Développement d’une IA analysant les documents d’appels d’offres et remplissant dynamiquement des tableaux Excel.",
          tags: ["NLP", "Python", "Azure", "Excel Automation"],
          color: "blue",
        },
        {
          title: "Vision par Ordinateur",
          description: "Système de détection d'infractions à la sécurité sur les chantiers via des modèles d’analyse d’image.",
          tags: ["Computer Vision", "PyTorch", "Azure", "Sécurité"],
          color: "cyan",
        },
        {
          title: "Apps Internes & Dashboards",
          description: "Création d’apps internes et de tableaux de bord Power BI (90 % automatisés) pour le suivi opérationnel.",
          tags: ["Power BI", "Apps", "Power Platform", "Automatisation"],
          color: "blue",
        },
        {
          title: "Chatbots avec RAG",
          description: "Développement de chatbots intelligents pour répondre automatiquement aux collaborateurs via architectures RAG.",
          tags: ["RAG", "NLP", "Virtual Agent", "N8N"],
          color: "cyan",
        }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h3 className={`text-2xl font-semibold text-${item.color}-300`}>{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, j) => (
                <span key={j} className={`px-3 py-1 bg-${item.color}-900/30 text-${item.color}-300 rounded-full text-sm`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative aspect-video bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black/30 to-gray-900">
              <span className="text-xl text-gray-400">Capture du projet {i + 1}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</Section>

      {/* Projects Section */}
      <Section id="projects" className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Mes Projets Innovants
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative h-full"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative h-full bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-blue-400/30 transition-all duration-300 flex flex-col">
                <div className="relative aspect-video overflow-hidden bg-gray-900 rounded-xl flex items-center justify-center">
  {project.images && project.images.length > 0 ? (
    <div className="flex flex-row gap-2 overflow-x-auto p-4 w-full h-full">
      {project.images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${project.title} ${idx + 1}`}
          className="h-full object-contain rounded-lg"
        />
      ))}
    </div>
  ) : project.image ? (
    <img 
      src={project.image}
      alt={project.title}
      className="max-h-full max-w-full object-contain p-4"
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/30 to-black">
      <span className="text-xl text-gray-400">Image du projet</span>
    </div>
  )}
</div>


                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-3 text-blue-300">{project.title}</h3>
                    <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="bg-gray-800 text-sm px-3 py-1 rounded-full border border-gray-700 text-blue-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={project.link || "#"}
                      className="inline-flex items-center text-blue-400 font-medium mt-auto"
                    >
                      <span>Voir le projet</span>
                      <ArrowRight className="ml-2" size={18} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      {/* Compétences Techniques */}
<Section id="competences" className="bg-black/60">
  <div className="max-w-6xl mx-auto px-6">
    <motion.h2 
      className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Ce que je peux faire
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {[
        {
          category: "Langages",
          items: ["Python", "R", "C/C++", "Java", "JavaScript", "DAX"]
        },
        {
          category: "ML & IA",
          items: [
            "Scikit-learn", "TensorFlow", "PyTorch",
            "Régression", "SVM", "Random Forest", "XGBoost", 
            "KNN", "PCA", "CNN", "LSTM", "Auto-encoder", "Transformers"
          ]
        },
        
        {
          category: "Web & Mobile",
          items: ["Vue.js", "Node.js", "Flutter", "Firebase", "Socket.IO"]
        },
        {
          category: "Base de données",
          items: ["PostgreSQL", "MySQL", "MongoDB", "Sequelize"]
        },
        {
          category: "Outils & Automation",
          items: ["Power BI", "QlikView", "Excel", "Power Platform", "N8N", "Make"]
        },
        {
          category: "Cloud / DevOps",
          items: ["Azure", "AWS", "Power Automate", "Virtual Agent"]
        }
      ].map((group, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
        >
          <h4 className="text-xl font-semibold text-blue-300 mb-4">{group.category}</h4>
          <div className="flex flex-wrap gap-3">
            {group.items.map((skill, j) => (
              <motion.span
                key={j}
                whileHover={{ y: -3 }}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</Section>


      {/* Footer */}
      <footer className="relative py-12 bg-black/50 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Travaillons ensemble
            </h3>
            <p className="text-gray-400 max-w-lg mx-auto">
              Vous avez un projet innovant ou souhaitez discuter d'opportunités ? Contactez-moi !
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mb-8"
          >
            {[
              { icon: <Mail size={24} />, href: "mailto:bouha.maaye@gmail.com" },
              { icon: <Github size={24} />, href: "https://github.com/bouhamaaye" },
              { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/bouha-maaye" }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800/50 hover:bg-blue-900/30 backdrop-blur-sm p-3 rounded-full border border-gray-700 hover:border-blue-400 transition-all duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm"
          >
            &copy; {new Date().getFullYear()} Bouha Maaye — Tous droits réservés
          </motion.p>
        </div>
      </footer>
    </motion.div>
  );
}

const projects = [
  {
    title: "Stocky Pêche",
    description: "Plateforme premium pour les professionnels de la pêche en Mauritanie avec transactions sécurisées et analyse de marché.",
    tags: ["Flutter", "Node.js", "MongoDB", "IA"],
    link: "#"
  },
  {
    title: "Chatbot Medease",
    description: "Assistant médical intelligent basé sur RAG pour diagnostiquer et orienter les patients selon la gravité de leurs symptômes.",
    tags: ["NLP", "RAG", "Santé", "Vainqueur Datathon"],
    link: "#",
    images: [Medease, Medease1]

  },
  {
    title: "IA Décisionnelle",
    description: "Solution d'analyse automatique des appels d'offres avec génération de résumés et tableau de décision dynamique.",
    tags: ["NLP", "Python", "Azure", "Excel"],
    link: "#"
  },
  {
    title: "Vision par Ordinateur",
    description: "Détection des manquements aux règles de sécurité sur les chantiers via analyse d'images.",
    tags: ["Computer Vision", "PyTorch", "Sécurité"],
    link: "#"
  },
  {
    title: "Détection de Fraude",
    description: "Système de classification automatique pour identifier les transactions bancaires frauduleuses.",
    tags: ["Machine Learning", "Anomaly Detection"],
    link: "#"
  },
  {
    title: "Jeu Multijoueur",
    description: "Développement full-stack d'une application de jeu en temps réel avec Socket.IO.",
    tags: ["Vue.js", "Socket.IO", "Firebase"],
    link: "#"
  }
];

export default App;