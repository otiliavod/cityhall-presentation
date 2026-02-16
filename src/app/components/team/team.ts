import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SiteContentService } from '../../data/site-content.service';
import { TeamContent } from '../../data/site-content.models';
import { TeamLeaderCard } from '../../shared/team-leader-card/team-leader-card';
import { TeamMemberCard } from '../../shared/team-member-card/team-member-card';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, TeamLeaderCard, TeamMemberCard],
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team {
  private readonly contentService = inject(SiteContentService);
  content: TeamContent = this.contentService.getTeamContent();
}
