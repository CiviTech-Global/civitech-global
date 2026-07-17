import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import type { TFunction } from 'i18next'

export interface Resource {
  title: string
  url: string
  description: string
}

export interface RoadmapLevel {
  level: string | number
  title: string
  focus: string
  timeframe: string
}

export interface DailyInteraction {
  role: string
  description: string
}

export interface Role {
  slug: string
  teamId: string
  title: string
  shortTitle: string
  summary: string
  story: string
  responsibilities: string[]
  skills: string[]
  tools: string[]
  roadmap: RoadmapLevel[]
  dailyInteractions: DailyInteraction[]
  bestPractices: string[]
  resources: Resource[]
}

export interface Team {
  id: string
  name: string
  formerName: string
  shortName: string
  color: 'cyan' | 'violet' | 'emerald' | 'amber' | 'rose'
  iconName: string
  story: string[]
  roles: string[]
}

export interface OpenCall {
  headline: string
  title: string
  organization: string
  mission: string
  note: string
  whatIs: {
    title: string
    paragraphs: string[]
    exposure: string[]
  }
  important: {
    title: string
    note: string
  }
  purpose: {
    title: string
    items: string[]
  }
  whoShouldApply: {
    title: string
    description: string
  }
  commitment: {
    title: string
    items: string[]
  }
  application: {
    title: string
    instructions: string
    applyButtonText: string
    scheduleButtonText: string
    applyUrl: string
    calendlyUrl: string
  }
  closing: {
    tagline: string
    signature: string
  }
}

export interface GitWorkflowRepoSection {
  title: string
  description: string
  code: string
  url?: string
  urls?: { forkExample: string; upstream: string }
}

export interface GitWorkflowStep {
  title: string
  description: string
  code: string
}

export interface GitWorkflowBranchType {
  prefix: string
  example: string
  use: string
}

export interface GitWorkflowCommitType {
  type: string
  desc: string
}

export interface GitWorkflow {
  title: string
  subtitle: string
  standardWorkflowTitle: string
  repository: {
    title: string
    external: GitWorkflowRepoSection
    team: GitWorkflowRepoSection
  }
  steps: GitWorkflowStep[]
  branchNaming: {
    title: string
    description: string
    pattern: string
    types: GitWorkflowBranchType[]
  }
  commitMessages: {
    title: string
    description: string
    conventionalCommitsUrl: string
    format: string
    types: GitWorkflowCommitType[]
  }
  pullRequestEtiquette: {
    title: string
    items: string[]
  }
  stayingUpToDate: {
    title: string
    directClone: { description: string; code: string }
    forkedClone: { description: string; code: string }
  }
  bestPractices: {
    title: string
    items: string[]
  }
  quickReference: {
    title: string
    code: string
  }
}

export const teamsMeta = [
  {
    id: 'product-strategy',
    slug: 'product-strategy',
    color: 'cyan',
    iconName: 'Lightbulb',
    nameKey: 'teams.product-strategy.name',
    formerNameKey: 'teams.product-strategy.formerName',
    shortNameKey: 'teams.product-strategy.shortName',
    storyKey: 'teams.product-strategy.story',
    roles: ['product-manager', 'product-marketing-manager', 'ux-ui-designer-user-researcher', 'technical-writer'],
  },
  {
    id: 'engineering',
    slug: 'engineering',
    color: 'violet',
    iconName: 'Code2',
    nameKey: 'teams.engineering.name',
    formerNameKey: 'teams.engineering.formerName',
    shortNameKey: 'teams.engineering.shortName',
    storyKey: 'teams.engineering.story',
    roles: ['system-architect-solutions-architect', 'software-engineer-frontend-backend-full-stack', 'database-administrator-dba', 'quality-assurance-qa-engineer-tester', 'forward-deployed-engineer-fde'],
  },
  {
    id: 'operations',
    slug: 'operations',
    color: 'emerald',
    iconName: 'ShieldCheck',
    nameKey: 'teams.operations.name',
    formerNameKey: 'teams.operations.formerName',
    shortNameKey: 'teams.operations.shortName',
    storyKey: 'teams.operations.story',
    roles: ['devops-engineer', 'security-engineer', 'technical-support-customer-success-manager'],
  },
  {
    id: 'revenue',
    slug: 'revenue',
    color: 'amber',
    iconName: 'TrendingUp',
    nameKey: 'teams.revenue.name',
    formerNameKey: 'teams.revenue.formerName',
    shortNameKey: 'teams.revenue.shortName',
    storyKey: 'teams.revenue.story',
    roles: ['sales-manager-account-executive', 'sales-engineer', 'marketing-communications-specialist', 'channel-partnerships-manager'],
  },
  {
    id: 'leadership',
    slug: 'leadership',
    color: 'rose',
    iconName: 'Users',
    nameKey: 'teams.leadership.name',
    formerNameKey: 'teams.leadership.formerName',
    shortNameKey: 'teams.leadership.shortName',
    storyKey: 'teams.leadership.story',
    roles: ['project-manager-technical-program-manager', 'technical-team-leader'],
  }
]

