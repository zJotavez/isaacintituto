import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import Revista from './components/Revista';
import Timeline from './components/Timeline';
import Eventos from './components/Eventos';
import Livros from './components/Livros';
import Acervo from './components/Acervo';
import Newsletter from './components/Newsletter';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import RevistaPage from './components/RevistaPage';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'inicio' | 'revista'>('inicio');

  // Navigate & scroll helper
  const handleNavigate = (tab: 'inicio' | 'revista', sectionId?: string) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      if (sectionId) {
        // Wait for page change transition
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Smooth scroll to top when changing tabs (if no section is specified)
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [activeTab]);

  return (
    <div className="bg-brand-dark-blue text-brand-ivory min-h-screen flex flex-col antialiased selection:bg-brand-gold selection:text-brand-dark-blue">
      
      {/* 1. Header Bar Navigation */}
      <Header activeTab={activeTab} onNavigate={handleNavigate} />

      {/* Main Panel Content with Slide-Fade animations */}
      <main className="flex-grow pt-16 md:pt-20">
        <AnimatePresence mode="wait">
          {activeTab === 'inicio' ? (
            <motion.div
              key="inicio"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              {/* 2. Hero Presentation Block */}
              <Hero onNavigate={handleNavigate} />

              {/* 3. About the Institute Block */}
              <section id="sobre">
                <About />
              </section>

              {/* 4. Pillars of the Institute */}
              <section id="pilares">
                <Pillars />
              </section>

              {/* 5. In-Page Magazine Periodical Articles Showcase */}
              <section id="revista-preview">
                <Revista isStandAlone={false} />
              </section>

              {/* 6. Historical Chronological Timeline */}
              <section id="jornada">
                <Timeline />
              </section>

              {/* 7. Events, Lives & Future Plans */}
              <section id="agenda">
                <Eventos />
              </section>

              {/* 8. Books & Guided Publications */}
              <section id="livros">
                <Livros />
              </section>

              {/* 9. Historic Archival Catalog blueprint warning */}
              <section id="acervo">
                <Acervo />
              </section>

              {/* 10. Newsletter Registry */}
              <Newsletter />

              {/* 11. Concluding Callout phrase before bottom info */}
              <FinalCTA onNavigate={handleNavigate} />
            </motion.div>
          ) : (
            <motion.div
              key="revista"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              {/* Standalone full catalog mode */}
              <RevistaPage />

              {/* Shared Editorial Newsletter */}
              <Newsletter />

              {/* Shared Editorial Quote CTA */}
              <FinalCTA onNavigate={handleNavigate} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 12. Footer contact listings and site index mappings */}
      <Footer setActiveTab={(tab) => handleNavigate(tab)} />

    </div>
  );
}
