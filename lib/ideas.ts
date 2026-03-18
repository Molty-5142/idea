import fs from 'fs';
import path from 'path';

export const IDEAS_DIR = path.join(process.cwd(), 'ideas');

export const IDEA_FILES = ['pitch.md', 'facts.md', 'opinion.md', 'marketing.md'];

export function getIdeas(): string[] {
  if (!fs.existsSync(IDEAS_DIR)) return [];
  return fs.readdirSync(IDEAS_DIR)
    .filter(f => fs.statSync(path.join(IDEAS_DIR, f)).isDirectory())
    .sort();
}

export function getIdeaFile(idea: string, file: string): string | null {
  const filePath = path.join(IDEAS_DIR, idea, file);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, 'utf8');
}

export function getIdeaFiles(idea: string): string[] {
  const ideaDir = path.join(IDEAS_DIR, idea);
  if (!fs.existsSync(ideaDir)) return [];
  return fs.readdirSync(ideaDir).filter(f => f.endsWith('.md')).sort();
}
