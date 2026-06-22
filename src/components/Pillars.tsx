import React from 'react';
import { Bookmark, BookOpen, Users, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { PILLARS } from '../data';
import pillarMemoria from '../assets/pillar_memoria.png';
import pillarConhecimento from '../assets/pillar_conhecimento.png';
import pillarComunidade from '../assets/pillar_comunidade.png';
import symbolWhite from '../assets/symbol_white.png';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Scale':   return <Bookmark className="text-brand-gold" size={24} />;
    case 'BookOpen': return <BookOpen className="text-brand-gold" size={24} />;
    case 'Users':   return <Users className="text-brand-gold" size={24} />;
    default:        return <BookOpen className="text-brand-gold" size={24} />;
  }
};

const getBgImage = (id: string) => {
  switch (id) {
    case 'p1': return pillarMemoria;
    case 'p2': return pillarConhecimento;
    case 'p3': return pillarComunidade;
    default:   return pillarMemoria;
  }
};

export default function Pillars() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden dark-texture">

      {/* Top gold line */}
      <div className="absolute top-0 inset-x-0 h-[1px] z-10"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(166,137,74,0.4) 30%, rgba(203,179,122,0.6) 50%, rgba(166,137,74,0.4) 70%, transparent)' }}
      />

      {/* =============================================
          BACKGROUND LAYER: Cartographic Grid with Intersecting Lines
          ============================================= */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.05] z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pillars-grid" width="120" height="120" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="120" y2="0" stroke="#a6894a" strokeWidth="0.5" strokeDasharray="3 3" />
              <line x1="0" y1="0" x2="0" y2="120" stroke="#a6894a" strokeWidth="0.5" strokeDasharray="3 3" />
              <circle cx="0" cy="0" r="1.2" fill="#a6894a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pillars-grid)" />
          
          {/* Concentric compass rings */}
          <circle cx="50%" cy="50%" r="200" stroke="#a6894a" strokeWidth="0.5" strokeDasharray="5 5" fill="none" />
          <circle cx="50%" cy="50%" r="350" stroke="#a6894a" strokeWidth="0.5" fill="none" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#a6894a" strokeWidth="0.5" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#a6894a" strokeWidth="0.5" />
          
          {/* Floating navigation keywords on coordinate lines */}
          <text x="51.5%" y="15%" fill="#a6894a" fontSize="9" fontFamily="Cinzel, serif" letterSpacing="5" transform="rotate(90, 51.5%, 15%)" opacity="0.8">MEMÓRIA</text>
          <text x="8%" y="49%" fill="#a6894a" fontSize="9" fontFamily="Cinzel, serif" letterSpacing="5" opacity="0.8">TRADIÇÃO</text>
          <text x="83%" y="51%" fill="#a6894a" fontSize="9" fontFamily="Cinzel, serif" letterSpacing="5" opacity="0.8">LEGADO</text>
          <text x="48.5%" y="78%" fill="#a6894a" fontSize="9" fontFamily="Cinzel, serif" letterSpacing="5" transform="rotate(-90, 48.5%, 78%)" opacity="0.8">CONHECIMENTO</text>
          <text x="20%" y="22%" fill="#a6894a" fontSize="8" fontFamily="Cinzel, serif" letterSpacing="4" opacity="0.7">HISTÓRIA</text>
          <text x="76%" y="82%" fill="#a6894a" fontSize="8" fontFamily="Cinzel, serif" letterSpacing="4" opacity="0.7">CULTURA</text>
        </svg>
      </div>

      {/* Large watermark logo (translucent phoenix) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.018] z-0">
        <img 
          src={symbolWhite} 
          alt="" 
          className="w-[32rem] h-[32rem] sm:w-[42rem] sm:h-[42rem] object-contain" 
        />
      </div>

      {/* Atmospheric radial glow */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.04] z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(166,137,74,0.3) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
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
            <span className="section-label">Alicerces Institucionais</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-ivory mt-5 tracking-tight">
              Nossos Pilares de Atuação
            </h2>
            {/* Ornamental divider */}
            <div className="flex items-center justify-center gap-3 mt-6 mb-5">
              <div className="h-[1px] w-12" style={{ background: 'linear-gradient(to right, transparent, rgba(166,137,74,0.5))' }} />
              <span className="text-brand-gold/40 text-xs">✦</span>
              <div className="h-[1px] w-12" style={{ background: 'linear-gradient(to left, transparent, rgba(166,137,74,0.5))' }} />
            </div>
            <p className="text-sm sm:text-[15px] text-brand-ivory/55 font-sans font-light leading-relaxed max-w-2xl mx-auto">
              Estrutura voltada à sustentabilidade histórica da Nação Sefardita através de vertentes complementares de pesquisa acadêmica, celebração comunitária e curadoria literária.
            </p>
          </motion.div>
        </div>

        {/* Pillars grid */}
        {/* Pillars Infinite Carousel */}
        <div className="relative w-full overflow-hidden py-4 z-10">
          <div className="flex gap-6 sm:gap-8 animate-infinite-scroll">
            {[...PILLARS, ...PILLARS, ...PILLARS].map((pillar, idx) => {
              const originalIndex = (idx % PILLARS.length) + 1;
              return (
                <div
                  key={`${pillar.id}-${idx}`}
                  className="group relative flex flex-col cursor-default w-[280px] sm:w-[320px] shrink-0"
                >
                  {/* Card wrapper */}
                  <div 
                    className="flex-1 relative overflow-hidden transition-all duration-500 rounded-[3px] border border-brand-gold/15 group-hover:border-brand-gold/45 shadow-2xl group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.55),_0_0_20px_rgba(166,137,74,0.25)] flex flex-col"
                    style={{
                      minHeight: '330px',
                    }}
                  >
                    
                    {/* 1. BACKGROUND IMAGE OF THE CARD */}
                    <div className="absolute inset-0 z-0">
                      <img
                        src={getBgImage(pillar.id)}
                        alt={pillar.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Dark overlay for readability */}
                      <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-brand-deepest via-brand-dark-blue/85 to-brand-dark-blue/60 group-hover:via-brand-dark-blue/80" />
                    </div>

                    {/* 2. INNER GLASS GLOW BORDER */}
                    <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: 'inset 0 0 0 1px rgba(166, 137, 74, 0.15), inset 0 0 30px rgba(0,0,0,0.3)',
                      }}
                    />

                    {/* Corner ornaments */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-brand-gold/30 opacity-40 group-hover:opacity-100 transition-all duration-400" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-brand-gold/30 opacity-40 group-hover:opacity-100 transition-all duration-400" />

                    {/* 3. CARD CONTENT */}
                    <div className="relative z-10 p-6 sm:p-8 flex-1 flex flex-col justify-between">
                      
                      {/* Top row: Icon + Index */}
                      <div className="flex items-start justify-between">
                        <div className="w-10 h-10 flex items-center justify-center relative transition-all duration-400 group-hover:border-brand-gold/40"
                          style={{ 
                            background: 'rgba(0, 28, 48, 0.75)', 
                            border: '1px solid rgba(166, 137, 74, 0.2)', 
                            borderRadius: '2px',
                            backdropFilter: 'blur(4px)'
                          }}
                        >
                          {getIcon(pillar.iconName)}
                        </div>
                        <span className="font-display text-3xl font-extrabold text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors duration-450 select-none leading-none">
                          0{originalIndex}
                        </span>
                      </div>

                      {/* Bottom section: Text metadata */}
                      <div className="mt-8">
                        <h3 className="font-display text-lg sm:text-xl font-semibold text-brand-ivory mb-3 tracking-wide group-hover:text-brand-gold-light transition-colors duration-300">
                          {pillar.title}
                        </h3>

                        {/* Animated accent line */}
                        <div className="w-7 h-[1.5px] mb-4 transition-all duration-500 group-hover:w-14"
                          style={{ background: 'linear-gradient(to right, #5d101d, #a6894a)' }}
                        />

                        <p className="text-xs sm:text-[13.5px] text-brand-ivory/65 font-sans font-light leading-relaxed group-hover:text-brand-ivory/85 transition-colors duration-300">
                          {pillar.description}
                        </p>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] z-10"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(166,137,74,0.3) 30%, rgba(166,137,74,0.5) 50%, rgba(166,137,74,0.3) 70%, transparent)' }}
      />
    </section>
  );
}
