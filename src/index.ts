import express, { Request, Response } from 'express';
import cors from 'cors';

import { PlayerDAO } from './player.dao';
import { NotFoundError } from './shared/not-found.error';
import { TeamDAO } from './team.dao';
import { TeamService } from './team.service';

const app = express();
const port = 5000;

function buildDependencies(): { teamService: TeamService } {
  const playerDAO = new PlayerDAO();
  const teamDAO = new TeamDAO();
  const teamService = new TeamService(teamDAO, playerDAO);

  return {
    teamService,
  };
}

const { teamService } = buildDependencies();

app.use(cors());

app.get('/team-points/:teamId', (req: Request, res: Response) => {
  const teamId = Number(req.params.teamId);
  const points = teamService.getPoints(teamId);

  res.send({
    points,
  });
});

app.get('/team-picks/:teamId', (req: Request, res: Response) => {
  const teamId = Number(req.params.teamId);
  const picks = teamService.getPicks(teamId);

  res.send({
    picks,
  });
});

app.use(
  (
    error: Error | NotFoundError,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: () => void,
  ) => {
    console.error(error);

    if (error instanceof NotFoundError) {
      res.status(404).end();
      return;
    }

    res.status(500).end();
  },
);

app.listen(port, () => {
  console.info(`Example app listening at http://localhost:${port}`);
});