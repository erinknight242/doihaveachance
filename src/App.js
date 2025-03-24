/* eslint-disable no-fallthrough */
import React, { Component } from 'react';
import BracketGame from './BracketGame.js';
import Leaderboard from './Leaderboard.js';
import Loading from './Loading.js';
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        linkText: 'Show completed games',
        showAll: false,
        isLoading: false,
        currentRound: window.winners.currentRound,
        round64winner1: window.winners.round64winner1,
        round64winner2: window.winners.round64winner2,
        round64winner3: window.winners.round64winner3,
        round64winner4: window.winners.round64winner4,
        round64winner5: window.winners.round64winner5,
        round64winner6: window.winners.round64winner6,
        round64winner7: window.winners.round64winner7,
        round64winner8: window.winners.round64winner8,
        round64winner9: window.winners.round64winner9,
        round64winner10: window.winners.round64winner10,
        round64winner11: window.winners.round64winner11,
        round64winner12: window.winners.round64winner12,
        round64winner13: window.winners.round64winner13,
        round64winner14: window.winners.round64winner14,
        round64winner15: window.winners.round64winner15,
        round64winner16: window.winners.round64winner16,
        round64winner17: window.winners.round64winner17,
        round64winner18: window.winners.round64winner18,
        round64winner19: window.winners.round64winner19,
        round64winner20: window.winners.round64winner20,
        round64winner21: window.winners.round64winner21,
        round64winner22: window.winners.round64winner22,
        round64winner23: window.winners.round64winner23,
        round64winner24: window.winners.round64winner24,
        round64winner25: window.winners.round64winner25,
        round64winner26: window.winners.round64winner26,
        round64winner27: window.winners.round64winner27,
        round64winner28: window.winners.round64winner28,
        round64winner29: window.winners.round64winner29,
        round64winner30: window.winners.round64winner30,
        round64winner31: window.winners.round64winner31,
        round64winner32: window.winners.round64winner32,
        round32winner33: window.winners.round32winner33,
        round32winner34: window.winners.round32winner34,
        round32winner35: window.winners.round32winner35,
        round32winner36: window.winners.round32winner36,
        round32winner37: window.winners.round32winner37,
        round32winner38: window.winners.round32winner38,
        round32winner39: window.winners.round32winner39,
        round32winner40: window.winners.round32winner40,
        round32winner41: window.winners.round32winner41,
        round32winner42: window.winners.round32winner42,
        round32winner43: window.winners.round32winner43,
        round32winner44: window.winners.round32winner44,
        round32winner45: window.winners.round32winner45,
        round32winner46: window.winners.round32winner46,
        round32winner47: window.winners.round32winner47,
        round32winner48: window.winners.round32winner48,
        sweet16winner49: window.winners.sweet16winner49,
        sweet16winner50: window.winners.sweet16winner50,
        sweet16winner51: window.winners.sweet16winner51,
        sweet16winner52: window.winners.sweet16winner52,
        sweet16winner53: window.winners.sweet16winner53,
        sweet16winner54: window.winners.sweet16winner54,
        sweet16winner55: window.winners.sweet16winner55,
        sweet16winner56: window.winners.sweet16winner56,
        elite8winner57: window.winners.elite8winner57,
        elite8winner58: window.winners.elite8winner58,
        elite8winner59: window.winners.elite8winner59,
        elite8winner60: window.winners.elite8winner60,
        final4winner61: window.winners.final4winner61,
        final4winner62: window.winners.final4winner62,
        championshipwinner63: window.winners.championshipwinner63,
        teams: [
            { id: 0, name: 'Auburn', seed: '1'},
            { id: 1, name: 'Alabama St.', seed: '16'},
            { id: 2, name: 'Louisville', seed: '8'},
            { id: 3, name: 'Creighton', seed: '9'},
            { id: 4, name: 'Michigan', seed: '5'},
            { id: 5, name: 'UC San Diego', seed: '12'},
            { id: 6, name: 'Texas A&M', seed: '4'},
            { id: 7, name: 'Yale', seed: '13'},
            { id: 8, name: 'Ole Miss', seed: '6'},
            { id: 9, name: 'North Carolina', seed: '11'},
            { id: 10, name: 'Iowa St.', seed: '3'},
            { id: 11, name: 'Lipscomb', seed: '14'},
            { id: 12, name: 'Marquette', seed: '7'},
            { id: 13, name: 'New Mexico', seed: '10'},
            { id: 14, name: 'Michigan St.', seed: '2'},
            { id: 15, name: 'Bryant', seed: '15'},
            { id: 16, name: 'Florida', seed: '1'},
            { id: 17, name: 'Norfolk St.', seed: '16'},
            { id: 18, name: 'UConn', seed: '8'},
            { id: 19, name: 'Oklahoma', seed: '9'},
            { id: 20, name: 'Memphis', seed: '5'},
            { id: 21, name: 'Colorado St.', seed: '12'},
            { id: 22, name: 'Maryland', seed: '4'},
            { id: 23, name: 'Grand Canyon', seed: '13'},
            { id: 24, name: 'Missouri', seed: '6'},
            { id: 25, name: 'Drake', seed: '11'},
            { id: 26, name: 'Texas Tech', seed: '3'},
            { id: 27, name: 'UNC Wilmington', seed: '14'},
            { id: 28, name: 'Kansas', seed: '7'},
            { id: 29, name: 'Arkansas', seed: '10'},
            { id: 30, name: 'St. John\'s', seed: '2'},
            { id: 31, name: 'Omaha', seed: '15'},
            { id: 32, name: 'Duke', seed: '1'},
            { id: 33, name: 'Mount St. Mary\'s', seed: '16'},
            { id: 34, name: 'Mississippi St.', seed: '8'},
            { id: 35, name: 'Baylor', seed: '9'},
            { id: 36, name: 'Oregon', seed: '5'},
            { id: 37, name: 'Liberty', seed: '12'},
            { id: 38, name: 'Arizona', seed: '4'},
            { id: 39, name: 'Akron', seed: '13'},
            { id: 40, name: 'BYU', seed: '6'},
            { id: 41, name: 'VCU', seed: '11'},
            { id: 42, name: 'Wisconsin', seed: '3'},
            { id: 43, name: 'Montana', seed: '14'},
            { id: 44, name: 'St. Mary\'s', seed: '7'},
            { id: 45, name: 'Vanderbilt', seed: '10'},
            { id: 46, name: 'Alabama', seed: '2'},
            { id: 47, name: 'Robert Morris', seed: '15'},
            { id: 48, name: 'Houston', seed: '1'},
            { id: 49, name: 'SIU Edwardsville', seed: '16'},
            { id: 50, name: 'Gonzaga', seed: '8'},
            { id: 51, name: 'Georgia', seed: '9'},
            { id: 52, name: 'Clemson', seed: '5'},
            { id: 53, name: 'McNeese', seed: '12'},
            { id: 54, name: 'Purdue', seed: '4'},
            { id: 55, name: 'High Point', seed: '13'},
            { id: 56, name: 'Illinois', seed: '6'},
            { id: 57, name: 'Xavier', seed: '11'},
            { id: 58, name: 'Kentucky', seed: '3'},
            { id: 59, name: 'Troy', seed: '14'},
            { id: 60, name: 'UCLA', seed: '7'},
            { id: 61, name: 'Utah St.', seed: '10'},
            { id: 62, name: 'Tennessee', seed: '2'},
            { id: 63, name: 'Wofford', seed: '15'}
        ]
    };
  }

  pickWinner = (winnerId, game) => {
    // a valid team (not played or TBD) was clicked, set them as the winner
    if (this.state[game].played === false && winnerId > -1) {
      if (this.state[game].team === winnerId) {
        this.resetThisAndFutureGames(true, game, winnerId, this.state[game].team);
      } else {
        this.resetThisAndFutureGames(false, game, winnerId, this.state[game].team);
      }
    }
  }

  setLoading = (state = !this.state.isLoading) => {
    this.setState({ isLoading: state });
  }

  clearSelection = (game) => {
    this.resetThisAndFutureGames(true, game, this.state[game].team, this.state[game].team);
  }

  resetAll = () => {
    if (! this.state.round32winner33.played) { this.setState({ round32winner33: { team: null, played: false }}); }
    if (! this.state.round32winner34.played) { this.setState({ round32winner34: { team: null, played: false }}); }
    if (! this.state.round32winner35.played) { this.setState({ round32winner35: { team: null, played: false }}); }
    if (! this.state.round32winner36.played) { this.setState({ round32winner36: { team: null, played: false }}); }
    if (! this.state.round32winner37.played) { this.setState({ round32winner37: { team: null, played: false }}); }
    if (! this.state.round32winner38.played) { this.setState({ round32winner38: { team: null, played: false }}); }
    if (! this.state.round32winner39.played) { this.setState({ round32winner39: { team: null, played: false }}); }
    if (! this.state.round32winner40.played) { this.setState({ round32winner40: { team: null, played: false }}); }
    if (! this.state.round32winner41.played) { this.setState({ round32winner41: { team: null, played: false }}); }
    if (! this.state.round32winner42.played) { this.setState({ round32winner42: { team: null, played: false }}); }
    if (! this.state.round32winner43.played) { this.setState({ round32winner43: { team: null, played: false }}); }
    if (! this.state.round32winner44.played) { this.setState({ round32winner44: { team: null, played: false }}); }
    if (! this.state.round32winner45.played) { this.setState({ round32winner45: { team: null, played: false }}); }
    if (! this.state.round32winner46.played) { this.setState({ round32winner46: { team: null, played: false }}); }
    if (! this.state.round32winner47.played) { this.setState({ round32winner47: { team: null, played: false }}); }
    if (! this.state.round32winner48.played) { this.setState({ round32winner48: { team: null, played: false }}); }
    if (! this.state.sweet16winner49.played) { this.setState({ sweet16winner49: { team: null, played: false }}); }
    if (! this.state.sweet16winner50.played) { this.setState({ sweet16winner50: { team: null, played: false }}); }
    if (! this.state.sweet16winner51.played) { this.setState({ sweet16winner51: { team: null, played: false }}); }
    if (! this.state.sweet16winner52.played) { this.setState({ sweet16winner52: { team: null, played: false }}); }
    if (! this.state.sweet16winner53.played) { this.setState({ sweet16winner53: { team: null, played: false }}); }
    if (! this.state.sweet16winner54.played) { this.setState({ sweet16winner54: { team: null, played: false }}); }
    if (! this.state.sweet16winner55.played) { this.setState({ sweet16winner55: { team: null, played: false }}); }
    if (! this.state.sweet16winner56.played) { this.setState({ sweet16winner56: { team: null, played: false }}); }
    if (! this.state.elite8winner57.played) { this.setState({ elite8winner57: { team: null, played: false }}); }
    if (! this.state.elite8winner58.played) { this.setState({ elite8winner58: { team: null, played: false }}); }
    if (! this.state.elite8winner59.played) { this.setState({ elite8winner59: { team: null, played: false }}); }
    if (! this.state.elite8winner60.played) { this.setState({ elite8winner60: { team: null, played: false }}); }
    if (! this.state.final4winner61.played) { this.setState({ final4winner61: { team: null, played: false }}); }
    if (! this.state.final4winner62.played) { this.setState({ final4winner62: { team: null, played: false }}); }
    if (! this.state.championshipwinner63.played) { this.setState({ championshipwinner63: { team: null, played: false }}); }
  }

  resetThisAndFutureGames = (clearSelected, game, winnerId, previousWinner) => {
    const startingGameNumber = game.slice(-2); // TODO: fix this to work with single digits
    switch(startingGameNumber) {
      case '33': this.updateIfMatch('round32winner33', winnerId, game, clearSelected, previousWinner);
      case '34': this.updateIfMatch('round32winner34', winnerId, game, clearSelected, previousWinner);
      case '35': this.updateIfMatch('round32winner35', winnerId, game, clearSelected, previousWinner);
      case '36': this.updateIfMatch('round32winner36', winnerId, game, clearSelected, previousWinner);
      case '37': this.updateIfMatch('round32winner37', winnerId, game, clearSelected, previousWinner);
      case '38': this.updateIfMatch('round32winner38', winnerId, game, clearSelected, previousWinner);
      case '39': this.updateIfMatch('round32winner39', winnerId, game, clearSelected, previousWinner);
      case '40': this.updateIfMatch('round32winner40', winnerId, game, clearSelected, previousWinner);
      case '41': this.updateIfMatch('round32winner41', winnerId, game, clearSelected, previousWinner);
      case '42': this.updateIfMatch('round32winner42', winnerId, game, clearSelected, previousWinner);
      case '43': this.updateIfMatch('round32winner43', winnerId, game, clearSelected, previousWinner);
      case '44': this.updateIfMatch('round32winner44', winnerId, game, clearSelected, previousWinner);
      case '45': this.updateIfMatch('round32winner45', winnerId, game, clearSelected, previousWinner);
      case '46': this.updateIfMatch('round32winner46', winnerId, game, clearSelected, previousWinner);
      case '47': this.updateIfMatch('round32winner47', winnerId, game, clearSelected, previousWinner);
      case '48': this.updateIfMatch('round32winner48', winnerId, game, clearSelected, previousWinner);
      case '49': this.updateIfMatch('sweet16winner49', winnerId, game, clearSelected, previousWinner);
      case '50': this.updateIfMatch('sweet16winner50', winnerId, game, clearSelected, previousWinner);
      case '51': this.updateIfMatch('sweet16winner51', winnerId, game, clearSelected, previousWinner);
      case '52': this.updateIfMatch('sweet16winner52', winnerId, game, clearSelected, previousWinner);
      case '53': this.updateIfMatch('sweet16winner53', winnerId, game, clearSelected, previousWinner);
      case '54': this.updateIfMatch('sweet16winner54', winnerId, game, clearSelected, previousWinner);
      case '55': this.updateIfMatch('sweet16winner55', winnerId, game, clearSelected, previousWinner);
      case '56': this.updateIfMatch('sweet16winner56', winnerId, game, clearSelected, previousWinner);
      case '57': this.updateIfMatch('elite8winner57', winnerId, game, clearSelected, previousWinner);
      case '58': this.updateIfMatch('elite8winner58', winnerId, game, clearSelected, previousWinner);
      case '59': this.updateIfMatch('elite8winner59', winnerId, game, clearSelected, previousWinner);
      case '60': this.updateIfMatch('elite8winner60', winnerId, game, clearSelected, previousWinner);
      case '61': this.updateIfMatch('final4winner61', winnerId, game, clearSelected, previousWinner);
      case '62': this.updateIfMatch('final4winner62', winnerId, game, clearSelected, previousWinner);
      case '63': this.updateIfMatch('championshipwinner63', winnerId, game, clearSelected, previousWinner);
      default: 
    }
  }
  
  updateIfMatch = (gameName, id, currentGame, clearSelected, previousWinner) => {
    const currentValue = this.state[gameName].team;
    if (currentGame === gameName && !clearSelected) {
      // clicked to select the opponent of the selected team for the current match
      this.setState({ [gameName]: { team: id, played: false } });
    }
    if ((currentValue === id && clearSelected) || // clicked to de-select, and it found a match for the team clicked
        (currentValue === previousWinner && currentGame !== gameName && !clearSelected)) { // or clicked the opponent on an earlier match
      this.setState({ [gameName]: { team: null, played: false } });
    }
  }

  toggleGames = () => {
    if (this.state.showAll) {
      this.setState({ showAll: false, linkText: 'Show completed games' });
    } else {
      this.setState({ showAll: true, linkText: 'Hide completed games' });
    }
  }

  render() {
    const { currentRound,showAll,linkText,teams,round64winner1,round64winner2,round64winner3,round64winner4,round64winner5,round64winner6,round64winner7,round64winner8,round64winner9,round64winner10,round64winner11,round64winner12,round64winner13,round64winner14,round64winner15,round64winner16,round64winner17,round64winner18,round64winner19,round64winner20,round64winner21,round64winner22,round64winner23,round64winner24,round64winner25,round64winner26,round64winner27,round64winner28,round64winner29,round64winner30,round64winner31,round64winner32,round32winner33,round32winner34,round32winner35,round32winner36,round32winner37,round32winner38,round32winner39,round32winner40,round32winner41,round32winner42,round32winner43,round32winner44,round32winner45,round32winner46,round32winner47,round32winner48,sweet16winner49,sweet16winner50,sweet16winner51,sweet16winner52,sweet16winner53,sweet16winner54,sweet16winner55,sweet16winner56,elite8winner57,elite8winner58,elite8winner59,elite8winner60,final4winner61,final4winner62,championshipwinner63} = this.state;

    function className(game) {
      return showAll || game.played === false ? '' : 'hidden';
    }

    return (
      <div className="app container">
        <div className="info">
          Greyed out selections were not picked by anyone; percentages indicate what percent of brackets entered in this pool picked that team for that game. Games that have already been completed are collapsed at the top and can be expanded to view but can't be changed; all future games can be clicked to see what would happen to the standings if those teams won. Clicking a prediction will also populate the subsequent round below as if that team won. Click a prediction again to clear it, or to completely reset the scores to the current values, just refresh the page.
        </div>
        <div className="flex-container">
        <div className="games">
          <div className="link" onClick={this.toggleGames}>{linkText}</div>
          <h3 className={currentRound > 1 && !showAll ? 'hidden' : ''}>Round of 64</h3>
          <BracketGame gameTime = "" className={className(round64winner1)} team1={teams[0]} team2={teams[1]} pickWinner={this.pickWinner} winner={round64winner1} name='round64winner1'/>
          <BracketGame gameTime = "" className={className(round64winner2)} team1={teams[2]} team2={teams[3]} pickWinner={this.pickWinner} winner={round64winner2} name='round64winner2'/>
          <BracketGame gameTime = "" className={className(round64winner3)} team1={teams[4]} team2={teams[5]} pickWinner={this.pickWinner} winner={round64winner3} name='round64winner3'/>
          <BracketGame gameTime = "" className={className(round64winner4)} team1={teams[6]} team2={teams[7]} pickWinner={this.pickWinner} winner={round64winner4} name='round64winner4'/>
          <BracketGame gameTime = "" className={className(round64winner5)} team1={teams[8]} team2={teams[9]} pickWinner={this.pickWinner} winner={round64winner5} name='round64winner5'/>
          <BracketGame gameTime = "" className={className(round64winner6)} team1={teams[10]} team2={teams[11]} pickWinner={this.pickWinner} winner={round64winner6} name='round64winner6'/>
          <BracketGame gameTime = "" className={className(round64winner7)} team1={teams[12]} team2={teams[13]} pickWinner={this.pickWinner} winner={round64winner7} name='round64winner7'/>
          <BracketGame gameTime = "" className={className(round64winner8)} team1={teams[14]} team2={teams[15]} pickWinner={this.pickWinner} winner={round64winner8} name='round64winner8'/>
          <BracketGame gameTime = "" className={className(round64winner9)} team1={teams[16]} team2={teams[17]} pickWinner={this.pickWinner} winner={round64winner9} name='round64winner9'/>
          <BracketGame gameTime = "" className={className(round64winner10)} team1={teams[18]} team2={teams[19]} pickWinner={this.pickWinner} winner={round64winner10} name='round64winner10'/>
          <BracketGame gameTime = "" className={className(round64winner11)} team1={teams[20]} team2={teams[21]} pickWinner={this.pickWinner} winner={round64winner11} name='round64winner11'/>
          <BracketGame gameTime = "" className={className(round64winner12)} team1={teams[22]} team2={teams[23]} pickWinner={this.pickWinner} winner={round64winner12} name='round64winner12'/>
          <BracketGame gameTime = "" className={className(round64winner13)} team1={teams[24]} team2={teams[25]} pickWinner={this.pickWinner} winner={round64winner13} name='round64winner13'/>
          <BracketGame gameTime = "" className={className(round64winner14)} team1={teams[26]} team2={teams[27]} pickWinner={this.pickWinner} winner={round64winner14} name='round64winner14'/>
          <BracketGame gameTime = "" className={className(round64winner15)} team1={teams[28]} team2={teams[29]} pickWinner={this.pickWinner} winner={round64winner15} name='round64winner15'/>
          <BracketGame gameTime = "" className={className(round64winner16)} team1={teams[30]} team2={teams[31]} pickWinner={this.pickWinner} winner={round64winner16} name='round64winner16'/>
          <BracketGame gameTime = "" className={className(round64winner17)} team1={teams[32]} team2={teams[33]} pickWinner={this.pickWinner} winner={round64winner17} name='round64winner17'/>
          <BracketGame gameTime = "" className={className(round64winner18)} team1={teams[34]} team2={teams[35]} pickWinner={this.pickWinner} winner={round64winner18} name='round64winner18'/>
          <BracketGame gameTime = "" className={className(round64winner19)} team1={teams[36]} team2={teams[37]} pickWinner={this.pickWinner} winner={round64winner19} name='round64winner19'/>
          <BracketGame gameTime = "" className={className(round64winner20)} team1={teams[38]} team2={teams[39]} pickWinner={this.pickWinner} winner={round64winner20} name='round64winner20'/>
          <BracketGame gameTime = "" className={className(round64winner21)} team1={teams[40]} team2={teams[41]} pickWinner={this.pickWinner} winner={round64winner21} name='round64winner21'/>
          <BracketGame gameTime = "" className={className(round64winner22)} team1={teams[42]} team2={teams[43]} pickWinner={this.pickWinner} winner={round64winner22} name='round64winner22'/>
          <BracketGame gameTime = "" className={className(round64winner23)} team1={teams[44]} team2={teams[45]} pickWinner={this.pickWinner} winner={round64winner23} name='round64winner23'/>
          <BracketGame gameTime = "" className={className(round64winner24)} team1={teams[46]} team2={teams[47]} pickWinner={this.pickWinner} winner={round64winner24} name='round64winner24'/>
          <BracketGame gameTime = "" className={className(round64winner25)} team1={teams[48]} team2={teams[49]} pickWinner={this.pickWinner} winner={round64winner25} name='round64winner25'/>
          <BracketGame gameTime = "" className={className(round64winner26)} team1={teams[50]} team2={teams[51]} pickWinner={this.pickWinner} winner={round64winner26} name='round64winner26'/>
          <BracketGame gameTime = "" className={className(round64winner27)} team1={teams[52]} team2={teams[53]} pickWinner={this.pickWinner} winner={round64winner27} name='round64winner27'/>
          <BracketGame gameTime = "" className={className(round64winner28)} team1={teams[54]} team2={teams[55]} pickWinner={this.pickWinner} winner={round64winner28} name='round64winner28'/>
          <BracketGame gameTime = "" className={className(round64winner29)} team1={teams[56]} team2={teams[57]} pickWinner={this.pickWinner} winner={round64winner29} name='round64winner29'/>
          <BracketGame gameTime = "" className={className(round64winner30)} team1={teams[58]} team2={teams[59]} pickWinner={this.pickWinner} winner={round64winner30} name='round64winner30'/>
          <BracketGame gameTime = "" className={className(round64winner31)} team1={teams[60]} team2={teams[61]} pickWinner={this.pickWinner} winner={round64winner31} name='round64winner31'/>
          <BracketGame gameTime = "" className={className(round64winner32)} team1={teams[62]} team2={teams[63]} pickWinner={this.pickWinner} winner={round64winner32} name='round64winner32'/>
          
          <h3 className={currentRound > 2 && !showAll ? 'hidden' : ''}>Round of 32</h3>
          <BracketGame gameTime = "3/22/25 23:10 UTC" className={className(round32winner33)} team1={teams[round64winner1.team]} team2={teams[round64winner2.team]} pickWinner = {this.pickWinner} winner={round32winner33} name='round32winner33'/>
          <BracketGame gameTime = "3/22/25 21:30 UTC" className={className(round32winner34)} team1={teams[round64winner3.team]} team2={teams[round64winner4.team]} pickWinner = {this.pickWinner} winner={round32winner34} name='round32winner34'/>
          <BracketGame gameTime = "3/23/25 23:45 UTC" className={className(round32winner35)} team1={teams[round64winner5.team]} team2={teams[round64winner6.team]} pickWinner = {this.pickWinner} winner={round32winner35} name='round32winner35'/>
          <BracketGame gameTime = "3/24/25 00:40 UTC" className={className(round32winner36)} team1={teams[round64winner7.team]} team2={teams[round64winner8.team]} pickWinner = {this.pickWinner} winner={round32winner36} name='round32winner36'/>
          <BracketGame gameTime = "3/23/25 16:10 UTC" className={className(round32winner37)} team1={teams[round64winner9.team]} team2={teams[round64winner10.team]} pickWinner = {this.pickWinner} winner={round32winner37} name='round32winner37'/>
          <BracketGame gameTime = "3/23/25 23:10 UTC" className={className(round32winner38)} team1={teams[round64winner11.team]} team2={teams[round64winner12.team]} pickWinner = {this.pickWinner} winner={round32winner38} name='round32winner38'/>
          <BracketGame gameTime = "3/22/25 22:10 UTC" className={className(round32winner39)} team1={teams[round64winner13.team]} team2={teams[round64winner14.team]} pickWinner = {this.pickWinner} winner={round32winner39} name='round32winner39'/>
          <BracketGame gameTime = "3/22/25 18:40 UTC" className={className(round32winner40)} team1={teams[round64winner15.team]} team2={teams[round64winner16.team]} pickWinner = {this.pickWinner} winner={round32winner40} name='round32winner40'/>
          <BracketGame gameTime = "3/23/25 19:04 UTC" className={className(round32winner41)} team1={teams[round64winner17.team]} team2={teams[round64winner18.team]} pickWinner = {this.pickWinner} winner={round32winner41} name='round32winner41'/>
          <BracketGame gameTime = "3/24/25 01:40 UTC" className={className(round32winner42)} team1={teams[round64winner19.team]} team2={teams[round64winner20.team]} pickWinner = {this.pickWinner} winner={round32winner42} name='round32winner42'/>
          <BracketGame gameTime = "3/23/25 00:27 UTC" className={className(round32winner43)} team1={teams[round64winner21.team]} team2={teams[round64winner22.team]} pickWinner = {this.pickWinner} winner={round32winner43} name='round32winner43'/>
          <BracketGame gameTime = "3/23/25 22:10 UTC" className={className(round32winner44)} team1={teams[round64winner23.team]} team2={teams[round64winner24.team]} pickWinner = {this.pickWinner} winner={round32winner44} name='round32winner44'/>
          <BracketGame gameTime = "3/23/25 00:44 UTC" className={className(round32winner45)} team1={teams[round64winner25.team]} team2={teams[round64winner26.team]} pickWinner = {this.pickWinner} winner={round32winner45} name='round32winner45'/>
          <BracketGame gameTime = "3/22/25 16:10 UTC" className={className(round32winner46)} team1={teams[round64winner27.team]} team2={teams[round64winner28.team]} pickWinner = {this.pickWinner} winner={round32winner46} name='round32winner46'/>
          <BracketGame gameTime = "3/23/25 21:15 UTC" className={className(round32winner47)} team1={teams[round64winner29.team]} team2={teams[round64winner30.team]} pickWinner = {this.pickWinner} winner={round32winner47} name='round32winner47'/>
          <BracketGame gameTime = "3/23/25 01:53 UTC" className={className(round32winner48)} team1={teams[round64winner31.team]} team2={teams[round64winner32.team]} pickWinner = {this.pickWinner} winner={round32winner48} name='round32winner48'/>
        
          <h3 className={currentRound > 3 && !showAll ? 'hidden' : ''}>Sweet 16</h3>
          <BracketGame gameTime = "3/27/25 23:09 UTC" className={className(sweet16winner54)} team1={teams[round32winner43.team]} team2={teams[round32winner44.team]} pickWinner = {this.pickWinner} winner={sweet16winner54} name='sweet16winner54'/>
          <BracketGame gameTime = "3/27/25 23:39 UTC" className={className(sweet16winner51)} team1={teams[round32winner37.team]} team2={teams[round32winner38.team]} pickWinner = {this.pickWinner} winner={sweet16winner51} name='sweet16winner51'/>
          <BracketGame gameTime = "3/28/25 01:39 UTC" className={className(sweet16winner53)} team1={teams[round32winner41.team]} team2={teams[round32winner42.team]} pickWinner = {this.pickWinner} winner={sweet16winner53} name='sweet16winner53'/>
          <BracketGame gameTime = "3/28/25 02:09 UTC" className={className(sweet16winner52)} team1={teams[round32winner39.team]} team2={teams[round32winner40.team]} pickWinner = {this.pickWinner} winner={sweet16winner52} name='sweet16winner52'/>
          <BracketGame gameTime = "3/28/25 23:09 UTC" className={className(sweet16winner50)} team1={teams[round32winner35.team]} team2={teams[round32winner36.team]} pickWinner = {this.pickWinner} winner={sweet16winner50} name='sweet16winner50'/>
          <BracketGame gameTime = "3/28/25 23:39 UTC" className={className(sweet16winner56)} team1={teams[round32winner47.team]} team2={teams[round32winner48.team]} pickWinner = {this.pickWinner} winner={sweet16winner56} name='sweet16winner56'/>
          <BracketGame gameTime = "3/29/25 01:39 UTC" className={className(sweet16winner49)} team1={teams[round32winner33.team]} team2={teams[round32winner34.team]} pickWinner = {this.pickWinner} winner={sweet16winner49} name='sweet16winner49'/>
          <BracketGame gameTime = "3/29/25 02:09 UTC" className={className(sweet16winner55)} team1={teams[round32winner45.team]} team2={teams[round32winner46.team]} pickWinner = {this.pickWinner} winner={sweet16winner55} name='sweet16winner55'/>
          
          <h3 className={currentRound > 4 && !showAll ? 'hidden' : ''}>Elite 8</h3>
          <BracketGame gameTime = "TBD" className={className(elite8winner57)} team1={teams[sweet16winner49.team]} team2={teams[sweet16winner50.team]} pickWinner = {this.pickWinner} winner={elite8winner57} name='elite8winner57'/>
          <BracketGame gameTime = "TBD" className={className(elite8winner58)} team1={teams[sweet16winner51.team]} team2={teams[sweet16winner52.team]} pickWinner = {this.pickWinner} winner={elite8winner58} name='elite8winner58'/>
          <BracketGame gameTime = "TBD" className={className(elite8winner60)} team1={teams[sweet16winner55.team]} team2={teams[sweet16winner56.team]} pickWinner = {this.pickWinner} winner={elite8winner60} name='elite8winner60'/>
          <BracketGame gameTime = "TBD" className={className(elite8winner59)} team1={teams[sweet16winner53.team]} team2={teams[sweet16winner54.team]} pickWinner = {this.pickWinner} winner={elite8winner59} name='elite8winner59'/>
          
          <h3 className={currentRound > 5 && !showAll ? 'hidden' : ''}>Final 4</h3>
          <BracketGame className={className(final4winner61)} team1={teams[elite8winner57.team]} team2={teams[elite8winner58.team]} pickWinner = {this.pickWinner} winner={final4winner61} name='final4winner61'/>
          <BracketGame className={className(final4winner62)} team1={teams[elite8winner59.team]} team2={teams[elite8winner60.team]} pickWinner = {this.pickWinner} winner={final4winner62} name='final4winner62'/>
        
          <h3>Championship</h3>
          <BracketGame className={className(championshipwinner63)} team1={teams[final4winner61.team]} team2={teams[final4winner62.team]} pickWinner = {this.pickWinner} winner={championshipwinner63} name='championshipwinner63'/>
        </div>
        <Leaderboard data={this.state} pickWinner={this.pickWinner} clearSelection={this.clearSelection} resetAll={this.resetAll} setLoading={this.setLoading} />
        </div>
        <Loading className={this.state.isLoading ? "loading" : ''}/>
      </div>
    );
  }
}
