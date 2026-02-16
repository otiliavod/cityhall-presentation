import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AchievementItem } from '../../data/site-content.models';

@Component({
  selector: 'app-achievement-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievement-card.html',
  styleUrl: './achievement-card.scss',
})
export class AchievementCard {
  @Input({ required: true }) item!: AchievementItem;
}
