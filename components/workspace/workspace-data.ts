export type Ticket = {
  id: string
  title: string
  company: string
  category: string
  difficulty: 'Starter' | 'Intermediate' | 'Advanced'
  skills: string[]
  reward: number
  hours: number
  description: string
  brief: string
  status: 'open' | 'active' | 'review' | 'complete'
  student?: string
}

export const initialTickets: Ticket[] = [
  { id: 'northstar-social', title: 'A week of social, reimagined', company: 'Northstar Coffee', category: 'Marketing', difficulty: 'Starter', skills: ['Copywriting', 'Social media'], reward: 120, hours: 4, description: 'Give a neighborhood coffee shop a fresh, consistent voice online.', brief: 'Create five Instagram captions that introduce our seasonal menu and feel like a note from a friend, not an ad.', status: 'open' },
  { id: 'goodkind-audit', title: 'Make our first impression count', company: 'Goodkind Studio', category: 'Design', difficulty: 'Intermediate', skills: ['Figma', 'UX research'], reward: 180, hours: 6, description: 'Help a small design studio make its homepage clearer and easier to use.', brief: 'Review our homepage, identify three moments of friction, and sketch a simple, more welcoming first-run experience.', status: 'review' },
  { id: 'field-notes', title: 'A story worth opening', company: 'Field Notes Co.', category: 'Writing', difficulty: 'Starter', skills: ['Writing', 'Email'], reward: 95, hours: 3, description: 'Help an independent shop tell the story behind its newest collection.', brief: 'Write a short launch email for a new collection of locally made journals, with a warm subject line and clear call to action.', status: 'review' },
  { id: 'flora-research', title: 'Listen before we grow', company: 'Flora & Form', category: 'Research', difficulty: 'Advanced', skills: ['Customer research', 'Synthesis'], reward: 240, hours: 8, description: 'Turn customer conversations into a clearer plan for a small plant shop.', brief: 'Synthesize five anonymized customer interview notes into themes and three practical recommendations.', status: 'open' },
  { id: 'goodkind-case-study', title: 'A tiny case study with a big point', company: 'Goodkind Studio', category: 'Writing', difficulty: 'Intermediate', skills: ['Writing', 'Research'], reward: 150, hours: 5, description: 'Shape a recent client win into a concise, useful case study.', brief: 'Turn a project outline into a 500-word case study that explains the challenge, the work, and what changed.', status: 'open' },
  { id: 'common-ground', title: 'A better welcome, one page at a time', company: 'Common Ground', category: 'Design', difficulty: 'Starter', skills: ['Canva', 'Visual design'], reward: 110, hours: 4, description: 'Give a community group a more inviting event flyer.', brief: 'Design a digital flyer for our monthly community dinner. Include event details and make it easy to scan on mobile.', status: 'open' },
]

export const initialAssignments = [
  { ticketId: 'field-notes', student: 'Avery Chen', due: 'Nov 28', status: 'In progress' },
  { ticketId: 'goodkind-audit', student: 'You', due: 'Nov 30', status: 'In progress' },
]
