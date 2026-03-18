'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => <h1 className="text-2xl font-bold text-white mt-6 mb-3">{children}</h1>,
        h2: ({ children }) => <h2 className="text-xl font-semibold text-white mt-5 mb-2 border-b border-slate-700 pb-1">{children}</h2>,
        h3: ({ children }) => <h3 className="text-lg font-semibold text-slate-200 mt-4 mb-2">{children}</h3>,
        p: ({ children }) => <p className="text-slate-300 leading-7 mb-3">{children}</p>,
        ul: ({ children }) => <ul className="list-disc pl-5 mb-3 space-y-1 text-slate-300">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-5 mb-3 space-y-1 text-slate-300">{children}</ol>,
        li: ({ children }) => <li className="text-slate-300">{children}</li>,
        strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
        blockquote: ({ children }) => <blockquote className="border-l-4 border-indigo-500 pl-4 my-3 text-slate-400 italic">{children}</blockquote>,
        code: ({ children }) => <code className="bg-slate-800 text-indigo-300 px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>,
        pre: ({ children }) => <pre className="bg-slate-800 p-4 rounded-lg overflow-x-auto my-3 text-sm">{children}</pre>,
        a: ({ href, children }) => <a href={href} className="text-indigo-400 underline hover:text-indigo-300" target="_blank" rel="noopener noreferrer">{children}</a>,
        hr: () => <hr className="border-slate-700 my-6" />,
        table: ({ children }) => <div className="overflow-x-auto my-4"><table className="w-full text-sm border-collapse">{children}</table></div>,
        th: ({ children }) => <th className="bg-slate-700 text-white px-3 py-2 text-left font-semibold">{children}</th>,
        td: ({ children }) => <td className="border-b border-slate-700 px-3 py-2 text-slate-300">{children}</td>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