export const rolesMeta = [
  {
    slug: 'product-manager',
    teamId: 'product-strategy',
    color: 'cyan',
    iconName: 'Lightbulb',
    titleKey: 'roles.product-manager.title',
    shortTitleKey: 'roles.product-manager.shortTitle',
    summaryKey: 'roles.product-manager.summary',
    storyKey: 'roles.product-manager.story',
    responsibilitiesKey: 'roles.product-manager.responsibilities',
    skillsKey: 'roles.product-manager.skills',
    toolsKey: 'roles.product-manager.tools',
    roadmapKey: 'roles.product-manager.roadmap',
    dailyInteractionsKey: 'roles.product-manager.dailyInteractions',
    bestPracticesKey: 'roles.product-manager.bestPractices',
    resourcesKey: 'roles.product-manager.resources',
  },
  {
    slug: 'product-marketing-manager',
    teamId: 'product-strategy',
    color: 'cyan',
    iconName: 'Lightbulb',
    titleKey: 'roles.product-marketing-manager.title',
    shortTitleKey: 'roles.product-marketing-manager.shortTitle',
    summaryKey: 'roles.product-marketing-manager.summary',
    storyKey: 'roles.product-marketing-manager.story',
    responsibilitiesKey: 'roles.product-marketing-manager.responsibilities',
    skillsKey: 'roles.product-marketing-manager.skills',
    toolsKey: 'roles.product-marketing-manager.tools',
    roadmapKey: 'roles.product-marketing-manager.roadmap',
    dailyInteractionsKey: 'roles.product-marketing-manager.dailyInteractions',
    bestPracticesKey: 'roles.product-marketing-manager.bestPractices',
    resourcesKey: 'roles.product-marketing-manager.resources',
  },
  {
    slug: 'ux-ui-designer-user-researcher',
    teamId: 'product-strategy',
    color: 'cyan',
    iconName: 'Lightbulb',
    titleKey: 'roles.ux-ui-designer-user-researcher.title',
    shortTitleKey: 'roles.ux-ui-designer-user-researcher.shortTitle',
    summaryKey: 'roles.ux-ui-designer-user-researcher.summary',
    storyKey: 'roles.ux-ui-designer-user-researcher.story',
    responsibilitiesKey: 'roles.ux-ui-designer-user-researcher.responsibilities',
    skillsKey: 'roles.ux-ui-designer-user-researcher.skills',
    toolsKey: 'roles.ux-ui-designer-user-researcher.tools',
    roadmapKey: 'roles.ux-ui-designer-user-researcher.roadmap',
    dailyInteractionsKey: 'roles.ux-ui-designer-user-researcher.dailyInteractions',
    bestPracticesKey: 'roles.ux-ui-designer-user-researcher.bestPractices',
    resourcesKey: 'roles.ux-ui-designer-user-researcher.resources',
  },
  {
    slug: 'technical-writer',
    teamId: 'product-strategy',
    color: 'cyan',
    iconName: 'Lightbulb',
    titleKey: 'roles.technical-writer.title',
    shortTitleKey: 'roles.technical-writer.shortTitle',
    summaryKey: 'roles.technical-writer.summary',
    storyKey: 'roles.technical-writer.story',
    responsibilitiesKey: 'roles.technical-writer.responsibilities',
    skillsKey: 'roles.technical-writer.skills',
    toolsKey: 'roles.technical-writer.tools',
    roadmapKey: 'roles.technical-writer.roadmap',
    dailyInteractionsKey: 'roles.technical-writer.dailyInteractions',
    bestPracticesKey: 'roles.technical-writer.bestPractices',
    resourcesKey: 'roles.technical-writer.resources',
  },
  {
    slug: 'system-architect-solutions-architect',
    teamId: 'engineering',
    color: 'violet',
    iconName: 'Code2',
    titleKey: 'roles.system-architect-solutions-architect.title',
    shortTitleKey: 'roles.system-architect-solutions-architect.shortTitle',
    summaryKey: 'roles.system-architect-solutions-architect.summary',
    storyKey: 'roles.system-architect-solutions-architect.story',
    responsibilitiesKey: 'roles.system-architect-solutions-architect.responsibilities',
    skillsKey: 'roles.system-architect-solutions-architect.skills',
    toolsKey: 'roles.system-architect-solutions-architect.tools',
    roadmapKey: 'roles.system-architect-solutions-architect.roadmap',
    dailyInteractionsKey: 'roles.system-architect-solutions-architect.dailyInteractions',
    bestPracticesKey: 'roles.system-architect-solutions-architect.bestPractices',
    resourcesKey: 'roles.system-architect-solutions-architect.resources',
  },
  {
    slug: 'software-engineer-frontend-backend-full-stack',
    teamId: 'engineering',
    color: 'violet',
    iconName: 'Code2',
    titleKey: 'roles.software-engineer-frontend-backend-full-stack.title',
    shortTitleKey: 'roles.software-engineer-frontend-backend-full-stack.shortTitle',
    summaryKey: 'roles.software-engineer-frontend-backend-full-stack.summary',
    storyKey: 'roles.software-engineer-frontend-backend-full-stack.story',
    responsibilitiesKey: 'roles.software-engineer-frontend-backend-full-stack.responsibilities',
    skillsKey: 'roles.software-engineer-frontend-backend-full-stack.skills',
    toolsKey: 'roles.software-engineer-frontend-backend-full-stack.tools',
    roadmapKey: 'roles.software-engineer-frontend-backend-full-stack.roadmap',
    dailyInteractionsKey: 'roles.software-engineer-frontend-backend-full-stack.dailyInteractions',
    bestPracticesKey: 'roles.software-engineer-frontend-backend-full-stack.bestPractices',
    resourcesKey: 'roles.software-engineer-frontend-backend-full-stack.resources',
  },
  {
    slug: 'database-administrator-dba',
    teamId: 'engineering',
    color: 'violet',
    iconName: 'Code2',
    titleKey: 'roles.database-administrator-dba.title',
    shortTitleKey: 'roles.database-administrator-dba.shortTitle',
    summaryKey: 'roles.database-administrator-dba.summary',
    storyKey: 'roles.database-administrator-dba.story',
    responsibilitiesKey: 'roles.database-administrator-dba.responsibilities',
    skillsKey: 'roles.database-administrator-dba.skills',
    toolsKey: 'roles.database-administrator-dba.tools',
    roadmapKey: 'roles.database-administrator-dba.roadmap',
    dailyInteractionsKey: 'roles.database-administrator-dba.dailyInteractions',
    bestPracticesKey: 'roles.database-administrator-dba.bestPractices',
    resourcesKey: 'roles.database-administrator-dba.resources',
  },
  {
    slug: 'quality-assurance-qa-engineer-tester',
    teamId: 'engineering',
    color: 'violet',
    iconName: 'Code2',
    titleKey: 'roles.quality-assurance-qa-engineer-tester.title',
    shortTitleKey: 'roles.quality-assurance-qa-engineer-tester.shortTitle',
    summaryKey: 'roles.quality-assurance-qa-engineer-tester.summary',
    storyKey: 'roles.quality-assurance-qa-engineer-tester.story',
    responsibilitiesKey: 'roles.quality-assurance-qa-engineer-tester.responsibilities',
    skillsKey: 'roles.quality-assurance-qa-engineer-tester.skills',
    toolsKey: 'roles.quality-assurance-qa-engineer-tester.tools',
    roadmapKey: 'roles.quality-assurance-qa-engineer-tester.roadmap',
    dailyInteractionsKey: 'roles.quality-assurance-qa-engineer-tester.dailyInteractions',
    bestPracticesKey: 'roles.quality-assurance-qa-engineer-tester.bestPractices',
    resourcesKey: 'roles.quality-assurance-qa-engineer-tester.resources',
  },
  {
    slug: 'forward-deployed-engineer-fde',
    teamId: 'engineering',
    color: 'violet',
    iconName: 'Code2',
    titleKey: 'roles.forward-deployed-engineer-fde.title',
    shortTitleKey: 'roles.forward-deployed-engineer-fde.shortTitle',
    summaryKey: 'roles.forward-deployed-engineer-fde.summary',
    storyKey: 'roles.forward-deployed-engineer-fde.story',
    responsibilitiesKey: 'roles.forward-deployed-engineer-fde.responsibilities',
    skillsKey: 'roles.forward-deployed-engineer-fde.skills',
    toolsKey: 'roles.forward-deployed-engineer-fde.tools',
    roadmapKey: 'roles.forward-deployed-engineer-fde.roadmap',
    dailyInteractionsKey: 'roles.forward-deployed-engineer-fde.dailyInteractions',
    bestPracticesKey: 'roles.forward-deployed-engineer-fde.bestPractices',
    resourcesKey: 'roles.forward-deployed-engineer-fde.resources',
  },
  {
    slug: 'devops-engineer',
    teamId: 'operations',
    color: 'emerald',
    iconName: 'ShieldCheck',
    titleKey: 'roles.devops-engineer.title',
    shortTitleKey: 'roles.devops-engineer.shortTitle',
    summaryKey: 'roles.devops-engineer.summary',
    storyKey: 'roles.devops-engineer.story',
    responsibilitiesKey: 'roles.devops-engineer.responsibilities',
    skillsKey: 'roles.devops-engineer.skills',
    toolsKey: 'roles.devops-engineer.tools',
    roadmapKey: 'roles.devops-engineer.roadmap',
    dailyInteractionsKey: 'roles.devops-engineer.dailyInteractions',
    bestPracticesKey: 'roles.devops-engineer.bestPractices',
    resourcesKey: 'roles.devops-engineer.resources',
  },
  {
    slug: 'security-engineer',
    teamId: 'operations',
    color: 'emerald',
    iconName: 'ShieldCheck',
    titleKey: 'roles.security-engineer.title',
    shortTitleKey: 'roles.security-engineer.shortTitle',
    summaryKey: 'roles.security-engineer.summary',
    storyKey: 'roles.security-engineer.story',
    responsibilitiesKey: 'roles.security-engineer.responsibilities',
    skillsKey: 'roles.security-engineer.skills',
    toolsKey: 'roles.security-engineer.tools',
    roadmapKey: 'roles.security-engineer.roadmap',
    dailyInteractionsKey: 'roles.security-engineer.dailyInteractions',
    bestPracticesKey: 'roles.security-engineer.bestPractices',
    resourcesKey: 'roles.security-engineer.resources',
  },
  {
    slug: 'technical-support-customer-success-manager',
    teamId: 'operations',
    color: 'emerald',
    iconName: 'ShieldCheck',
    titleKey: 'roles.technical-support-customer-success-manager.title',
    shortTitleKey: 'roles.technical-support-customer-success-manager.shortTitle',
    summaryKey: 'roles.technical-support-customer-success-manager.summary',
    storyKey: 'roles.technical-support-customer-success-manager.story',
    responsibilitiesKey: 'roles.technical-support-customer-success-manager.responsibilities',
    skillsKey: 'roles.technical-support-customer-success-manager.skills',
    toolsKey: 'roles.technical-support-customer-success-manager.tools',
    roadmapKey: 'roles.technical-support-customer-success-manager.roadmap',
    dailyInteractionsKey: 'roles.technical-support-customer-success-manager.dailyInteractions',
    bestPracticesKey: 'roles.technical-support-customer-success-manager.bestPractices',
    resourcesKey: 'roles.technical-support-customer-success-manager.resources',
  },
  {
    slug: 'sales-manager-account-executive',
    teamId: 'revenue',
    color: 'amber',
    iconName: 'TrendingUp',
    titleKey: 'roles.sales-manager-account-executive.title',
    shortTitleKey: 'roles.sales-manager-account-executive.shortTitle',
    summaryKey: 'roles.sales-manager-account-executive.summary',
    storyKey: 'roles.sales-manager-account-executive.story',
    responsibilitiesKey: 'roles.sales-manager-account-executive.responsibilities',
    skillsKey: 'roles.sales-manager-account-executive.skills',
    toolsKey: 'roles.sales-manager-account-executive.tools',
    roadmapKey: 'roles.sales-manager-account-executive.roadmap',
    dailyInteractionsKey: 'roles.sales-manager-account-executive.dailyInteractions',
    bestPracticesKey: 'roles.sales-manager-account-executive.bestPractices',
    resourcesKey: 'roles.sales-manager-account-executive.resources',
  },
  {
    slug: 'sales-engineer',
    teamId: 'revenue',
    color: 'amber',
    iconName: 'TrendingUp',
    titleKey: 'roles.sales-engineer.title',
    shortTitleKey: 'roles.sales-engineer.shortTitle',
    summaryKey: 'roles.sales-engineer.summary',
    storyKey: 'roles.sales-engineer.story',
    responsibilitiesKey: 'roles.sales-engineer.responsibilities',
    skillsKey: 'roles.sales-engineer.skills',
    toolsKey: 'roles.sales-engineer.tools',
    roadmapKey: 'roles.sales-engineer.roadmap',
    dailyInteractionsKey: 'roles.sales-engineer.dailyInteractions',
    bestPracticesKey: 'roles.sales-engineer.bestPractices',
    resourcesKey: 'roles.sales-engineer.resources',
  },
  {
    slug: 'marketing-communications-specialist',
    teamId: 'revenue',
    color: 'amber',
    iconName: 'TrendingUp',
    titleKey: 'roles.marketing-communications-specialist.title',
    shortTitleKey: 'roles.marketing-communications-specialist.shortTitle',
    summaryKey: 'roles.marketing-communications-specialist.summary',
    storyKey: 'roles.marketing-communications-specialist.story',
    responsibilitiesKey: 'roles.marketing-communications-specialist.responsibilities',
    skillsKey: 'roles.marketing-communications-specialist.skills',
    toolsKey: 'roles.marketing-communications-specialist.tools',
    roadmapKey: 'roles.marketing-communications-specialist.roadmap',
    dailyInteractionsKey: 'roles.marketing-communications-specialist.dailyInteractions',
    bestPracticesKey: 'roles.marketing-communications-specialist.bestPractices',
    resourcesKey: 'roles.marketing-communications-specialist.resources',
  },
  {
    slug: 'channel-partnerships-manager',
    teamId: 'revenue',
    color: 'amber',
    iconName: 'TrendingUp',
    titleKey: 'roles.channel-partnerships-manager.title',
    shortTitleKey: 'roles.channel-partnerships-manager.shortTitle',
    summaryKey: 'roles.channel-partnerships-manager.summary',
    storyKey: 'roles.channel-partnerships-manager.story',
    responsibilitiesKey: 'roles.channel-partnerships-manager.responsibilities',
    skillsKey: 'roles.channel-partnerships-manager.skills',
    toolsKey: 'roles.channel-partnerships-manager.tools',
    roadmapKey: 'roles.channel-partnerships-manager.roadmap',
    dailyInteractionsKey: 'roles.channel-partnerships-manager.dailyInteractions',
    bestPracticesKey: 'roles.channel-partnerships-manager.bestPractices',
    resourcesKey: 'roles.channel-partnerships-manager.resources',
  },
  {
    slug: 'project-manager-technical-program-manager',
    teamId: 'leadership',
    color: 'rose',
    iconName: 'Users',
    titleKey: 'roles.project-manager-technical-program-manager.title',
    shortTitleKey: 'roles.project-manager-technical-program-manager.shortTitle',
    summaryKey: 'roles.project-manager-technical-program-manager.summary',
    storyKey: 'roles.project-manager-technical-program-manager.story',
    responsibilitiesKey: 'roles.project-manager-technical-program-manager.responsibilities',
    skillsKey: 'roles.project-manager-technical-program-manager.skills',
    toolsKey: 'roles.project-manager-technical-program-manager.tools',
    roadmapKey: 'roles.project-manager-technical-program-manager.roadmap',
    dailyInteractionsKey: 'roles.project-manager-technical-program-manager.dailyInteractions',
    bestPracticesKey: 'roles.project-manager-technical-program-manager.bestPractices',
    resourcesKey: 'roles.project-manager-technical-program-manager.resources',
  },
  {
    slug: 'technical-team-leader',
    teamId: 'leadership',
    color: 'rose',
    iconName: 'Users',
    titleKey: 'roles.technical-team-leader.title',
    shortTitleKey: 'roles.technical-team-leader.shortTitle',
    summaryKey: 'roles.technical-team-leader.summary',
    storyKey: 'roles.technical-team-leader.story',
    responsibilitiesKey: 'roles.technical-team-leader.responsibilities',
    skillsKey: 'roles.technical-team-leader.skills',
    toolsKey: 'roles.technical-team-leader.tools',
    roadmapKey: 'roles.technical-team-leader.roadmap',
    dailyInteractionsKey: 'roles.technical-team-leader.dailyInteractions',
    bestPracticesKey: 'roles.technical-team-leader.bestPractices',
    resourcesKey: 'roles.technical-team-leader.resources',
  }
]

