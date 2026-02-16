import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SiteContentService } from '../../data/site-content.service';
import { AchievementsContent } from '../../data/site-content.models';
import { Navigation } from '../navigation/navigation';
import { Footer } from '../../footer/footer';
import { AchievementTimelineItem } from '../../shared/achievement-timeline-item/achievement-timeline-item';

@Component({
  selector: 'app-achievements-page',
  standalone: true,
  imports: [CommonModule, Navigation, Footer, AchievementTimelineItem],
  templateUrl: './achievements-page.html',
  styleUrls: ['./achievements-page.scss'],
})
export class AchievementsPage {
  private readonly contentService = inject(SiteContentService);
  content: AchievementsContent = this.contentService.getAchievementsContent();

  expandedKey: string | null = null;

  toggle(itemTitle: string) {
    this.expandedKey = this.expandedKey === itemTitle ? null : itemTitle;
  }
}
