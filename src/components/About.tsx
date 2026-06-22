import React from 'react';
import { Landmark } from 'lucide-react';
import { motion } from 'motion/react';
import symbolWhite from '../assets/symbol_white.png';

export default function About() {
  return (
    <section id="sobre" className="relative py-28 sm:py-36 paper-texture overflow-hidden">

      {/* Curved Arc Divider Transition (Hero -> About) */}
      <div className="absolute top-0 inset-x-0 -translate-y-[99%] z-20 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Double curve gold background glow */}
          <path d="M0,95 C360,-5 1080,-5 1440,95 L1440,120 L0,120 Z" fill="rgba(166, 137, 74, 0.12)" />
          {/* Fill matching the light parchment background */}
          <path d="M0,120 C360,20 1080,20 1440,120 L1440,120 L0,120 Z" fill="#fcf9f2" />
        </svg>
      </div>

      {/* Decorative Portuguese tile corner - top left */}
      <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none opacity-60 select-none">
        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
          <path d="M 0 0 L 80 0" stroke="rgba(166,137,74,0.2)" strokeWidth="1" />
          <path d="M 0 0 L 0 80" stroke="rgba(166,137,74,0.2)" strokeWidth="1" />
          <path d="M 10 10 L 60 10" stroke="rgba(166,137,74,0.12)" strokeWidth="0.6" />
          <path d="M 10 10 L 10 60" stroke="rgba(166,137,74,0.12)" strokeWidth="0.6" />
          <circle cx="22" cy="22" r="4" stroke="rgba(166,137,74,0.2)" strokeWidth="0.8" fill="none" />
          <circle cx="22" cy="22" r="1.5" fill="rgba(166,137,74,0.15)" />
          <path d="M 50 0 Q 50 25 25 50 Q 12 50 0 50" stroke="rgba(166,137,74,0.1)" strokeWidth="0.5" fill="none" />
          <path d="M 80 0 Q 80 40 40 80 Q 20 80 0 80" stroke="rgba(166,137,74,0.07)" strokeWidth="0.4" fill="none" />
        </svg>
      </div>

      {/* Decorative Portuguese tile corner - bottom right */}
      <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none opacity-60 select-none rotate-180">
        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
          <path d="M 0 0 L 80 0" stroke="rgba(166,137,74,0.2)" strokeWidth="1" />
          <path d="M 0 0 L 0 80" stroke="rgba(166,137,74,0.2)" strokeWidth="1" />
          <path d="M 10 10 L 60 10" stroke="rgba(166,137,74,0.12)" strokeWidth="0.6" />
          <path d="M 10 10 L 10 60" stroke="rgba(166,137,74,0.12)" strokeWidth="0.6" />
          <circle cx="22" cy="22" r="4" stroke="rgba(166,137,74,0.2)" strokeWidth="0.8" fill="none" />
          <circle cx="22" cy="22" r="1.5" fill="rgba(166,137,74,0.15)" />
        </svg>
      </div>

      {/* Large decorative watermark logo (translucent phoenix) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <img 
          src={symbolWhite} 
          alt="Brasão marca d'água" 
          className="w-[30rem] h-[30rem] sm:w-[40rem] sm:h-[40rem] md:w-[48rem] md:h-[48rem] object-contain opacity-[0.035]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">

          {/* Column 1 - Mission text */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(93,16,29,0.15), rgba(93,16,29,0.05))', border: '1px solid rgba(166,137,74,0.3)' }}>
                <Landmark className="text-brand-gold" size={14} />
              </div>
              <span className="section-label">Nossa Missão Institucional</span>
              <div className="flex-1 h-[1px] max-w-16" style={{ background: 'linear-gradient(to right, rgba(166,137,74,0.4), transparent)' }} />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-blue mb-3 tracking-tight leading-tight">
              Preservar o Passado,
            </h2>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-brand-wine italic mb-10 tracking-tight leading-tight">
              Iluminar as Novas Gerações
            </h2>

            {/* Wine accent bar */}
            <div className="w-24 h-[2px] mb-10" style={{ background: 'linear-gradient(to right, #5d101d, rgba(93,16,29,0.2))' }} />

            <div className="space-y-7 text-slate-700 font-sans font-light text-base sm:text-[17px] leading-[1.85] tracking-wide">
              <p className="font-normal text-slate-800 text-[17px] sm:text-lg border-l-2 border-brand-gold/30 pl-5 italic">
                O Instituto Aboab da Fonseca nasce com o firme e nobre propósito de fortalecer a memória judaica hispano-portuguesa. Atuamos promovendo conhecimento, cultura, diálogo intelectual e acesso qualificado a conteúdos históricos e educativos.
              </p>
              <p>
                Dedicamo-nos ao resgate e estudo crítico da rica trajetória dos sefarditas ocidentais, um contingente de pensadores, cientistas e poetas que, mesmo diante de dispersões e sob o segredo das preces clandestinas, construíram as bases intelectuais para o surgimento do mundo moderno livre.
              </p>
              <p>
                Servimos como um ponto de união seguro para genealogistas, historiadores, descendentes de cristãos-novos e entusiastas da tradição, preenchendo uma lacuna essencial de pesquisa e fomento literário no Brasil e na esfera lusófona mundial.
              </p>
            </div>
          </motion.div>

          {/* Column 2 - Legacy sidebar card with old-paper styling */}
          <motion.div
            className="lg:col-span-5 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative historical-papyrus p-8 sm:p-10 overflow-hidden">
              
              {/* Corner ornaments (historical documents) */}
              <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t border-l border-brand-gold/40 pointer-events-none" />
              <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t border-r border-brand-gold/40 pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b border-l border-brand-gold/40 pointer-events-none" />
              <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b border-r border-brand-gold/40 pointer-events-none" />

              {/* Decorative wax seal stamp in top corner */}
              <div className="absolute top-5 right-5 z-20 scale-90 sm:scale-100">
                <div className="wax-seal">IAF</div>
              </div>

              {/* Wine accent bar */}
              <div className="w-14 h-1 mb-7" style={{ background: 'linear-gradient(to right, #5d101d, rgba(93,16,29,0.3))' }} />

              <h3 className="font-display text-lg sm:text-xl font-semibold text-brand-wine mb-6 tracking-wide leading-snug">
                Quem foi Isaac Aboab da Fonseca?
              </h3>

              <div className="space-y-4 text-sm sm:text-[15px] text-amber-950/80 leading-[1.8] font-sans font-light">
                <p>
                  <strong className="text-brand-blue font-serif font-bold text-base">Rabino Isaac Aboab da Fonseca</strong>
                  <span className="text-slate-500 text-xs ml-1 font-mono">(Amsterdã, 1605–1693)</span>
                  {' '}foi um dos intelectuais mais brilhantes do Século de Ouro Sefardita na Holanda.
                </p>
                <p>
                  Cabalista primoroso, tradutor de tratados filosóficos e orador dotado de excepcional retórica, ele entrou para os anais da história ao aceitar o convite da comunidade de Amsterdã para rumar ao nordeste brasileiro holandês em 1642.
                </p>
                <p>
                  No Recife, consagrou-se como o{' '}
                  <strong className="text-brand-wine font-serif font-semibold">Primeiro Rabino Formal das Américas</strong>,
                  encabeçando a congregação Kahal Kadosh Zur Israel. De volta à Europa, foi um dos principais arquitetos doutrinais da célebre Esnoga de Amsterdã, moldando gerações de livre-pensadores.
                </p>

                {/* Italic quote footer */}
                <div className="border-t border-brand-gold/25 pt-5 mt-2">
                  <p className="italic text-[12px] text-amber-900/70 font-serif leading-relaxed">
                    "O Instituto recebe com profunda reverência o nome deste pioneiro, buscando emular sua coragem espiritual, rigor ético e devoção irrestrita ao conhecimento."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
