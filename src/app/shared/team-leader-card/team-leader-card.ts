import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TeamMember } from '../../data/site-content.models';

@Component({
  selector: 'app-team-leader-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-leader-card.html',
  styleUrl: './team-leader-card.scss',
})
export class TeamLeaderCard {
  @Input({ required: true }) leader!: TeamMember;
}
