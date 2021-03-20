import React from 'react';

function BracketGame({team1, team2, pickWinner, winner, name, className}) {
  const teamColor = (clickedTeam) => winner.team === clickedTeam ? (winner.played ? 'green' : 'orange') : 'grey';
  let id1 = -1;
  let id2 = -1;
  let seed1 = ' ';
  let seed2 = ' ';
  let name1 = 'TBD';
  let name2 = 'TBD';
  if (team1 !== null && team1 !== undefined) {
    id1 = team1.id;
    seed1 = team1.seed;
    name1 = team1.name;
  }
  if (team2 !== null && team2 !== undefined) {
    id2 = team2.id;
    seed2 = team2.seed;
    name2 = team2.name;
  }

  return(
    <div className={`game-container ${className}`}>
      <div className={`team ${teamColor(id1)} ${winner.played ? 'completed' : ''}`} onClick={pickWinner.bind(this, id1, name)}>
        <span className="seed">{seed1}</span>
        <span className="team-name">{name1}</span>
      </div>
      <div className={`team ${teamColor(id2)} ${winner.played ? 'completed' : ''}`} onClick={pickWinner.bind(this, id2, name)}>
        <span className="seed">{seed2}</span>
        <span className="team-name">{name2}</span>
      </div>
    </div>
  )
}

export default BracketGame;