function translateOpenCall(t: TFunction<'content'>): OpenCall {
  return {
    headline: t('openCall.headline'),
    title: t('openCall.title'),
    organization: t('openCall.organization'),
    mission: t('openCall.mission'),
    note: t('openCall.note'),
    whatIs: {
      title: t('openCall.whatIs.title'),
      paragraphs: t('openCall.whatIs.paragraphs', { returnObjects: true }) as string[],
      exposure: t('openCall.whatIs.exposure', { returnObjects: true }) as string[]
    },
    important: {
      title: t('openCall.important.title'),
      note: t('openCall.important.note')
    },
    purpose: {
      title: t('openCall.purpose.title'),
      items: t('openCall.purpose.items', { returnObjects: true }) as string[]
    },
    whoShouldApply: {
      title: t('openCall.whoShouldApply.title'),
      description: t('openCall.whoShouldApply.description')
    },
    commitment: {
      title: t('openCall.commitment.title'),
      items: t('openCall.commitment.items', { returnObjects: true }) as string[]
    },
    application: {
      title: t('openCall.application.title'),
      instructions: t('openCall.application.instructions'),
      applyButtonText: t('openCall.application.applyButtonText'),
      scheduleButtonText: t('openCall.application.scheduleButtonText'),
      applyUrl: t('openCall.application.applyUrl'),
      calendlyUrl: t('openCall.application.calendlyUrl')
    },
    closing: {
      tagline: t('openCall.closing.tagline'),
      signature: t('openCall.closing.signature')
    }
  }
}

