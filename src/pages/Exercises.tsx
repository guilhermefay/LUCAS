import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  RefreshCcw,
  Trophy,
  BrainCircuit
} from 'lucide-react';
import { cn } from '@/lib/utils';

const questions = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Qual e a primeira etapa de um planejamento estrategico eficiente?',
    options: [
      'Executar as tarefas imediatamente',
      'Definir objetivos claros e mensuraveis',
      'Contratar uma equipe grande',
      'Investir todo o orcamento'
    ],
    correct: 1,
    explanation: 'Objetivos claros e mensuraveis (SMART) sao a base de qualquer planejamento estrategico bem-sucedido.'
  },
  {
    id: 2,
    type: 'fill-blank',
    question: 'Complete: "O principal indicador de sucesso de um projeto e o _____ ."',
    options: ['ROI', 'custo', 'tempo', 'tamanho'],
    correct: 0,
    explanation: 'O ROI (Retorno sobre Investimento) e a metrica mais importante para avaliar o sucesso de qualquer projeto.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Qual ferramenta e mais indicada para analise de cenarios competitivos?',
    options: ['Analise SWOT', 'Planilha de custos', 'Rede social', 'E-mail marketing'],
    correct: 0,
    explanation: 'A Analise SWOT avalia Forcas, Fraquezas, Oportunidades e Ameacas de forma estruturada.'
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'O que significa escalabilidade em um modelo de negocios?',
    options: [
      'Reduzir custos ao maximo',
      'Crescer receita sem aumento proporcional de custos',
      'Aumentar o numero de funcionarios',
      'Expandir para outros paises'
    ],
    correct: 1,
    explanation: 'Escalabilidade significa que o negocio pode crescer sua receita de forma exponencial sem que os custos cresçam na mesma proporcao.'
  },
  {
    id: 5,
    type: 'fill-blank',
    question: 'Complete: "A regra 80/20, ou Principio de _____, indica que 80% dos resultados vem de 20% dos esforcos."',
    options: ['Pareto', 'Murphy', 'Deming', 'Taylor'],
    correct: 0,
    explanation: 'O Principio de Pareto (regra 80/20) e fundamental para priorizacao de tarefas e alocacao de recursos.'
  }
];

export default function Exercises() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] text-center space-y-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className={cn(
            "w-28 h-28 rounded-full flex items-center justify-center mb-4 shadow-lg",
            percentage >= 80 ? "bg-emerald-50 text-emerald-500" : percentage >= 60 ? "bg-amber-50 text-amber-500" : "bg-red-50 text-red-500"
          )}
        >
          <Trophy size={56} />
        </motion.div>

        <div>
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-2 tracking-tight">
            {percentage >= 80 ? 'Excelente!' : percentage >= 60 ? 'Bom trabalho!' : 'Continue tentando!'}
          </h2>
          <p className="text-lg text-slate-500">
            Voce acertou <span className="font-bold text-violet-600">{score}</span> de <span className="font-bold">{questions.length}</span> — {percentage}%
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={resetQuiz}
            className="px-7 py-3 rounded-xl border-2 border-indigo-900 text-indigo-900 font-bold hover:bg-indigo-900 hover:text-white transition-colors flex items-center gap-2 text-sm"
          >
            <RefreshCcw size={18} /> Tentar Novamente
          </button>
          <button className="px-7 py-3 rounded-xl bg-violet-600 text-white font-bold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-500/20 flex items-center gap-2 text-sm">
            Proximo Modulo <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-7">
        <div>
          <h1 className="text-2xl font-extrabold text-indigo-900 tracking-tight">Quiz: Modulo 05</h1>
          <p className="text-slate-400 text-sm">Estrategias Avancadas — Teste seus conhecimentos</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-100">
          <BrainCircuit size={16} className="text-violet-500" />
          <span className="font-bold text-sm text-indigo-900">{currentQuestion + 1}/{questions.length}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-slate-100 rounded-full mb-7 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
          animate={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 relative overflow-hidden"
      >
        <div className="flex items-center gap-2 mb-5">
          <span className="text-[10px] font-bold text-violet-600 uppercase tracking-widest">
            Questao {currentQuestion + 1}
          </span>
          {question.type === 'fill-blank' && (
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded-md">
              Completar
            </span>
          )}
        </div>

        <h2 className="text-xl font-bold text-indigo-900 mb-7 leading-relaxed">
          {question.question}
        </h2>

        <div className="space-y-2.5">
          {question.options.map((option, index) => {
            const isSelected = selectedOption === index;
            const isCorrect = index === question.correct;
            const showCorrect = isAnswered && isCorrect;
            const showWrong = isAnswered && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={isAnswered}
                className={cn(
                  "w-full p-4 rounded-xl text-left font-medium transition-all border-2 flex items-center justify-between group text-sm",
                  showCorrect
                    ? "bg-emerald-50 border-emerald-400 text-emerald-700"
                    : showWrong
                      ? "bg-red-50 border-red-400 text-red-700"
                      : isSelected
                        ? "border-indigo-900 bg-violet-50"
                        : "border-transparent bg-slate-50 hover:bg-violet-50 hover:border-violet-200 text-slate-600"
                )}
              >
                <span>{option}</span>
                {showCorrect && <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />}
                {showWrong && <XCircle size={18} className="text-red-500 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        <AnimatePresence>
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-5 bg-slate-50 rounded-xl p-4 border border-slate-100 flex gap-3"
            >
              <HelpCircle size={18} className="text-slate-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-indigo-900 text-xs mb-1 uppercase tracking-wider">Explicacao</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{question.explanation}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next */}
        <div className="mt-7 flex justify-end">
          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className={cn(
              "px-7 py-3 rounded-xl font-bold flex items-center gap-2 transition-all text-sm",
              isAnswered
                ? "bg-indigo-900 text-white hover:bg-indigo-800 shadow-lg shadow-indigo-900/15"
                : "bg-slate-100 text-slate-300 cursor-not-allowed"
            )}
          >
            {currentQuestion < questions.length - 1 ? 'Proxima' : 'Finalizar'} <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
