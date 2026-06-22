import React, { useRef } from 'react';
import { BookOpen, Compass, ChevronRight, Star } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import rabinoBg from '../assets/rabino_bg.jpg';
import esnogaPanel from '../assets/esnoga_panel.jpg';

interface HeroProps {
  onNavigate: (tab: 'inicio' | 'revista', sectionId?: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll parallax / zoom effects
  const { scrollY } = useScroll();
  const bgScale = useTransform(scrollY, [0, 800], [1.02, 1.15]);
  const bgY = useTransform(scrollY, [0, 800], [0, 100]);
  const bgOpacity = useTransform(scrollY, [0, 800], [1, 0.4]);
  const contentY = useTransform(scrollY, [0, 800], [0, -30]);
  const panelScrollY = useTransform(scrollY, [0, 800], [0, -50]);

  const scrollToAbout = () => {
    onNavigate('inicio', 'sobre');
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      aria-label="Apresentação do Instituto Aboab da Fonseca"
      style={{ background: '#000f1a' }}
    >
      {/* =============================================
          BACKGROUND LAYER: Rabino portrait + gradients
          ============================================= */}

      {/* Rabino portrait - right side, fading left */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={rabinoBg}
          alt="Retrato do Rabino Isaac Aboab da Fonseca"
          className="absolute right-0 top-0 h-full object-cover"
          style={{ 
            width: '65%', 
            objectPosition: 'top center',
            scale: bgScale,
            y: bgY,
            opacity: bgOpacity
          }}
        />

        {/* Gradient: left side darkens completely (where text sits) */}
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #000f1a 0%, #000f1a 30%, rgba(0,15,26,0.92) 45%, rgba(0,15,26,0.6) 60%, rgba(0,15,26,0.2) 80%, transparent 100%)'
          }}
        />

        {/* Gradient: top darkening */}
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,15,26,0.8) 0%, transparent 20%, transparent 75%, rgba(0,15,26,0.95) 100%)'
          }}
        />

        {/* Subtle vignette edge overall */}
        <div className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 20% 50%, transparent 0%, rgba(0,10,18,0.4) 80%)',
          }}
        />
      </div>

      {/* Atmospheric gold glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[30%] left-[10%] w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(166,137,74,0.05) 0%, transparent 70%)', filter: 'blur(50px)' }}
        />
        <div className="absolute bottom-[20%] left-[20%] w-60 h-60 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(93,16,29,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }}
        />
      </div>

      {/* =============================================
          MAIN CONTENT GRID
          ============================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">

          {/* =============================================
              LEFT COLUMN: Text content (like the reference)
              ============================================= */}
          <motion.div 
            className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center py-12 lg:py-0"
            style={{ y: contentY }}
          >

            {/* Badge/Label — like the reference top badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 inline-flex items-center gap-2.5 self-start"
            >
              <div className="flex items-center gap-2 px-4 py-2"
                style={{
                  background: 'rgba(166,137,74,0.08)',
                  border: '1px solid rgba(166,137,74,0.3)',
                  borderRadius: '2px',
                }}
              >
                <Star size={9} className="text-brand-gold fill-brand-gold" />
                <span className="font-display text-[10px] tracking-[0.25em] uppercase font-semibold text-brand-gold">
                  Preservando a Herança Sefardita
                </span>
                <Star size={9} className="text-brand-gold fill-brand-gold" />
              </div>
            </motion.div>

            {/* Main title — bold left-aligned like reference */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-7"
            >
              <h1 className="font-display font-bold tracking-tight leading-[1.05] text-brand-ivory">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                  Instituto
                </span>
                <span
                  className="block text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl mt-1"
                  style={{
                    background: 'linear-gradient(135deg, #e8d5a3 0%, #cbb37a 35%, #a6894a 65%, #856d3b 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Aboab
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-brand-ivory mt-1">
                  da Fonseca
                </span>
              </h1>
            </motion.div>

            {/* Subtitle line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex items-center gap-3 mb-7"
            >
              <div className="w-10 h-[1.5px]"
                style={{ background: 'linear-gradient(to right, #a6894a, transparent)' }}
              />
              <span className="font-serif text-base sm:text-lg text-brand-gold-light italic">
                História · Memória · Tradição Sefardita
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-sm sm:text-[15px] text-brand-ivory/60 max-w-md mb-10 font-sans font-light leading-[1.85] tracking-wide"
            >
              Somos um espaço dedicado à preservação, estudo e divulgação da herança judaica hispano-portuguesa, reunindo artigos, eventos, livros e conteúdos culturais de alto teor acadêmico.
            </motion.p>

            {/* CTA Buttons — like reference "SOLICITAR ORÇAMENTO" style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Primary CTA */}
              <button
                onClick={() => onNavigate('revista')}
                id="hero-cta-primary"
                className="group flex items-center justify-center gap-3 px-7 py-3.5 cursor-pointer transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #a6894a 0%, #cbb37a 50%, #a6894a 100%)',
                  backgroundSize: '200% auto',
                  color: '#000f1a',
                  borderRadius: '2px',
                  fontFamily: '"Cinzel", serif',
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  boxShadow: '0 6px 28px rgba(166,137,74,0.3)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundPosition = 'right center';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 36px rgba(166,137,74,0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundPosition = 'left center';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 28px rgba(166,137,74,0.3)';
                }}
              >
                <BookOpen size={15} />
                <span>Revista Digital</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-250" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={scrollToAbout}
                id="hero-cta-secondary"
                className="group flex items-center justify-center gap-3 px-7 py-3.5 cursor-pointer transition-all duration-300"
                style={{
                  background: 'transparent',
                  color: '#f8f5f0',
                  border: '1px solid rgba(248,245,240,0.2)',
                  borderRadius: '2px',
                  fontFamily: '"Cinzel", serif',
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(166,137,74,0.5)';
                  (e.currentTarget as HTMLElement).style.color = '#cbb37a';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(166,137,74,0.06)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(248,245,240,0.2)';
                  (e.currentTarget as HTMLElement).style.color = '#f8f5f0';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                <Compass size={15} />
                <span>Conhecer o Instituto</span>
              </button>
            </motion.div>

            {/* Bottom stat strip — like reference ISO badge / stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="mt-12 flex items-center gap-6 flex-wrap"
            >
              {[
                { value: 'Séc. XV', label: 'Origens Ibéricas' },
                { value: '1642', label: 'Fundação no Recife' },
                { value: '380+', label: 'Anos de Herança' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  {i > 0 && <div className="w-[1px] h-8 bg-brand-gold/20" />}
                  <div>
                    <div className="font-display text-lg font-bold text-brand-gold-light leading-none">
                      {stat.value}
                    </div>
                    <div className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-ivory/40 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* =============================================
              SPACER (center gap)
              ============================================= */}
          <div className="hidden xl:block xl:col-span-1" />

          {/* =============================================
              RIGHT/CENTER COLUMN: Featured image panel
              ============================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              style={{ y: panelScrollY }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg"
            >
              {/* Main framed image card with Framer Motion hover */}
              <motion.div 
                className="relative overflow-hidden cursor-pointer"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 45px 100px rgba(0,0,0,0.75), 0 0 25px rgba(166,137,74,0.25)' 
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{
                  borderRadius: '3px',
                  border: '1px solid rgba(166,137,74,0.35)',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(166,137,74,0.1) inset',
                }}
              >
                {/* Inner corner ornaments */}
                <div className="absolute top-3 left-3 w-6 h-6 z-20 pointer-events-none"
                  style={{ borderTop: '1.5px solid rgba(203,179,122,0.6)', borderLeft: '1.5px solid rgba(203,179,122,0.6)' }}
                />
                <div className="absolute top-3 right-3 w-6 h-6 z-20 pointer-events-none"
                  style={{ borderTop: '1.5px solid rgba(203,179,122,0.6)', borderRight: '1.5px solid rgba(203,179,122,0.6)' }}
                />
                <div className="absolute bottom-3 left-3 w-6 h-6 z-20 pointer-events-none"
                  style={{ borderBottom: '1.5px solid rgba(203,179,122,0.6)', borderLeft: '1.5px solid rgba(203,179,122,0.6)' }}
                />
                <div className="absolute bottom-3 right-3 w-6 h-6 z-20 pointer-events-none"
                  style={{ borderBottom: '1.5px solid rgba(203,179,122,0.6)', borderRight: '1.5px solid rgba(203,179,122,0.6)' }}
                />

                {/* Main image with micro brightness effect on hover */}
                <motion.img
                  src={esnogaPanel}
                  alt="Esnoga — Sinagoga Portuguesa de Amsterdã"
                  className="w-full object-cover"
                  style={{ height: '420px', display: 'block' }}
                  whileHover={{ filter: 'brightness(1.05)' }}
                  transition={{ duration: 0.3 }}
                />

                {/* Bottom gradient overlay on the panel image */}
                <div className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,15,26,0.85) 0%, rgba(0,15,26,0.2) 40%, transparent 70%)',
                  }}
                />

                {/* Panel caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="font-display text-[9px] tracking-[0.22em] uppercase text-brand-gold/80 font-semibold block mb-1">
                        Patrimônio Histórico
                      </span>
                      <h3 className="font-serif text-lg font-bold text-brand-ivory leading-tight">
                        Esnoga de Amsterdã
                      </h3>
                      <p className="font-sans text-[11px] text-brand-ivory/55 mt-1">
                        Sinagoga Portuguesa · Séc. XVII
                      </p>
                    </div>

                    {/* Badge like ISO badge in reference */}
                    <div className="flex flex-col items-center justify-center p-3 shrink-0"
                      style={{
                        background: 'rgba(0,15,26,0.85)',
                        border: '1px solid rgba(166,137,74,0.4)',
                        borderRadius: '2px',
                        minWidth: '80px',
                      }}
                    >
                      <span className="font-display text-[8px] tracking-[0.15em] uppercase text-brand-gold/70 block mb-0.5">
                        Fundada em
                      </span>
                      <span className="font-display text-xl font-bold text-brand-gold leading-none">
                        1675
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating info card — top right (like the STATUS card in reference) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="absolute -top-5 -right-5 hidden sm:block"
                style={{
                  background: 'rgba(0,28,48,0.95)',
                  border: '1px solid rgba(166,137,74,0.35)',
                  borderRadius: '3px',
                  padding: '1rem 1.25rem',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                  minWidth: '170px',
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                  <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-brand-gold/70">
                    Status Institucional
                  </span>
                </div>
                <div className="font-display text-[10px] tracking-[0.15em] uppercase text-brand-gold font-semibold mb-2">
                  Portal Ativo
                </div>
                <div className="space-y-1.5 pt-2 border-t border-brand-gold/15">
                  {[
                    { key: 'Fundação', val: '2024' },
                    { key: 'Edição', val: 'Vol. I · 2026' },
                  ].map(({ key, val }) => (
                    <div key={key} className="flex justify-between gap-4">
                      <span className="font-mono text-[8px] text-brand-ivory/40 uppercase tracking-wider">{key}</span>
                      <span className="font-mono text-[8px] text-brand-gold/80 font-bold tracking-wider">{val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating bottom-left info — IAF seal */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.1 }}
                whileHover={{ scale: 1.05, y: 2 }}
                className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3"
                style={{
                  background: 'rgba(0,28,48,0.95)',
                  border: '1px solid rgba(93,16,29,0.5)',
                  borderRadius: '3px',
                  padding: '0.875rem 1.1rem',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                }}
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #5d101d, #3d0b13)',
                    border: '1px solid rgba(166,137,74,0.35)',
                  }}
                >
                  <span className="font-display text-[8px] font-bold text-brand-gold tracking-wider">IAF</span>
                </div>
                <div>
                  <div className="font-display text-[8px] tracking-[0.18em] uppercase text-brand-wine font-semibold">
                    Acervo Histórico
                  </div>
                  <div className="font-sans text-[10px] text-brand-ivory/55 mt-0.5">
                    Em construção · 2026
                  </div>
                </div>
              </motion.div>

              {/* Subtle glow behind the card */}
              <div className="absolute inset-0 -z-10 rounded-lg pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 50%, rgba(166,137,74,0.08) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                  transform: 'scale(1.3)',
                }}
              />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #000f1a, transparent)' }}
      />
    </section>
  );
}