function translateGitWorkflow(t: TFunction<'content'>): GitWorkflow {
  return {
    title: t('gitWorkflow.title'),
    subtitle: t('gitWorkflow.subtitle'),
    standardWorkflowTitle: t('gitWorkflow.standardWorkflowTitle'),
    repository: {
      title: t('gitWorkflow.repository.title'),
      external: {
        title: t('gitWorkflow.repository.external.title'),
        description: t('gitWorkflow.repository.external.description'),
        code: t('gitWorkflow.repository.external.code'),
        urls: {
          forkExample: t('gitWorkflow.repository.external.urls.forkExample'),
          upstream: t('gitWorkflow.repository.external.urls.upstream')
        }
      },
      team: {
        title: t('gitWorkflow.repository.team.title'),
        description: t('gitWorkflow.repository.team.description'),
        code: t('gitWorkflow.repository.team.code'),
        url: t('gitWorkflow.repository.team.url')
      }
    },
    steps: t('gitWorkflow.steps', { returnObjects: true }) as unknown as GitWorkflowStep[],
    branchNaming: {
      title: t('gitWorkflow.branchNaming.title'),
      description: t('gitWorkflow.branchNaming.description'),
      pattern: t('gitWorkflow.branchNaming.pattern'),
      types: t('gitWorkflow.branchNaming.types', { returnObjects: true }) as unknown as GitWorkflowBranchType[]
    },
    commitMessages: {
      title: t('gitWorkflow.commitMessages.title'),
      description: t('gitWorkflow.commitMessages.description'),
      conventionalCommitsUrl: t('gitWorkflow.commitMessages.conventionalCommitsUrl'),
      format: t('gitWorkflow.commitMessages.format'),
      types: t('gitWorkflow.commitMessages.types', { returnObjects: true }) as unknown as GitWorkflowCommitType[]
    },
    pullRequestEtiquette: {
      title: t('gitWorkflow.pullRequestEtiquette.title'),
      items: t('gitWorkflow.pullRequestEtiquette.items', { returnObjects: true }) as string[]
    },
    stayingUpToDate: {
      title: t('gitWorkflow.stayingUpToDate.title'),
      directClone: {
        description: t('gitWorkflow.stayingUpToDate.directClone.description'),
        code: t('gitWorkflow.stayingUpToDate.directClone.code')
      },
      forkedClone: {
        description: t('gitWorkflow.stayingUpToDate.forkedClone.description'),
        code: t('gitWorkflow.stayingUpToDate.forkedClone.code')
      }
    },
    bestPractices: {
      title: t('gitWorkflow.bestPractices.title'),
      items: t('gitWorkflow.bestPractices.items', { returnObjects: true }) as string[]
    },
    quickReference: {
      title: t('gitWorkflow.quickReference.title'),
      code: t('gitWorkflow.quickReference.code')
    }
  }
}

