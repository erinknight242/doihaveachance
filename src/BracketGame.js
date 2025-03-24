import React from 'react';
import { teamWasPicked, percentFor } from './bracketdata.js';

function BracketGame({team1, team2, pickWinner, winner, name, className, gameTime = "TBD"}) {
  const teamColor = (clickedTeam) => winner.team === clickedTeam ? (winner.played ? 'green' : 'orange') : 'grey';
  const bgColor = (team) => teamWasPicked(team, name) || team === -1 ? '' : ' no-picks';
  const percentFor1 = percentFor(team1, name);
  const percentFor2 = percentFor(team2, name);
  
  let id1 = -1;
  let id2 = -1;
  let seed1 = ' ';
  let seed2 = ' ';
  let name1 = 'TBD';
  let name2 = 'TBD';
  let percent1 = ' ';
  let percent2 = ' ';
  if (team1 !== null && team1 !== undefined) {
    id1 = team1.id;
    seed1 = team1.seed;
    name1 = team1.name;
    percent1 = ` (${percentFor1}%)`;
  }
  if (team2 !== null && team2 !== undefined) {
    id2 = team2.id;
    seed2 = team2.seed;
    name2 = team2.name;
    percent2 = ` (${percentFor2}%)`;
  }

  const getDateFormat = (dateString) => {
    if (dateString === "TBD") {
      return "TBD";
    } else if (dateString === "") {
      return "";
    }
    const date = new Date(dateString);
    return `${date.toLocaleDateString()}, ${date.toLocaleTimeString("en-US", { timeZoneName: "short", hour:"numeric", minute:"2-digit" })}`;
  }

  return(
    <div className={`game-container${className !== '' ? ' ' + className : '' }`}>
      <div className="game-time">{getDateFormat(gameTime)}</div>
      <div className={`team ${teamColor(id1)}${winner.played ? ' completed' : ''}${bgColor(id1)}`} onClick={pickWinner.bind(this, id1, name)}>
        <span className="seed">{seed1}</span>
        <span className="team-name">{name1}</span><span className="percent">{percent1}</span>
      </div>
      <div className={`team ${teamColor(id2)}${winner.played ? ' completed' : ''}${bgColor(id2)}`} onClick={pickWinner.bind(this, id2, name)}>
        <span className="seed">{seed2}</span>
        <span className="team-name">{name2}</span><span className="percent">{percent2}</span>
      </div>
    </div>
  )
}

export default BracketGame;