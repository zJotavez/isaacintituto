import React, { useState } from 'react';
import { Calendar, Video, Award, Bookmark, GraduationCap, ChevronRight, List, Grid, X, Clock, MapPin, Check, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { EVENTS } from '../data';

const getEventIcon = (type: string) => {
  const cls = "text-brand-wine" as const;
  switch (type) {
    case 'live':     return <Video className={cls} size={16} />;
    case 'curso':    return <GraduationCap className={cls} size={16} />;
    case 'palestra': return <Award className={cls} size={16} />;
    default:         return <Bookmark className={cls} size={16} />;
  }
};

const eventTypeLabel: Record<string, string> = {
  live: 'Live',
  curso: 'Curso',
  palestra: 'Palestra',
  livro: 'Lançamento',
};

const getEventDate = (id: string) => {
  switch (id) {
    case 'ev-1': return { month: 'JUL', year: '2026', day: '15' };
    case 'ev-2': return { month: 'AGO', year: '2026', day: '12' };
    case 'ev-3': return { month: 'SET', year: '2026', day: '24' };
    case 'ev-4': return { month: 'OUT', year: '2026', day: '18' };
    default:     return { month: 'EVT', year: '2026', day: '--' };
  }
};

interface EventDetail {
  speaker: string;
  hour: string;
  platform: string;
  details: string;
}

const getEventDetails = (id: string): EventDetail => {
  switch (id) {
    case 'ev-1': return {
      speaker: 'Prof. Dr. Samuel Aboab da Silva',
      hour: '19:30 - 21:00',
      platform: 'YouTube Oficial do Instituto',
      details: 'Primeiro ciclo de debates explorando os registros genealógicos sacramentais das famílias de Toledo e Lisboa, focando na re-identificação sefardita contemporânea.'
    };
    case 'ev-2': return {
      speaker: 'Rabino Dr. David Aboab Cavalcanti',
      hour: '18:00 - 20:00 (Sábados)',
      platform: 'Portal de Ensino IAF (Acesso Exclusivo)',
      details: 'Uma introdução crítica aos diálogos entre Baruch Espinosa e a sinagoga Kahal Kadosh Talmud Torah de Amsterdã. Filosofia racionalista sefardita.'
    };
    case 'ev-3': return {
      speaker: 'Historiadora Clara Aboab Meirelles',
      hour: '16:00 - 17:30',
      platform: 'Gabinete Histórico & Presidência (Híbrido)',
      details: 'Sessão solene em Recife marcando a comemoração histórica das primeiras orações litúrgicas em hebraico escritas no continente americano sob a liderança do Rabino Aboab da Fonseca.'
    };
    case 'ev-4': return {
      speaker: 'Pesquisador Marcus da Costa Junior',
      hour: '19:00',
      platform: 'Auditório Principal do Gabinete Histórico',
      details: 'Sessão de autógrafos, lançamento oficial da obra física e painel de debate literário com o autor.'
    };
    default: return {
      speaker: 'Corpo Docente do Instituto',
      hour: 'A definir',
      platform: 'Auditório Virtual',
      details: 'Detalhes em preparação pela equipe técnica.'
    };
  }
};

export default function Eventos() {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'live' | 'curso' | 'palestra'>('todos');
  const [viewMode, setViewMode] = useState<'lista' | 'grade'>('grade');
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  
  // Registration modal states
  const [registerEventId, setRegisterEventId] = useState<string | null>(null);
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const filteredEvents = EVENTS.filter(event => {
    return activeFilter === 'todos' || event.type === activeFilter;
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName || !regEmail) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
      setTimeout(() => {
        setIsDone(false);
        setRegisterEventId(null);
        setRegName('');
        setRegEmail('');
      }, 3000);
    }, 1200);
  };

  const selectedEvent = EVENTS.find(e => e.id === selectedEventId);
  const detailedInfo = selectedEventId ? getEventDetails(selectedEventId) : null;
  const registerEvent = EVENTS.find(e => e.id === registerEventId);

  return (
    <section className="relative py-28 sm:py-36 paper-texture overflow-hidden bg-[#fbf9f5]">

      {/* Top & bottom ornamental lines */}
      <div className="absolute top-0 inset-x-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(166,137,74,0.5) 30%, rgba(203,179,122,0.7) 50%, rgba(166,137,74,0.5) 70%, transparent)' }}
      />
      <div className="absolute bottom-0 inset-x-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(166,137,74,0.3) 30%, rgba(166,137,74,0.5) 50%, rgba(166,137,74,0.3) 70%, transparent)' }}
      />

      {/* Decorative large arched circles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none -mr-80 -mt-80 opacity-[0.03]"
        style={{ border: '1px solid #002b49' }}
      />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none -ml-64 -mb-64 opacity-[0.03]"
        style={{ border: '1px solid #002b49' }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">

        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Agenda de Atividades</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-blue mt-5 tracking-tight">
              Eventos, Lives &amp; Palestras
            </h2>
            <div className="flex items-center justify-center gap-3 mt-5 mb-5">
              <div className="h-[1px] w-12" style={{ background: 'linear-gradient(to right, transparent, rgba(93,16,29,0.5))' }} />
              <span className="text-brand-wine/40 text-xs">✦</span>
              <div className="h-[1px] w-12" style={{ background: 'linear-gradient(to left, transparent, rgba(93,16,29,0.5))' }} />
            </div>
            <p className="max-w-xl mx-auto text-slate-500 font-sans font-light leading-relaxed text-sm">
              Fique por dentro das nossas transmissões, cursos de extensão cultural e debates genealógicos organizados com rigor historiográfico.
            </p>
          </motion.div>
        </div>

        {/* INTERACTIVE CONTROLS BAR */}
        <div className="max-w-5xl mx-auto mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-brand-gold/15 pb-4">
          {/* Filters */}
          <div className="flex gap-2">
            {(['todos', 'live', 'curso', 'palestra'] as const).map(type => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`py-1.5 px-3.5 text-[9px] tracking-[0.15em] font-sans font-bold uppercase rounded-[2px] cursor-pointer transition-all duration-200 ${
                  activeFilter === type
                    ? 'bg-brand-wine text-brand-ivory'
                    : 'bg-white/80 border border-brand-gold/15 text-slate-500 hover:border-brand-gold/30'
                }`}
              >
                {type === 'todos' ? 'Todos' : eventTypeLabel[type] || type}
              </button>
            ))}
          </div>

          {/* View toggle */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => setViewMode('lista')}
              className={`p-1.5 rounded-[1px] cursor-pointer transition-all ${viewMode === 'lista' ? 'text-brand-wine bg-brand-gold/10' : 'text-slate-400 hover:text-slate-600'}`}
              title="Visualizar em lista"
            >
              <List size={16} />
            </button>
            <button
              onClick={() => setViewMode('grade')}
              className={`p-1.5 rounded-[1px] cursor-pointer transition-all ${viewMode === 'grade' ? 'text-brand-wine bg-brand-gold/10' : 'text-slate-400 hover:text-slate-600'}`}
              title="Visualizar em grade"
            >
              <Grid size={16} />
            </button>
          </div>
        </div>

        {/* EVENTS MATRIX */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFilter}-${viewMode}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className={viewMode === 'grade' ? "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4" : "space-y-4"}
            >
              {filteredEvents.map((event, index) => {
                const dt = getEventDate(event.id);
                return (
                  <div
                    key={event.id}
                    className={`group flex flex-col bg-white border border-brand-gold/15 rounded-[2px] hover:border-brand-gold/40 hover:shadow-lg transition-all duration-400 ${
                      viewMode === 'lista' ? 'sm:flex-row items-stretch gap-4 p-5' : 'p-3.5 sm:p-5'
                    }`}
                  >
                    {/* Left Date badge */}
                    <div className={`flex items-center justify-center shrink-0 text-center rounded-[1px] ${
                      viewMode === 'lista' 
                        ? 'p-3 sm:px-4 sm:py-3 sm:flex-col sm:min-w-[65px] bg-brand-gold/5 border border-brand-gold/15' 
                        : 'p-2 sm:p-3 mb-3 bg-brand-gold/5 border border-brand-gold/15 max-w-[65px] sm:max-w-[80px]'
                    }`}
                    >
                      <span className="font-display text-[10px] sm:text-xs tracking-widest text-brand-gold font-bold uppercase sm:mb-1 block leading-none mr-2 sm:mr-0">
                        {dt.month}
                      </span>
                      <span className="font-display text-lg sm:text-2xl font-extrabold text-brand-blue block leading-none sm:mb-1">
                        {dt.day}
                      </span>
                      <span className="font-mono text-[7px] sm:text-[8px] text-slate-400 uppercase tracking-widest block leading-none ml-2 sm:ml-0">
                        {dt.year}
                      </span>
                    </div>

                    {/* Middle Info Panel */}
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex items-center gap-1.5 mb-2 flex-wrap">
                          <div className="w-5.5 h-5.5 rounded flex items-center justify-center shrink-0 bg-[#f8f5f0] border border-brand-gold/15">
                            {getEventIcon(event.type)}
                          </div>
                          <span className="text-[8px] sm:text-[9px] uppercase font-sans font-bold tracking-[0.2em] text-slate-400">
                            {eventTypeLabel[event.type] || 'Evento'}
                          </span>
                        </div>

                        <h4 className="font-serif text-[13px] sm:text-base md:text-lg font-bold text-brand-blue group-hover:text-brand-wine transition-colors duration-300 leading-snug tracking-wide mb-1 line-clamp-2">
                          {event.title}
                        </h4>

                        <p className="text-[11px] sm:text-xs text-slate-500 font-sans font-light leading-relaxed mb-3 line-clamp-2 sm:line-clamp-3">
                          {event.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2.5 border-t border-brand-gold/10 mt-auto">
                        <button
                          onClick={() => setSelectedEventId(event.id)}
                          className="text-[8px] sm:text-[10px] font-sans font-bold tracking-[0.12em] uppercase text-brand-gold-light hover:text-brand-gold transition-colors cursor-pointer"
                        >
                          Ver Detalhes
                        </button>
                        <button 
                          onClick={() => setRegisterEventId(event.id)}
                          className="flex items-center gap-0.5 text-[8px] sm:text-[10px] font-sans font-bold tracking-[0.15em] uppercase text-brand-wine hover:text-brand-blue transition-colors duration-250 cursor-pointer"
                        >
                          <span>Inscrever</span>
                          <ChevronRight size={9} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* =============================================
          INTERACTIVE DETAILS MODAL
          ============================================= */}
      <AnimatePresence>
        {selectedEventId && selectedEvent && detailedInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-deepest/80 backdrop-blur-md"
          >
            <div className="absolute inset-0" onClick={() => setSelectedEventId(null)} />
            
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-brand-parchment p-7 sm:p-9 shadow-2xl rounded-[3px] border border-brand-gold/30 z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Inner frame */}
              <div className="absolute inset-2 pointer-events-none border border-brand-gold/10" />

              <button
                onClick={() => setSelectedEventId(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <span className="font-display text-[8px] uppercase tracking-[0.22em] text-brand-gold-light bg-brand-gold/10 px-2 py-1 border border-brand-gold/20">
                  {eventTypeLabel[selectedEvent.type] || 'Evento'}
                </span>
                <span className="font-sans text-[10px] text-slate-400">{selectedEvent.dateStr}</span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-blue mb-4 leading-snug">
                {selectedEvent.title}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-light pb-6 border-b border-brand-gold/10">
                <p>{detailedInfo.details}</p>
                
                <div className="space-y-2 pt-3">
                  <div className="flex items-center gap-2.5">
                    <User size={13} className="text-brand-gold" />
                    <span><strong>Palestrante:</strong> {detailedInfo.speaker}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock size={13} className="text-brand-gold" />
                    <span><strong>Horário:</strong> {detailedInfo.hour}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin size={13} className="text-brand-gold" />
                    <span><strong>Plataforma:</strong> {detailedInfo.platform}</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedEventId(null)}
                  className="px-4 py-2.5 text-[10px] font-sans font-bold uppercase tracking-[0.18em] border border-brand-gold/20 text-slate-500 hover:bg-brand-gold/5"
                  style={{ borderRadius: '2px' }}
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    setRegisterEventId(selectedEventId);
                    setSelectedEventId(null);
                  }}
                  className="px-6 py-2.5 text-[10px] font-sans font-bold uppercase tracking-[0.18em] bg-brand-wine text-brand-ivory hover:bg-brand-wine-dark shadow-md"
                  style={{ borderRadius: '2px' }}
                >
                  Inscrever-se Grátis
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =============================================
          INTERACTIVE REGISTRATION MODAL
          ============================================= */}
      <AnimatePresence>
        {registerEventId && registerEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-deepest/80 backdrop-blur-md"
          >
            <div className="absolute inset-0" onClick={() => setRegisterEventId(null)} />

            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-md bg-brand-parchment p-7 sm:p-9 shadow-2xl rounded-[3px] border border-brand-gold/30 z-10"
            >
              <div className="absolute inset-2 pointer-events-none border border-brand-gold/10" />

              <button
                onClick={() => setRegisterEventId(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X size={18} />
              </button>

              <h3 className="font-display text-[9px] uppercase tracking-[0.25em] text-brand-wine font-semibold mb-2">
                Inscrição de Participante
              </h3>
              <h4 className="font-serif text-lg font-bold text-brand-blue mb-5 leading-tight truncate">
                {registerEvent.title}
              </h4>

              <AnimatePresence mode="wait">
                {!isDone ? (
                  <motion.form
                    key="reg-form"
                    onSubmit={handleRegister}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-[8px] font-display uppercase tracking-[0.2em] text-slate-500 mb-1">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        required
                        value={regName}
                        onChange={(e) => setRegName(e.target.value)}
                        placeholder="Ex: Clara Aboab da Fonseca"
                        className="w-full px-3 py-2 text-xs bg-white border border-brand-gold/15 rounded-[1px] focus:outline-none focus:border-brand-gold text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-[8px] font-display uppercase tracking-[0.2em] text-slate-500 mb-1">
                        Endereço de E-mail
                      </label>
                      <input
                        type="email"
                        required
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        placeholder="Ex: clara@fonseca.com"
                        className="w-full px-3 py-2 text-xs bg-white border border-brand-gold/15 rounded-[1px] focus:outline-none focus:border-brand-gold text-slate-800"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 mt-4 text-[10px] font-sans font-bold uppercase tracking-[0.18em] text-[#cbb37a] flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-65"
                      style={{
                        background: 'linear-gradient(135deg, #5d101d, #3d0b13)',
                        border: '1px solid rgba(166,137,74,0.3)',
                        borderRadius: '2px',
                      }}
                    >
                      {isSubmitting ? (
                        <span className="w-4 h-4 border-2 border-brand-gold/30 border-t-brand-gold rounded-full animate-spin" />
                      ) : (
                        <span>Confirmar Inscrição Grátis</span>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="reg-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 flex flex-col items-center justify-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center mb-4">
                      <Check className="text-brand-gold" size={22} />
                    </div>
                    <h5 className="font-display text-sm font-semibold text-brand-blue mb-1">
                      Inscrição Confirmada!
                    </h5>
                    <p className="text-[11px] text-slate-500 font-sans font-light leading-relaxed">
                      Enviamos os acessos e credenciais para o seu e-mail cadastrado.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
