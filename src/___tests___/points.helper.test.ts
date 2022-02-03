import { calculatePoints } from '../points.helper';

describe('points calculation', () => {
  describe('for a team where the first 11 players played', () => {
    const EXPECTED_POINTS = 11;
    let points: number;

    beforeEach(() => {
      points = calculatePoints([
        { id: 1, position: 'GKP', points: 1, hasPlayed: true },
        { id: 2, position: 'DEF', points: 1, hasPlayed: true },
        { id: 3, position: 'DEF', points: 1, hasPlayed: true },
        { id: 4, position: 'DEF', points: 1, hasPlayed: true },
        { id: 5, position: 'DEF', points: 1, hasPlayed: true },
        { id: 6, position: 'MID', points: 1, hasPlayed: true },
        { id: 7, position: 'MID', points: 1, hasPlayed: true },
        { id: 8, position: 'MID', points: 1, hasPlayed: true },
        { id: 9, position: 'FWD', points: 1, hasPlayed: true },
        { id: 10, position: 'FWD', points: 1, hasPlayed: true },
        { id: 11, position: 'FWD', points: 1, hasPlayed: true },
        { id: 12, position: 'GKP', points: 0, hasPlayed: true },
        { id: 13, position: 'DEF', points: 0, hasPlayed: true },
        { id: 14, position: 'MID', points: 0, hasPlayed: true },
        { id: 15, position: 'MID', points: 0, hasPlayed: true },
      ]);
    });

    it('should have the points as the sum of the first 11 players', () => {
      expect(points).toEqual(EXPECTED_POINTS);
    });
  });

  describe('for a team where the gkp did not play but the sub gkp did', () => {
    const EXPECTED_POINTS = 12;
    let points: number;

    beforeEach(() => {
      points = calculatePoints([
        { id: 1, position: 'GKP', points: 0, hasPlayed: false },
        { id: 2, position: 'DEF', points: 1, hasPlayed: true },
        { id: 3, position: 'DEF', points: 1, hasPlayed: true },
        { id: 4, position: 'DEF', points: 1, hasPlayed: true },
        { id: 5, position: 'DEF', points: 1, hasPlayed: true },
        { id: 6, position: 'MID', points: 1, hasPlayed: true },
        { id: 7, position: 'MID', points: 1, hasPlayed: true },
        { id: 8, position: 'MID', points: 1, hasPlayed: true },
        { id: 9, position: 'FWD', points: 1, hasPlayed: true },
        { id: 10, position: 'FWD', points: 1, hasPlayed: true },
        { id: 11, position: 'FWD', points: 1, hasPlayed: true },
        { id: 12, position: 'GKP', points: 2, hasPlayed: true },
        { id: 13, position: 'DEF', points: 0, hasPlayed: true },
        { id: 14, position: 'MID', points: 0, hasPlayed: true },
        { id: 15, position: 'MID', points: 0, hasPlayed: true },
      ]);
    });

    it('should have the points as the sum of the first 11 players', () => {
      expect(points).toEqual(EXPECTED_POINTS);
    });
  });
});