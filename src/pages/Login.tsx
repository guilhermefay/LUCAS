import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Eye, EyeOff, Zap } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex font-sans">
      {/* Left Panel - Branding */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="hidden lg:flex lg:w-[55%] relative overflow-hidden flex-col items-center justify-center p-16"
        style={{
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #1e1b4b 100%)',
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet-500 opacity-[0.1]" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-400 opacity-[0.08]" />
        <div className="absolute top-[40%] left-[15%] w-[200px] h-[200px] rounded-full bg-fuchsia-500 opacity-[0.06]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        <div className="relative z-10 text-center max-w-lg">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-10 flex justify-center"
          >
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-violet-500/30 animate-float">
              <Zap size={48} className="text-white" fill="currentColor" />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h1 className="text-5xl font-extrabold text-white mb-5 leading-tight tracking-tight">
              Sua plataforma.<br />Suas regras.
            </h1>
            <div className="w-16 h-[3px] bg-violet-500 mx-auto mb-6 rounded-full" />
            <p className="text-white/50 text-lg leading-relaxed">
              Tudo que voce precisa para aprender,<br />crescer e evoluir em um so lugar.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-14 flex items-center justify-center gap-6 text-white/30 text-sm tracking-wide"
          >
            <span>+120 Aulas</span>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <span>Certificados</span>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <span>Suporte VIP</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Panel - Login Form */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1 bg-slate-50 flex items-center justify-center p-8 relative"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 opacity-40" />

        <div className="w-full max-w-[400px]">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-12">
            <div className="inline-flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
                <Zap size={32} className="text-white" fill="currentColor" />
              </div>
              <span className="font-extrabold text-2xl text-indigo-900 tracking-tight">Apex</span>
            </div>
          </div>

          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-4xl font-extrabold text-indigo-900 mb-2 tracking-tight">Bem-vindo!</h2>
            <p className="text-slate-400 mb-10">Acesse sua conta para continuar aprendendo.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2 block">
                  E-mail
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full px-5 py-4 bg-white rounded-2xl border border-slate-200 text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500/40 transition-all text-[15px]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2 block">
                  Senha
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                    className="w-full px-5 py-4 bg-white rounded-2xl border border-slate-200 text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500/40 transition-all pr-12 text-[15px]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500" />
                  <span className="text-sm text-slate-400">Lembrar de mim</span>
                </label>
                <button type="button" className="text-sm text-violet-600 hover:text-violet-800 font-medium transition-colors">
                  Esqueci a senha
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-[17px] hover:from-violet-700 hover:to-indigo-700 transition-all shadow-lg shadow-violet-500/25 flex items-center justify-center gap-3 group mt-2"
              >
                Entrar
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-slate-400 text-sm">
                Ainda nao tem conta?{' '}
                <button className="text-violet-600 font-semibold hover:text-indigo-800 transition-colors">
                  Cadastre-se
                </button>
              </p>
            </div>
          </motion.div>

          <div className="mt-16 text-center text-slate-300 text-xs">
            &copy; 2026 Apex Platform. Todos os direitos reservados.
          </div>
        </div>
      </motion.div>
    </div>
  );
}
