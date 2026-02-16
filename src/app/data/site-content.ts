import { HeroContent, NavItem } from './site-content.models';
import { AboutContent } from './site-content.models';
import { AchievementsContent} from './site-content.models';
import { TeamContent} from './site-content.models';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Acasă', id: 'hero' },
  { label: 'Despre Comună', id: 'about' },
  { label: 'Realizări', id: 'achievements' },
  { label: 'Echipa', id: 'team' },
  { label: 'Contact', id: 'contact' },
];

export const HERO_CONTENT: HeroContent = {
  title: 'Bine ați venit în Comuna Noastră',
  subtitle: 'O comunitate unită, un viitor prosper. Descoperă tradițiile și dezvoltarea comunei noastre.',
  primaryCtaLabel: 'Contactează-ne',
  primaryCtaTarget: 'contact',
  secondaryCtaLabel: 'Află mai multe',
  secondaryCtaTarget: 'about',
};

export const ABOUT_CONTENT: AboutContent = {
  title: 'Despre Comuna Noastră',
  subtitle: 'O comunitate cu rădăcini adânci în tradiție și privire îndreptată spre viitor',
  readMoreLabel: 'Citește mai mult',
  stats: [
    { icon: 'pi pi-users', label: 'Populație', value: '2,847' },
    { icon: 'pi pi-home', label: 'Gospodării', value: '892' },
    { icon: 'pi pi-map-marker', label: 'Suprafață', value: '45 km²' },
    { icon: 'pi pi-calendar', label: 'Înființată', value: '1432' },
  ],
  paragraphs: [
    'Comuna noastră este o localitate rurală situată în inima României, cu o istorie bogată care se întinde pe parcursul a șase secole. Documentată pentru prima dată în anul 1432, comuna a evoluat continuu, păstrându-și tradițiile și valorile fundamentale.',
    'Astăzi, comunitatea noastră este un model de dezvoltare durabilă în mediul rural românesc, combinând respectul pentru tradiție cu proiecte moderne de infrastructură și servicii pentru cetățeni. Ne mândrim cu patrimoniul nostru cultural, cu frumusețea peisajelor naturale și cu ospitalitatea locuitorilor.',
    'Prin eforturile administrației locale și implicarea activă a comunității, am reușit să implementăm numeroase proiecte de dezvoltare care au îmbunătățit semnificativ calitatea vieții locuitorilor noștri.',
  ],
};

import { AboutHistoryContent } from './site-content.models';

export const ABOUT_HISTORY_CONTENT: AboutHistoryContent = {
  title: 'Despre comuna noastră',
  subtitle: 'O comunitate cu rădăcini adânci în tradiție și privire îndreptată spre viitor',
  introParagraphs: [
    'Comuna noastră are o istorie bogată...',
    'De-a lungul timpului, a evoluat...'
  ],
  sections: [
    {
      label: 'Rădăcini',
      paragraphs: [
        'Text...',
        'Text...'
      ],
    },
    {
      label: 'Dezvoltare',
      paragraphs: [
        'Text...',
      ],
    },
    {
      label: 'Tradiții',
      paragraphs: [
        'Text...',
      ],
    },
    {
      label: 'Astăzi',
      paragraphs: [
        'Text...',
      ],
    },
  ],
  timelineTitle: 'Repere importante',
  timeline: [
    { year: '1432', title: 'Prima atestare documentară', description: 'Comuna este menționată pentru prima dată...' },
    { year: '1900', title: 'Dezvoltare agricolă', description: '...' },
    { year: '2024', title: 'Modernizare drumuri', description: '...' },
  ],
};

export const ACHIEVEMENTS_CONTENT: AchievementsContent = {
  title: 'Realizările Noastre',
  subtitle: 'Proiecte și inițiative implementate pentru dezvoltarea comunei noastre',
  readMoreLabel: 'Citește mai mult',
  items: [
    {
      year: '2024',
      title: 'Modernizare drumuri comunale',
      description: 'Reabilitarea și asfaltarea a 6 km de drumuri pentru conectivitate mai bună între sate.',
      imageUrl: '/assets/achievement-2.jpg',
    },
    {
      year: '2022',
      title: 'Renovare Cămin Cultural',
      description: 'Lucrări de reabilitare, eficientizare energetică și dotări moderne pentru elevi.',
      imageUrl: '/assets/achievement-1.jpg',
    },
    {
      year: '2020',
      title: 'Amenajare spații de joacă moderne',
      description: 'Parcuri, locuri de joacă și zone de relaxare pentru familii și tineri.',
      imageUrl: '/assets/achievement-3.jpg',
    },
  ],
  ongoing: {
    title: 'Proiecte în Desfășurare',
    items: [
      'Extinderea rețelei de apă și canalizare în satele componente',
      'Construcția unei noi școli moderne cu echipamente digitale',
      'Dezvoltarea zonelor verzi și a pistelor pentru biciclete',
      'Implementarea sistemului de colectare selectivă a deșeurilor',
    ],
  },
};

export const TEAM_CONTENT: TeamContent = {
  title: 'Echipa Primăriei',
  subtitle: 'Oameni dedicați dezvoltării și bunăstării comunității',
  leader: {
    name: 'Ion Popescu',
    role: 'Primar',
    accentLabel: 'Primar',
    description:
      'Cu o experiență de peste 15 ani în administrația publică locală, domnul Popescu s-a dedicat dezvoltării comunității noastre prin proiecte sustenabile și implicare activă în rezolvarea problemelor cetățenilor.',
    email: 'primar@primaria.ro',
    phone: '+40 264 XXX XXX',
    imageUrl: '/assets/mayor.jpg',
  },
  members: [
    {
      name: 'Maria Ionescu',
      role: 'Viceprimar',
      description: 'Coordonează proiectele sociale și de dezvoltare comunitară',
      email: 'viceprimar@primaria.ro',
    },
    {
      name: 'Andrei Dumitrescu',
      role: 'Secretar General',
      description: 'Gestionează procedurile administrative și documentația oficială',
      email: 'secretar@primaria.ro',
    },
    {
      name: 'Elena Marinescu',
      role: 'Director Economic',
      description: 'Supervizează bugetul și resursele financiare ale comunei',
      email: 'economic@primaria.ro',
    },
    {
      name: 'Gheorghe Vasile',
      role: 'Șef Birou Urbanism',
      description: 'Coordonează proiectele de infrastructură și dezvoltare urbană',
      email: 'urbanism@primaria.ro',
    },
  ],
}
