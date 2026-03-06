import React from 'react';
import { motion } from 'motion/react';
import {
  LayoutDashboard,
  BookOpen,
  BrainCircuit,
  FolderOpen,
  Users,
  Trophy,
  Video,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ activePage, setActivePage, isOpen, setIsOpen }: SidebarProps) => {
  const [isMobile, setIsMobile] = React.useState(() => typeof window !== 'undefined' ? window.innerWidth < 1024 : false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'courses', label: 'Meus Cursos', icon: BookOpen },
    { id: 'exercises', label: 'Exercicios', icon: BrainCircuit },
    { id: 'materials', label: 'Materiais', icon: FolderOpen },
    { id: 'live', label: 'Ao Vivo', icon: Video },
    { id: 'community', label: 'Comunidade', icon: Users },
    { id: 'progress', label: 'Meu Progresso', icon: Trophy },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={isMobile ? { x: isOpen ? 0 : '-100%' } : { x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "fixed top-0 left-0 h-full w-[270px] z-50 flex flex-col lg:translate-x-0 lg:static",
          "lg:transform-none"
        )}
        style={{
          background: 'linear-gradient(180deg, #1e1b4b 0%, #181631 50%, #0f0d24 100%)',
        }}
      >
        {/* Decorative overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 30% 20%, white 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />

        {/* Close mobile */}
        <button onClick={() => setIsOpen(false)} className="lg:hidden absolute top-5 right-5 text-white/40 hover:text-white/80 transition-colors z-10">
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="relative z-10 px-6 pt-8 pb-6">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
              <Zap size={22} className="text-white" fill="currentColor" />
            </div>
            <div>
              <h1 className="font-sans font-extrabold text-[20px] text-white tracking-tight leading-none">Apex</h1>
              <p className="text-[9px] text-white/25 tracking-[0.15em] uppercase mt-0.5 font-semibold">Learning Platform</p>
            </div>
          </div>
        </div>

        {/* Nav label */}
        <div className="relative z-10 px-7 mb-2">
          <p className="text-[9px] text-white/15 uppercase tracking-[0.2em] font-bold">Menu</p>
        </div>

        {/* Nav */}
        <nav className="relative z-10 flex-1 px-4 space-y-1 overflow-y-auto pb-4">
          {menuItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-200 group relative",
                  isActive
                    ? "bg-white text-indigo-900 shadow-md shadow-black/15"
                    : "text-white/45 hover:bg-white/7 hover:text-white/85"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebarActive"
                    className="absolute -left-4 top-1/2 -translate-y-1/2 w-[5px] h-7 bg-violet-500 rounded-r-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <div className={cn(
                  "w-9 h-9 rounded-lg flex items-center justify-center transition-colors shrink-0",
                  isActive
                    ? "bg-violet-100 text-violet-600"
                    : "bg-white/5 text-white/35 group-hover:bg-white/10 group-hover:text-white/65"
                )}>
                  <item.icon size={18} strokeWidth={isActive ? 2.2 : 1.8} />
                </div>
                <span className={cn(
                  "text-[14px] transition-all",
                  isActive ? "font-bold" : "font-medium"
                )}>
                  {item.label}
                </span>
                {isActive && (
                  <ChevronRight size={14} className="ml-auto text-violet-400/60" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="relative z-10 p-4">
          {/* User card */}
          <div className="rounded-xl overflow-hidden mb-3" style={{
            background: 'linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0.05) 100%)',
          }}>
            <div className="p-4 border border-white/5 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-violet-500/20">
                  LC
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white truncate">Lucas</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <p className="text-[10px] text-white/35 font-medium">Plano Premium</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[62%] bg-violet-500 rounded-full" />
                </div>
                <span className="text-[9px] text-white/25 font-bold">62%</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-white/25 hover:bg-white/5 hover:text-white/55 transition-colors text-[11px] font-medium">
              <Settings size={13} />
              Configuracoes
            </button>
            <div className="w-px bg-white/5" />
            <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-white/25 hover:bg-red-500/10 hover:text-red-400/80 transition-colors text-[11px] font-medium">
              <LogOut size={13} />
              Sair
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Layout({ children, activePage, setActivePage }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const pageTitle: Record<string, string> = {
    dashboard: 'Dashboard',
    courses: 'Meus Cursos',
    exercises: 'Exercicios',
    materials: 'Materiais',
    live: 'Ao Vivo',
    community: 'Comunidade',
    progress: 'Meu Progresso',
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-700">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 px-5 py-3.5 flex items-center justify-between lg:hidden sticky top-0 z-30">
          <button onClick={() => setIsSidebarOpen(true)} className="text-indigo-900 p-1">
            <Menu size={22} />
          </button>
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
              <Zap size={14} className="text-white" fill="currentColor" />
            </div>
            <span className="font-bold text-indigo-900 text-[15px]">{pageTitle[activePage] || 'Apex'}</span>
          </div>
          <div className="w-8" />
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 md:p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
