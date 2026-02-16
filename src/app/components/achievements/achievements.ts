import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SiteContentService } from '../../data/site-content.service';
import { AchievementsContent } from '../../data/site-content.models';
import { AchievementCard } from '../../shared/achievement-card/achievement-card';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, RouterModule, AchievementCard],
  templateUrl: './achievements.html',
  styleUrls: ['./achievements.scss'],
})
export class Achievements {
  private readonly contentService = inject(SiteContentService);
  content: AchievementsContent = this.contentService.getAchievementsContent();
}
