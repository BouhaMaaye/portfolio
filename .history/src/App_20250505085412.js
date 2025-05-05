import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      {/* Header */}
      <header className="text-center mb-16">
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bouha Maaye
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Ingénieur en Intelligence Artificielle & Développeur Full-Stack
        </motion.p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="mailto:bouha.maaye@gmail.com"><Mail /></a>
          <a href="https://github.com/bouhamaaye"><Github /></a>
          <a href="https://www.linkedin.com/in/bouha-maaye"><Linkedin /></a>
        </div>
      </header>

      {/* Projects */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-700 text-sm px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center mt-20 text-gray-500">
        &copy; {new Date().getFullYear()} Bouha Maaye — Tous droits réservés.
      </footer>
    </div>
  );
}

const projects = [
  {
    title: "Assistant médical IA (Medease) – Vainqueur Datathon",
    description:
      "Chatbot intelligent basé sur RAG pour diagnostiquer les patients et proposer médecins ou urgences selon gravité.",
    tags: ["RAG", "NLP", "Santé", "Chatbot"]
  },
  {
    title: "IA décisionnelle pour appels d'offres (SPIE x Microsoft)",
    description:
      "IA analysant les documents d’appels d’offres, générant des résumés et remplissant un Excel de décision GO/NO-GO.",
    tags: ["NLP", "Automation", "Excel", "Azure"]
  },
  {
    title: "Vision par ordinateur pour sécurité (SPIE x Microsoft)",
    description:
      "IA détectant les manquements aux règles de sécurité sur site via photos, contribuant à sauver des vies.",
    tags: ["Computer Vision", "Sécurité", "Azure"]
  },
  {
    title: "Détection de fraude bancaire",
    description:
      "Classification automatique d’anomalies pour prévenir les fraudes bancaires.",
    tags: ["ML", "Classification", "Sécurité"]
  },
  {
    title: "App mobile & Jeu multijoueur",
    description:
      "Applications Flutter et jeux en temps réel avec Vue.js et Socket.IO.",
    tags: ["Flutter", "Vue.js", "Socket.IO"]
  },
];

export default App;
