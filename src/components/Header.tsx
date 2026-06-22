import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import symbolGold from '../assets/symbol_gold.png';


interface HeaderProps {
  activeTab: 'inicio' | 'revista';
  onNavigate: (tab: 'inicio' | 'revista', sectionId?: string) => void;
}

export default function Header({ activeTab, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', tab: 'inicio' as const, section: '' },
    { label: 'Sobre', tab: 'inicio' as const, section: 'sobre' },
    { label: 'Pilares', tab: 'inicio' as const, section: 'pilares' },
    { label: 'Revista', tab: 'revista' as const, section: '' },
    { label: 'Jornada', tab: 'inicio' as const, section: 'jornada' },
    { label: 'Agenda', tab: 'inicio' as const, section: 'agenda' },
    { label: 'Acervo', tab: 'inicio' as const, section: 'acervo' },
  ];

  const handleItemClick = (tab: 'inicio' | 'revista', section: string) => {
    onNavigate(tab, section);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-dark-blue/97 backdrop-blur-xl border-b border-brand-gold/25 py-3 shadow-2xl shadow-black/40'
          : 'bg-gradient-to-b from-brand-deepest/90 via-brand-dark-blue/60 to-transparent py-5 border-b border-white/0'
      }`}
    >
      {/* Subtle gold shimmer top line when scrolled */}
      {scrolled && (
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
      )}

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">

          {/* Brand Emblem & Name */}
          <div
            onClick={() => handleItemClick('inicio', '')}
            className="flex items-center space-x-3.5 cursor-pointer group"
            role="button"
            aria-label="Instituto Aboab da Fonseca - Página Inicial"
          >
            {/* Emblem */}
            <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-brand-gold/30 group-hover:border-brand-gold/70 transition-all duration-500" />
              {/* Inner glow ring */}
              <div className="absolute inset-1 rounded-full border border-brand-gold/10 group-hover:border-brand-gold/25 transition-all duration-500" />
              {/* Background */}
              <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-brand-blue/30 via-brand-dark-blue/80 to-brand-wine-dark/40 overflow-hidden" />
              {/* Gold processed symbol image */}
              <img 
                src={symbolGold} 
                alt="Brasão do Instituto" 
                className="relative w-7 h-7 object-contain drop-shadow-[0_2px_6px_rgba(166,137,74,0.3)] transition-transform duration-500 group-hover:scale-105" 
              />
              {/* Hover rotation ornament */}
              <div className="absolute inset-0 rounded-full border border-dashed border-brand-gold/0 group-hover:border-brand-gold/20 transition-all duration-700 group-hover:rotate-45" style={{ transform: 'rotate(0deg)', transition: 'transform 0.8s ease, border-color 0.4s ease' }} />
            </div>

            {/* Text block */}
            <div className="flex flex-col">
              <span className="font-display text-[14px] sm:text-base font-semibold tracking-[0.08em] text-brand-ivory group-hover:text-brand-gold-light transition-colors duration-400 select-none leading-tight">
                Instituto Aboab da Fonseca
              </span>
              <span className="text-[8px] tracking-[0.22em] uppercase text-brand-gold/55 font-sans font-medium select-none mt-0.5">
                Hispano-Português · Est. Sefarad
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-7" aria-label="Navegação Principal">
            {menuItems.map((item) => {
              const isActive = item.tab === activeTab && (item.tab === 'revista' || !item.section);
              return (
                <button
                  key={item.label}
                  onClick={() => handleItemClick(item.tab, item.section)}
                  className={`relative py-1 text-[10px] font-sans font-semibold tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-brand-gold-light'
                      : 'text-brand-ivory/60 hover:text-brand-ivory/95'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute -bottom-0.5 left-0 right-0 h-[1.5px]"
                      style={{ background: 'linear-gradient(90deg, transparent, #cbb37a, transparent)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center">
            <button
              onClick={() => handleItemClick('revista', '')}
              className="relative px-4 py-2 overflow-hidden group cursor-pointer"
              aria-label="Acessar Revista do Instituto"
            >
              {/* Border */}
              <span className="absolute inset-0 border border-brand-gold/40 group-hover:border-brand-gold/80 transition-colors duration-300" style={{ borderRadius: '2px' }} />
              {/* Background fill on hover */}
              <span className="absolute inset-0 bg-brand-gold/5 group-hover:bg-brand-gold/15 transition-colors duration-300" style={{ borderRadius: '2px' }} />
              {/* Shimmer line top */}
              <span className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold-light/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <span className="relative font-sans text-[9px] uppercase tracking-[0.2em] font-bold text-brand-gold group-hover:text-brand-gold-light transition-colors duration-300">
                Revista Digital
              </span>
            </button>
          </div>

          {/* Mobile & Tablet Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-ivory/70 hover:text-brand-gold transition-colors duration-300 focus:outline-none p-1.5 rounded"
              aria-label="Abrir Menu"
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="xl:hidden overflow-hidden"
          >
            {/* Top gold line */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
            
            <div className="bg-brand-dark-blue/99 backdrop-blur-xl px-5 pt-4 pb-8 space-y-1">
              {menuItems.map((item) => {
                const isActive = item.tab === activeTab && (item.tab === 'revista' || !item.section);
                return (
                  <button
                    key={item.label}
                    onClick={() => handleItemClick(item.tab, item.section)}
                    className={`w-full text-left py-2.5 px-4 font-sans text-xs font-semibold tracking-[0.12em] uppercase transition-all duration-200 border-l-2 ${
                      isActive
                        ? 'border-brand-gold text-brand-gold bg-brand-gold/5'
                        : 'border-transparent text-brand-ivory/60 hover:text-brand-ivory hover:border-brand-gold/30 hover:bg-white/3'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-4 border-t border-brand-gold/10 mt-4">
                <button
                  onClick={() => handleItemClick('revista', '')}
                  className="w-full py-3 border border-brand-gold/40 text-brand-gold font-sans text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-gold/8 transition-all duration-200"
                  style={{ borderRadius: '2px' }}
                >
                  Revista Digital
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
