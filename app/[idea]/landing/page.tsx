import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getIdeas } from '@/lib/ideas';
import fs from 'fs';
import path from 'path';

interface Props {
  params: Promise<{ idea: string }>;
}

export async function generateStaticParams() {
  const ideas = getIdeas();
  return ideas
    .filter(idea => fs.existsSync(path.join(process.cwd(), 'ideas', idea, 'landing.tsx')))
    .map(idea => ({ idea }));
}

export default async function LandingPage({ params }: Props) {
  const { idea } = await params;
  const ideas = getIdeas();
  if (!ideas.includes(idea)) notFound();

  // Dynamically import the landing component for this idea
  let LandingComponent: React.ComponentType | null = null;
  try {
    const mod = await import(`@/ideas/${idea}/landing`);
    LandingComponent = mod.default;
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Nav bar */}
      <header className="border-b border-slate-800 bg-slate-900 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-4">
          <Link href="/" className="text-slate-400 hover:text-white text-sm transition">← All Ideas</Link>
          <span className="text-slate-600">/</span>
          <Link href={`/${idea}/pitch`} className="text-slate-400 hover:text-white text-sm transition">{idea}</Link>
          <span className="text-slate-600">/</span>
          <span className="text-white font-semibold">Landing Page</span>
        </div>
        <div className="max-w-5xl mx-auto px-6 pb-0 flex gap-1">
          {['pitch', 'facts', 'opinion', 'marketing', 'landing'].map(tab => (
            <Link
              key={tab}
              href={tab === 'landing' ? `/${idea}/landing` : `/${idea}/${tab}`}
              className={`px-4 py-2 text-sm font-medium rounded-t transition border-b-2 ${
                tab === 'landing'
                  ? 'border-indigo-500 text-white bg-slate-800'
                  : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab === 'landing' ? '🚀 Landing' : tab === 'pitch' ? '📋 Pitch' : tab === 'facts' ? '🔬 Facts' : tab === 'opinion' ? '💡 Opinion' : '📣 Marketing'}
            </Link>
          ))}
        </div>
      </header>
      {LandingComponent && <LandingComponent />}
    </div>
  );
}
