import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { useRef } from "react";
import "./index.css";

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <motion.div 
      ref={containerRef}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-6 md:p-12 overflow-hidden"
    >
      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            className="absolute rounded-full bg-blue-500/20 blur-md"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`
            }}
          />
        ))}
      </div>

      {/* Header with 3D Photo Effect */}
      <header className="relative z-10 text-center mb-20 md:mb-28">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-40 h-40 md:w-52 md:h-52 mb-8 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
        >
          {/* Replace with your actual photo */}
          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-600 flex items-center justify-center">
            <span className="text-4xl font-bold">BM</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Bouha Maaye
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="text-blue-400">Ingénieur IA</span> &{" "}
          <span className="text-cyan-300">Développeur Full-Stack</span> -{" "}
          <span className="text-gray-400">Innovation & Excellence Technique</span>
        </motion.p>

        <motion.div
          className="flex justify-center gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
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
      </header>

      {/* Projects with Holographic Cards */}
      <section className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative h-full bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-6 overflow-hidden hover:border-blue-400/30 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
              
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-300">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-5">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800 text-sm px-3 py-1 rounded-full border border-gray-700 text-blue-100"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              
              {project.image && (
                <div className="mb-4 rounded-lg overflow-hidden border border-gray-800">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
              
              <motion.div
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-blue-400 font-medium cursor-pointer"
              >
                <span>Voir les détails</span>
                <ArrowRight className="ml-2" size={18} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Footer with Animated Border */}
      <motion.footer 
        className="relative z-10 text-center mt-28 mb-12 text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-md mx-auto border-t border-gray-800 pt-8">
          <motion.p 
            whileHover={{ scale: 1.02 }}
            className="text-sm md:text-base"
          >
            &copy; {new Date().getFullYear()} Bouha Maaye —{" "}
            <span className="text-blue-400">Tous droits réservés</span>
          </motion.p>
        </div>
      </motion.footer>
    </motion.div>
  );
}

const projects = [
  {
    title: "Stocky Pêche - Plateforme Premium",
    description: "Solution complète pour les professionnels de la pêche en Mauritanie avec enchères en temps réel, gestion de stock et analyse de marché.",
    tags: ["Flutter", "Node.js", "MongoDB", "IA"],
    image: "https://example.com/stocky-peche.jpg" // Replace with actual image
  },
  {
    title: "Assistant Médical IA (Medease)",
    description: "Chatbot médical intelligent basé sur RAG pour diagnostiquer les patients et proposer médecins ou urgences selon gravité. Vainqueur du Datathon santé.",
    tags: ["RAG", "NLP", "Santé", "Chatbot"],
    image: "https://example.com/medease-chatbot.jpg" // Replace with actual image
  },
  {
    title: "IA Décisionnelle (SPIE x Microsoft)",
    description: "IA analysant les documents d'appels d'offres, générant des résumés et remplissant un Excel de décision GO/NO-GO.",
    tags: ["NLP", "Automation", "Excel", "Azure"],
    image: "https://example.com/spie-ia.jpg" // Replace with actual image
  },
  {
    title: "Vision par Ordinateur pour Sécurité",
    description: "Détection des manquements aux règles de sécurité sur site via photos, contribuant à sauver des vies.",
    tags: ["Computer Vision", "Sécurité", "Azure"],
    image: "https://example.com/computer-vision.jpg" // Replace with actual image
  },
  {
    title: "Détection de Fraude Bancaire",
    description: "Classification automatique d'anomalies pour prévenir les fraudes bancaires avec modèles de Machine Learning.",
    tags: ["ML", "Classification", "Sécurité"],
    image: "https://example.com/fraud-detection.jpg" // Replace with actual image
  },
  {
    title: "Applications Mobile & Jeux",
    description: "Développement full-stack d'applications Flutter et jeux en temps réel avec Vue.js et Socket.IO.",
    tags: ["Flutter", "Vue.js", "Socket.IO", "Firebase"],
    image: "https://example.com/mobile-apps.jpg" // Replace with actual image
  },
];

export default App;