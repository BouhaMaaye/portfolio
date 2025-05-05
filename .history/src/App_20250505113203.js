import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-10 py-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ingénieur Intelligence Artificielle & Développeur Full Stack
          </h1>
          <p className="text-xl opacity-80">
            Créateur de solutions innovantes alliant IA, interfaces modernes et services intelligents.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="/ma_photo.jpg"
            alt="Maaye Photo"
            className="rounded-3xl w-80 h-80 object-cover shadow-2xl border-4 border-white"
          />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="px-10 py-10 space-y-10">
        <h2 className="text-4xl font-bold mb-10 text-center">Projets phares</h2>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Project: Stocky Peche */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
          >
            <img src="/stocky_app.jpg" alt="Stocky Peche" className="w-full h-64 object-cover" />
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Stocky Peche</h3>
              <p className="opacity-80">
                Plateforme premium pour les professionnels de la pêche en Mauritanie. Transactions sécurisées,
                données fiables et services haut de gamme.
              </p>
            </CardContent>
          </motion.div>

          {/* Project: Chatbot Medease */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
          >
            <img src="/medease_app.jpg" alt="Medease" className="w-full h-64 object-cover" />
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Chatbot Médical - Medease</h3>
              <p className="opacity-80">
                Assistant médical intelligent (RAG) pour diagnostiquer les patients et les orienter selon la gravité :
                médecin en 24h ou urgences proches. Projet primé lors du Datathon santé.
              </p>
            </CardContent>
          </motion.div>

          {/* Project: IA SPIE Microsoft */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl col-span-2"
          >
            <img src="/spie_ai.jpg" alt="IA SPIE" className="w-full h-64 object-cover" />
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Développement d’IA chez SPIE (Microsoft France)</h3>
              <p className="opacity-80">
                - IA d’aide à la décision pour les appels d’offres : résumés automatiques et remplissage de tableau Excel<br />
                - IA de vision par ordinateur pour vérifier les règles de sécurité sur site, contribuant à sauver des vies
              </p>
            </CardContent>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 py-10">
        © {new Date().getFullYear()} Bouha Maaye – Tous droits réservés
      </footer>
    </div>
  );
}
