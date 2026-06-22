import React from 'react';
import { Archive, Lock, BookCopy, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import acervoManuscript from '../assets/acervo_manuscript.png';

export default function Acervo() {
  return (
    <section className="relative py-28 sm:py-36 paper-texture overflow-hidden bg-[#f9f7f3]">

      {/* Top & bottom lines */}
      <div className="absolute top-0 inset-x-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(166,137,74,0.5) 30%, rgba(203,179,122,0.7) 50%, rgba(166,137,74,0.5) 70%, transparent)' }}
      />
      <div className="absolute bottom-0 inset-x-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(166,137,74,0.3) 30%, rgba(166,137,74,0.5) 50%, rgba(166,137,74,0.3) 70%, transparent)' }}
      />

      {/* Background blueprint circle */}
      <div className="absolute top-[8%] left-[3%] w-72 h-72 opacity-[0.035] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-brand-blue" fill="none" stroke="currentColor">
          <circle cx="50" cy="50" r="45" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="35" strokeWidth="0.3" />
          <path d="M 0 50 L 100 50 M 50 0 L 50 100" strokeWidth="0.2" />
          <path d="M 15 15 L 85 85 M 85 15 L 15 85" strokeWidth="0.15" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Text column */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(93,16,29,0.08)', border: '1px solid rgba(166,137,74,0.3)' }}
              >
                <Archive className="text-brand-wine" size={14} />
              </div>
              <span className="section-label">Gabinete de Indexação Histórica</span>
              <div className="flex-1 h-[1px] max-w-12"
                style={{ background: 'linear-gradient(to right, rgba(166,137,74,0.4), transparent)' }}
              />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-blue mb-3 tracking-tight leading-tight">
              Arquivo e Curadoria
            </h2>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-brand-wine italic mb-10 tracking-tight leading-tight">
              de Manuscritos Raros
            </h2>

            <div className="w-20 h-[2px] mb-10"
              style={{ background: 'linear-gradient(to right, #5d101d, rgba(93,16,29,0.2))' }}
            />

            <div className="space-y-6 text-slate-700 font-sans font-light text-[15px] sm:text-base leading-[1.85]">
              <p className="font-medium text-slate-800 text-[16px] sm:text-[17px] border-l-2 border-brand-gold/30 pl-5 italic">
                O Instituto está no limiar de reunir uma preciosa coleção física e digitalizada de artigos raros, registros genealógicos sacramentais, materiais acadêmicos audiovisuais e indicações bibliográficas raras.
              </p>
              <p>
                Este repositório visa a salvaguarda sistemática da memória judaica hispano-portuguesa. Nossos pesquisadores estão catalogando manuscritos preservados na Biblioteca Ets Haim de Amsterdã, no Arquivo Nacional da Torre do Tombo em Lisboa, e em testamentos cartoriais coloniais da Capitania de Pernambuco, Paraíba e Bahia.
              </p>

              {/* Access status box */}
              <div className="flex items-start gap-3 p-5 mt-6"
                style={{
                  background: 'linear-gradient(145deg, #f4f1ea, #ede9e0)',
                  border: '1px solid rgba(166,137,74,0.25)',
                  borderRadius: '2px',
                  borderLeft: '3px solid rgba(166,137,74,0.5)',
                }}
              >
                <Lock size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-display text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-blue block mb-2">
                    Status de Acesso
                  </span>
                  <span className="text-sm text-slate-600 font-sans font-light leading-relaxed">
                    O banco de metadados expandido será franqueado gratuitamente para pesquisadores credenciados e descendentes diretos no final de 2026.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual compositions column: Manuscript & Drawers side by side/stacked */}
          <motion.div
            className="lg:col-span-6 flex flex-col sm:flex-row gap-6 items-stretch"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Left Box: Manuscript Framed Image */}
            <div className="flex-1 relative overflow-hidden flex flex-col justify-between"
              style={{
                borderRadius: '3px',
                border: '1px solid rgba(166,137,74,0.3)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                background: '#001c30',
                minHeight: '340px'
              }}
            >
              {/* Image background */}
              <div className="absolute inset-0 z-0">
                <img
                  src={acervoManuscript}
                  alt="Manuscrito Sefardita Raro"
                  className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deepest via-brand-dark-blue/20 to-transparent" />
              </div>

              {/* Corner Ornaments */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-brand-gold/50 z-10 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-brand-gold/50 z-10 pointer-events-none" />

              {/* Top Banner overlay */}
              <div className="relative p-4 z-10">
                <span className="font-display text-[8px] uppercase tracking-[0.2em] px-2 py-1 bg-brand-deepest/90 text-brand-gold border border-brand-gold/30 rounded-[1px]">
                  Documento Original
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="relative p-5 z-10 bg-brand-deepest/75 backdrop-blur-xs">
                <h4 className="font-serif text-sm font-bold text-brand-ivory mb-1">
                  Tratado Cabalístico
                </h4>
                <p className="font-sans text-[10px] text-brand-gold-light/80">
                  Isaac Aboab da Fonseca · Amsterdã, 1650
                </p>
              </div>
            </div>

            {/* Right Box: Cabinet drawers grid */}
            <div className="flex-1 relative overflow-hidden flex flex-col justify-between"
              style={{
                background: 'linear-gradient(160deg, #002b49 0%, #001625 60%, #000f1a 100%)',
                border: '1px solid rgba(166,137,74,0.3)',
                borderRadius: '3px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
              }}
            >
              {/* Inner decorative border */}
              <div className="absolute inset-2.5 pointer-events-none"
                style={{ border: '1px solid rgba(166,137,74,0.08)', borderRadius: '1px' }}
              />

              {/* Top status bar */}
              <div className="flex items-center justify-between p-4 pb-3 z-10"
                style={{ borderBottom: '1px solid rgba(166,137,74,0.15)' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-brand-gold-light font-bold select-none">
                    SEC_ABOAB_CABINET
                  </span>
                </div>
                <BookCopy size={12} className="text-brand-gold/50" />
              </div>

              {/* Archive drawers grid */}
              <div className="grid grid-cols-1 gap-2 p-4 z-10">
                {[
                  { tag: 'A–G', label: 'Linhagens de Toledo', count: '2.847' },
                  { tag: 'H–O', label: 'Cartas de Amsterdã', count: '1.293' },
                  { tag: 'P–T', label: 'Recife Colonial', count: '978' },
                  { tag: 'U–Z', label: 'Esnoga · Liturgia', count: '614' },
                ].map((drawer, i) => (
                  <div
                    key={i}
                    className="group/drawer flex items-center justify-between p-3 transition-all duration-350 cursor-pointer"
                    style={{
                      background: 'rgba(0,15,26,0.8)',
                      border: '1px solid rgba(166,137,74,0.12)',
                      borderRadius: '1.5px',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-display text-brand-gold font-bold text-xs tracking-wide select-none w-8">
                        {drawer.tag}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-sans text-[10px] tracking-wide text-brand-ivory/60 group-hover/drawer:text-brand-ivory/95 transition-colors leading-tight">
                          {drawer.label}
                        </span>
                        <span className="font-mono text-[8px] text-brand-gold/30">
                          {drawer.count} reg.
                        </span>
                      </div>
                    </div>
                    {/* Drawer handle */}
                    <div className="w-3.5 h-1.5 rounded-full group-hover/drawer:scale-110 transition-transform duration-200"
                      style={{ background: 'rgba(166,137,74,0.3)' }}
                    />
                  </div>
                ))}
              </div>

              {/* Footer status */}
              <div className="p-3 m-3 mt-0 text-center z-10"
                style={{
                  background: 'rgba(0,15,26,0.85)',
                  border: '1px solid rgba(166,137,74,0.1)',
                  borderRadius: '2px',
                }}
              >
                <span className="font-display text-[8px] uppercase tracking-[0.2em] text-brand-gold/80 font-semibold flex items-center justify-center gap-1.5">
                  <Sparkles size={9} className="animate-spin text-brand-gold/50" style={{ animationDuration: '3s' }} />
                  Gabinete de Curadoria
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
