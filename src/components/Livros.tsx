import React, { useState } from 'react';
import { BookMarked, Library, ThumbsUp, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BOOKS } from '../data';

export default function Livros() {
  const [interestedBookId, setInterestedBookId] = useState<string | null>(null);

  const handleInterest = (bookId: string) => {
    setInterestedBookId(bookId);
    setTimeout(() => setInterestedBookId(null), 4000);
  };

  return (
    <section 
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 80% 20%, #001c30 0%, #000f1a 60%, #3d0b13 100%)',
      }}
    >
      {/* Smooth transition from light Eventos to dark Livros */}
      <div className="absolute top-0 inset-x-0 h-24 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, #fbf9f5 0%, transparent 100%)' }}
      />

      {/* Decorative shelf lines */}
      <div className="absolute inset-y-0 left-1/4 w-[1px] bg-white/[0.025] pointer-events-none hidden xl:block" />
      <div className="absolute inset-y-0 right-1/4 w-[1px] bg-white/[0.025] pointer-events-none hidden xl:block" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Curadoria Acadêmica</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-ivory mt-5 tracking-tight">
              Livros &amp; Publicações
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6 mb-5">
              <div className="h-[1px] w-12" style={{ background: 'linear-gradient(to right, transparent, rgba(166,137,74,0.5))' }} />
              <span className="text-brand-gold/40 text-xs">✦</span>
              <div className="h-[1px] w-12" style={{ background: 'linear-gradient(to left, transparent, rgba(166,137,74,0.5))' }} />
            </div>
            <p className="text-sm sm:text-[15px] text-brand-ivory/55 font-sans font-light leading-relaxed max-w-2xl mx-auto px-2">
              Espaço dedicado à divulgação de obras, tratados luso-sefarditas históricos, artigos indexados, estudos científicos e materiais de alta relevância recomendados pelo Instituto Aboab da Fonseca.
            </p>
          </motion.div>
        </div>

        {/* Books grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
          {BOOKS.map((book, idx) => {
            const isInterested = interestedBookId === book.id;
            return (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group card-glow-gold flex flex-col cursor-default font-sans"
                style={{
                  background: 'linear-gradient(145deg, rgba(0,43,73,0.55) 0%, rgba(0,28,48,0.75) 100%)',
                  border: '1px solid rgba(166,137,74,0.18)',
                  borderRadius: '3px',
                  overflow: 'hidden',
                }}
              >
                {/* Book cover mockup */}
                <div className="relative p-4 sm:p-7 pb-4 sm:pb-6 flex items-center justify-center overflow-hidden"
                  style={{ background: 'rgba(0,15,26,0.4)', borderBottom: '1px solid rgba(166,137,74,0.08)' }}
                >
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 opacity-60"
                    style={{ background: 'radial-gradient(circle at 50% 50%, transparent 30%, rgba(0,15,26,0.8) 100%)' }}
                  />

                  {/* 3D Book spine */}
                  <div className={`relative w-24 h-36 sm:w-32 sm:h-48 shadow-2xl transform -rotate-3 group-hover:rotate-1 group-hover:scale-[1.08] group-hover:-translate-y-2 transition-all duration-500 ${book.coverColor} z-10`}
                    style={{ borderRadius: '2px', borderLeft: '4.5px solid rgba(0,0,0,0.2)' }}
                  >
                    {/* Inner gold frame */}
                    <div className="absolute inset-1.5 pointer-events-none"
                       style={{ border: '1px solid rgba(203,179,122,0.25)', borderRadius: '1px' }}
                    />
                    {/* Spine shadow */}
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-black/15 z-20" />

                    {/* Book content */}
                    <div className="relative z-10 flex flex-col justify-between h-full p-2.5 sm:p-4">
                      <div>
                        <span className="block font-display text-[5px] sm:text-[6px] uppercase tracking-[0.2em] text-brand-gold/80 mb-1 sm:mb-1.5">
                          Memória Sefardita
                        </span>
                        <h4 className="font-serif text-[7px] sm:text-[9.5px] text-brand-ivory font-bold leading-tight tracking-wide line-clamp-4">
                          {book.title}
                        </h4>
                      </div>
                      <div className="text-right">
                        <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mx-auto mb-1.5"
                          style={{ border: '1px solid rgba(203,179,122,0.3)', background: 'rgba(0,15,26,0.6)' }}
                        >
                          <span className="font-display text-[4.5px] sm:text-[5.5px] text-brand-gold font-bold">IAF</span>
                        </div>
                        <span className="font-serif text-[5px] sm:text-[6px] text-brand-gold-light italic tracking-wide block truncate">
                          {book.author.split(' ').slice(-2).join(' ')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Book info */}
                <div className="flex-1 flex flex-col p-4 sm:p-7 sm:p-8">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {book.tags.map((tag) => (
                      <span key={tag}
                        className="font-display text-[6.5px] sm:text-[8px] uppercase tracking-[0.18em] font-semibold px-1.5 py-0.5 sm:px-2.5 sm:py-1"
                        style={{
                          color: '#a6894a',
                          background: 'rgba(166,137,74,0.06)',
                          border: '1px solid rgba(166,137,74,0.18)',
                          borderRadius: '1px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Author */}
                  <h3 className="font-serif text-sm sm:text-lg sm:text-xl font-bold text-brand-ivory group-hover:text-brand-gold-light transition-colors duration-300 mb-1 sm:mb-2 tracking-wide leading-snug line-clamp-2">
                    {book.title}
                  </h3>
                  <span className="font-serif text-[10px] sm:text-xs text-brand-gold/70 italic block mb-3.5 sm:mb-5">
                    Por {book.author}
                  </span>

                  {/* Thin line */}
                  <div className="w-7 sm:w-10 h-[1px] mb-3.5 sm:mb-5 transition-all duration-400 group-hover:w-14 sm:group-hover:w-16"
                    style={{ background: 'linear-gradient(to right, rgba(166,137,74,0.5), transparent)' }}
                  />

                  {/* Description */}
                  <p className="text-[11px] sm:text-sm text-brand-ivory/55 font-sans font-light leading-relaxed mb-5 sm:mb-7 flex-1 line-clamp-3 sm:line-clamp-none">
                    {book.description}
                  </p>

                  {/* Footer CTA */}
                  <div className="pt-4 sm:pt-5 border-t border-brand-gold/10 flex items-center justify-between gap-2.5">
                    <button
                      onClick={() => handleInterest(book.id)}
                      disabled={isInterested}
                      className="flex items-center gap-1 text-[8px] sm:text-[10px] font-sans uppercase tracking-[0.15em] font-bold px-2 py-1.5 sm:px-4 sm:py-2.5 transition-all duration-300 cursor-pointer"
                      style={{
                        background: isInterested ? 'rgba(93,16,29,0.8)' : 'rgba(166,137,74,0.06)',
                        color: isInterested ? '#cbb37a' : '#a6894a',
                        border: `1px solid ${isInterested ? 'rgba(166,137,74,0.4)' : 'rgba(166,137,74,0.25)'}`,
                        borderRadius: '2px',
                      }}
                    >
                      {isInterested ? (
                        <>
                          <ThumbsUp size={9} className="animate-bounce" />
                          <span>Registrado</span>
                        </>
                      ) : (
                        <>
                          <BookMarked size={9} />
                          <span>Solicitar Indicação</span>
                        </>
                      )}
                    </button>

                    <span className="text-[10px] text-brand-ivory/35 font-sans flex items-center gap-1.5">
                      <Library size={11} className="text-brand-gold/30" />
                      <span>Físico</span>
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Toast notification */}
      <AnimatePresence>
        {interestedBookId && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 flex items-start gap-3 p-5 max-w-sm"
            style={{
              background: 'linear-gradient(135deg, #5d101d, #3d0b13)',
              border: '1px solid rgba(166,137,74,0.4)',
              borderRadius: '2px',
              boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
            }}
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ background: 'rgba(166,137,74,0.15)', border: '1px solid rgba(166,137,74,0.3)' }}
            >
              <Sparkles size={14} className="text-brand-gold" />
            </div>
            <div>
              <p className="text-xs font-display font-semibold tracking-wide text-brand-gold uppercase mb-1">
                Obra reservada para recomendação!
              </p>
              <p className="text-[11px] text-brand-ivory/65 font-sans leading-relaxed">
                Registramos seu interesse. Avisaremos por e-mail assim que os exemplares estejam disponíveis.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Smooth transition from dark Livros to light Acervo */}
      <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #f9f7f3 0%, transparent 100%)' }}
      />
    </section>
  );
}
