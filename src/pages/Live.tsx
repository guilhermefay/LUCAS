import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  Users,
  Video,
  Clock,
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

const upcomingSessions = [
  {
    id: 1,
    type: 'mentoria',
    title: 'Mentoria em Grupo',
    subtitle: 'Tire duvidas ao vivo',
    date: 'Quinta, 6 Marco',
    time: '19:00 — 20:00',
    spots: 3,
    totalSpots: 8,
    host: 'Rafael',
    hostRole: 'Mentor',
    description: 'Sessao aberta para tirar duvidas sobre os modulos e discutir casos praticos com outros alunos.',
    featured: true,
  },
  {
    id: 2,
    type: 'workshop',
    title: 'Workshop Pratico',
    subtitle: 'Mao na massa',
    date: 'Sabado, 8 Marco',
    time: '10:00 — 11:30',
    spots: 5,
    totalSpots: 12,
    host: 'Camila',
    hostRole: 'Especialista',
    description: 'Workshop hands-on para aplicar os conceitos do Modulo 05 em cenarios reais.',
    featured: false,
  },
  {
    id: 3,
    type: 'mentoria',
    title: 'Mentoria Individual',
    subtitle: 'Sessao 1:1',
    date: 'Segunda, 10 Marco',
    time: '14:00 — 14:30',
    spots: 1,
    totalSpots: 1,
    host: 'Rafael',
    hostRole: 'Mentor',
    description: 'Sessao individual para revisar seu progresso e definir proximos passos personalizados.',
    featured: false,
  },
];

const pastSessions = [
  { id: 10, title: 'Mentoria em Grupo', date: '27 Fev', attended: true, notes: 'Revisao de estrategias' },
  { id: 11, title: 'Workshop Pratico', date: '22 Fev', attended: true, notes: 'Tema: analise de dados' },
  { id: 12, title: 'Mentoria em Grupo', date: '20 Fev', attended: false, notes: '' },
];

export default function Live() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const featured = upcomingSessions.find(s => s.featured);

  return (
    <div className="space-y-7">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-indigo-900 tracking-tight">Sessoes ao Vivo</h1>
          <p className="text-slate-400 mt-1">Mentorias, workshops e sessoes exclusivas para membros.</p>
        </div>
        <div className="flex bg-white rounded-xl p-1 shadow-sm border border-slate-100">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={cn(
              "px-5 py-2 rounded-lg text-xs font-bold transition-all uppercase tracking-wider",
              activeTab === 'upcoming' ? "bg-indigo-900 text-white shadow-sm" : "text-slate-400 hover:text-slate-600"
            )}
          >
            Proximas
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={cn(
              "px-5 py-2 rounded-lg text-xs font-bold transition-all uppercase tracking-wider",
              activeTab === 'past' ? "bg-indigo-900 text-white shadow-sm" : "text-slate-400 hover:text-slate-600"
            )}
          >
            Historico
          </button>
        </div>
      </div>

      {activeTab === 'upcoming' ? (
        <div className="space-y-6">
          {/* Featured session */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white rounded-2xl p-5 md:p-8 shadow-lg relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)' }}
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500 rounded-full blur-[120px] opacity-15 translate-x-1/3 -translate-y-1/3" />

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-violet-500 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">Proxima Sessao</span>
                    <span className="flex items-center gap-1 text-white/50 text-xs"><Clock size={12} /> Em 2 dias</span>
                  </div>
                  <h2 className="text-2xl font-extrabold mb-2 tracking-tight">{featured.title}</h2>
                  <p className="text-white/50 text-sm mb-1">{featured.description}</p>
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-4 text-white/35 text-xs">
                    <span className="flex items-center gap-1"><Calendar size={13} /> {featured.date}</span>
                    <span className="flex items-center gap-1"><Clock size={13} /> {featured.time}</span>
                    <span className="flex items-center gap-1"><Users size={13} /> {featured.spots} vagas</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-6">
                    <button className="bg-white text-indigo-900 px-5 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 text-sm shadow-lg">
                      <Video size={16} /> Entrar na Sala
                    </button>
                    <button className="border border-white/20 text-white px-5 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm text-center">
                      Adicionar ao Calendario
                    </button>
                  </div>
                </div>

                {/* Host avatar */}
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-2xl font-extrabold border-3 border-white/20 shadow-xl">
                    RF
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold">{featured.host}</p>
                    <p className="text-[10px] text-white/35">{featured.hostRole}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other sessions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {upcomingSessions.filter(s => !s.featured).map((session) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm",
                      session.type === 'workshop' ? "bg-slate-50 text-slate-600" : "bg-violet-50 text-violet-600"
                    )}>
                      {session.host === 'Camila' ? 'CM' : 'RF'}
                    </div>
                    <div>
                      <p className="font-bold text-indigo-900 text-sm">{session.host}</p>
                      <p className="text-[10px] text-slate-400">{session.hostRole}</p>
                    </div>
                  </div>
                  <span className={cn(
                    "text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider",
                    session.type === 'workshop' ? "bg-blue-50 text-blue-500" : "bg-violet-50 text-violet-600"
                  )}>
                    {session.type === 'workshop' ? 'Workshop' : 'Mentoria'}
                  </span>
                </div>

                <h3 className="font-bold text-indigo-900 mb-1">{session.title}</h3>
                <p className="text-xs text-slate-400 mb-4">{session.description}</p>

                <div className="flex items-center gap-4 text-xs text-slate-400 mb-5">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {session.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {session.time}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Users size={13} />
                    <span>{session.spots}/{session.totalSpots} vagas</span>
                  </div>
                  <button className="px-4 py-2 rounded-lg border border-indigo-900/10 text-indigo-900 font-bold text-xs hover:bg-indigo-900 hover:text-white transition-colors">
                    Reservar
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info card */}
          <div className="bg-violet-50/60 rounded-2xl p-6 border border-violet-100/50">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 shrink-0">
                <MessageCircle size={18} />
              </div>
              <div>
                <h3 className="font-bold text-indigo-900 text-sm mb-1">Suporte Direto pelo Chat</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Alem das sessoes ao vivo, voce tem acesso ao chat exclusivo de membros para tirar duvidas rapidas, compartilhar resultados e receber feedback personalizado da equipe.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {pastSessions.map((session) => (
            <div key={session.id} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold",
                  session.attended ? "bg-emerald-50 text-emerald-500" : "bg-slate-50 text-slate-300"
                )}>
                  {session.attended ? '✓' : '✗'}
                </div>
                <div>
                  <h4 className="font-bold text-indigo-900 text-sm">{session.title}</h4>
                  <p className="text-xs text-slate-400">{session.date} {session.notes && `— ${session.notes}`}</p>
                </div>
              </div>
              {session.attended && (
                <button className="text-xs font-bold text-violet-600 hover:text-violet-800 transition-colors flex items-center gap-1">
                  Rever <ChevronRight size={14} />
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
