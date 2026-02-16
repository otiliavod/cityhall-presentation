import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type FooterQuickLink = {
  label: string;
  target: 'about' | 'achievements' | 'team' | 'contact' | 'hero'; // adjust if needed
};

export type FooterContactItem = {
  icon: string; // PrimeIcons class, ex: 'pi pi-map-marker'
  text: string;
};

export type FooterContent = {
  brandTitle: string;
  brandDescription: string;
  quickLinksTitle: string;
  quickLinks: FooterQuickLink[];
  contactTitle: string;
  contactItems: FooterContactItem[];
  copyrightText: string;
};

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  @Input() content: FooterContent = {
    brandTitle: 'Primăria Comunei',
    brandDescription: 'Dedicați dezvoltării comunității și bunăstării cetățenilor noștri.',
    quickLinksTitle: 'Navigare Rapidă',
    quickLinks: [
      { label: 'Despre Comună', target: 'about' },
      { label: 'Realizări', target: 'achievements' },
      { label: 'Echipa', target: 'team' },
      { label: 'Contact', target: 'contact' },
    ],
    contactTitle: 'Contact',
    contactItems: [
      { icon: 'pi pi-map-marker', text: 'Strada Principală nr. 1, Comuna Noastră' },
      { icon: 'pi pi-phone', text: '+40 264 XXX XXX' },
      { icon: 'pi pi-envelope', text: 'contact@primaria.ro' },
    ],
    copyrightText: '© 2024 Primăria Comunei. Toate drepturile rezervate.',
  };

  // If you already have a shared scrollToSection in app/nav,
  // you can replace this with an @Output or injected service later.
  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
