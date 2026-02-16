import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AchievementItem } from '../../data/site-content.models';

@Component({
  selector: 'app-achievement-timeline-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievement-timeline-item.html',
  styleUrls: ['./achievement-timeline-item.scss'],
})
export class AchievementTimelineItem {
  @Input({ required: true }) item!: AchievementItem;
  @Input() expanded = false;

  @Output() toggle = new EventEmitter<void>();
}
