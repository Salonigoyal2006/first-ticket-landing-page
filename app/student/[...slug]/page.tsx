import { WorkspaceView } from '@/components/workspace/workspace-view'

const validSections = new Set(['dashboard', 'tickets', 'assignments', 'ai-coach', 'portfolio'])

export default async function StudentPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const section = slug[0] ?? 'dashboard'
  const id = section === 'tickets' ? slug[1] : undefined
  return <WorkspaceView type="student" section={validSections.has(section) ? section : 'dashboard'} id={id} />
}
