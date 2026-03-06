import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  FileText,
  Headphones,
  CheckCircle,
  Lock,
  ChevronRight,
  Download,
  MessageSquare,
  BookOpen
} from 'lucide-react';
import { cn } from '@/lib/utils';

const modules = [
  {
    id: 1,
    title: 'Fundamentos Essenciais',
    subtitle: 'Base solida para comecar',
    progress: 100,
    lessons: [
      { id: 1, title: 'Introducao e visao geral', duration: '12:45', completed: true },
      { id: 2, title: 'Conceitos fundamentais', duration: '15:20', completed: true },
      { id: 3, title: 'Primeiros passos praticos', duration: '10:10', completed: true },
      { id: 4, title: 'Revisao do modulo', duration: '18:00', completed: true },
    ]
  },
  {
    id: 2,
    title: 'Planejamento Estrategico',
    subtitle: 'Organize suas ideias',
    progress: 100,
    lessons: [
      { id: 5, title: 'Definindo seus objetivos', duration: '14:30', completed: true },
      { id: 6, title: 'Mapeamento de recursos', duration: '16:20', completed: true },
      { id: 7, title: 'Criando um plano de acao', duration: '12:45', completed: true },
      { id: 8, title: 'Cronograma e metas', duration: '11:00', completed: true },
    ]
  },
  {
    id: 3,
    title: 'Ferramentas do Dia a Dia',
    subtitle: 'Produtividade na pratica',
    progress: 100,
    lessons: [
      { id: 9, title: 'Ferramentas essenciais', duration: '10:00', completed: true },
      { id: 10, title: 'Automatizacoes basicas', duration: '18:20', completed: true },
      { id: 11, title: 'Organizacao de processos', duration: '25:00', completed: true },
      { id: 12, title: 'Templates prontos', duration: '15:15', completed: true },
    ]
  },
  {
    id: 4,
    title: 'Analise de Resultados',
    subtitle: 'Mensurando o progresso',
    progress: 75,
    lessons: [
      { id: 13, title: 'Metricas importantes', duration: '14:00', completed: true },
      { id: 14, title: 'Dashboards e relatorios', duration: '12:30', completed: true },
      { id: 15, title: 'Interpretacao de dados', duration: '16:00', completed: true },
      { id: 16, title: 'Tomada de decisao', duration: '13:45', completed: false, current: true },
    ]
  },
  {
    id: 5,
    title: 'Estrategias Avancadas',
    subtitle: 'Proximo nivel',
    progress: 50,
    lessons: [
      { id: 17, title: 'Tecnicas avancadas', duration: '11:30', completed: true },
      { id: 18, title: 'Estudos de caso', duration: '18:00', completed: true },
      { id: 19, title: 'Aplicacao em cenarios reais', duration: '14:20', completed: false, current: true },
      { id: 20, title: 'Otimizacao continua', duration: '16:00', completed: false },
    ]
  },
  {
    id: 6,
    title: 'Gestao de Equipes',
    subtitle: 'Lideranca e delegacao',
    progress: 0,
    locked: true,
    lessons: [
      { id: 21, title: 'Comunicacao efetiva', duration: '15:00', completed: false },
      { id: 22, title: 'Delegacao inteligente', duration: '12:40', completed: false },
      { id: 23, title: 'Feedback construtivo', duration: '14:00', completed: false },
      { id: 24, title: 'Cultura de alta performance', duration: '16:30', completed: false },
    ]
  },
  {
    id: 7,
    title: 'Escalando Resultados',
    subtitle: 'Crescimento sustentavel',
    progress: 0,
    locked: true,
    lessons: [
      { id: 25, title: 'Sistemas escalaveis', duration: '18:00', completed: false },
      { id: 26, title: 'Processos automatizados', duration: '14:20', completed: false },
      { id: 27, title: 'Expansao estrategica', duration: '16:00', completed: false },
      { id: 28, title: 'Projeto final', duration: '15:30', completed: false },
    ]
  },
];

