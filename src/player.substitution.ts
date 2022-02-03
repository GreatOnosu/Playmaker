import { Player } from "./player";
import { TeamPicksPlayers, SUB_GOALKEEPER_POSITION_ON_PICKS } from "./team";


export class PlayerSubstitution {
    private firstEleven: Array<Player> = [];
    private bench: Array<Player> = [];
    private countDef = 0;
    private countMid = 0;
    private countFwd = 0;
    
    
    doSubstitution(teamPicksPlayers: TeamPicksPlayers): TeamPicksPlayers {
        this.firstEleven = teamPicksPlayers.slice(0, SUB_GOALKEEPER_POSITION_ON_PICKS);
        this.bench = teamPicksPlayers.slice(SUB_GOALKEEPER_POSITION_ON_PICKS);
        this.countDef = this.firstEleven.filter((obj: Player) => obj.position === "DEF").length;
        this.countMid = this.firstEleven.filter((obj: Player) => obj.position === "MID").length;
        this.countFwd = this.firstEleven.filter((obj: Player) => obj.position === "FWD").length;

        this.firstEleven.forEach((player: Player, index: number) => {
        if (player.position  === 'GKP' &&  !player.hasPlayed){
            this.firstEleven[index] = this.gkpCheck(player);
        }
        if (player.position  === 'DEF' &&  !player.hasPlayed){
            this.firstEleven[index] = this.defCheck(player);
        }
        if (player.position  === 'MID' &&  !player.hasPlayed){
            this.firstEleven[index] = this.midCheck(player);
        }
        if (player.position  === 'FWD' &&  !player.hasPlayed){
            this.firstEleven[index] = this.fwdCheck(player);
            
        }
    });

        // console.log(this.firstEleven);
        // console.log(this.bench);
        return Object.assign(this.firstEleven.concat(this.bench));
    }
        
    
    gkpCheck(playerOut: Player): Player {
        let playerIn = playerOut;
        for (const x in this.bench){
            if (this.bench[x].position  === 'GKP' && this.bench[x].hasPlayed){
                playerIn = this.bench[x];
                this.bench[x] = playerOut;
                break;
            }
        }
        return playerIn;
    }


    defCheck(playerOut: Player): Player {
        let playerIn = playerOut;
        for (const x in this.bench){
            if (this.bench[x].position  === 'DEF' && this.bench[x].hasPlayed){
                playerIn = this.bench[x];
                this.bench[x] = playerOut;
                break;
            }
            if (this.bench[x].position  === 'MID' && this.bench[x].hasPlayed){
                if (this.countDef > 3 && this.countMid < 5){
                    playerIn = this.bench[x];
                    this.bench[x] = playerOut;
                    break;
                }
            }
            if (this.bench[x].position  === 'FWD' && this.bench[x].hasPlayed){
                if (this.countDef > 3 && this.countFwd < 3){
                    playerIn = this.bench[x];
                    this.bench[x] = playerOut;
                    break;
                }
            }
        }
        // })
        return playerIn;
    }

    midCheck(playerOut: Player): Player {
        let playerIn = playerOut;
        for (const x in this.bench){
            if (this.bench[x].position  === 'MID' && this.bench[x].hasPlayed){
                playerIn = this.bench[x];
                this.bench[x] = playerOut;
                break;
            }
            if (this.bench[x].position  === 'DEF' && this.bench[x].hasPlayed){
                if (this.countMid > 2 && this.countDef < 5){
                    playerIn = this.bench[x]; 
                    this.bench[x] = playerOut; 
                    break;
                }
            }
            if (this.bench[x].position  === 'FWD' && this.bench[x].hasPlayed){
                if (this.countMid > 2 && this.countFwd < 3){
                    playerIn = this.bench[x];
                    this.bench[x] = playerOut;
                    break;
                }
            }
        }
        // })
        return playerIn;
    }

    fwdCheck(playerOut: Player): Player {
        let playerIn = playerOut;
        for (const x in this.bench){
            if (this.bench[x].position  === 'FWD' && this.bench[x].hasPlayed){
                playerIn = this.bench[x];
                this.bench[x] = playerOut;
                break;
            }
            if (this.bench[x].position  === 'DEF' && this.bench[x].hasPlayed){
                if (this.countFwd > 1 && this.countDef < 5){
                    playerIn = this.bench[x];
                    this.bench[x] = playerOut;
                    break;
                }
            }
            if (this.bench[x].position  === 'MID' && this.bench[x].hasPlayed){
                if (this.countFwd > 1 && this.countMid < 5){
                    playerIn = this.bench[x];
                    this.bench[x] = playerOut;
                    break;
                }
            }
        }
        return playerIn;
    }
    
}