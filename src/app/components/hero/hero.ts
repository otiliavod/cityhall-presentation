import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { SiteContentService } from '../../data/site-content.service';
import { HeroContent } from '../../data/site-content.models';
import { ScrollToSectionService } from '../../shared/scroll-to-section.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private readonly contentService = inject(SiteContentService);
  private readonly scroll = inject(ScrollToSectionService);

  content: HeroContent = this.contentService.getHeroContent();

  // Put your hero image in: src/assets/hero-village.jpg
  heroImageUrl = 'assets/hero-village.jpg';

  goTo(target: string): void {
    this.scroll.scrollTo(target);
  }
}
