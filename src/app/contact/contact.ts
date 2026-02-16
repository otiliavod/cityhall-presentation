import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../services/contact.service';

/* =======================
   Types for static content
   ======================= */
type ContactItem = {
  icon: string; // PrimeIcons class (ex: 'pi pi-map-marker')
  title: string;
  lines: string[];
};

type PublicRelationsBox = {
  title: string;
  text: string;
  note?: string;
};

type ContactContent = {
  title: string;
  subtitle: string;
  infoTitle: string;
  items: ContactItem[];
  publicRelations: PublicRelationsBox;
  formTitle: string;
  submitLabel: string;
};

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  /* =======================
     Static (fake) content
     ======================= */
  content: ContactContent = {
    title: 'Contactează-ne',
    subtitle: 'Suntem aici pentru a vă ajuta. Trimiteți-ne un mesaj sau vizitați-ne la sediu.',
    infoTitle: 'Informații de Contact',
    items: [
      {
        icon: 'pi pi-map-marker',
        title: 'Adresa',
        lines: ['Strada Principală nr. 1, Comuna Noastră, Județul Cluj'],
      },
      {
        icon: 'pi pi-phone',
        title: 'Telefon',
        lines: ['+40 264 XXX XXX'],
      },
      {
        icon: 'pi pi-envelope',
        title: 'Email',
        lines: ['contact@primaria.ro'],
      },
      {
        icon: 'pi pi-clock',
        title: 'Program',
        lines: ['Luni - Vineri: 08:00 - 16:00'],
      },
    ],
    publicRelations: {
      title: 'Relații cu Publicul',
      text:
        'Pentru programări și informații suplimentare, vă rugăm să ne contactați în avans. Echipa noastră este dedicată să vă ofere asistența necesară.',
      note: 'Biroul relații cu publicul este deschis în fiecare zi lucrătoare între orele 08:00 - 14:00.',
    },
    formTitle: 'Trimite un Mesaj',
    submitLabel: 'Trimite Mesajul',
  };

  /* =======================
     UI state
     ======================= */
  sending = false;
  sent = false;
  errorMsg = '';

  /* =======================
     Form model
     ======================= */
  form = {
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '', // honeypot (must stay empty)
  };

  /* =======================
     Inject backend service
     ======================= */
  constructor(private contact: ContactService) {}

  /* =======================
     Submit handler
     ======================= */
  submit(): void {
    if (this.sending) return;

    this.sending = true;
    this.sent = false;
    this.errorMsg = '';

    this.contact.send(this.form).subscribe({
      next: (res) => {
        this.sending = false;

        if (res.ok) {
          this.sent = true;
          this.form = {
            name: '',
            email: '',
            subject: '',
            message: '',
            company: '',
          };
        } else {
          this.errorMsg = (res.errors ?? ['Eroare necunoscută']).join(' ');
        }
      },
      error: () => {
        this.sending = false;
        this.errorMsg = 'Nu s-a putut trimite mesajul. Încercați din nou.';
      },
    });
  }
}
