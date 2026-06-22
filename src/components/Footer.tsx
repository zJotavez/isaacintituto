import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook, ArrowUp, Send, CheckCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FooterProps {
  setActiveTab: (tab: 'inicio' | 'revista') => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleNavClick = (tab: 'inicio' | 'revista') => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        setIsContactOpen(false);
        setContactName(''); setContactEmail(''); setContactMessage('');
      }, 3500);
    }, 1500);
  };

  const currentYear = new Date().getFullYear();

  const inputStyle = {
    background: '#f8f5f0',
    border: '1px solid rgba(166,137,74,0.2)',
    borderRadius: '2px',
    color: '#1e293b',
    width: '100%',
    padding: '0.65rem 0.85rem',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  } as React.CSSProperties;

  return (
    <footer className="relative bg-brand-deepest text-brand-ivory/75 font-sans overflow-hidden">

      {/* Top decorative line */}
      <div className="absolute top-0 inset-x-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(166,137,74,0.5) 30%, rgba(203,179,122,0.7) 50%, rgba(166,137,74,0.5) 70%, transparent)' }}
      />

      {/* Background decorative SVG */}
      <div className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none select-none opacity-[0.025] overflow-hidden">
        <svg viewBox="0 0 200 200" className="w-full h-full text-brand-gold" fill="none" stroke="currentColor">
          <circle cx="200" cy="200" r="100" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="150" strokeWidth="0.3" />
          <line x1="200" y1="50" x2="50" y2="200" strokeWidth="0.2" />
          <line x1="200" y1="80" x2="80" y2="200" strokeWidth="0.15" />
        </svg>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">

          {/* Col 1: Brand */}
          <div className="md:col-span-5">
            {/* Logo */}
            <div className="flex items-center gap-3.5 mb-6 select-none cursor-pointer" onClick={() => handleNavClick('inicio')}>
              <div className="relative w-10 h-10 shrink-0">
                <div className="absolute inset-0 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #002b49, #001c30)', border: '1px solid rgba(166,137,74,0.35)' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-[9px] font-semibold text-brand-gold-light tracking-wider">IAF</span>
                </div>
              </div>
              <div>
                <span className="font-display text-sm font-semibold text-brand-ivory tracking-[0.06em] block leading-tight">
                  Instituto Aboab da Fonseca
                </span>
                <span className="text-[8px] uppercase tracking-[0.18em] text-brand-gold/50 font-medium block mt-0.5">
                  História · Memória · Tradição
                </span>
              </div>
            </div>

            <p className="text-sm font-light text-brand-ivory/50 leading-[1.8] max-w-sm mb-8">
              Portal institucional dedicado à preservação, investigação histórica, catalogação arquivística e reaproximação cultural com o legado do judaísmo hispano-português no Brasil e no mundo.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { href: '#instagram', Icon: Instagram, label: 'Instagram' },
                { href: '#youtube', Icon: Youtube, label: 'YouTube' },
                { href: '#facebook', Icon: Facebook, label: 'Facebook' },
              ].map(({ href, Icon, label }) => (
                <a key={href} href={href}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
                  aria-label={label}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(166,137,74,0.5)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(166,137,74,0.08)';
                    (e.currentTarget as HTMLElement).style.color = '#cbb37a';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
                    (e.currentTarget as HTMLElement).style.color = '';
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
              <button
                onClick={() => setIsContactOpen(true)}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
                style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
                aria-label="Contato"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(93,16,29,0.6)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(93,16,29,0.12)';
                  (e.currentTarget as HTMLElement).style.color = '#cbb37a';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
                  (e.currentTarget as HTMLElement).style.color = '';
                }}
              >
                <Mail size={15} />
              </button>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-display text-[11px] font-semibold tracking-[0.2em] text-brand-gold uppercase mb-6">
              Navegação
            </h4>
            <ul className="space-y-3.5 text-sm font-light text-brand-ivory/55">
              {[
                { label: 'Início (Página Principal)', tab: 'inicio' as const },
                { label: 'Revista do Instituto', tab: 'revista' as const },
              ].map(({ label, tab }) => (
                <li key={tab}>
                  <button
                    onClick={() => handleNavClick(tab)}
                    className="hover:text-brand-gold transition-colors duration-200 cursor-pointer text-left group flex items-center gap-2"
                  >
                    <span className="w-3 h-[1px] bg-brand-gold/0 group-hover:bg-brand-gold/50 transition-all duration-300 shrink-0" />
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="hover:text-brand-gold transition-colors duration-200 cursor-pointer text-left group flex items-center gap-2"
                >
                  <span className="w-3 h-[1px] bg-brand-gold/0 group-hover:bg-brand-gold/50 transition-all duration-300 shrink-0" />
                  Fale com o Instituto
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="md:col-span-4 text-sm font-light text-brand-ivory/55">
            <h4 className="font-display text-[11px] font-semibold tracking-[0.2em] text-brand-gold uppercase mb-6">
              Informações Gerais
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-gold/60 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Gabinete Histórico &amp; Presidência
                  <br /><span className="text-xs text-brand-ivory/35">Recife – Pernambuco, Brasil</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-brand-gold/60 shrink-0 mt-0.5" />
                <span>contato@institutoaboabfonseca.org</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-brand-gold/60 shrink-0 mt-0.5" />
                <span>+55 81 3000-0504</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 sm:mt-20 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-ivory/35"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <p>© {currentYear} Instituto Aboab da Fonseca. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <button onClick={() => setIsContactOpen(true)} className="hover:text-brand-gold cursor-pointer transition-colors duration-200">
              Privacidade
            </button>
            <button onClick={() => setIsContactOpen(true)} className="hover:text-brand-gold cursor-pointer transition-colors duration-200">
              Termos Literários
            </button>
          </div>
        </div>
      </div>

      {/* ============================================
          CONTACT SLIDE DRAWER
          ============================================ */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-end"
            style={{ background: 'rgba(0,15,26,0.75)', backdropFilter: 'blur(10px)' }}
          >
            {/* Backdrop click */}
            <div className="absolute inset-0" onClick={() => setIsContactOpen(false)} />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="relative z-20 w-full max-w-md h-full overflow-y-auto flex flex-col paper-texture"
              style={{
                borderLeft: '1px solid rgba(166,137,74,0.3)',
                boxShadow: '-20px 0 80px rgba(0,0,0,0.4)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 inset-x-0 h-[2px]"
                style={{ background: 'linear-gradient(90deg, #5d101d, rgba(93,16,29,0.5) 30%, rgba(166,137,74,0.8) 50%, rgba(93,16,29,0.5) 70%, #5d101d)' }}
              />

              <div className="flex-1 p-8 sm:p-10 flex flex-col">
                {/* Drawer header */}
                <div className="flex items-center justify-between mb-8 pb-5"
                  style={{ borderBottom: '1px solid rgba(166,137,74,0.15)' }}
                >
                  <div>
                    <span className="section-label text-brand-gold">Fale Conosco</span>
                    <p className="font-display text-lg font-semibold text-brand-blue mt-1 tracking-tight">
                      Correspondência Institucional
                    </p>
                  </div>
                  <button
                    onClick={() => setIsContactOpen(false)}
                    className="w-9 h-9 rounded flex items-center justify-center cursor-pointer transition-all duration-200 shrink-0"
                    style={{ border: '1px solid rgba(0,43,73,0.2)', color: '#475569' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#a6894a'; (e.currentTarget as HTMLElement).style.color = '#5d101d'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,43,73,0.2)'; (e.currentTarget as HTMLElement).style.color = '#475569'; }}
                    aria-label="Fechar painel de contato"
                  >
                    <X size={16} />
                  </button>
                </div>

                <p className="text-sm text-slate-600 font-sans font-light leading-relaxed mb-7">
                  Se você possui documentos antigos, relatos genealógicos de família sefardita, interesse acadêmico em nossas publicações ou deseja apoiar o desenvolvimento do acervo, preencha o formulário abaixo e nossa secretaria responderá com estima.
                </p>

                <AnimatePresence mode="wait">
                  {!isSent ? (
                    <motion.form
                      key="form"
                      onSubmit={handleContactSubmit}
                      className="space-y-5 flex-1 flex flex-col"
                    >
                      <div>
                        <label className="block font-display text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-600 mb-1.5">
                          Nome Completo
                        </label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Ex: João Aboab Pereira"
                          style={inputStyle}
                          onFocus={(e) => { e.target.style.borderColor = 'rgba(166,137,74,0.5)'; }}
                          onBlur={(e) => { e.target.style.borderColor = 'rgba(166,137,74,0.2)'; }}
                        />
                      </div>

                      <div>
                        <label className="block font-display text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-600 mb-1.5">
                          Endereço de E-mail
                        </label>
                        <input
                          type="email"
                          required
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="Ex: joao@aboab.com"
                          style={inputStyle}
                          onFocus={(e) => { e.target.style.borderColor = 'rgba(166,137,74,0.5)'; }}
                          onBlur={(e) => { e.target.style.borderColor = 'rgba(166,137,74,0.2)'; }}
                        />
                      </div>

                      <div className="flex-1 flex flex-col">
                        <label className="block font-display text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-600 mb-1.5">
                          Mensagem
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={contactMessage}
                          onChange={(e) => setContactMessage(e.target.value)}
                          placeholder="Como o Instituto pode auxiliá-lo?"
                          style={{ ...inputStyle, resize: 'none', flex: 1 }}
                          onFocus={(e) => { e.target.style.borderColor = 'rgba(166,137,74,0.5)'; }}
                          onBlur={(e) => { e.target.style.borderColor = 'rgba(166,137,74,0.2)'; }}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSending}
                        className="w-full py-3.5 font-display text-[11px] uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2.5 cursor-pointer transition-all duration-300 disabled:opacity-60 mt-auto"
                        style={{
                          background: 'linear-gradient(135deg, #5d101d, #3d0b13)',
                          color: '#cbb37a',
                          border: '1px solid rgba(166,137,74,0.3)',
                          borderRadius: '2px',
                        }}
                      >
                        {isSending ? (
                          <span className="w-5 h-5 border-2 border-brand-gold/30 border-t-brand-gold rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send size={12} />
                            <span>Enviar Correspondência</span>
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex-1 flex flex-col items-center justify-center text-center py-10"
                    >
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                        style={{
                          background: 'linear-gradient(145deg, #f8f5f0, #ede9e0)',
                          border: '1px solid rgba(166,137,74,0.3)',
                        }}
                      >
                        <CheckCircle className="text-brand-gold" size={28} />
                      </div>
                      <h4 className="font-display text-xl font-semibold text-brand-blue mb-3 tracking-tight">
                        Correspondência Enviada!
                      </h4>
                      <p className="text-sm text-slate-600 font-sans font-light max-w-xs leading-relaxed">
                        Agradecemos o seu contato. Sua mensagem foi catalogada com sucesso. Nossa secretaria histórica entrará em contato em breve.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Drawer footer stamp */}
              <div className="px-8 sm:px-10 py-5 flex items-center gap-3 select-none"
                style={{ borderTop: '1px solid rgba(166,137,74,0.1)' }}
              >
                <div className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ border: '1.5px dashed rgba(166,137,74,0.4)', background: 'rgba(93,16,29,0.04)' }}
                >
                  <span className="font-display text-[7px] text-brand-wine font-semibold">IAF</span>
                </div>
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                  SECRETARIA_GERAL · {currentYear}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </footer>
  );
}
