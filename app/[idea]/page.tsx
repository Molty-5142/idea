import { redirect } from 'next/navigation';

interface Props {
  params: Promise<{ idea: string }>;
}

export default async function IdeaPage({ params }: Props) {
  const { idea } = await params;
  redirect(`/${idea}/pitch`);
}
