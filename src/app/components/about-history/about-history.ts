import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SiteContentService } from '../../data/site-content.service';
import { AboutContent, AboutHistoryContent } from '../../data/site-content.models';
import { StatsGrid } from '../../shared/stats-grid/stats-grid';
import { Navigation } from '../navigation/navigation';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-about-history',
  standalone: true,
  imports: [CommonModule, StatsGrid, Navigation, Footer],
  templateUrl: './about-history.html',
  styleUrls: ['./about-history.scss'],
})
export class AboutHistoryPage {
  private readonly contentService = inject(SiteContentService);

  page: AboutHistoryContent = this.contentService.getAboutHistoryContent();

  // reuse existing stats cards from About
  about: AboutContent = this.contentService.getAboutContent();
}
