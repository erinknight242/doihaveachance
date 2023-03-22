import React, { Component } from 'react';
import { brackets, calculateCbsScore } from './bracketdata.js';

export default class Leaderboard extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
          possibilities: ''
      };
    }
    render() {
        const orderedStandings = [];
        brackets.forEach((bracket) => {
            const name = bracket.name;
            const score = calculateCbsScore(this.props.data, bracket);
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

        let tempData = {
            sweet16winner49: null,
            sweet16winner50: null,
            sweet16winner51: null,
            sweet16winner52: null,
            sweet16winner53: null,
            sweet16winner54: null,
            sweet16winner55: null,
            sweet16winner56: null,
            elite8winner57: null,
            elite8winner58: null,
            elite8winner59: null,
            elite8winner60: null,
            final4winner61: null,
            final4winner62: null,
            championshipwinner63: null
        };

        const calcPossibilities = (bracketName = null, tempData) => {
            const { data } = this.props;
            this.props.resetAll();
            this.props.setLoading(true);
            let winnerNotFound = false;

            // TODO: add IDs to brackets
            setTimeout(() => {
            for (let i = 0; i < brackets.length; i++) {
                if (brackets[i].name === bracketName) {
                    const remainingGames = [ 'sweet16winner49', 'sweet16winner50', 'sweet16winner51', 'sweet16winner52', 'sweet16winner53', 'sweet16winner54', 'sweet16winner55', 'sweet16winner56', 'elite8winner57', 'elite8winner58', 'elite8winner59', 'elite8winner60', 'final4winner61', 'final4winner62', 'championshipwinner63' ];
                    for (let j = 0; j < remainingGames.length; j++) {
                        if (data[remainingGames[j]].played === false) {
                            if (isValidWinner(brackets[i][remainingGames[j]], remainingGames[j])) {
                                this.props.pickWinner(brackets[i][remainingGames[j]], remainingGames[j]);
                                tempData[remainingGames[j]] = brackets[i][remainingGames[j]];
                            } else {
                                tempData[remainingGames[j]] = null;
                                winnerNotFound = true;
                            }
                        }
                    }
                }
            }
            this.props.setLoading(false);
            if (winnerNotFound) {
                this.setState({ possibilities: "Warning: Some games don't have a winner picked because the selected bracket didn't have either possible team selected. Click those manually to see what the final standings could be." });
            } else {
                this.setState({ possibilities: '' });
            }
         }, 500); // race condition going on with setting state so taking the easy way out
        }

        const isValidWinner = (winnerId, gameName) => {
            switch(gameName) {
                case 'sweet16winner49': return winnerId === this.props.data.round32winner33.team || winnerId === this.props.data.round32winner34.team;
                case 'sweet16winner50': return winnerId === this.props.data.round32winner35.team || winnerId === this.props.data.round32winner36.team;
                case 'sweet16winner51': return winnerId === this.props.data.round32winner37.team || winnerId === this.props.data.round32winner38.team;
                case 'sweet16winner52': return winnerId === this.props.data.round32winner39.team || winnerId === this.props.data.round32winner40.team;
                case 'sweet16winner53': return winnerId === this.props.data.round32winner41.team || winnerId === this.props.data.ound32winner42.team;
                case 'sweet16winner54': return winnerId === this.props.data.round32winner43.team || winnerId === this.props.data.round32winner44.team;
                case 'sweet16winner55': return winnerId === this.props.data.round32winner45.team || winnerId === this.props.data.round32winner46.team;
                case 'sweet16winner56': return winnerId === this.props.data.round32winner47.team || winnerId === this.props.data.round32winner48.team;
                case 'elite8winner57': return winnerId === this.props.data.sweet16winner49.team || winnerId === this.props.data.sweet16winner50.team;
                case 'elite8winner58': return winnerId === this.props.data.sweet16winner51.team || winnerId === this.props.data.sweet16winner52.team;
                case 'elite8winner59': return winnerId === this.props.data.sweet16winner53.team || winnerId === this.props.data.sweet16winner54.team;
                case 'elite8winner60': return winnerId === this.props.data.sweet16winner55.team || winnerId === this.props.data.sweet16winner56.team;
                case 'final4winner61': return winnerId === tempData.elite8winner57 || winnerId === tempData.elite8winner58;
                case 'final4winner62': return winnerId === tempData.elite8winner59 || winnerId === tempData.elite8winner60;
                case 'championshipwinner63': return winnerId === tempData.final4winner61 || winnerId === tempData.final4winner62;
                default: return null;
            }
        }


        const standings = orderedStandings.map((bracket, i) => {
            return (<div key={i} className="standings-row"><span className="link" onClick={calcPossibilities.bind(this, bracket.name, tempData)}>{bracket.name}:</span> <span>{bracket.score}</span></div>);
        });

        const allGamesPicked = () => {
            const { sweet16winner49, sweet16winner50, sweet16winner51, sweet16winner52, sweet16winner53, sweet16winner54, sweet16winner55, sweet16winner56, elite8winner57, elite8winner58, elite8winner59, elite8winner60, final4winner61, final4winner62, championshipwinner63 } = this.props.data;
            return sweet16winner49.team !== null && sweet16winner50.team !== null && sweet16winner51.team !== null && sweet16winner52.team !== null && sweet16winner53.team !== null && sweet16winner54.team !== null && sweet16winner55.team !== null && sweet16winner56.team !== null && elite8winner57.team !== null && elite8winner58.team !== null  && elite8winner59.team !== null && elite8winner60.team !== null && final4winner61.team !== null && final4winner62.team !== null && championshipwinner63.team !== null;
        }

        return(
            <div className="leaderboard">
            <div>Do you still have a chance? Click a name to auto-select their remaining picks.</div>
            <div className={`possibilities ${this.state.possibilities === ''  || allGamesPicked() ? 'hidden' : ''}`}>{this.state.possibilities}</div>
            <h3>Standings</h3>
            {standings}
            </div>
        )
    }   
}