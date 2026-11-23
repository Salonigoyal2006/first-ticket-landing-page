import { WorkspaceView } from '@/components/workspace/workspace-view'

const validSections = new Set(['dashboard', 'create-ticket', 'tickets', 'submissions'])

export default async function BusinessPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const section = slug[0] ?? 'dashboard'
  return <WorkspaceView type="business" section={validSections.has(section) ? section : 'dashboard'} />
}
