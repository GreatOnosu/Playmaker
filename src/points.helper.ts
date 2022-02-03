import { PlayerSubstitution } from './player.substitution';
import { TeamPicksPlayers } from './team';
import { SUB_GOALKEEPER_POSITION_ON_PICKS } from './team';

const playerSubstitution = new PlayerSubstitution();

export function calculatePoints(players: TeamPicksPlayers): number {
  console.log(players);
  const selectedPlayers = playerSubstitution.doSubstitution(players);
  console.log(selectedPlayers);
  return selectedPlayers
    .slice(0, SUB_GOALKEEPER_POSITION_ON_PICKS)
    .reduce((acc, player) => acc + player.points, 0);
}