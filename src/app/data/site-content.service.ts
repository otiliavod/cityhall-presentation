import { Injectable } from '@angular/core';
import { HERO_CONTENT, NAV_ITEMS } from './site-content';
import { HeroContent, NavItem } from './site-content.models';
import { ABOUT_CONTENT } from './site-content';
import { AboutContent } from './site-content.models';
import { AchievementsContent } from './site-content.models';
import { ACHIEVEMENTS_CONTENT } from './site-content';
import { TeamContent } from './site-content.models';
import { TEAM_CONTENT } from './site-content';
import { AboutHistoryContent} from './site-content.models';
import { ABOUT_HISTORY_CONTENT} from './site-content';


@Injectable({ providedIn: 'root' })
export class SiteContentService {
  getNavItems(): NavItem[] {
    return NAV_ITEMS;
  }

  getHeroContent(): HeroContent {
    return HERO_CONTENT;
  }

  getAboutContent(): AboutContent {
    return ABOUT_CONTENT;
  }

  getAboutHistoryContent(): AboutHistoryContent {
    return ABOUT_HISTORY_CONTENT;
  }

  getAchievementsContent(): AchievementsContent {
    return ACHIEVEMENTS_CONTENT;
  }

  getTeamContent(): TeamContent {
    return TEAM_CONTENT;
  }
}
