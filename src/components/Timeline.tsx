import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { TIMELINE } from '../data';
import sefaradBg from '../assets/timeline_sefarad.png';
import diasporaBg from '../assets/timeline_diaspora.png';
import recifeBg from '../assets/timeline_recife.png';
import modernBg from '../assets/timeline_modern.png';

const getTimelineImage = (id: string) => {
  switch (id) {
    case 't1': return sefaradBg;
    case 't2': return diasporaBg;
    case 't3': return recifeBg;
    case 't4': return modernBg;
    default:   return sefaradBg;
  }
};

export default function Timeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll linked trail drawing
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });
  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <section ref={sectionRef} className="relative py-28 sm:py-36 overflow-hidden dark-texture">

      {/* Top gold line */}
      <div className="absolute top-0 inset-x-0 h-[1px] z-10"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(166,137,74,0.4) 30%, rgba(203,179,122,0.6) 50%, rgba(166,137,74,0.4) 70%, transparent)' }}
      />

      {/* Large decorative celestial circle watermark */}
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none select-none opacity-[0.04]">
        <svg viewBox="0 0 200 200" className="w-full h-full text-brand-gold" fill="none" stroke="currentColor">
          <circle cx="100" cy="100" r="90" strokeDasharray="3 3" strokeWidth="0.4" />
          <circle cx="100" cy="100" r="70" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="50" strokeWidth="0.2" />
          <line x1="100" y1="10" x2="100" y2="190" strokeWidth="0.2" />
          <line x1="10" y1="100" x2="190" y2="100" strokeWidth="0.2" />
          <polygon points="100,40 120,100 100,160 80,100" strokeWidth="0.4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Jornada das Gerações</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-ivory mt-5 tracking-tight">
              Linha do Tempo Sefardita
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6 mb-5">
              <div className="h-[1px] w-12" style={{ background: 'linear-gradient(to right, transparent, rgba(166,137,74,0.5))' }} />
              <span className="text-brand-gold/40 text-xs">✦</span>
              <div className="h-[1px] w-12" style={{ background: 'linear-gradient(to left, transparent, rgba(166,137,74,0.5))' }} />
            </div>
            <p className="text-sm sm:text-[15px] text-brand-ivory/55 font-sans font-light leading-relaxed max-w-2xl mx-auto">
              Siga os caminhos geográficos, intelectuais e providenciais que consolidaram a presença luso-sefardita de Sefarad até a reemergência contemporânea.
            </p>
          </motion.div>
        </div>

        {/* Timeline body */}
        <div className="relative">

          {/* Central vertical line - desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 pointer-events-none hidden md:block bg-white/5">
            <motion.div 
              className="w-full bg-gradient-to-b from-brand-gold via-brand-gold-light to-transparent" 
              style={{ height: pathHeight, transformOrigin: 'top' }}
            />
          </div>
          {/* Left vertical line - mobile */}
          <div className="absolute left-5 top-0 bottom-0 w-[1px] pointer-events-none md:hidden bg-white/5">
            <motion.div 
              className="w-full bg-gradient-to-b from-brand-gold via-brand-gold-light to-transparent" 
              style={{ height: pathHeight, transformOrigin: 'top' }}
            />
          </div>

          <div className="space-y-12 md:space-y-0">
            {TIMELINE.map((step, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedId === step.id;

              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col md:flex-row md:items-start md:mb-16 ${
                    isEven ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Timeline node */}
                  <div className={`absolute flex items-center justify-center z-25 left-5 md:left-1/2 top-6 md:top-5 -translate-x-1/2 w-10 h-10`}>
                    {/* Outer pulse ring */}
                    <div className="absolute inset-0 rounded-full animate-pulse-ring" />
                    {/* Main circle */}
                    <div className="w-8 h-8 rounded-full flex items-center justify-center relative z-10"
                      style={{
                        background: 'linear-gradient(135deg, #002b49, #001c30)',
                        border: '1.5px solid rgba(166,137,74,0.7)',
                        boxShadow: '0 0 16px rgba(166,137,74,0.2)',
                      }}
                    >
                      <div className="w-3 h-3 rounded-full"
                        style={{ background: 'linear-gradient(135deg, #cbb37a, #a6894a)' }}
                      />
                    </div>
                  </div>

                  {/* Card container */}
                  <div className={`pl-16 md:pl-0 w-full md:w-[42%] ${isEven ? 'md:pr-10' : 'md:pl-10'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -35 : 35 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div
                        className="group relative overflow-hidden cursor-pointer transition-all duration-500 rounded-[3px] border p-4 sm:p-6"
                        onClick={() => toggleExpand(step.id)}
                        style={{
                          border: isExpanded ? '1px solid rgba(166,137,74,0.45)' : '1px solid rgba(166,137,74,0.15)',
                          boxShadow: isExpanded ? '0 12px 40px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.2)',
                        }}
                      >
                        {/* Background Image of the timeline step card */}
                        <div className="absolute inset-0 z-0 overflow-hidden">
                          <img
                            src={getTimelineImage(step.id)}
                            alt={step.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                          />
                          {/* Rich dark overlay to keep text completely readable */}
                          <div className="absolute inset-0 bg-gradient-to-br from-brand-deepest/95 via-brand-dark-blue/90 to-brand-dark-blue/80 transition-all duration-400 group-hover:via-brand-dark-blue/85" />
                        </div>

                        {/* Top decorative accent on hover */}
                        <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-brand-gold/0 to-transparent group-hover:via-brand-gold/60 transition-all duration-500 z-10" />

                        {/* Card contents wrapper */}
                        <div className="relative z-10">
                          {/* Period tag */}
                          <span className="inline-block font-display text-[8px] tracking-[0.2em] font-semibold uppercase px-2 py-1 mb-3.5 select-none"
                            style={{
                              background: 'rgba(166,137,74,0.08)',
                              color: '#cbb37a',
                              border: '1px solid rgba(166,137,74,0.25)',
                              borderRadius: '1px',
                            }}
                          >
                            {step.period}
                          </span>

                          {/* Title */}
                          <h3 className="font-serif text-[17px] sm:text-xl font-bold text-brand-ivory mb-2.5 leading-snug group-hover:text-brand-gold-light transition-colors duration-300">
                            {step.title}
                          </h3>

                          {/* Short description */}
                          <p className="text-xs sm:text-sm text-brand-ivory/60 font-sans font-light leading-relaxed mb-3.5">
                            {step.description}
                          </p>

                          {/* Accordion trigger */}
                          <div className="flex items-center justify-between border-t border-brand-gold/10 pt-3 select-none transition-colors duration-250"
                            style={{ color: isExpanded ? '#cbb37a' : 'rgba(166,137,74,0.65)' }}
                          >
                            <span className="text-[10px] font-sans font-semibold tracking-[0.12em] uppercase">
                              {isExpanded ? 'Ver menos' : 'Explorar história integral'}
                            </span>
                            {isExpanded
                              ? <ChevronUp size={15} />
                              : <ChevronDown size={15} />
                            }
                          </div>

                          {/* Expandable details */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                                className="overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <div className="mt-5 pt-5 border-t border-brand-gold/10 text-brand-ivory/80 text-sm leading-relaxed font-sans font-light">
                                  {step.details}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Smooth transition from dark Timeline to dark Eventos */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-brand-deepest to-transparent pointer-events-none z-10" />
    </section>
  );
}
