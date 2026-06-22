import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Calendar, User, Clock, X, BookOpen, Search, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ARTICLES } from '../data';
import { Article } from '../types';

const CATEGORIES = [
  'Todos',
  'História e Memória',
  'Judaísmo Sefardita',
  'Tradição Hispano-Portuguesa',
  'Livros e Resenhas'
];

export default function RevistaPage() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const filteredArticles = ARTICLES.filter(art => {
    const matchesCategory = activeCategory === 'Todos' || art.category === activeCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    document.body.style.overflow = selectedArticle ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedArticle]);

  return (
    <div className="relative min-h-screen pb-16 paper-texture bg-[#f5f2eb]">
      
      {/* =============================================
          HERO SECTION: Revista Editorial Header
          ============================================= */}
      <section className="relative pt-20 pb-16 border-b border-brand-gold/20 bg-brand-deepest text-brand-ivory overflow-hidden">
        {/* Subtle gold lines */}
        <div className="absolute inset-0 opacity-15 pointer-events-none select-none">
          <svg className="w-full h-full text-brand-gold" fill="none" stroke="currentColor">
            <line x1="0" y1="20%" x2="100%" y2="20%" strokeWidth="0.5" />
            <line x1="0" y1="80%" x2="100%" y2="80%" strokeWidth="0.5" />
            <circle cx="50%" cy="50%" r="220" strokeWidth="0.5" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-brand-gold">
              Periódico de Pesquisa &amp; Memória Sefardita
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-wider mt-4 gold-text-gradient select-none">
              Revista do Instituto
            </h1>
            <p className="font-serif text-sm sm:text-base italic text-brand-gold-pale/70 mt-3">
              Volume I · Edição 2026 · ISSN Pendente
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-3 my-6"
          >
            <div className="h-[0.5px] w-16 bg-brand-gold/30" />
            <span className="text-brand-gold-light/40 text-xs">✦</span>
            <div className="h-[0.5px] w-16 bg-brand-gold/30" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl mx-auto text-xs sm:text-sm font-sans font-light leading-relaxed text-brand-ivory/60"
          >
            Navegue pelos ensaios críticos, transcrições paleográficas, estudos de linhagens familiares e antologias de tradução organizadas sob a chancela acadêmica do Instituto Aboab da Fonseca.
          </motion.p>
        </div>
      </section>

      {/* =============================================
          SEARCH & FILTER MATRIX
          ============================================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-brand-blue/10">
          
          {/* Category Filters */}
          <div className="flex gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none max-w-full">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`py-2 px-4 text-[9px] sm:text-[10px] tracking-[0.15em] uppercase font-sans font-bold transition-all duration-250 whitespace-nowrap cursor-pointer rounded-[2px] border ${
                  activeCategory === category
                    ? 'bg-brand-blue text-brand-ivory border-brand-blue'
                    : 'bg-white/80 text-slate-500 border-brand-gold/15 hover:border-brand-gold/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:max-w-xs shrink-0">
            <input
              type="text"
              placeholder="Buscar ensaios ou autores..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 font-sans text-xs bg-white/90 border border-brand-gold/20 rounded-[2px] focus:outline-none focus:border-brand-gold transition-colors text-slate-800"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={13} />
          </div>

        </div>
      </section>

      {/* =============================================
          GRID OF ARTICLES (masonry-style composition)
          ============================================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-4 relative z-10">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-24 bg-white border border-brand-gold/15 rounded-[2px] shadow-sm">
            <BookOpen className="mx-auto text-brand-gold/30 mb-5 animate-float" size={36} />
            <h3 className="font-serif italic text-xl text-slate-500 mb-2">Nenhum resultado encontrado</h3>
            <p className="text-xs text-slate-400 font-sans max-w-md mx-auto">
              Não encontramos nenhuma publicação para os critérios informados. Experimente buscar termos mais gerais ou limpe os filtros selecionados.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, idx) => {
              // Create dynamic grid span for a premium look
              const isLarge = idx === 0 || idx === 4;
              return (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className={`group flex flex-col bg-white border border-brand-gold/12 overflow-hidden shadow-md hover:shadow-xl hover:border-brand-gold/30 rounded-[2px] transition-all duration-400 ${
                    isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                  }`}
                >
                  {/* Photo frame */}
                  <div className={`relative overflow-hidden bg-brand-blue ${isLarge ? 'h-64 sm:h-80' : 'h-52'}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-blue/85 via-brand-dark-blue/20 to-transparent z-10" />
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-700"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 z-20 font-sans text-[8px] tracking-[0.2em] font-bold uppercase px-3 py-1.5 bg-brand-deepest text-brand-gold border border-brand-gold/35 rounded-[1px]">
                      {article.category}
                    </span>
                    <span className="absolute bottom-4 right-4 z-20 font-sans text-[9px] tracking-wider font-semibold flex items-center gap-1 text-brand-ivory/80">
                      <Clock size={10} className="text-brand-gold" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Body info */}
                  <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between bg-brand-parchment">
                    <div>
                      {/* Meta information */}
                      <div className="flex items-center gap-3 mb-4 text-xs text-slate-400 font-sans">
                        <div className="flex items-center gap-1">
                          <User size={11} className="text-brand-gold/60" />
                          <span className="font-semibold text-slate-500">{article.author}</span>
                        </div>
                        <span>·</span>
                        <div className="flex items-center gap-1">
                          <Calendar size={11} className="text-brand-gold/60" />
                          <span>{article.date}</span>
                        </div>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-blue group-hover:text-brand-wine transition-colors duration-300 leading-snug tracking-tight mb-4">
                        {article.title}
                      </h3>
                      
                      <div className="w-12 h-[1.5px] mb-4 bg-gradient-to-r from-brand-gold to-transparent group-hover:w-20 transition-all duration-400" />
                      
                      <p className="text-xs sm:text-sm text-slate-600 font-sans font-light leading-relaxed mb-6 line-clamp-3">
                        {article.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-brand-gold/10 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedArticle(article)}
                        className="flex items-center gap-2 text-[10px] font-sans font-bold tracking-[0.18em] uppercase text-brand-wine hover:text-brand-blue transition-colors duration-250 cursor-pointer"
                      >
                        <span>Acessar ensaio integral</span>
                        <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </section>

      {/* =============================================
          IMMERSIVE ARTICLE READER MODAL (REUSED & ENHANCED)
          ============================================= */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 overflow-y-auto"
            style={{ background: 'rgba(0,15,26,0.85)', backdropFilter: 'blur(12px)' }}
            role="dialog"
            aria-modal="true"
            aria-label={`Lendo: ${selectedArticle.title}`}
          >
            <div className="min-h-screen py-10 px-4 sm:px-6 flex items-start justify-center">
              
              {/* Overlay close click */}
              <div className="absolute inset-0 -z-10" onClick={() => setSelectedArticle(null)} />

              {/* Reader paper container */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-4xl bg-brand-parchment overflow-hidden relative rounded-[2px]"
                style={{
                  border: '1px solid rgba(166,137,74,0.3)',
                  boxShadow: '0 40px 120px rgba(0,0,0,0.5)',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Silk bookmark */}
                <div className="absolute top-0 right-14 w-7 h-20 z-20 flex items-end justify-center pb-2"
                  style={{ background: 'linear-gradient(180deg, #5d101d, #3d0b13)', borderBottom: '3px solid rgba(166,137,74,0.5)' }}
                >
                  <span className="font-display text-[7px] text-brand-gold/80 uppercase tracking-[0.15em] select-none"
                    style={{ writingMode: 'vertical-rl' }}
                  >
                    Leitura
                  </span>
                </div>

                {/* Banner illustration */}
                <div className="relative h-64 sm:h-[380px] bg-brand-blue overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-blue via-brand-dark-blue/50 to-transparent z-10" />
                  <img
                    src={selectedArticle.imageUrl}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Close button */}
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="absolute top-5 left-5 z-30 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-250 focus:outline-none"
                    style={{
                      background: 'rgba(0,15,26,0.85)',
                      border: '1px solid rgba(166,137,74,0.3)',
                      color: '#f8f5f0',
                    }}
                    aria-label="Fechar leitor"
                  >
                    <X size={17} />
                  </button>

                  {/* Banner content */}
                  <div className="absolute bottom-8 left-7 right-14 z-20 max-w-2xl">
                    <span className="inline-block font-display text-[9px] tracking-[0.22em] font-semibold uppercase px-3 py-1.5 mb-4"
                      style={{
                        background: 'rgba(93,16,29,0.95)',
                        color: '#cbb37a',
                        border: '1px solid rgba(166,137,74,0.25)',
                        borderRadius: '1px',
                      }}
                    >
                      {selectedArticle.category}
                    </span>
                    <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-brand-ivory leading-tight tracking-wide drop-shadow-md">
                      {selectedArticle.title}
                    </h1>
                  </div>
                </div>

                {/* Text area */}
                <div className="p-8 sm:p-12 md:p-16 paper-texture">
                  {/* Meta bar */}
                  <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 font-sans pb-7 mb-8"
                    style={{ borderBottom: '1px solid rgba(166,137,74,0.2)' }}
                  >
                    <div className="flex items-center gap-2">
                      <User size={13} className="text-brand-gold/70" />
                      <span className="font-semibold text-slate-700">{selectedArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={13} className="text-brand-gold/70" />
                      <span>{selectedArticle.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={13} className="text-brand-gold/70" />
                      <span>{selectedArticle.readTime}</span>
                    </div>
                  </div>

                  {/* Body text splits */}
                  <div className="font-serif text-lg sm:text-xl text-slate-800 leading-[1.9] space-y-7 antialiased">
                    {selectedArticle.content.split('\n\n').map((para, i) => (
                      i === 0 ? (
                        <p key={i} className="drop-cap text-slate-900 font-light">
                          {para}
                        </p>
                      ) : (
                        <p key={i} className="font-light">
                          {para}
                        </p>
                      )
                    ))}
                  </div>

                  {/* Ornament tail */}
                  <div className="flex items-center justify-center gap-4 my-14 sm:my-16">
                    <div className="h-[0.5px] w-20" style={{ background: 'linear-gradient(to right, transparent, rgba(166,137,74,0.5))' }} />
                    <span className="font-serif text-brand-gold/60 text-sm tracking-[0.2em] italic select-none">✦ Finis ✦</span>
                    <div className="h-[0.5px] w-20" style={{ background: 'linear-gradient(to left, transparent, rgba(166,137,74,0.5))' }} />
                  </div>

                  {/* Close button footer */}
                  <div className="flex justify-center pt-6" style={{ borderTop: '1px solid rgba(166,137,74,0.15)' }}>
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="px-8 py-3 font-sans text-[11px] uppercase tracking-[0.2em] font-bold cursor-pointer transition-all duration-300 flex items-center gap-2"
                      style={{
                        background: 'linear-gradient(135deg, #5d101d, #3d0b13)',
                        color: '#cbb37a',
                        border: '1px solid rgba(166,137,74,0.3)',
                        borderRadius: '2px',
                      }}
                    >
                      <X size={12} />
                      Concluir Leitura e Fechar
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
