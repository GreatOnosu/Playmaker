import { Player } from './player';

export const FIRST_GOALKEEPER_POSITION_ON_PICKS = 0;
export const SUB_GOALKEEPER_POSITION_ON_PICKS = 11;

export type TeamPicks = [
  number, // First goalkeeper
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number, // Sub goalkeeper
  number, // First sub
  number, // Second sub
  number, // Third sub
];

export type TeamPicksPlayers = [
  Player, // First goalkeeper
  Player,
  Player,
  Player,
  Player,
  Player,
  Player,
  Player,
  Player,
  Player,
  Player,
  Player, // Sub goalkeeper
  Player, // First sub
  Player, // Second sub
  Player, // Third sub
];

export interface Team {
  id: number;
  picks: TeamPicks;
}