import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TeamMember } from '../../data/site-content.models';

@Component({
  selector: 'app-team-member-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-member-card.html',
  styleUrl: './team-member-card.scss',
})
export class TeamMemberCard {
  @Input({ required: true }) member!: TeamMember;
}