export default function Courses() {
  const [activeModule, setActiveModule] = useState(5);
  const [activeLesson, setActiveLesson] = useState(19);
  const [activeTab, setActiveTab] = useState<'video' | 'material' | 'audio'>('video');

  const currentModule = modules.find(m => m.id === activeModule);
  const currentLesson = currentModule?.lessons.find(l => l.id === activeLesson);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:h-[calc(100vh-120px)]">
      {/* Main Content */}
      <div className="lg:col-span-2 flex flex-col lg:h-full space-y-5">
        {/* Video Player */}
        <div className="bg-indigo-900 rounded-2xl aspect-video relative overflow-hidden shadow-lg group">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Aula"
            className="w-full h-full object-cover opacity-30 group-hover:opacity-20 transition-opacity duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-18 h-18 bg-violet-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-violet-500/40"
            >
              <Play size={28} fill="currentColor" className="ml-1" />
            </motion.button>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-indigo-950 via-indigo-950/70 to-transparent">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold bg-violet-500 text-white px-2 py-0.5 rounded-md uppercase tracking-wider">
                Modulo {activeModule}
              </span>
              <span className="text-white/40 text-xs">Aula {currentLesson ? currentModule!.lessons.indexOf(currentLesson) + 1 : 1}/4</span>
            </div>
            <h2 className="text-white text-xl font-extrabold tracking-tight">{currentLesson?.title}</h2>
          </div>
        </div>

        {/* Tabs & Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex-1 flex flex-col overflow-hidden">
          <div className="flex border-b border-slate-50">
            {[
              { id: 'video', label: 'Resumo', icon: FileText },
              { id: 'material', label: 'Material PDF', icon: Download },
              { id: 'audio', label: 'Audio Extra', icon: Headphones },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "flex-1 py-3.5 text-xs font-bold flex items-center justify-center gap-2 transition-colors relative uppercase tracking-wider",
                  activeTab === tab.id ? "text-indigo-900" : "text-slate-300 hover:text-slate-500"
                )}
              >
                <tab.icon size={15} />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="lessonTab"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-violet-500"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="p-6 overflow-y-auto flex-1">
            {activeTab === 'video' && (
              <div className="space-y-4">
                <h3 className="font-extrabold text-indigo-900 text-lg tracking-tight">Nesta aula voce vai aprender:</h3>
                <ul className="space-y-3">
                  {[
                    "Como identificar oportunidades em cenarios reais do mercado",
                    "Tecnicas para aplicar a teoria na pratica com resultados mensuraveis",
                    "Framework completo para analise e tomada de decisao",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-500 text-sm">
                      <CheckCircle size={16} className="text-violet-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 bg-slate-50/60 p-5 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2 text-sm">
                    <MessageSquare size={15} /> Suas Anotacoes
                  </h4>
                  <textarea
                    className="w-full bg-white rounded-xl p-4 text-sm text-slate-700 focus:ring-2 focus:ring-violet-500/20 outline-none resize-none h-28 border border-slate-100"
                    placeholder="Escreva suas anotacoes aqui..."
                  />
                </div>
              </div>
            )}
            {activeTab === 'material' && (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-500 mb-2">
                  <FileText size={32} />
                </div>
                <h3 className="font-extrabold text-indigo-900 tracking-tight">Material de Apoio — Modulo 05</h3>
                <p className="text-sm text-slate-400 max-w-xs">Baixe o PDF com exercicios e resumo completo da aula.</p>
                <button className="bg-indigo-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-800 transition-colors flex items-center gap-2 text-sm">
                  <Download size={16} /> Baixar (2.4MB)
                </button>
              </div>
            )}
            {activeTab === 'audio' && (
              <div className="space-y-6">
                <div className="bg-slate-50/60 p-5 rounded-xl flex items-center gap-4 border border-slate-100">
                  <button className="w-12 h-12 bg-indigo-900 rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform shrink-0">
                    <Play size={18} fill="currentColor" className="ml-0.5" />
                  </button>
                  <div className="flex-1">
                    <h4 className="font-bold text-indigo-900 text-sm">Resumo em Audio — Modulo 05</h4>
                    <div className="w-full h-1 bg-slate-200 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-violet-500 w-[30%] rounded-full" />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>1:23</span>
                      <span>8:45</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-400 italic text-center">
                  "Ouca esse audio no caminho do trabalho para fixar os conceitos."
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar: Modules */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col lg:h-full">
        <div className="p-5 border-b border-slate-50">
          <h2 className="font-extrabold text-indigo-900 text-lg flex items-center gap-2 tracking-tight">
            <BookOpen size={18} className="text-violet-500" /> Conteudo do Curso
          </h2>
          <p className="text-xs text-slate-400 mt-1">7 Modulos — 28 Aulas</p>
        </div>

        <div className="overflow-y-auto flex-1 p-3 space-y-2">
          {modules.map((module) => (
            <div key={module.id} className={cn(
              "rounded-xl border transition-all",
              module.locked ? "bg-slate-50/50 border-slate-100 opacity-50" : "bg-white border-slate-100 hover:border-slate-200"
            )}>
              <button
                onClick={() => !module.locked && setActiveModule(module.id)}
                className="w-full p-3.5 flex items-center justify-between text-left"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-bold text-violet-500/60 uppercase tracking-wider">M{String(module.id).padStart(2, '0')}</span>
                    {module.progress === 100 && <CheckCircle size={12} className="text-emerald-500" />}
                  </div>
                  <h3 className={cn(
                    "font-bold text-sm truncate",
                    module.id === activeModule ? "text-violet-600" : "text-indigo-900"
                  )}>
                    {module.title}
                  </h3>
                  <p className="text-[10px] text-slate-400 truncate">{module.subtitle}</p>
                  {module.progress > 0 && module.progress < 100 && (
                    <div className="flex items-center gap-2 mt-1.5">
                      <div className="w-16 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-violet-500 rounded-full" style={{ width: `${module.progress}%` }} />
                      </div>
                      <span className="text-[9px] text-slate-400 font-bold">{module.progress}%</span>
                    </div>
                  )}
                </div>
                {module.locked
                  ? <Lock size={14} className="text-slate-300 shrink-0" />
                  : <ChevronRight size={14} className={cn("transition-transform shrink-0", module.id === activeModule ? "rotate-90 text-violet-500" : "text-slate-300")} />
                }
              </button>

              <AnimatePresence>
                {activeModule === module.id && !module.locked && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 pb-3 space-y-0.5">
                      {module.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          onClick={() => setActiveLesson(lesson.id)}
                          className={cn(
                            "w-full p-2.5 rounded-lg flex items-center gap-2.5 text-xs transition-colors",
                            lesson.id === activeLesson
                              ? "bg-violet-50 text-indigo-900 font-semibold"
                              : "hover:bg-slate-50 text-slate-500"
                          )}
                        >
                          <div className={cn(
                            "w-5 h-5 rounded-full flex items-center justify-center shrink-0",
                            lesson.completed ? "bg-emerald-50 text-emerald-500" : lesson.current ? "bg-violet-500 text-white" : "bg-slate-100 text-slate-300"
                          )}>
                            {lesson.completed ? <CheckCircle size={11} /> : lesson.current ? <Play size={8} fill="currentColor" /> : <Lock size={9} />}
                          </div>
                          <span className="flex-1 text-left truncate">{lesson.title}</span>
                          <span className="text-[10px] text-slate-300">{lesson.duration}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