export function useSiteData() {
  const { t } = useTranslation('content')

  const teams = useMemo<Team[]>(() => {
    return teamsMeta.map((meta) => ({
      id: meta.id,
      name: t(meta.nameKey),
      formerName: t(meta.formerNameKey),
      shortName: t(meta.shortNameKey),
      color: meta.color as Team['color'],
      iconName: meta.iconName,
      story: t(meta.storyKey, { returnObjects: true }) as string[],
      roles: meta.roles,
    }))
  }, [t])

  const roles = useMemo<Role[]>(() => {
    return rolesMeta.map((meta) => ({
      slug: meta.slug,
      teamId: meta.teamId,
      title: t(meta.titleKey),
      shortTitle: t(meta.shortTitleKey),
      summary: t(meta.summaryKey),
      story: t(meta.storyKey),
      responsibilities: t(meta.responsibilitiesKey, { returnObjects: true }) as string[],
      skills: t(meta.skillsKey, { returnObjects: true }) as string[],
      tools: t(meta.toolsKey, { returnObjects: true }) as string[],
      roadmap: t(meta.roadmapKey, { returnObjects: true }) as RoadmapLevel[],
      dailyInteractions: t(meta.dailyInteractionsKey, { returnObjects: true }) as DailyInteraction[],
      bestPractices: t(meta.bestPracticesKey, { returnObjects: true }) as string[],
      resources: t(meta.resourcesKey, { returnObjects: true }) as Resource[],
    }))
  }, [t])

  const openCall = useMemo<OpenCall>(() => translateOpenCall(t), [t])
  const gitWorkflow = useMemo<GitWorkflow>(() => translateGitWorkflow(t), [t])

  return { teams, roles, openCall, gitWorkflow }
}

export function getRoleCountForTeam(teamId: string, roles: Role[]): number {
  return roles.filter((r) => r.teamId === teamId).length
}

export function getTeamById(teamId: string, teams: Team[]): Team | undefined {
  return teams.find((t) => t.id === teamId)
}

export function getRoleBySlug(slug: string, roles: Role[]): Role | undefined {
  return roles.find((r) => r.slug === slug)
}

export function getRolesByTeam(teamId: string, roles: Role[]): Role[] {
  return roles.filter((r) => r.teamId === teamId)
}

export function getAdjacentRole(role: Role, roles: Role[]): { prev: Role | null; next: Role | null } {
  const teamRoles = getRolesByTeam(role.teamId, roles)
  const idx = teamRoles.findIndex((r) => r.slug === role.slug)
  return {
    prev: teamRoles[idx - 1] ?? null,
    next: teamRoles[idx + 1] ?? null,
  }
}
