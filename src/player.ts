export type PlayerPosition = 'GKP' | 'DEF' | 'MID' | 'FWD';

export interface Player {
  id: number;
  points: number;
  hasPlayed: boolean;
  position: PlayerPosition;
}