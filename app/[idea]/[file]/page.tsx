import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getIdeas, getIdeaFile, getIdeaFiles, hasLanding } from '@/lib/ideas';
import MarkdownRenderer from '@/components/MarkdownRenderer';

interface Props {
  params: Promise<{ idea: string; file: string }>;
}

export async function generateStaticParams() {
  const ideas = getIdeas();
  const params = [];
  for (const idea of ideas) {
    const files = getIdeaFiles(idea);
    for (const file of files) {
      params.push({ idea, file: file.replace('.md', '') });
    }
  }
  return params;
}

const FILE_LABELS: Record<string, string> = {
  pitch: '📋 Pitch',
  facts: '🔬 Facts',
  opinion: '💡 Opinion',
  marketing: '📣 Marketing',
};

export default async function IdeaFilePage({ params }: Props) {
  const { idea, file } = await params;
  const content = getIdeaFile(idea, `${file}.md`);
  if (!content) notFound();

  const files = getIdeaFiles(idea).map(f => f.replace('.md', ''));
  const showLanding = hasLanding(idea);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <header className="border-b border-slate-800 bg-slate-900 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-4">
          <Link href="/" className="text-slate-400 hover:text-white text-sm transition">← All Ideas</Link>
          <span className="text-slate-600">/</span>
          <span className="text-white font-semibold">{idea}</span>
        </div>
        <div className="max-w-5xl mx-auto px-6 pb-0 flex gap-1">
          {files.map(f => (
            <Link
              key={f}
              href={`/${idea}/${f}`}
              className={`px-4 py-2 text-sm font-medium rounded-t transition border-b-2 ${
                f === file
                  ? 'border-indigo-500 text-white bg-slate-800'
                  : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {FILE_LABELS[f] ?? f}
            </Link>
          ))}
          {showLanding && (
            <Link
              href={`/${idea}/landing`}
              className="px-4 py-2 text-sm font-medium rounded-t transition border-b-2 border-transparent text-slate-400 hover:text-white hover:bg-slate-800"
            >
              🚀 Landing
            </Link>
          )}
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-6 py-10 w-full">
        <div className="bg-slate-800 rounded-xl p-8">
          <MarkdownRenderer content={content} />
        </div>
      </main>
    </div>
  );
}
