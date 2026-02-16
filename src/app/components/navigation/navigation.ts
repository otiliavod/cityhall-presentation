import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { Router } from '@angular/router';

import { SiteContentService } from '../../data/site-content.service';
import { NavItem } from '../../data/site-content.models';
import { ScrollToSectionService } from '../../shared/scroll-to-section.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, ButtonModule, ToolbarModule],
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.scss'],
})
export class Navigation {
  private readonly content = inject(SiteContentService);
  private readonly scroll = inject(ScrollToSectionService);
  private readonly router = inject(Router);

  navItems: NavItem[] = this.content.getNavItems();

  isScrolled = false;
  isMobileMenuOpen = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  async scrollToSection(id: string): Promise<void> {
    this.isMobileMenuOpen = false;

    // If we're not on home, go home first with fragment
    if (this.router.url !== '/' && !this.router.url.startsWith('/#')) {
      await this.router.navigate(['/'], { fragment: id });
      // Let the DOM render before attempting to scroll
      queueMicrotask(() => this.scroll.scrollTo(id));
      return;
    }

    this.scroll.scrollTo(id);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
