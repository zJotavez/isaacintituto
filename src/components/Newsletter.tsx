import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setName('');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden dark-texture">

      {/* Top line */}
      <div className="absolute top-0 inset-x-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(166,137,74,0.4) 30%, rgba(203,179,122,0.6) 50%, rgba(166,137,74,0.4) 70%, transparent)' }}
      />

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(166,137,74,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(0,43,73,0.5), rgba(0,28,48,0.75))',
            border: '1px solid rgba(166,137,74,0.25)',
            borderRadius: '2px',
            boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
          }}
        >
          {/* Top gradient accent bar */}
          <div className="absolute top-0 inset-x-0 h-[2px]"
            style={{ background: 'linear-gradient(90deg, #5d101d, rgba(93,16,29,0.6) 30%, rgba(166,137,74,0.9) 50%, rgba(93,16,29,0.6) 70%, #5d101d)' }}
          />

          {/* Corner ornaments */}
          <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-brand-gold/25 pointer-events-none" />
          <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-brand-gold/25 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-brand-gold/25 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-brand-gold/25 pointer-events-none" />

          <div className="p-10 sm:p-16">
            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="text-center"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-7 animate-float"
                    style={{
                      background: 'rgba(166,137,74,0.06)',
                      border: '1px solid rgba(166,137,74,0.25)',
                    }}
                  >
                    <Mail size={22} className="text-brand-gold" />
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-ivory mb-4 tracking-tight">
                    Acompanhe as Novidades do Instituto
                  </h3>

                  {/* Ornamental divider */}
                  <div className="flex items-center justify-center gap-3 mb-7">
                    <div className="h-[1px] w-10" style={{ background: 'linear-gradient(to right, transparent, rgba(166,137,74,0.4))' }} />
                    <span className="text-brand-gold/35 text-xs">✦</span>
                    <div className="h-[1px] w-10" style={{ background: 'linear-gradient(to left, transparent, rgba(166,137,74,0.4))' }} />
                  </div>

                  <p className="text-sm sm:text-[15px] text-brand-ivory/60 max-w-xl mx-auto mb-10 font-sans font-light leading-relaxed">
                    Receba informações inéditas sobre novos artigos acadêmicos, eventos, lives teológicas, lançamentos de obras e iniciativas de pesquisa genealógica.
                  </p>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Seu nome completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-3.5 font-sans text-sm text-brand-ivory placeholder-brand-ivory/30 transition-all duration-250 focus:outline-none"
                        style={{
                          background: 'rgba(0,15,26,0.6)',
                          border: '1px solid rgba(166,137,74,0.2)',
                          borderRadius: '2px',
                        }}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(166,137,74,0.5)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(166,137,74,0.2)'; }}
                      />
                      <input
                        type="email"
                        placeholder="Seu melhor e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3.5 font-sans text-sm text-brand-ivory placeholder-brand-ivory/30 transition-all duration-250 focus:outline-none"
                        style={{
                          background: 'rgba(0,15,26,0.6)',
                          border: '1px solid rgba(166,137,74,0.2)',
                          borderRadius: '2px',
                        }}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(166,137,74,0.5)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(166,137,74,0.2)'; }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold w-full py-3.5 px-6 font-display text-[11px] uppercase tracking-[0.2em] font-bold text-brand-dark-blue flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-60"
                      style={{ borderRadius: '2px' }}
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-brand-dark-blue/30 border-t-brand-dark-blue rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={12} />
                          <span>Quero Acompanhar</span>
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-[10px] text-brand-ivory/30 font-mono mt-5 tracking-wide">
                    Garantimos total privacidade de seus dados · Círculo fechado sem publicidade
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-8 flex flex-col items-center"
                >
                  {/* Wax seal */}
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-7 relative animate-float"
                    style={{
                      background: 'radial-gradient(circle, rgba(93,16,29,0.6) 0%, rgba(61,11,19,0.8) 100%)',
                      border: '2px solid rgba(166,137,74,0.5)',
                      boxShadow: '0 0 30px rgba(93,16,29,0.3)',
                    }}
                  >
                    <div className="absolute inset-2 rounded-full"
                      style={{ border: '1px solid rgba(166,137,74,0.25)' }}
                    />
                    <span className="font-display text-[11px] text-brand-gold font-bold tracking-[0.2em] leading-none select-none">
                      IAF
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-brand-gold mb-4 tracking-tight">
                    Inscrição Confirmada!
                  </h3>

                  <p className="text-sm sm:text-[15px] text-brand-ivory/70 max-w-md mx-auto leading-relaxed font-sans font-light mb-8">
                    Bem-vindo ao círculo epistolar do{' '}
                    <strong className="text-brand-gold-light font-serif">Instituto Aboab da Fonseca</strong>.
                    Enviamos um correio eletrônico de confirmação com nosso Manifesto Cultural de fundação.
                  </p>

                  <button
                    onClick={() => setIsSubscribed(false)}
                    className="btn-ghost-gold px-6 py-2.5 font-display text-[10px] tracking-[0.2em] uppercase font-semibold text-brand-gold cursor-pointer"
                    style={{ borderRadius: '2px' }}
                  >
                    Voltar ao formulário
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 inset-x-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(166,137,74,0.3) 30%, rgba(166,137,74,0.4) 50%, rgba(166,137,74,0.3) 70%, transparent)' }}
      />
    </section>
  );
}
