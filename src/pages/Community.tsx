import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MessageCircle,
  Calendar,
  Users,
  Video,
  Clock,
  Mic,
  Play,
  Heart,
  Trophy,
  Send
} from 'lucide-react';
import { cn } from '@/lib/utils';

const posts = [
  { id: 1, user: 'Ana Costa', avatar: 'AC', content: 'Acabei de terminar o Modulo 04! As tecnicas de analise de dados mudaram completamente minha forma de tomar decisoes. Recomendo!', likes: 24, comments: 6, time: '1h atras' },
  { id: 2, user: 'Pedro Lima', avatar: 'PL', content: 'Alguem tem dicas para implementar o framework SWOT na pratica? Estou com dificuldade de mapear as ameacas do meu mercado.', likes: 8, comments: 12, time: '3h atras' },
  { id: 3, user: 'Julia Santos', avatar: 'JS', content: 'Compartilhando meu resultado: apliquei as estrategias do Modulo 03 e consegui aumentar a produtividade da equipe em 40%!', audio: true, likes: 45, comments: 9, time: '5h atras' },
  { id: 4, user: 'Marcos Silva', avatar: 'MS', content: 'A mentoria de ontem com o Rafael foi incrivel. Ele deu insights que eu nunca tinha pensado. Vale muito participar das sessoes ao vivo.', likes: 18, comments: 3, time: '8h atras' },
];

export default function Community() {
  const [activeTab, setActiveTab] = useState<'feed' | 'ranking'>('feed');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:h-[calc(100vh-120px)]">
      {/* Main Content */}
      <div className="lg:col-span-2 flex flex-col h-full space-y-6">
        {/* Tabs */}
        <div className="flex bg-white rounded-2xl p-1 shadow-sm border border-slate-100 w-fit">
          <button
            onClick={() => setActiveTab('feed')}
            className={cn(
              "px-6 py-2 rounded-xl text-sm font-bold transition-all",
              activeTab === 'feed' ? "bg-indigo-900 text-white shadow-md" : "text-slate-400 hover:text-slate-600"
            )}
          >
            Comunidade
          </button>
          <button
            onClick={() => setActiveTab('ranking')}
            className={cn(
              "px-6 py-2 rounded-xl text-sm font-bold transition-all",
              activeTab === 'ranking' ? "bg-indigo-900 text-white shadow-md" : "text-slate-400 hover:text-slate-600"
            )}
          >
            Ranking
          </button>
        </div>

        <div className="space-y-4 overflow-y-auto pb-4">
          {/* Create Post */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-white flex items-center justify-center font-bold shrink-0">
              LC
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Compartilhe algo com a comunidade..."
                className="w-full bg-slate-50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 mb-2"
              />
              <div className="flex justify-end gap-2">
                <button className="p-2 text-slate-300 hover:text-violet-500 transition-colors"><Mic size={20} /></button>
                <button className="bg-indigo-900 text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-indigo-800 transition-colors flex items-center gap-1.5">
                  <Send size={14} /> Postar
                </button>
              </div>
            </div>
          </div>

          {/* Feed */}
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-xs">
                    {post.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-indigo-900 text-sm">{post.user}</h4>
                    <p className="text-xs text-slate-400">{post.time}</p>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm mb-4 leading-relaxed">{post.content}</p>

              {post.audio && (
                <div className="bg-violet-50 p-3 rounded-xl flex items-center gap-3 mb-4 border border-violet-100/50">
                  <button className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center text-white shrink-0">
                    <Play size={14} fill="currentColor" className="ml-0.5" />
                  </button>
                  <div className="h-1 bg-violet-200 rounded-full flex-1 overflow-hidden">
                    <div className="h-full bg-violet-500 w-[40%]" />
                  </div>
                  <span className="text-xs text-violet-400 font-mono">0:32</span>
                </div>
              )}

              <div className="flex items-center gap-6 pt-4 border-t border-slate-50">
                <button className="flex items-center gap-2 text-slate-400 hover:text-red-500 transition-colors text-sm group">
                  <Heart size={18} className="group-hover:fill-current" /> {post.likes}
                </button>
                <button className="flex items-center gap-2 text-slate-400 hover:text-violet-600 transition-colors text-sm">
                  <MessageCircle size={18} /> {post.comments}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="hidden lg:flex flex-col gap-6">
        {/* Ranking */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <h3 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
            <Trophy size={18} className="text-amber-500" /> Ranking Semanal
          </h3>
          <div className="space-y-3">
            {[
              { name: 'Voce', xp: 820, avatar: 'LC' },
              { name: 'Maria F.', xp: 1250, avatar: 'MF' },
              { name: 'Joao P.', xp: 1100, avatar: 'JP' },
              { name: 'Luiza S.', xp: 950, avatar: 'LS' },
              { name: 'Carlos M.', xp: 780, avatar: 'CM' },
            ].sort((a, b) => b.xp - a.xp).map((user, i) => (
              <div key={i} className={cn("flex items-center justify-between p-3 rounded-xl", user.name === 'Voce' ? "bg-violet-50 border border-violet-100" : "")}>
                <div className="flex items-center gap-3">
                  <span className={cn("font-bold w-4 text-center text-sm", i < 3 ? "text-amber-500" : "text-slate-400")}>{i + 1}</span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold",
                    user.name === 'Voce' ? "bg-gradient-to-br from-violet-500 to-indigo-600 text-white" : "bg-slate-100 text-slate-500"
                  )}>
                    {user.avatar}
                  </div>
                  <span className={cn("text-sm font-medium", user.name === 'Voce' ? "text-indigo-900 font-bold" : "text-slate-600")}>{user.name}</span>
                </div>
                <span className="text-xs font-bold text-violet-600">{user.xp} XP</span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge */}
        <div className="rounded-2xl p-6 shadow-lg relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)' }}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500 rounded-full blur-[60px] opacity-20" />
          <div className="relative z-10">
            <h3 className="font-bold mb-2">Desafio da Semana</h3>
            <p className="text-white/60 text-sm mb-4">Compartilhe um resultado que voce conquistou aplicando as estrategias do curso.</p>
            <button className="w-full bg-white text-indigo-900 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors">
              Participar
            </button>
          </div>
        </div>

        {/* Online */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <h3 className="font-bold text-indigo-900 mb-4 flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Online Agora
          </h3>
          <div className="flex flex-wrap gap-2">
            {['AC', 'PL', 'JS', 'MS', 'RF', 'CM', 'LS'].map((avatar, i) => (
              <div key={i} className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500 border-2 border-white shadow-sm">
                {avatar}
              </div>
            ))}
            <div className="w-9 h-9 rounded-full bg-violet-50 flex items-center justify-center text-[10px] font-bold text-violet-600 border-2 border-white shadow-sm">
              +12
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
