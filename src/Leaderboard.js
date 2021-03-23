import React from 'react';
import { brackets, calculateEspnScore } from './bracketdata.js';

function Leaderboard({data}) {
  const orderedStandings = [];
  brackets.forEach((bracket) => {
    const name = bracket.name;
    const score = calculateEspnScore(data, bracket);
    let added = false;
    if (orderedStandings.length === 0) {
        orderedStandings.push({ name, score });
        added = true;
    } else {
        for (let i = 0; i < orderedStandings.length; i++) {
            if (score >= orderedStandings[i].score) {
                orderedStandings.splice(i, 0, { name, score });
                added = true;
                break;
            }
        }
    }
    if (!added) {
        orderedStandings.push({ name, score });
    }
  });
  const standings = orderedStandings.map((bracket, i) => {
    return (<div key={i} className="standings-row"><span>{bracket.name}:</span> <span>{bracket.score}</span></div>);
  });

  return(
    <div className="leaderboard">
      <h3>Standings</h3>
      {standings}
    </div>
  )
}

export default Leaderboard;