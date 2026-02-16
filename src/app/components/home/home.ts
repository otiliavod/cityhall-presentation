import { Component } from '@angular/core';
import { Navigation } from '../navigation/navigation';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Achievements } from '../achievements/achievements';
import { Team } from '../team/team';
import { Contact } from '../../contact/contact';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Navigation,
    Hero,
    About,
    Achievements,
    Team,
    Contact,
    Footer,
  ],
  templateUrl: './home.html',
})
export class HomePage {}
