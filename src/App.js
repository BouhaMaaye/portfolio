import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download, PhoneCall } from "lucide-react";
import { useRef, useState } from "react";
import "./index.css";
import profilePhoto from './assets/images/photo.jpg';
import Medease from './assets/images/Medease1.png';
import Medease1 from './assets/images/Medease2.png';
import Stocky from './assets/images/Stocky.jpg';
import Stocky1 from './assets/images/Stocky1.png';
import Stocky2 from './assets/images/Stocky2.png';
import Go from './assets/images/Go-no-go.jpg';
import Secu from './assets/images/secu.jpg';
import PBI from './assets/images/PBI_dashboard.jpg';
import Power from './assets/images/Power_automate.avif';
import IA from './assets/images/IA.png';
import DaxiumAss from './assets/images/DaxiumAss.png';
import spie from './assets/images/spie.jpg';
import Optim from './assets/images/Optim.png';
import opencv from './assets/images/opencv.gif';
import fraude1 from './assets/images/fraude1.jpg';
import fraude2 from './assets/images/fraude2.png';
import mono from './assets/images/mono.webp';
import VisionIALOGO from './assets/images/VisionIALOGO.png';
import AfcoERP from './assets/images/AFCO_ERP_home_page.png';
import AfcoHome from './assets/images/Afco.png';
import ONISPA from './assets/images/ONISPA.png';
import AEMP from './assets/images/AEMP.png';










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
            {["projects", "about", "experience", "vision-ia"].map((tab) => (
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
                {tab === "vision-ia" ? "VISION IA" : tab.charAt(0).toUpperCase() + tab.slice(1)}
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
              className="text-xl md:text-2xl text-gray-300 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-blue-400">Lead Tech & Directeur Technique</span>{" "}
              <span className="text-gray-500">chez</span>{" "}
              <span className="text-cyan-300">VIAKDATA</span>
            </motion.p>

            <motion.p
              className="text-lg text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="text-blue-300">Directeur Général</span>{" "}
              <span className="text-gray-500">de</span>{" "}
              <span className="text-cyan-300">VISION IA</span>
            </motion.p>

            <motion.p
              className="text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Entrepreneur et leader technique, je pilote des projets IA ambitieux et bâtis des solutions data à fort impact.
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
  href="/MAAYE_CV.pdf" // Ajoutez votre CV
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
Titulaire d’un bac en mathématiques, d’une licence en mathématiques et informatique, et d’un master en Data Science & IA, j’ai bâti une expertise technique solide complétée par une première expérience en tant que data analyst chez Monoprix.

J’ai ensuite passé deux années chez SPIE CityNetwork en tant que <strong className="text-blue-300">Responsable de la Transformation Digitale</strong>, où j’ai piloté l’intégration des premières solutions IA du groupe : Machine Learning, Deep Learning, Computer Vision, NLP et automatisation.             </motion.p>

              <motion.p
                className="text-gray-300 text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Aujourd’hui, je dirige <strong className="text-blue-300">VIAKDATA</strong> en tant que Lead Tech & Directeur Technique, tout en assurant en parallèle la direction générale de <strong className="text-cyan-300">VISION IA</strong>. Mon quotidien : transformer des défis complexes en solutions IA concrètes et scalables.
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
              <div className="relative aspect-video bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 flex items-center justify-center">
  <img
    src={IA}
    alt="Présentation IA"
    className="max-h-full max-w-full object-contain p-4"
  />
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
      Expérience SPIE — Responsable Transformation Digitale
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {[
        {
          title: "IA pour les Appels d'Offres (GO-NOGO",
          description: "Développement d’une IA analysant les documents d’appels d’offres et remplissant dynamiquement un output format word.",
          tags: ["NLP", "Power plateform", "Python", "Azure", "Excel Automation"],
          color: "blue",
          image: Go,
        },
        {
          title: "Computer Vision",
          description: "Système de détection d'infractions à la sécurité sur les chantiers via des modèles d’analyse d’image.",
          tags: ["Computer Vision", "PyTorch", "Azure", "Sécurité"],
          color: "cyan",
          image: Secu,
        },
        {
          title: "Apps Internes & Dashboards",
          description: "Création d’apps internes et de tableaux de bord Power BI (90 % automatisés) pour le suivi opérationnel.",
          tags: ["Power BI", "Apps", "Power Platform", "Automatisation"],
          color: "blue",
          images: [PBI, Power]
        },
        {
          title: "Chatbots avec RAG",
          description: "Développement de chatbots intelligents pour répondre automatiquement aux collaborateurs via architectures RAG.",
          tags: ["RAG", "NLP", "Virtual Agent", "N8N"],
          color: "cyan",
          image: DaxiumAss

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
          <div className="relative aspect-video bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 flex items-center justify-center">
  {item.images && item.images.length > 0 ? (
    <div className="flex flex-row gap-2 overflow-x-auto p-4 w-full h-full">
      {item.images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${item.title} ${idx + 1}`}
          className="h-full object-contain rounded-lg"
        />
      ))}
    </div>
  ) : item.image ? (
    <img
      src={item.image}
      alt={item.title}
      className="max-h-full max-w-full object-contain p-4"
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black/30 to-gray-900">
      <span className="text-xl text-gray-400">Capture du projet {i + 1}</span>
    </div>
  )}
</div>

        </motion.div>
      ))}
    </div>
  </div>
</Section>

      {/* VISION IA Section */}
      <Section id="vision-ia" className="bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header with logo */}
          <motion.div
            className="flex flex-col items-center mb-14"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={VisionIALOGO} alt="VISION IA" className="h-16 mb-6 object-contain" />
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Réalisations VISION IA
            </h2>
            <p className="text-gray-400 mt-4 text-center max-w-2xl">
              En tant que Directeur Général de VISION IA, j'ai piloté le développement de solutions digitales sur mesure pour des organisations publiques et privées.
            </p>
          </motion.div>

          {/* Featured projects with images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {[
              {
                category: "ERP INDUSTRIEL",
                title: "AFCO ERP",
                description: "Système ERP industriel complet — centralisation totale des opérations, tableau de bord exécutif, gestion des stocks, comptabilité et automatisation des flux métiers.",
                tags: ["ERP", "React", "Node.js", "PostgreSQL", "Automatisation"],
                images: [AfcoHome, AfcoERP],
                color: "blue"
              },
              {
                category: "SYSTÈME INTÉGRÉ",
                title: "ONISPA — Gestion Intégrée",
                description: "Système de gestion intégré pour l'ONISPA incluant des dashboards analytiques, suivi opérationnel en temps réel et automatisation des processus administratifs.",
                tags: ["Dashboard", "Power BI", "Python", "API REST", "Analytics"],
                images: [ONISPA],
                color: "cyan"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
                <div className="relative bg-gray-900/70 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-400/30 transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden bg-gray-900 flex items-center justify-center">
                    {item.images.length > 1 ? (
                      <div className="flex flex-row gap-2 overflow-x-auto p-4 w-full h-full">
                        {item.images.map((img, idx) => (
                          <img key={idx} src={img} alt={`${item.title} ${idx + 1}`} className="h-full object-contain rounded-lg" />
                        ))}
                      </div>
                    ) : (
                      <img src={item.images[0]} alt={item.title} className="max-h-full max-w-full object-contain p-4" />
                    )}
                  </div>
                  <div className="p-6">
                    <span className={`text-xs font-bold tracking-widest text-${item.color}-400 uppercase mb-2 block`}>{item.category}</span>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, j) => (
                        <span key={j} className={`px-3 py-1 bg-${item.color}-900/30 text-${item.color}-300 rounded-full text-xs border border-${item.color}-800/40`}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AEMP full width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative mb-8"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
            <div className="relative bg-gray-900/70 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-400/30 transition-all duration-300 grid grid-cols-1 md:grid-cols-2">
              <div className="relative overflow-hidden bg-gray-900 flex items-center justify-center min-h-[220px]">
                <img src={AEMP} alt="AEMP" className="max-h-full max-w-full object-contain p-4" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-2">GESTION DE PROJET</span>
                <h3 className="text-2xl font-bold text-white mb-3">AEMP — Suivi de Projet</h3>
                <p className="text-gray-400 mb-5">Logiciel de suivi de projet développé pour l'AEMP : planification des tâches, suivi de l'avancement, reporting automatisé et gestion des équipes terrain.</p>
                <div className="flex flex-wrap gap-2">
                  {["Gestion de projet", "React", "Node.js", "MongoDB", "Reporting"].map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs border border-blue-800/40">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other VISION IA projects — cards without images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { category: "PLATEFORME IA", title: "Stocky Pêche", description: "Plateforme pour professionnels de la pêche en Mauritanie avec enchères live et analyse de marché.", tags: ["Flutter", "IA", "Node.js"], color: "cyan" },
              { category: "SANTÉ & IA", title: "PharmaBot", description: "Assistant intelligent orientant les patients vers la pharmacie la plus proche avec suivi de disponibilité.", tags: ["NLP", "Maps API", "React Native"], color: "blue" },
              { category: "SANTÉ CONNECTÉE", title: "Clinique Guérison", description: "Système de gestion de consultations médicales avec planification, dossiers patients et facturation.", tags: ["React", "PostgreSQL", "Node.js"], color: "cyan" },
              { category: "FINTECH & IMMO", title: "Karne App", description: "Application mobile Fintech & Immobilier avec gestion de patrimoine, transactions et alertes promo.", tags: ["Flutter", "Firebase", "IA"], color: "blue" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-900/60 border border-gray-800 rounded-xl p-5 hover:border-blue-400/30 transition-all duration-300"
              >
                <span className={`text-xs font-bold tracking-widest text-${item.color}-400 uppercase mb-2 block`}>{item.category}</span>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-500 text-xs mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag, j) => (
                    <span key={j} className={`px-2 py-0.5 bg-${item.color}-900/30 text-${item.color}-300 rounded-full text-xs`}>{tag}</span>
                  ))}
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
      Compétences Techniques
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
              Me contacter
            </h3>
            <p className="text-gray-400 max-w-lg mx-auto">
              N'hésitez pas à me contacter pour échanger, collaborer ou en savoir plus sur mes projets.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mb-8"
          >
            {[
              { icon: <PhoneCall size={24} />, href: "https://wa.me/33695476380" },
              { icon: <Mail size={24} />, href: "mailto:bouha.mohamedlemine@gmail.com" },
              { icon: <Github size={24} />, href: "https://github.com/BouhaMaaye" },
              { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/bouha-maaye-6b378214b/" }
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
    title: "Optimisation des Tournées de Véhicules (SPIE)",
    description: "Système d'optimisation intelligent développé chez SPIE utilisant OR-Tools et geopy pour planifier des itinéraires efficaces, réduire les coûts opérationnels et optimiser l'allocation des ressources de transport.",
    tags: ["OR-Tools", "Geopy", "Optimisation", "Recherche Opérationnelle", "Python"],
    link: "#",
    images: [spie, Optim]

  },
  {
    title: "Stocky Pêche",
    description: "Plateforme premium pour les professionnels de la pêche en Mauritanie avec transactions sécurisées et analyse de marché.",
    tags: ["Flutter", "Node.js", "MongoDB", "IA"],
    link: "#",
    images: [Stocky, Stocky1, Stocky2]
  },
  {
    title: "Détection de Plaques d'Immatriculation",
    description: "Système de reconnaissance automatique de plaques d'immatriculation utilisant OpenCV et des techniques de computer vision pour la détection, extraction et lecture des matriculations de véhicules.",
    tags: ["OpenCV", "Computer Vision", "OCR", "Détection d'objets", "Python"],
    link: "#",
    images: [opencv]

  },
  {
    title: "Chatbot Medease",
    description: "Assistant médical intelligent basé sur RAG pour diagnostiquer et orienter les patients selon la gravité de leurs symptômes.",
    tags: ["NLP", "RAG", "Santé", "Vainqueur Datathon"],
    link: "#",
    images: [Medease, Medease1]

  },
  {
    title: "Détection de Fraude",
    description: "Système de classification automatique pour identifier les transactions bancaires frauduleuses.",
    tags: ["Machine Learning", "Anomaly Detection"],
    link: "#",
    images: [fraude1, fraude2]
  },
  {
    title: "Jeu Multijoueur",
    description: "Développement full-stack d'une application de jeu en temps réel avec Socket.IO.",
    tags: ["Vue.js", "Socket.IO", "Firebase"],
    link: "#",
    images: [mono]
  }
];

export default App;