import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FolderOpen,
  Download,
  FileText,
  Video,
  Headphones,
  Image,
  ArrowRight,
  Search,
  Check,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'pdf', label: 'PDFs' },
  { id: 'video', label: 'Videos' },
  { id: 'audio', label: 'Audios' },
  { id: 'template', label: 'Templates' },
];

const materials = [
  { id: 1, title: 'Guia Completo — Modulo 01', type: 'pdf', size: '3.2 MB', module: 1, downloaded: true, icon: FileText, color: 'bg-red-50 text-red-500' },
  { id: 2, title: 'Planilha de Planejamento', type: 'template', size: '1.1 MB', module: 2, downloaded: true, icon: FileText, color: 'bg-emerald-50 text-emerald-500' },
  { id: 3, title: 'Resumo em Audio — Mod. 03', type: 'audio', size: '8.5 MB', module: 3, downloaded: false, icon: Headphones, color: 'bg-violet-50 text-violet-500' },
  { id: 4, title: 'Video Extra: Estudo de Caso', type: 'video', size: '45 MB', module: 4, downloaded: false, icon: Video, color: 'bg-blue-50 text-blue-500' },
  { id: 5, title: 'Framework de Analise SWOT', type: 'template', size: '0.8 MB', module: 4, downloaded: true, icon: FileText, color: 'bg-emerald-50 text-emerald-500' },
  { id: 6, title: 'Guia Estrategias Avancadas', type: 'pdf', size: '4.7 MB', module: 5, downloaded: false, icon: FileText, color: 'bg-red-50 text-red-500' },
  { id: 7, title: 'Checklist de Implementacao', type: 'template', size: '0.5 MB', module: 5, downloaded: false, icon: FileText, color: 'bg-emerald-50 text-emerald-500' },
  { id: 8, title: 'Podcast: Entrevista Especial', type: 'audio', size: '22 MB', module: 5, downloaded: false, icon: Headphones, color: 'bg-violet-50 text-violet-500' },
  { id: 9, title: 'Infografico: Funil Completo', type: 'template', size: '2.1 MB', module: 3, downloaded: true, icon: Image, color: 'bg-amber-50 text-amber-500' },
  { id: 10, title: 'Masterclass Bonus', type: 'video', size: '120 MB', module: 5, downloaded: false, icon: Video, color: 'bg-blue-50 text-blue-500' },
];

export default function Materials() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = materials.filter(m => {
    const matchesCategory = activeCategory === 'all' || m.type === activeCategory;
    const matchesSearch = m.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalDownloaded = materials.filter(m => m.downloaded).length;

  return (
    <div className="space-y-7">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-indigo-900 tracking-tight">Materiais</h1>
          <p className="text-slate-400 mt-1">PDFs, templates, audios e recursos extras para aprofundar.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-2">
            <FolderOpen size={16} className="text-violet-500" />
            <span className="font-bold text-sm text-indigo-900">{materials.length} arquivos</span>
          </div>
          <div className="bg-violet-50 px-4 py-2.5 rounded-xl border border-violet-100 flex items-center gap-2">
            <Download size={16} className="text-violet-600" />
            <span className="font-bold text-sm text-violet-600">{totalDownloaded} baixados</span>
          </div>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Buscar materiais..."
            className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-slate-100 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-300"
          />
        </div>
        <div className="flex bg-white rounded-xl p-1 shadow-sm border border-slate-100">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-4 py-2 rounded-lg text-xs font-bold transition-all uppercase tracking-wider",
                activeCategory === cat.id ? "bg-indigo-900 text-white shadow-sm" : "text-slate-400 hover:text-slate-600"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-lg text-white"
        style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)' }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500 rounded-full blur-[100px] opacity-20 translate-x-1/3 -translate-y-1/3" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
              <Sparkles size={28} className="text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold mb-1 tracking-tight">Kit Completo de Templates</h3>
              <p className="text-white/50 text-sm">Todos os templates e planilhas usados nos modulos, em um unico pacote.</p>
            </div>
          </div>
          <button className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors flex items-center gap-2 text-sm shadow-lg shrink-0">
            <Download size={16} /> Baixar Tudo (12 MB)
          </button>
        </div>
      </motion.div>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((material, i) => (
          <motion.div
            key={material.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center", material.color)}>
                <material.icon size={20} />
              </div>
              <div className="flex items-center gap-2">
                {material.downloaded && (
                  <span className="bg-emerald-50 text-emerald-500 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Check size={10} /> Baixado
                  </span>
                )}
                <span className="text-[10px] font-bold text-slate-300 bg-slate-50 px-2 py-0.5 rounded-md uppercase">
                  {material.type}
                </span>
              </div>
            </div>

            <h3 className="font-bold text-indigo-900 text-sm mb-1 truncate">{material.title}</h3>
            <p className="text-[11px] text-slate-400 mb-4">Modulo {String(material.module).padStart(2, '0')} — {material.size}</p>

            <button className="w-full py-2.5 rounded-xl border border-slate-100 text-indigo-900 font-semibold text-xs hover:bg-indigo-900 hover:text-white transition-all flex items-center justify-center gap-2">
              <Download size={14} /> {material.downloaded ? 'Baixar Novamente' : 'Baixar'}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
