import { NotFoundError } from './shared/not-found.error';
import { PlayerDAO } from './player.dao';
import { TeamDAO } from './team.dao';
import { calculatePoints } from './points.helper';
import { Player } from './player';
import { TeamPicksPlayers } from './team';

export class TeamService {
  constructor(private teamDAO: TeamDAO, private playerDAO: PlayerDAO) {}

  getPoints(teamId: number): number {
    const players = this.getPicksPlayers(teamId);
    return calculatePoints(players);
  }

  getPicks(teamId: number): Player[] {
    return this.getPicksPlayers(teamId);
  }

  private getPicksPlayers(teamId: number): TeamPicksPlayers {
    const team = this.teamDAO.getTeam(teamId);
    if (!team) {
      throw new NotFoundError();
    }

    return this.playerDAO.getPlayers(team.picks);
  }
}