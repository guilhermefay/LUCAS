import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  FileText,
  Headphones,
  CheckCircle,
  Lock,
  ChevronLeft,
  ChevronRight,
  Download,
  MessageSquare,
  Clock,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const modules = [
  {
    id: 1, title: 'Fundamentos Essenciais', progress: 100,
    lessons: [
      { id: 1, title: 'Introducao e visao geral', duration: '12:45', completed: true },
      { id: 2, title: 'Conceitos fundamentais', duration: '15:20', completed: true },
      { id: 3, title: 'Primeiros passos praticos', duration: '10:10', completed: true },
      { id: 4, title: 'Revisao do modulo', duration: '18:00', completed: true },
    ]
  },
  {
    id: 2, title: 'Planejamento Estrategico', progress: 100,
    lessons: [
      { id: 5, title: 'Definindo seus objetivos', duration: '14:30', completed: true },
      { id: 6, title: 'Mapeamento de recursos', duration: '16:20', completed: true },
      { id: 7, title: 'Criando um plano de acao', duration: '12:45', completed: true },
      { id: 8, title: 'Cronograma e metas', duration: '11:00', completed: true },
    ]
  },
  {
    id: 3, title: 'Ferramentas do Dia a Dia', progress: 100,
    lessons: [
      { id: 9, title: 'Ferramentas essenciais', duration: '10:00', completed: true },
      { id: 10, title: 'Automatizacoes basicas', duration: '18:20', completed: true },
      { id: 11, title: 'Organizacao de processos', duration: '25:00', completed: true },
      { id: 12, title: 'Templates prontos', duration: '15:15', completed: true },
    ]
  },
  {
    id: 4, title: 'Analise de Resultados', progress: 75,
    lessons: [
      { id: 13, title: 'Metricas importantes', duration: '14:00', completed: true },
      { id: 14, title: 'Dashboards e relatorios', duration: '12:30', completed: true },
      { id: 15, title: 'Interpretacao de dados', duration: '16:00', completed: true },
      { id: 16, title: 'Tomada de decisao', duration: '13:45', completed: false, current: true },
    ]
  },
  {
    id: 5, title: 'Estrategias Avancadas', progress: 50,
    lessons: [
      { id: 17, title: 'Tecnicas avancadas', duration: '11:30', completed: true },
      { id: 18, title: 'Estudos de caso', duration: '18:00', completed: true },
      { id: 19, title: 'Aplicacao em cenarios reais', duration: '14:20', completed: false, current: true },
      { id: 20, title: 'Otimizacao continua', duration: '16:00', completed: false },
    ]
  },
  {
    id: 6, title: 'Gestao de Equipes', progress: 0, locked: true,
    lessons: [
      { id: 21, title: 'Comunicacao efetiva', duration: '15:00', completed: false },
      { id: 22, title: 'Delegacao inteligente', duration: '12:40', completed: false },
      { id: 23, title: 'Feedback construtivo', duration: '14:00', completed: false },
      { id: 24, title: 'Cultura de alta performance', duration: '16:30', completed: false },
    ]
  },
  {
    id: 7, title: 'Escalando Resultados', progress: 0, locked: true,
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
  const [activeTab, setActiveTab] = useState<'resumo' | 'material' | 'audio'>('resumo');

  const currentModule = modules.find(m => m.id === activeModule)!;
  const currentLesson = currentModule.lessons.find(l => l.id === activeLesson);
  const lessonIndex = currentLesson ? currentModule.lessons.indexOf(currentLesson) : 0;

  return (
    <div className="space-y-5">
      {/* Module Selector — horizontal scroll */}
      <div className="flex gap-2.5 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
        {modules.map((mod) => (
          <button
            key={mod.id}
            onClick={() => {
              if (!mod.locked) {
                setActiveModule(mod.id);
                const first = mod.lessons.find(l => l.current) || mod.lessons[0];
                setActiveLesson(first.id);
              }
            }}
            className={cn(
              "shrink-0 rounded-xl px-4 py-3 border-2 transition-all flex items-center gap-3 min-w-[180px]",
              mod.locked
                ? "border-slate-100 bg-slate-50 opacity-40 cursor-not-allowed"
                : mod.id === activeModule
                  ? "border-violet-500 bg-violet-50 shadow-sm"
                  : "border-slate-100 bg-white hover:border-slate-200 cursor-pointer"
            )}
          >
            <div className={cn(
              "w-9 h-9 rounded-lg flex items-center justify-center font-extrabold text-sm shrink-0",
              mod.locked
                ? "bg-slate-100 text-slate-300"
                : mod.progress === 100
                  ? "bg-emerald-100 text-emerald-600"
                  : mod.id === activeModule
                    ? "bg-violet-500 text-white"
                    : "bg-slate-100 text-slate-500"
            )}>
              {mod.locked ? <Lock size={14} /> : mod.progress === 100 ? <CheckCircle size={16} /> : `${mod.id}`}
            </div>
            <div className="text-left min-w-0">
              <p className={cn(
                "text-xs font-bold truncate",
                mod.id === activeModule ? "text-violet-700" : "text-indigo-900"
              )}>
                {mod.title}
              </p>
              {!mod.locked && mod.progress < 100 && mod.progress > 0 && (
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-12 h-1 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-violet-500 rounded-full" style={{ width: `${mod.progress}%` }} />
                  </div>
                  <span className="text-[9px] text-slate-400 font-bold">{mod.progress}%</span>
                </div>
              )}
              {mod.progress === 100 && (
                <p className="text-[10px] text-emerald-500 font-semibold mt-0.5">Concluido</p>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Video Player — full width */}
      <motion.div
        key={activeLesson}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative rounded-2xl overflow-hidden shadow-lg aspect-video w-full"
        style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)' }}
      >
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
          alt="Aula"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center text-violet-600 shadow-2xl"
          >
            <Play size={28} fill="currentColor" className="ml-1" />
          </motion.button>
        </div>

        {/* Bottom overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-bold bg-violet-500 text-white px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Modulo {String(activeModule).padStart(2, '0')}
                </span>
                <span className="text-white/40 text-xs">Aula {lessonIndex + 1} de {currentModule.lessons.length}</span>
              </div>
              <h2 className="text-white text-lg md:text-xl font-extrabold tracking-tight">{currentLesson?.title}</h2>
            </div>
            <div className="hidden md:flex items-center gap-2 text-white/40 text-xs">
              <Clock size={13} />
              <span>{currentLesson?.duration}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Lesson Stepper — horizontal */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
        <div className="flex items-center gap-1 overflow-x-auto">
          {currentModule.lessons.map((lesson, i) => {
            const isActive = lesson.id === activeLesson;
            return (
              <React.Fragment key={lesson.id}>
                <button
                  onClick={() => setActiveLesson(lesson.id)}
                  className={cn(
                    "shrink-0 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl transition-all text-xs",
                    isActive
                      ? "bg-violet-50 border border-violet-200 shadow-sm"
                      : "hover:bg-slate-50"
                  )}
                >
                  <div className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold",
                    lesson.completed
                      ? "bg-emerald-100 text-emerald-600"
                      : isActive
                        ? "bg-violet-500 text-white"
                        : "bg-slate-100 text-slate-400"
                  )}>
                    {lesson.completed ? <CheckCircle size={13} /> : i + 1}
                  </div>
                  <div className="text-left min-w-0 hidden md:block">
                    <p className={cn(
                      "font-semibold truncate max-w-[140px]",
                      isActive ? "text-violet-700" : "text-slate-600"
                    )}>
                      {lesson.title}
                    </p>
                    <p className="text-[10px] text-slate-400">{lesson.duration}</p>
                  </div>
                </button>
                {i < currentModule.lessons.length - 1 && (
                  <div className={cn(
                    "w-6 h-[2px] rounded-full shrink-0",
                    lesson.completed ? "bg-emerald-300" : "bg-slate-100"
                  )} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Content Area — tabs side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Tab Content */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          {/* Tab selector */}
          <div className="flex border-b border-slate-50 px-2 pt-2">
            {[
              { id: 'resumo', label: 'Resumo da Aula', icon: FileText },
              { id: 'material', label: 'Material PDF', icon: Download },
              { id: 'audio', label: 'Audio Extra', icon: Headphones },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "flex-1 py-3 text-xs font-bold flex items-center justify-center gap-2 transition-all rounded-t-lg relative",
                  activeTab === tab.id
                    ? "text-indigo-900 bg-slate-50/50"
                    : "text-slate-300 hover:text-slate-500"
                )}
              >
                <tab.icon size={14} />
                <span className="hidden sm:inline">{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div layoutId="courseTab" className="absolute bottom-0 left-2 right-2 h-[2px] bg-violet-500 rounded-full" />
                )}
              </button>
            ))}
          </div>

          <div className="p-6">
            <AnimatePresence mode="wait">
              {activeTab === 'resumo' && (
                <motion.div key="resumo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
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

                  <div className="mt-6 bg-slate-50/60 p-5 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2 text-sm">
                      <MessageSquare size={15} /> Suas Anotacoes
                    </h4>
                    <textarea
                      className="w-full bg-white rounded-xl p-4 text-sm text-slate-700 focus:ring-2 focus:ring-violet-500/20 outline-none resize-none h-24 border border-slate-100"
                      placeholder="Escreva suas anotacoes aqui..."
                    />
                  </div>
                </motion.div>
              )}
              {activeTab === 'material' && (
                <motion.div key="material" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                  <div className="w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-500">
                    <FileText size={28} />
                  </div>
                  <h3 className="font-extrabold text-indigo-900 tracking-tight">Material de Apoio</h3>
                  <p className="text-sm text-slate-400 max-w-xs">PDF com exercicios e resumo completo da aula.</p>
                  <button className="bg-indigo-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-800 transition-colors flex items-center gap-2 text-sm">
                    <Download size={16} /> Baixar (2.4MB)
                  </button>
                </motion.div>
              )}
              {activeTab === 'audio' && (
                <motion.div key="audio" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-5 py-4">
                  <div className="bg-slate-50/60 p-5 rounded-xl flex items-center gap-4 border border-slate-100">
                    <button className="w-12 h-12 bg-indigo-900 rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform shrink-0">
                      <Play size={18} fill="currentColor" className="ml-0.5" />
                    </button>
                    <div className="flex-1">
                      <h4 className="font-bold text-indigo-900 text-sm">Resumo em Audio</h4>
                      <div className="w-full h-1.5 bg-slate-200 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-violet-500 w-[30%] rounded-full" />
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                        <span>1:23</span><span>8:45</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 italic text-center">Ouca no caminho do trabalho para fixar os conceitos.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Quick Info Panel */}
        <div className="space-y-4">
          {/* Module Info */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-violet-500 text-white flex items-center justify-center font-extrabold text-sm">
                {activeModule}
              </div>
              <div>
                <p className="font-bold text-indigo-900 text-sm">{currentModule.title}</p>
                <p className="text-[10px] text-slate-400">{currentModule.lessons.length} aulas</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-violet-500 rounded-full" style={{ width: `${currentModule.progress}%` }} />
              </div>
              <span className="text-xs font-bold text-violet-600">{currentModule.progress}%</span>
            </div>
            <p className="text-[11px] text-slate-400">
              {currentModule.lessons.filter(l => l.completed).length} de {currentModule.lessons.length} aulas concluidas
            </p>
          </div>

          {/* Navigation */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 space-y-3">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Navegacao</p>
            {lessonIndex > 0 && (
              <button
                onClick={() => setActiveLesson(currentModule.lessons[lessonIndex - 1].id)}
                className="w-full flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-all text-left"
              >
                <ChevronLeft size={16} className="text-slate-400" />
                <div className="min-w-0">
                  <p className="text-[10px] text-slate-400">Anterior</p>
                  <p className="text-xs font-semibold text-indigo-900 truncate">{currentModule.lessons[lessonIndex - 1].title}</p>
                </div>
              </button>
            )}
            {lessonIndex < currentModule.lessons.length - 1 && (
              <button
                onClick={() => setActiveLesson(currentModule.lessons[lessonIndex + 1].id)}
                className="w-full flex items-center gap-3 p-3 rounded-xl border border-violet-200 bg-violet-50 hover:bg-violet-100 transition-all text-left"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] text-violet-500">Proxima</p>
                  <p className="text-xs font-semibold text-violet-700 truncate">{currentModule.lessons[lessonIndex + 1].title}</p>
                </div>
                <ChevronRight size={16} className="text-violet-500" />
              </button>
            )}
          </div>

          {/* Resources shortcut */}
          <div className="rounded-2xl p-5 shadow-sm border border-slate-100 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)' }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-violet-500 rounded-full blur-[40px] opacity-20" />
            <div className="relative z-10">
              <p className="font-bold text-sm mb-1">Precisa de ajuda?</p>
              <p className="text-white/45 text-xs mb-3">Acesse os materiais complementares ou entre em contato com o suporte.</p>
              <button className="bg-white/15 backdrop-blur-sm border border-white/10 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-white/25 transition-colors flex items-center gap-1.5">
                Ver materiais <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
