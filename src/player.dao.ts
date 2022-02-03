import { Player } from './player';
import { TeamPicksPlayers } from './team';

const PLAYERS_MOCK_DATA: { [key: number]: Player } = {
  1: { id: 1, points: 6, hasPlayed: true, position: 'GKP' },
  12: { id: 12, points: 0, hasPlayed: false, position: 'GKP' },

  2: { id: 2, points: 2, hasPlayed: true, position: 'DEF' },
  3: { id: 3, points: 3, hasPlayed: true, position: 'DEF' },
  4: { id: 4, points: 4, hasPlayed: true, position: 'DEF' },
  5: { id: 5, points: 5, hasPlayed: true, position: 'DEF' },
  6: { id: 6, points: 0, hasPlayed: false, position: 'DEF' },

  7: { id: 7, points: 1, hasPlayed: true, position: 'MID' },
  8: { id: 8, points: 1, hasPlayed: true, position: 'MID' },
  9: { id: 9, points: 9, hasPlayed: true, position: 'MID' },
  10: { id: 10, points: 6, hasPlayed: true, position: 'MID' },
  11: { id: 11, points: 0, hasPlayed: false, position: 'MID' },

  13: { id: 13, points: 4, hasPlayed: true, position: 'FWD' },
  14: { id: 14, points: 12, hasPlayed: true, position: 'FWD' },
  15: { id: 15, points: 0, hasPlayed: false, position: 'FWD' },
};

export class PlayerDAO {
  getPlayers(ids: number[]): TeamPicksPlayers {
    return ids.map((id) => PLAYERS_MOCK_DATA[id]) as TeamPicksPlayers;
  }
}