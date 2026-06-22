import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, User, Clock, X, BookOpen, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ARTICLES } from '../data';
import { Article } from '../types';
import symbolWhite from '../assets/symbol_white.png';

interface RevistaProps {
  isStandAlone?: boolean;
}

const CATEGORIES = [
  'Todos',
  'História e Memória',
  'Judaísmo Sefardita',
  'Tradição Hispano-Portuguesa',
  'Livros e Resenhas'
];

export default function Revista({ isStandAlone = false }: RevistaProps) {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredArticles = activeCategory === 'Todos'
    ? ARTICLES
    : ARTICLES.filter(art => art.category === activeCategory);

  useEffect(() => {
    document.body.style.overflow = selectedArticle ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedArticle]);

  return (
    <section className={`relative py-28 sm:py-36 overflow-hidden ${isStandAlone ? 'pt-36' : ''}`}
      style={{
        background: 'linear-gradient(135deg, #fdfbf7 0%, #f5f2eb 45%, #ede9e0 100%)',
      }}
    >
      {/* Parchment texture overlay */}
      <div className="absolute inset-0 paper-texture opacity-100 pointer-events-none" />

      {/* Large background watermark logo (phoenix) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.012] z-0">
        <img 
          src={symbolWhite} 
          alt="" 
          className="w-[34rem] h-[34rem] sm:w-[44rem] sm:h-[44rem] object-contain filter invert opacity-30" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">

        {/* Editorial section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 sm:mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Publicações Periódicas</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-blue mt-4 tracking-tight">
              Revista do Instituto
            </h2>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-16 h-[2px]" style={{ background: 'linear-gradient(to right, #5d101d, rgba(93,16,29,0.2))' }} />
              <span className="text-brand-wine/40 text-xs">✦</span>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-sm text-slate-500 font-sans font-light text-sm leading-relaxed md:text-right"
          >
            Nosso periódico oficial reúne artigos, ensaios, resenhas críticas e transcrições anotadas focadas no resgate e preservação sistemática da tradição espiritual luso-sefardita.
          </motion.p>
        </div>

        {/* Category filter bar */}
        <div className="mb-14 overflow-x-auto">
          <div className="flex gap-2 min-w-max border-b border-brand-blue/10 pb-2">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`py-2.5 px-4 text-[10px] tracking-[0.18em] uppercase font-sans font-semibold transition-all duration-250 whitespace-nowrap cursor-pointer ${
                  activeCategory === category
                    ? 'text-brand-wine font-bold border-b-2 border-brand-wine'
                    : 'text-slate-400 hover:text-brand-blue'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid (Asymmetric Editorial Style) */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 border border-brand-gold/20 bg-brand-parchment"
            style={{ borderRadius: '2px' }}
          >
            <BookOpen className="mx-auto text-brand-gold/40 mb-5" size={32} />
            <p className="font-serif italic text-xl text-slate-400">
              Nenhum artigo publicado sob esta categoria no momento.
            </p>
            <p className="text-xs text-slate-400 font-sans mt-3">
              Em breve, nossa equipe editorial adicionará ensaios extraordinários aqui.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {/* Featured Article (First article, large horizontal banner) */}
            {filteredArticles.length > 0 && activeCategory === 'Todos' && (
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white border border-brand-gold/15 overflow-hidden shadow-xl"
                style={{ borderRadius: '2px' }}
              >
                {/* Image panel */}
                <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[350px] overflow-hidden bg-brand-blue">
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-dark-blue/80 via-brand-dark-blue/20 to-transparent z-10" />
                  <img
                    src={filteredArticles[0].imageUrl}
                    alt={filteredArticles[0].title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <span className="absolute top-4 left-4 z-20 font-sans text-[8px] tracking-[0.2em] font-bold uppercase px-3 py-1.5 bg-brand-deepest text-brand-gold border border-brand-gold/30">
                    Destaque Editorial
                  </span>
                  <span className="absolute bottom-4 right-4 z-20 font-sans text-[9px] tracking-wider font-medium flex items-center gap-1 text-brand-ivory/70">
                    <Clock size={10} className="text-brand-gold" />
                    {filteredArticles[0].readTime}
                  </span>
                </div>

                {/* Content panel */}
                <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 bg-brand-parchment">
                  <div>
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-4 text-xs text-slate-400 font-sans">
                      <div className="flex items-center gap-1.5">
                        <User size={11} className="text-brand-gold/60" />
                        <span className="font-medium text-slate-500">{filteredArticles[0].author}</span>
                      </div>
                      <span>·</span>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={11} className="text-brand-gold/60" />
                        <span>{filteredArticles[0].date}</span>
                      </div>
                    </div>

                    <span className="font-display text-[9px] tracking-[0.2em] uppercase font-bold text-brand-gold-light block mb-2">
                      {filteredArticles[0].category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-blue group-hover:text-brand-wine transition-colors duration-300 leading-tight tracking-tight mb-5">
                      {filteredArticles[0].title}
                    </h3>
                    <div className="w-16 h-[1.5px] mb-5 bg-gradient-to-r from-brand-gold to-transparent" />
                    <p className="text-sm text-slate-600 font-sans font-light leading-relaxed mb-6">
                      {filteredArticles[0].summary}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-brand-gold/15 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedArticle(filteredArticles[0])}
                      className="flex items-center gap-2 text-[11px] font-sans font-bold tracking-[0.18em] uppercase text-brand-wine hover:text-brand-blue transition-colors duration-200 cursor-pointer"
                    >
                      <span>Ler Ensaio Completo</span>
                      <ChevronRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            )}

            {/* Asymmetrical grid for the rest of articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {(activeCategory === 'Todos' ? filteredArticles.slice(1) : filteredArticles).map((article, index) => {
                // Determine layout variation for visual asymmetry
                const isLargeCard = index % 3 === 0;
                const spanClass = isLargeCard ? 'lg:col-span-2 lg:flex-row' : 'lg:col-span-1 flex-col';
                return (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`group flex ${spanClass} bg-white border border-brand-gold/12 overflow-hidden shadow-lg transition-all duration-400 hover:shadow-2xl hover:border-brand-gold/35 rounded-[3px]`}
                  >
                    {/* Image banner */}
                    <div className={`relative overflow-hidden bg-brand-blue shrink-0 ${isLargeCard ? 'h-52 sm:h-60 lg:h-auto lg:w-[42%]' : 'h-52 w-full'}`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-blue/80 via-brand-dark-blue/10 to-transparent z-10" />
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.04] transition-transform duration-700"
                        loading="lazy"
                      />
                      <span className="absolute top-4 left-4 z-20 font-sans text-[8px] tracking-[0.2em] font-bold uppercase px-2.5 py-1 bg-brand-dark-blue/90 text-brand-gold-light border border-brand-gold/20">
                        {article.category}
                      </span>
                    </div>

                    {/* Content body */}
                    <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between bg-brand-parchment">
                      <div>
                        {/* Meta */}
                        <div className="flex items-center gap-2 mb-3.5 text-xs text-slate-400 font-sans">
                          <span className="font-medium text-slate-500 truncate max-w-[120px]">{article.author}</span>
                          <span>·</span>
                          <span>{article.date}</span>
                        </div>

                        <h4 className="font-serif text-lg sm:text-xl font-bold text-brand-blue group-hover:text-brand-wine transition-colors duration-300 leading-snug tracking-tight mb-4">
                          {article.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 font-sans font-light leading-relaxed line-clamp-3 mb-6">
                          {article.summary}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-brand-gold/10 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedArticle(article)}
                          className="flex items-center gap-1.5 text-[10px] font-sans font-bold tracking-[0.15em] uppercase text-brand-wine hover:text-brand-blue transition-colors duration-250 cursor-pointer"
                        >
                          <span>Acessar Leitura</span>
                          <ChevronRight size={12} />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* ============================================
          IMMERSIVE ARTICLE READER MODAL
          ============================================ */}
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

              {/* Click outside to close */}
              <div className="absolute inset-0 -z-10" onClick={() => setSelectedArticle(null)} />

              {/* Reader panel */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-4xl bg-brand-parchment overflow-hidden relative"
                style={{
                  borderRadius: '2px',
                  border: '1px solid rgba(166,137,74,0.3)',
                  boxShadow: '0 40px 120px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.3)',
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

                {/* Banner image */}
                <div className="relative h-72 sm:h-[400px] bg-brand-blue overflow-hidden">
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

                  {/* Article header inside banner */}
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

                {/* Reader body */}
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

                  {/* Article text */}
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

                  {/* Tail ornament */}
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

      {/* Bottom transition fade overlay (no hard borders) */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-brand-deepest to-transparent pointer-events-none z-10" />
    </section>
  );
}
