import React from 'react';
import { BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

interface FinalCTAProps {
  onNavigate: (tab: 'inicio' | 'revista', sectionId?: string) => void;
}

export default function FinalCTA({ onNavigate }: FinalCTAProps) {
  const handleAcessarRevista = () => {
    onNavigate('revista');
  };

  return (
    <section className="relative py-28 sm:py-36 paper-texture overflow-hidden text-center bg-[#faf8f4]">

      {/* Top & bottom lines */}
      <div className="absolute top-0 inset-x-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(166,137,74,0.5) 30%, rgba(203,179,122,0.7) 50%, rgba(166,137,74,0.5) 70%, transparent)' }}
      />

      {/* Decorative central vertical line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] -translate-x-1/2 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(166,137,74,0.08) 30%, rgba(166,137,74,0.08) 70%, transparent)' }}
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden max-w-3xl mx-auto"
          style={{
            background: 'linear-gradient(155deg, #f4f1ea 0%, #ede9e0 100%)',
            border: '1px solid rgba(166,137,74,0.35)',
            borderRadius: '2px',
            boxShadow: '0 20px 70px rgba(0,28,48,0.1), 0 4px 16px rgba(0,0,0,0.06)',
            padding: '3.5rem 2.5rem',
          }}
        >
          {/* Corner ornaments */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-brand-gold/45 pointer-events-none" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-brand-gold/45 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-brand-gold/45 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-brand-gold/45 pointer-events-none" />

          {/* Inner frame */}
          <div className="absolute inset-8 pointer-events-none"
            style={{ border: '1px solid rgba(166,137,74,0.08)', borderRadius: '1px' }}
          />

          {/* Icon */}
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-7"
            style={{
              background: 'linear-gradient(145deg, #f8f5f0, #ede9e0)',
              border: '1px solid rgba(166,137,74,0.3)',
              boxShadow: '0 4px 16px rgba(166,137,74,0.1)',
            }}
          >
            <BookOpen size={22} className="text-brand-wine" />
          </div>

          {/* Quote */}
          <div className="mb-8">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-blue mb-3 tracking-tight leading-tight">
              Preservar a memória é
            </h3>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-brand-wine italic mb-0 tracking-tight leading-tight">
              manter viva uma tradição
            </h3>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-7">
            <div className="h-[1px] w-10" style={{ background: 'linear-gradient(to right, transparent, rgba(166,137,74,0.4))' }} />
            <span className="text-brand-gold/40 text-xs">✦</span>
            <div className="h-[1px] w-10" style={{ background: 'linear-gradient(to left, transparent, rgba(166,137,74,0.4))' }} />
          </div>

          <p className="text-sm sm:text-[15px] text-slate-600 max-w-lg mx-auto mb-9 font-sans font-light leading-relaxed">
            Convidamos você a acompanhar sistematicamente os periódicos, artigos de divulgação conceitual, investigações genealógicas e debates promovidos pela nossa equipe editorial. Navegue pela nossa Revista do Instituto e conecte-se com sua história.
          </p>

          {/* CTA button */}
          <button
            onClick={handleAcessarRevista}
            id="finalcta-revista-btn"
            className="inline-flex items-center gap-2.5 px-9 py-3.5 font-display text-[11px] uppercase tracking-[0.2em] font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #5d101d, #3d0b13)',
              color: '#cbb37a',
              border: '1px solid rgba(166,137,74,0.35)',
              borderRadius: '2px',
              boxShadow: '0 4px 20px rgba(93,16,29,0.25)',
            }}
          >
            <BookOpen size={14} />
            <span>Acessar Revista do Instituto</span>
          </button>
        </motion.div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 inset-x-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(166,137,74,0.3) 30%, rgba(166,137,74,0.5) 50%, rgba(166,137,74,0.3) 70%, transparent)' }}
      />
    </section>
  );
}
