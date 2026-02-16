import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SiteContentService } from '../../data/site-content.service';
import { AboutContent } from '../../data/site-content.models';
import { StatsGrid } from '../../shared/stats-grid/stats-grid';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, StatsGrid],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  private readonly contentService = inject(SiteContentService);
  content: AboutContent = this.contentService.getAboutContent();
}
