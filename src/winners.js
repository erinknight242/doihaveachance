/* Each year, enter the teams below in the order listed on the bracket,
*  Then update "window.winners" to include the winners of any completed games,
*  and set currentRound equal to the active round.
*
*  This file needs to exist in the public folder for the website to load, but will
*  be overwritten by any builds.
*/
//South Bracket
const Auburn = 0;
const AlabamaState = 1;
const Louisville = 2;
const Creighton = 3;
const Michigan = 4;
const CALSD = 5;
const TAMU = 6;
const Yale = 7;
const OleMiss = 8;
const NorthCarolina = 9;
const IowaState = 10;
const Lipscomb = 11;
const Marquette = 12;
const NewMexico = 13;
const MichiganState = 14;
const Bryant = 15;
//West Bracket
const Florida = 16;
const NorfolkState = 17;
const UConn = 18;
const Oklahoma = 19;
const Memphis = 20;
const ColoradoState = 21;
const Maryland = 22;
const GrandCanyon = 23;
const Missouri = 24;
const Drake = 25;
const TexasTech = 26;
const UNCW = 27;
const Kansas = 28;
const Arkansas = 29;
const SaintJohns = 30;
const Omaha = 31;
//East Bracket
const Duke = 32;
const MOUNT = 33;
const MississippiState = 34;
const Baylor = 35;
const Oregon = 36;
const Liberty = 37;
const Arizona = 38;
const Akron = 39;
const BYU = 40;
const VCU = 41;
const Wisconsin = 42;
const Montana = 43;
const SaintMarys = 44;
const Vanderbilt = 45;
const Alabama = 46;
const ROBERT = 47;
//Midwest Bracket
const Houston = 48;
const SIUE = 49;
const Gonzaga = 50;
const Georgia = 51;
const Clemson = 52;
const McNeese = 53;
const Purdue = 54;
const HighPoint = 55;
const Illinois = 56;
const Xavier = 57;
const Kentucky = 58;
const Troy = 59;
const UCLA = 60;
const UtahState = 61;
const Tennessee = 62;
const Wofford = 63;

window.winners = {
    currentRound: 2,
    round64winner1: { team: Auburn, played: true},
    round64winner2: { team: Creighton, played: true},
    round64winner3: { team: Michigan, played: true},
    round64winner4: { team: TAMU, played: true},
    round64winner5: { team: OleMiss, played: true},
    round64winner6: { team: IowaState, played: true},
    round64winner7: { team: NewMexico, played: true},
    round64winner8: { team: MichiganState, played: true},
    round64winner9: { team: Florida, played: true},
    round64winner10: { team: UConn, played: true},
    round64winner11: { team: ColoradoState, played: true},
    round64winner12: { team: Maryland, played: true},
    round64winner13: { team: Drake, played: true},
    round64winner14: { team: TexasTech, played: true},
    round64winner15: { team: Arkansas, played: true},
    round64winner16: { team: SaintJohns, played: true},
    round64winner17: { team: Duke, played: true},
    round64winner18: { team: Baylor, played: true},
    round64winner19: { team: Oregon, played: true},
    round64winner20: { team: Arizona, played: true},
    round64winner21: { team: BYU, played: true},
    round64winner22: { team: Wisconsin, played: true},
    round64winner23: { team: SaintMarys, played: true},
    round64winner24: { team: Alabama, played: true},
    round64winner25: { team: Houston, played: true},
    round64winner26: { team: Gonzaga, played: true},
    round64winner27: { team: McNeese, played: true},
    round64winner28: { team: Purdue, played: true},
    round64winner29: { team: Illinois, played: true},
    round64winner30: { team: Kentucky, played: true},
    round64winner31: { team: UCLA, played: true},
    round64winner32: { team: Tennessee, played: true},
    round32winner33: { team: null, played: false},
    round32winner34: { team: null, played: false},
    round32winner35: { team: null, played: false},
    round32winner36: { team: null, played: false},
    round32winner37: { team: null, played: false},
    round32winner38: { team: null, played: false},
    round32winner39: { team: null, played: false},
    round32winner40: { team: null, played: false},
    round32winner41: { team: null, played: false},
    round32winner42: { team: null, played: false},
    round32winner43: { team: null, played: false},
    round32winner44: { team: null, played: false},
    round32winner45: { team: null, played: false},
    round32winner46: { team: null, played: false},
    round32winner47: { team: null, played: false},
    round32winner48: { team: null, played: false},
    sweet16winner49: { team: null, played: false},
    sweet16winner50: { team: null, played: false},
    sweet16winner51: { team: null, played: false},
    sweet16winner52: { team: null, played: false},
    sweet16winner53: { team: null, played: false},
    sweet16winner54: { team: null, played: false},
    sweet16winner55: { team: null, played: false},
    sweet16winner56: { team: null, played: false},
    elite8winner57: { team: null, played: false },
    elite8winner58: { team: null, played: false },
    elite8winner59: { team: null, played: false },
    elite8winner60: { team: null, played: false },
    final4winner61: { team: null, played: false },
    final4winner62: { team: null, played: false },
    championshipwinner63: { team: null, played: false }
};
