import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StatItem } from '../../data/site-content.models';

@Component({
  selector: 'app-stats-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-grid.html',
  styleUrl: './stats-grid.scss',
})
export class StatsGrid {
  @Input({ required: true }) items: StatItem[] = [];
}
