import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Play,
  Clock,
  Star,
  Flame,
  BookOpen,
  BrainCircuit,
  Video,
  FolderOpen,
  CheckCircle,
  Zap,
  TrendingUp,
  Calendar,
  Users
} from 'lucide-react';
import { cn } from '@/lib/utils';

const recentActivity = [
  { type: 'lesson', text: 'Concluiu "Dashboards e relatorios"', time: 'Hoje, 14:32', icon: CheckCircle, color: 'text-emerald-500' },
  { type: 'quiz', text: 'Passou no Quiz do Modulo 04 — 90%', time: 'Hoje, 13:15', icon: BrainCircuit, color: 'text-violet-500' },
  { type: 'streak', text: 'Sequencia de 15 dias!', time: 'Ontem', icon: Flame, color: 'text-amber-500' },
  { type: 'lesson', text: 'Concluiu "Metricas importantes"', time: 'Ontem, 20:10', icon: CheckCircle, color: 'text-emerald-500' },
];

interface DashboardProps {
  setActivePage: (page: string) => void;
}

export default function Dashboard({ setActivePage }: DashboardProps) {
  const completedLessons = 18;
  const totalLessons = 28;
  const percentage = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="space-y-6">
      {/* Welcome + Stats Row */}
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Welcome */}
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold text-indigo-900 tracking-tight">Ola, Lucas!</h1>
          <p className="text-slate-400 mt-1">Continue de onde parou e alcance seus objetivos.</p>
        </div>

        {/* Stat Pills */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
              <Zap size={20} className="text-violet-600" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">XP Total</p>
              <p className="text-lg font-extrabold text-indigo-900 leading-tight">2.450</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
              <Flame size={20} className="text-amber-600" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Sequencia</p>
              <p className="text-lg font-extrabold text-indigo-900 leading-tight">15 dias</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

        {/* Big Progress Ring Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-4 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500" />

          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-5">Progresso Geral</p>

          {/* SVG Ring */}
          <div className="relative w-40 h-40 mb-5">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" fill="none" stroke="#f1f5f9" strokeWidth="10" />
              <motion.circle
                cx="60" cy="60" r="52" fill="none" stroke="url(#progressGrad)" strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 52}
                initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - percentage / 100) }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#c026d3" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-extrabold text-indigo-900">{percentage}%</span>
              <span className="text-[10px] text-slate-400 font-semibold">completo</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 text-center">
            <div>
              <p className="text-xl font-extrabold text-indigo-900">{completedLessons}</p>
              <p className="text-[10px] text-slate-400 font-semibold">Concluidas</p>
            </div>
            <div className="w-px h-8 bg-slate-100" />
            <div>
              <p className="text-xl font-extrabold text-indigo-900">{totalLessons - completedLessons}</p>
              <p className="text-[10px] text-slate-400 font-semibold">Restantes</p>
            </div>
          </div>
        </motion.div>

        {/* Continue Learning - Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => setActivePage('courses')}
          className="lg:col-span-8 text-white rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all"
          style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #3b0764 100%)',
          }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500 rounded-full blur-[140px] opacity-15 -translate-y-1/2 translate-x-1/3 group-hover:opacity-25 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-400 rounded-full blur-[100px] opacity-10 translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 h-full">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-white/35 mb-4 text-xs font-semibold uppercase tracking-widest">
                <Play size={12} fill="currentColor" /> Continuar de onde parou
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2 tracking-tight leading-tight">
                Modulo 05:<br />Estrategias Avancadas
              </h2>
              <p className="text-white/45 mb-6 max-w-md text-sm leading-relaxed">
                Aula 3/4 — Como aplicar os conceitos aprendidos em cenarios reais e medir resultados com precisao.
              </p>

              <div className="flex items-center gap-4">
                <button className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors flex items-center gap-2 text-sm shadow-lg">
                  Assistir Aula <ArrowRight size={16} />
                </button>
                <div className="hidden md:flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-violet-400 w-[75%] rounded-full" />
                    </div>
                    <span className="text-[11px] text-white/30 font-bold">75%</span>
                  </div>
                  <span className="text-[10px] text-white/25">do modulo concluido</span>
                </div>
              </div>
            </div>

            {/* Time info */}
            <div className="hidden md:flex flex-col items-end gap-2">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/5 flex items-center gap-2">
                <Clock size={14} className="text-white/40" />
                <span className="text-sm text-white/60 font-medium">14:20 min</span>
              </div>
              <span className="text-[10px] text-white/20">duracao da aula</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Nav Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          onClick={() => setActivePage('live')}
          className="lg:col-span-3 bg-gradient-to-br from-violet-600 to-indigo-700 text-white rounded-2xl p-5 shadow-md cursor-pointer hover:shadow-lg transition-all group relative overflow-hidden"
        >
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
          <div className="relative z-10">
            <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
              <Video size={20} />
            </div>
            <h3 className="font-bold text-base mb-1">Proxima Live</h3>
            <p className="text-white/50 text-xs mb-3">Quinta, 19h com Prof. Rafael</p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {['AS', 'MF', 'JP'].map((i, idx) => (
                  <div key={idx} className="w-6 h-6 rounded-full bg-white/20 border border-white/10 flex items-center justify-center text-[8px] font-bold">
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-[10px] text-white/35">+5 participantes</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => setActivePage('exercises')}
          className="lg:col-span-3 bg-white rounded-2xl p-5 shadow-sm border border-slate-100 cursor-pointer hover:shadow-md transition-all group"
        >
          <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
            <BrainCircuit size={20} className="text-amber-600" />
          </div>
          <h3 className="font-bold text-indigo-900 text-base mb-1">Quiz Pendente</h3>
          <p className="text-slate-400 text-xs mb-3">Modulo 05 — 5 questoes</p>
          <div className="flex items-center gap-1.5 text-violet-600 font-bold text-xs group-hover:gap-2.5 transition-all">
            Comecar agora <ArrowRight size={13} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          onClick={() => setActivePage('materials')}
          className="lg:col-span-3 bg-white rounded-2xl p-5 shadow-sm border border-slate-100 cursor-pointer hover:shadow-md transition-all group"
        >
          <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center mb-4">
            <FolderOpen size={20} className="text-rose-500" />
          </div>
          <h3 className="font-bold text-indigo-900 text-base mb-1">Novos Materiais</h3>
          <p className="text-slate-400 text-xs mb-3">3 arquivos adicionados</p>
          <div className="flex items-center gap-1.5 text-violet-600 font-bold text-xs group-hover:gap-2.5 transition-all">
            Ver materiais <ArrowRight size={13} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onClick={() => setActivePage('community')}
          className="lg:col-span-3 bg-white rounded-2xl p-5 shadow-sm border border-slate-100 cursor-pointer hover:shadow-md transition-all group"
        >
          <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center mb-4">
            <Users size={20} className="text-sky-500" />
          </div>
          <h3 className="font-bold text-indigo-900 text-base mb-1">Comunidade</h3>
          <p className="text-slate-400 text-xs mb-3">8 novas publicacoes</p>
          <div className="flex items-center gap-1.5 text-violet-600 font-bold text-xs group-hover:gap-2.5 transition-all">
            Acessar <ArrowRight size={13} />
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="lg:col-span-12 bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-extrabold text-indigo-900 tracking-tight flex items-center gap-2">
              <TrendingUp size={18} className="text-violet-500" /> Atividade Recente
            </h3>
            <button onClick={() => setActivePage('progress')} className="text-xs text-violet-600 font-bold hover:text-violet-800 transition-colors flex items-center gap-1">
              Ver tudo <ArrowRight size={12} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {recentActivity.map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className={cn("w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center shrink-0", activity.color)}>
                  <activity.icon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-indigo-900 font-medium truncate">{activity.text}</p>
                  <p className="text-[11px] text-slate-400">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
