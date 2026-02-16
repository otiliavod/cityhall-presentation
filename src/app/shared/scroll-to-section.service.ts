import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollToSectionService {
  scrollTo(id: string): void {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
