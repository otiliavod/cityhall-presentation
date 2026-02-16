export type SectionId = 'hero' | 'about' | 'achievements' | 'team' | 'contact';

export interface NavItem {
  label: string;
  id: SectionId;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaTarget: SectionId;
  secondaryCtaLabel: string;
  secondaryCtaTarget: SectionId;
}

export interface StatItem {
  icon: string;   // PrimeIcon class
  label: string;
  value: string;
}

export interface AboutContent {
  title: string;
  subtitle: string;
  stats: StatItem[];
  paragraphs: string[];
  readMoreLabel: string;
}

export interface AboutHistorySection {
  label: string;
  paragraphs: string[];
}

export interface AboutHistoryContent {
  title: string;
  subtitle: string;
  introParagraphs: string[];
  sections: AboutHistorySection[];
  timelineTitle: string;
  timeline: { year: string; title: string; description: string }[];
}

export interface AchievementItem {
  year: string;
  title: string;
  description: string;
  imageUrl: string; // e.g. '/images/achievements/road.jpg' or '/assets/...'
}

export interface AchievementsContent {
  title: string;
  subtitle: string;
  items: AchievementItem[];
  ongoing: OngoingProjectsContent;
  readMoreLabel: string;
}

export interface OngoingProjectsContent {
  title: string;
  items: string[];
}

export interface AchievementsContent {
  title: string;
  subtitle: string;
  items: AchievementItem[];
  ongoing: OngoingProjectsContent;
}

export interface TeamMember {
  name: string;
  role: string;
  description?: string; // used for leader
  email?: string;
  phone?: string;
  imageUrl?: string;   // used for leader
  accentLabel?: string; // e.g. "Primar"
}

export interface TeamContent {
  title: string;
  subtitle: string;
  leader: TeamMember;
  members: TeamMember[];
}
