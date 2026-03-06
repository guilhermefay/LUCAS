import React from 'react';
import { motion } from 'motion/react';
import {
  Trophy,
  Target,
  Award,
  Flame,
  BookOpen,
  BrainCircuit,
  Clock,
  CheckCircle,
  Star,
  ArrowUp,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const weeklyProgress = [
  { week: 'Sem 1', xp: 180, aulas: 3 },
  { week: 'Sem 2', xp: 320, aulas: 5 },
  { week: 'Sem 3', xp: 250, aulas: 2 },
  { week: 'Sem 4', xp: 480, aulas: 4 },
  { week: 'Sem 5', xp: 410, aulas: 3 },
  { week: 'Sem 6', xp: 520, aulas: 6 },
  { week: 'Sem 7', xp: 380, aulas: 4 },
  { week: 'Sem 8', xp: 610, aulas: 5 },
];

const milestones = [
  { id: 1, title: 'Primeira aula concluida', date: '10 Jan', done: true },
  { id: 2, title: 'Modulo 01 finalizado', date: '18 Jan', done: true },
  { id: 3, title: '1.000 XP alcancados', date: '25 Jan', done: true },
  { id: 4, title: 'Modulo 03 finalizado', date: '08 Fev', done: true },
  { id: 5, title: 'Sequencia de 10 dias', date: '15 Fev', done: true },
  { id: 6, title: '2.000 XP alcancados', date: '25 Fev', done: true },
  { id: 7, title: 'Modulo 05 finalizado', date: '—', done: false, current: true },
  { id: 8, title: 'Nivel Avancado', date: '—', done: false },
];

const badges = [
  { icon: '🔥', title: 'Em Chamas', desc: '7 dias seguidos', unlocked: true },
  { icon: '📚', title: 'Estudioso', desc: '10 aulas concluidas', unlocked: true },
  { icon: '🎯', title: 'Certeiro', desc: '90% nos quizzes', unlocked: true },
  { icon: '💬', title: 'Participativo', desc: '20 posts', unlocked: false },
  { icon: '⚡', title: 'Veloz', desc: 'Quiz em < 1min', unlocked: false },
  { icon: '🏆', title: 'Campeao', desc: 'Modulo 100%', unlocked: false },
];

export default function Progress() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-indigo-900 tracking-tight">Meu Progresso</h1>
        <p className="text-slate-400 mt-1">Acompanhe toda a sua jornada de aprendizado.</p>
      </div>

      {/* Big Stats Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Aulas Concluidas', value: '18', total: '/28', icon: BookOpen, color: 'from-violet-500 to-indigo-600', trend: '+3 esta semana' },
          { label: 'XP Total', value: '2.450', total: '', icon: Zap, color: 'from-amber-500 to-orange-500', trend: '+520 esta semana' },
          { label: 'Quizzes Aprovados', value: '12', total: '/14', icon: BrainCircuit, color: 'from-emerald-500 to-teal-600', trend: '86% aprovacao' },
          { label: 'Horas de Estudo', value: '24h', total: '', icon: Clock, color: 'from-rose-500 to-pink-600', trend: '+4h esta semana' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 relative overflow-hidden"
          >
            <div className={cn("absolute top-0 right-0 w-20 h-20 rounded-full blur-[40px] opacity-15 -translate-y-1/2 translate-x-1/2 bg-gradient-to-br", stat.color)} />
            <div className={cn("w-9 h-9 rounded-lg bg-gradient-to-br flex items-center justify-center text-white mb-3 shadow-sm", stat.color)}>
              <stat.icon size={16} />
            </div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{stat.label}</p>
            <div className="flex items-baseline gap-0.5 mt-1">
              <span className="text-2xl font-extrabold text-indigo-900">{stat.value}</span>
              {stat.total && <span className="text-sm text-slate-300 font-bold">{stat.total}</span>}
            </div>
            <p className="text-[10px] text-emerald-500 font-semibold mt-2 flex items-center gap-1">
              <ArrowUp size={10} /> {stat.trend}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* XP Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-8 bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-extrabold text-indigo-900 tracking-tight">Evolucao de XP</h3>
              <p className="text-xs text-slate-400 mt-0.5">Ultimas 8 semanas</p>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-lg">
              <ArrowUp size={14} className="text-emerald-500" />
              <span className="text-xs font-bold text-emerald-600">+42% vs mes anterior</span>
            </div>
          </div>

          <div className="w-full h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyProgress}>
                <defs>
                  <linearGradient id="xpGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} width={35} />
                <Tooltip
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontSize: '12px' }}
                  formatter={(value: number, name: string) => [name === 'xp' ? `${value} XP` : `${value} aulas`, name === 'xp' ? 'XP ganho' : 'Aulas']}
                />
                <Area type="monotone" dataKey="xp" stroke="#7c3aed" strokeWidth={2.5} fill="url(#xpGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="lg:col-span-4 bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
        >
          <h3 className="font-extrabold text-indigo-900 mb-1 tracking-tight flex items-center gap-2">
            <Award size={18} className="text-amber-500" /> Conquistas
          </h3>
          <p className="text-xs text-slate-400 mb-5">3 de 6 desbloqueadas</p>

          <div className="space-y-3">
            {badges.map((badge, i) => (
              <div
                key={i}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-xl transition-all",
                  badge.unlocked
                    ? "bg-violet-50/70 border border-violet-100/60"
                    : "bg-slate-50 border border-slate-100 opacity-40"
                )}
              >
                <span className={cn("text-xl", !badge.unlocked && "grayscale")}>{badge.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-xs text-indigo-900">{badge.title}</p>
                  <p className="text-[10px] text-slate-400">{badge.desc}</p>
                </div>
                {badge.unlocked && <CheckCircle size={14} className="text-violet-500 shrink-0" />}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline / Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-5 bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
        >
          <h3 className="font-extrabold text-indigo-900 mb-1 tracking-tight flex items-center gap-2">
            <Target size={18} className="text-violet-500" /> Marcos da Jornada
          </h3>
          <p className="text-xs text-slate-400 mb-5">Sua linha do tempo de conquistas</p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-slate-100" />

            <div className="space-y-1">
              {milestones.map((milestone, i) => (
                <div key={milestone.id} className="flex items-start gap-4 relative py-2">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 relative z-10 border-2",
                    milestone.done
                      ? "bg-violet-500 border-violet-500 text-white"
                      : milestone.current
                        ? "bg-white border-violet-500 text-violet-500"
                        : "bg-white border-slate-200 text-slate-300"
                  )}>
                    {milestone.done ? (
                      <CheckCircle size={14} />
                    ) : milestone.current ? (
                      <div className="w-2.5 h-2.5 bg-violet-500 rounded-full animate-pulse" />
                    ) : (
                      <div className="w-2 h-2 bg-slate-200 rounded-full" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <p className={cn(
                      "text-sm font-semibold",
                      milestone.done ? "text-indigo-900" : milestone.current ? "text-violet-600" : "text-slate-400"
                    )}>
                      {milestone.title}
                    </p>
                    <p className="text-[10px] text-slate-400">{milestone.date}</p>
                  </div>
                  {milestone.current && (
                    <span className="text-[9px] font-bold text-violet-600 bg-violet-50 px-2 py-0.5 rounded-md uppercase tracking-wider shrink-0 mt-1">
                      Em andamento
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Module Completion Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="lg:col-span-7 bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
        >
          <h3 className="font-extrabold text-indigo-900 mb-1 tracking-tight flex items-center gap-2">
            <BookOpen size={18} className="text-violet-500" /> Modulos Concluidos
          </h3>
          <p className="text-xs text-slate-400 mb-5">Progresso por modulo</p>

          <div className="space-y-3">
            {[
              { name: 'M01 — Fundamentos Essenciais', progress: 100 },
              { name: 'M02 — Planejamento Estrategico', progress: 100 },
              { name: 'M03 — Ferramentas do Dia a Dia', progress: 100 },
              { name: 'M04 — Analise de Resultados', progress: 75 },
              { name: 'M05 — Estrategias Avancadas', progress: 50 },
              { name: 'M06 — Gestao de Equipes', progress: 0 },
              { name: 'M07 — Escalando Resultados', progress: 0 },
            ].map((mod, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-44 md:w-56 shrink-0">
                  <p className={cn(
                    "text-xs font-semibold truncate",
                    mod.progress === 100 ? "text-emerald-600" : mod.progress > 0 ? "text-indigo-900" : "text-slate-400"
                  )}>
                    {mod.name}
                  </p>
                </div>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${mod.progress}%` }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.08 }}
                    className={cn(
                      "h-full rounded-full",
                      mod.progress === 100 ? "bg-emerald-500" : mod.progress > 0 ? "bg-violet-500" : "bg-transparent"
                    )}
                  />
                </div>
                <span className={cn(
                  "text-xs font-bold w-10 text-right shrink-0",
                  mod.progress === 100 ? "text-emerald-500" : mod.progress > 0 ? "text-violet-600" : "text-slate-300"
                )}>
                  {mod.progress}%
                </span>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] text-slate-400 font-semibold">Concluido</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-violet-500" />
                <span className="text-[10px] text-slate-400 font-semibold">Em andamento</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="text-[10px] text-slate-400 font-semibold">Bloqueado</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Star size={14} className="text-amber-500" />
              <span className="text-xs font-bold text-indigo-900">Nivel Intermediario</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
