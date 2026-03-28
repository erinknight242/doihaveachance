/* Each year, enter the teams below in the order listed on the bracket, as well as in App.js.
*  Then update "window.winners" to include the winners of any completed games,
*  and set currentRound equal to the active round.
*
*  This file needs to exist in the public folder for the website to load, but will
*  be overwritten by any builds.
*/
//East Bracket
const Duke = 0;
const Siena = 1;
const OhioState = 2;
const TCU = 3;
const SaintJohns = 4;
const NorthernIowa = 5;
const Kansas = 6;
const CALBaptist = 7;
const Louisville = 8;
const SouthFlorida = 9;
const MichiganState = 10;
const NDSU = 11;
const UCLA = 12;
const UCF = 13;
const UConn = 14;
const Furman = 15;
//South Bracket
const Florida = 16;
const PVAMU = 17;
const Clemson = 18;
const Iowa = 19;
const Vanderbilt = 20;
const McNeese = 21;
const Nebraska = 22;
const Troy = 23;
const NorthCarolina = 24;
const VCU = 25;
const Illinois = 26;
const Penn = 27;
const SaintMarys = 28;
const TAMU = 29;
const Houston = 30;
const Idaho = 31;
//West Bracket
const Arizona = 32;
const LIU = 33;
const Villanova = 34;
const UtahState = 35;
const Wisconsin = 36;
const HighPoint = 37;
const Arkansas = 38;
const Hawaii = 39;
const BYU = 40;
const Texas = 41;
const Gonzaga = 42;
const KennesawState = 43;
const Miami = 44;
const Missouri = 45;
const Purdue = 46;
const Queens = 47;
//Midwest Bracket
const Michigan = 48;
const Howard = 49;
const Georgia = 50;
const SaintLouis = 51;
const TexasTech = 52;
const Akron = 53;
const Alabama = 54;
const Hofstra = 55;
const Tennessee = 56;
const MiamiOH = 57;
const Virginia = 58;
const WrightState = 59;
const Kentucky = 60;
const SantaClara = 61;
const IowaState = 62;
const TennesseeState = 63;

window.winners = {
    currentRound: 2,
    round64winner1: { team: Duke, played: true},
    round64winner2: { team: TCU, played: true},
    round64winner3: { team: SaintJohns, played: true},
    round64winner4: { team: Kansas, played: true},
    round64winner5: { team: Louisville, played: true},
    round64winner6: { team: MichiganState, played: true},
    round64winner7: { team: UCLA, played: true},
    round64winner8: { team: UConn, played: true},
    round64winner9: { team: Florida, played: true},
    round64winner10: { team: Iowa, played: true},
    round64winner11: { team: Vanderbilt, played: true},
    round64winner12: { team: Nebraska, played: true},
    round64winner13: { team: VCU, played: true},
    round64winner14: { team: Illinois, played: true},
    round64winner15: { team: TAMU, played: true},
    round64winner16: { team: Houston, played: true},
    round64winner17: { team: Arizona, played: true},
    round64winner18: { team: UtahState, played: true},
    round64winner19: { team: HighPoint, played: true},
    round64winner20: { team: Arkansas, played: true},
    round64winner21: { team: Texas, played: true},
    round64winner22: { team: Gonzaga, played: true},
    round64winner23: { team: Miami, played: true},
    round64winner24: { team: Purdue, played: true},
    round64winner25: { team: Michigan, played: true},
    round64winner26: { team: SaintLouis, played: true},
    round64winner27: { team: TexasTech, played: true},
    round64winner28: { team: Alabama, played: true},
    round64winner29: { team: Tennessee, played: true},
    round64winner30: { team: Virginia, played: true},
    round64winner31: { team: Kentucky, played: true},
    round64winner32: { team: IowaState, played: true},
    round32winner33: { team: Duke, played: true},
    round32winner34: { team: SaintJohns, played: true},
    round32winner35: { team: MichiganState, played: true},
    round32winner36: { team: UConn, played: true},
    round32winner37: { team: Iowa, played: true},
    round32winner38: { team: Nebraska, played: true},
    round32winner39: { team: Illinois, played: true},
    round32winner40: { team: Houston, played: true},
    round32winner41: { team: Arizona, played: true},
    round32winner42: { team: Arkansas, played: true},
    round32winner43: { team: Texas, played: true},
    round32winner44: { team: Purdue, played: true},
    round32winner45: { team: Michigan, played: true},
    round32winner46: { team: Alabama, played: true},
    round32winner47: { team: Tennessee, played: true},
    round32winner48: { team: IowaState, played: true},
    sweet16winner49: { team: Duke, played: true},
    sweet16winner50: { team: null, played: false},
    sweet16winner51: { team: Iowa, played: true},
    sweet16winner52: { team: Illinois, played: true},
    sweet16winner53: { team: Arizona, played: true},
    sweet16winner54: { team: Purdue, played: true},
    sweet16winner55: { team: Michigan, played: true},
    sweet16winner56: { team: null, played: false},
    elite8winner57: { team: null, played: false },
    elite8winner58: { team: null, played: false },
    elite8winner59: { team: null, played: false },
    elite8winner60: { team: null, played: false },
    final4winner61: { team: null, played: false },
    final4winner62: { team: null, played: false },
    championshipwinner63: { team: null, played: false }
};
