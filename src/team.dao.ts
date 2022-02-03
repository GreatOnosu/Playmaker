import { Team } from './team';

const TEAMS_MOCK_DATA: { [key: number]: Team } = {
  17: { id: 17, picks: [1, 2, 3, 4, 5, 7, 8, 9, 13, 14, 15, 12, 6, 10, 11] },
  18: { id: 18, picks: [12, 2, 3, 4, 5, 11, 8, 9, 13, 14, 15, 1, 6, 10, 7] },
};

export class TeamDAO {
  getTeam(id: number): Team | undefined {
    return TEAMS_MOCK_DATA[id];
  }
}