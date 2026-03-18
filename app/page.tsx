import Link from 'next/link';
import { getIdeas } from '@/lib/ideas';

export default function Home() {
  const ideas = getIdeas();

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">🎨 Idea Lab</h1>
          <p className="text-slate-400">Nightly AI-researched product ideas. Each with facts, opinion, marketing, and pitch.</p>
        </div>

        {ideas.length === 0 ? (
          <p className="text-slate-500">No ideas yet.</p>
        ) : (
          <div className="grid gap-4">
            {ideas.map((idea) => (
              <Link
                key={idea}
                href={`/${idea}/pitch`}
                className="block bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-indigo-500 rounded-xl p-6 transition group"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition">{idea}</h2>
                  <span className="text-slate-500 text-sm group-hover:text-indigo-400 transition">View →</span>
                </div>
                <div className="flex gap-2 mt-3">
                  {['pitch', 'facts', 'opinion', 'marketing'].map(tab => (
                    <span key={tab} className="text-xs bg-slate-700 text-slate-400 px-2 py-1 rounded">{tab}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
