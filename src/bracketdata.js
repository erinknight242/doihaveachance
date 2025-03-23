/* eslint-disable no-unused-expressions */
//South Bracket
export const Auburn = 0;
export const AlabamaState = 1;
export const Louisville = 2;
export const Creighton = 3;
export const Michigan = 4;
export const CALSD = 5;
export const TAMU = 6;
export const Yale = 7;
export const OleMiss = 8;
export const NorthCarolina = 9;
export const IowaState = 10;
export const Lipscomb = 11;
export const Marquette = 12;
export const NewMexico = 13;
export const MichiganState = 14;
export const Bryant = 15;
//West Bracket
export const Florida = 16;
export const NorfolkState = 17;
export const UConn = 18;
export const Oklahoma = 19;
export const Memphis = 20;
export const ColoradoState = 21;
export const Maryland = 22;
export const GrandCanyon = 23;
export const Missouri = 24;
export const Drake = 25;
export const TexasTech = 26;
export const UNCW = 27;
export const Kansas = 28;
export const Arkansas = 29;
export const SaintJohns = 30;
export const Omaha = 31;
//East Bracket
export const Duke = 32;
export const MOUNT = 33;
export const MississippiState = 34;
export const Baylor = 35;
export const Oregon = 36;
export const Liberty = 37;
export const Arizona = 38;
export const Akron = 39;
export const BYU = 40;
export const VCU = 41;
export const Wisconsin = 42;
export const Montana = 43;
export const SaintMarys = 44;
export const Vanderbilt = 45;
export const Alabama = 46;
export const ROBERT = 47;
//Midwest Bracket
export const Houston = 48;
export const SIUE = 49;
export const Gonzaga = 50;
export const Georgia = 51;
export const Clemson = 52;
export const McNeese = 53;
export const Purdue = 54;
export const HighPoint = 55;
export const Illinois = 56;
export const Xavier = 57;
export const Kentucky = 58;
export const Troy = 59;
export const UCLA = 60;
export const UtahState = 61;
export const Tennessee = 62;
export const Wofford = 63;

export const brackets = [ {
    name: 'Erin Knight',
    round64winner1: 0,
    round64winner2: 2,
    round64winner3: 4,
    round64winner4: 6,
    round64winner5: 8,
    round64winner6: 10,
    round64winner7: 13,
    round64winner8: 14,
    round64winner9: 16,
    round64winner10: 18,
    round64winner11: 20,
    round64winner12: 22,
    round64winner13: 24,
    round64winner14: 26,
    round64winner15: 28,
    round64winner16: 31,
    round64winner17: 32,
    round64winner18: 35,
    round64winner19: 36,
    round64winner20: 38,
    round64winner21: 41,
    round64winner22: 42,
    round64winner23: 45,
    round64winner24: 46,
    round64winner25: 48,
    round64winner26: 50,
    round64winner27: 52,
    round64winner28: 54,
    round64winner29: 57,
    round64winner30: 58,
    round64winner31: 60,
    round64winner32: 62,
    round32winner33: 0,
    round32winner34: 4,
    round32winner35: 10,
    round32winner36: 14,
    round32winner37: 16,
    round32winner38: 22,
    round32winner39: 26,
    round32winner40: 28,
    round32winner41: 32,
    round32winner42: 38,
    round32winner43: 42,
    round32winner44: 46,
    round32winner45: 48,
    round32winner46: 54,
    round32winner47: 58,
    round32winner48: 62,
    sweet16winner49: 4,
    sweet16winner50: 14,
    sweet16winner51: 16,
    sweet16winner52: 26,
    sweet16winner53: 32,
    sweet16winner54: 42,
    sweet16winner55: 48,
    sweet16winner56: 62,
    elite8winner57: 14,
    elite8winner58: 16,
    elite8winner59: 32,
    elite8winner60: 48,
    final4winner61: 16,
    final4winner62: 32,
    championshipwinner63: 16
  }];

export const calculateCbsScore = (data, bracket) => {
    let score = 0;
    data.round64winner1.team === bracket.round64winner1 ? score+=1 : null;
    data.round64winner2.team === bracket.round64winner2 ? score+=1 : null;
    data.round64winner3.team === bracket.round64winner3 ? score+=1 : null;
    data.round64winner4.team === bracket.round64winner4 ? score+=1 : null;
    data.round64winner5.team === bracket.round64winner5 ? score+=1 : null;
    data.round64winner6.team === bracket.round64winner6 ? score+=1 : null;
    data.round64winner7.team === bracket.round64winner7 ? score+=1 : null;
    data.round64winner8.team === bracket.round64winner8 ? score+=1 : null;
    data.round64winner9.team === bracket.round64winner9 ? score+=1 : null;
    data.round64winner10.team === bracket.round64winner10 ? score+=1 : null;
    data.round64winner11.team === bracket.round64winner11 ? score+=1 : null;
    data.round64winner12.team === bracket.round64winner12 ? score+=1 : null;
    data.round64winner13.team === bracket.round64winner13 ? score+=1 : null;
    data.round64winner14.team === bracket.round64winner14 ? score+=1 : null;
    data.round64winner15.team === bracket.round64winner15 ? score+=1 : null;
    data.round64winner16.team === bracket.round64winner16 ? score+=1 : null;
    data.round64winner17.team === bracket.round64winner17 ? score+=1 : null;
    data.round64winner18.team === bracket.round64winner18 ? score+=1 : null;
    data.round64winner19.team === bracket.round64winner19 ? score+=1 : null;
    data.round64winner20.team === bracket.round64winner20 ? score+=1 : null;
    data.round64winner21.team === bracket.round64winner21 ? score+=1 : null;
    data.round64winner22.team === bracket.round64winner22 ? score+=1 : null;
    data.round64winner23.team === bracket.round64winner23 ? score+=1 : null;
    data.round64winner24.team === bracket.round64winner24 ? score+=1 : null;
    data.round64winner25.team === bracket.round64winner25 ? score+=1 : null;
    data.round64winner26.team === bracket.round64winner26 ? score+=1 : null;
    data.round64winner27.team === bracket.round64winner27 ? score+=1 : null;
    data.round64winner28.team === bracket.round64winner28 ? score+=1 : null;
    data.round64winner29.team === bracket.round64winner29 ? score+=1 : null;
    data.round64winner30.team === bracket.round64winner30 ? score+=1 : null;
    data.round64winner31.team === bracket.round64winner31 ? score+=1 : null;
    data.round64winner32.team === bracket.round64winner32 ? score+=1 : null;

    data.round32winner33.team === bracket.round32winner33 ? score+=2 : null;
    data.round32winner34.team === bracket.round32winner34 ? score+=2 : null;
    data.round32winner35.team === bracket.round32winner35 ? score+=2 : null;
    data.round32winner36.team === bracket.round32winner36 ? score+=2 : null;
    data.round32winner37.team === bracket.round32winner37 ? score+=2 : null;
    data.round32winner38.team === bracket.round32winner38 ? score+=2 : null;
    data.round32winner39.team === bracket.round32winner39 ? score+=2 : null;
    data.round32winner40.team === bracket.round32winner40 ? score+=2 : null;
    data.round32winner41.team === bracket.round32winner41 ? score+=2 : null;
    data.round32winner42.team === bracket.round32winner42 ? score+=2 : null;
    data.round32winner43.team === bracket.round32winner43 ? score+=2 : null;
    data.round32winner44.team === bracket.round32winner44 ? score+=2 : null;
    data.round32winner45.team === bracket.round32winner45 ? score+=2 : null;
    data.round32winner46.team === bracket.round32winner46 ? score+=2 : null;
    data.round32winner47.team === bracket.round32winner47 ? score+=2 : null;
    data.round32winner48.team === bracket.round32winner48 ? score+=2 : null;

    data.sweet16winner49.team === bracket.sweet16winner49 ? score+=4 : null;
    data.sweet16winner50.team === bracket.sweet16winner50 ? score+=4 : null;
    data.sweet16winner51.team === bracket.sweet16winner51 ? score+=4 : null;
    data.sweet16winner52.team === bracket.sweet16winner52 ? score+=4 : null;
    data.sweet16winner53.team === bracket.sweet16winner53 ? score+=4 : null;
    data.sweet16winner54.team === bracket.sweet16winner54 ? score+=4 : null;
    data.sweet16winner55.team === bracket.sweet16winner55 ? score+=4 : null;
    data.sweet16winner56.team === bracket.sweet16winner56 ? score+=4 : null;

    data.elite8winner57.team === bracket.elite8winner57 ? score+=8 : null;
    data.elite8winner58.team === bracket.elite8winner58 ? score+=8 : null;
    data.elite8winner59.team === bracket.elite8winner59 ? score+=8 : null;
    data.elite8winner60.team === bracket.elite8winner60 ? score+=8 : null;

    data.final4winner61.team === bracket.final4winner61 ? score+=16 : null;
    data.final4winner62.team === bracket.final4winner62 ? score+=16 : null;

    data.championshipwinner63.team === bracket.championshipwinner63 ? score+=32 : null;
    return score;
};

export const calculateEspnScore = (data, bracket) => {
    let score = 0;
    data.round64winner1.team === bracket.round64winner1 ? score+=10 : null;
    data.round64winner2.team === bracket.round64winner2 ? score+=10 : null;
    data.round64winner3.team === bracket.round64winner3 ? score+=10 : null;
    data.round64winner4.team === bracket.round64winner4 ? score+=10 : null;
    data.round64winner5.team === bracket.round64winner5 ? score+=10 : null;
    data.round64winner6.team === bracket.round64winner6 ? score+=10 : null;
    data.round64winner7.team === bracket.round64winner7 ? score+=10 : null;
    data.round64winner8.team === bracket.round64winner8 ? score+=10 : null;
    data.round64winner9.team === bracket.round64winner9 ? score+=10 : null;
    data.round64winner10.team === bracket.round64winner10 ? score+=10 : null;
    data.round64winner11.team === bracket.round64winner11 ? score+=10 : null;
    data.round64winner12.team === bracket.round64winner12 ? score+=10 : null;
    data.round64winner13.team === bracket.round64winner13 ? score+=10 : null;
    data.round64winner14.team === bracket.round64winner14 ? score+=10 : null;
    data.round64winner15.team === bracket.round64winner15 ? score+=10 : null;
    data.round64winner16.team === bracket.round64winner16 ? score+=10 : null;
    data.round64winner17.team === bracket.round64winner17 ? score+=10 : null;
    data.round64winner18.team === bracket.round64winner18 ? score+=10 : null;
    data.round64winner19.team === bracket.round64winner19 ? score+=10 : null;
    data.round64winner20.team === bracket.round64winner20 ? score+=10 : null;
    data.round64winner21.team === bracket.round64winner21 ? score+=10 : null;
    data.round64winner22.team === bracket.round64winner22 ? score+=10 : null;
    data.round64winner23.team === bracket.round64winner23 ? score+=10 : null;
    data.round64winner24.team === bracket.round64winner24 ? score+=10 : null;
    data.round64winner25.team === bracket.round64winner25 ? score+=10 : null;
    data.round64winner26.team === bracket.round64winner26 ? score+=10 : null;
    data.round64winner27.team === bracket.round64winner27 ? score+=10 : null;
    data.round64winner28.team === bracket.round64winner28 ? score+=10 : null;
    data.round64winner29.team === bracket.round64winner29 ? score+=10 : null;
    data.round64winner30.team === bracket.round64winner30 ? score+=10 : null;
    data.round64winner31.team === bracket.round64winner31 ? score+=10 : null;
    data.round64winner32.team === bracket.round64winner32 ? score+=10 : null;

    data.round32winner33.team === bracket.round32winner33 ? score+=20 : null;
    data.round32winner34.team === bracket.round32winner34 ? score+=20 : null;
    data.round32winner35.team === bracket.round32winner35 ? score+=20 : null;
    data.round32winner36.team === bracket.round32winner36 ? score+=20 : null;
    data.round32winner37.team === bracket.round32winner37 ? score+=20 : null;
    data.round32winner38.team === bracket.round32winner38 ? score+=20 : null;
    data.round32winner39.team === bracket.round32winner39 ? score+=20 : null;
    data.round32winner40.team === bracket.round32winner40 ? score+=20 : null;
    data.round32winner41.team === bracket.round32winner41 ? score+=20 : null;
    data.round32winner42.team === bracket.round32winner42 ? score+=20 : null;
    data.round32winner43.team === bracket.round32winner43 ? score+=20 : null;
    data.round32winner44.team === bracket.round32winner44 ? score+=20 : null;
    data.round32winner45.team === bracket.round32winner45 ? score+=20 : null;
    data.round32winner46.team === bracket.round32winner46 ? score+=20 : null;
    data.round32winner47.team === bracket.round32winner47 ? score+=20 : null;
    data.round32winner48.team === bracket.round32winner48 ? score+=20 : null;

    data.sweet16winner49.team === bracket.sweet16winner49 ? score+=40 : null;
    data.sweet16winner50.team === bracket.sweet16winner50 ? score+=40 : null;
    data.sweet16winner51.team === bracket.sweet16winner51 ? score+=40 : null;
    data.sweet16winner52.team === bracket.sweet16winner52 ? score+=40 : null;
    data.sweet16winner53.team === bracket.sweet16winner53 ? score+=40 : null;
    data.sweet16winner54.team === bracket.sweet16winner54 ? score+=40 : null;
    data.sweet16winner55.team === bracket.sweet16winner55 ? score+=40 : null;
    data.sweet16winner56.team === bracket.sweet16winner56 ? score+=40 : null;

    data.elite8winner57.team === bracket.elite8winner57 ? score+=80 : null;
    data.elite8winner58.team === bracket.elite8winner58 ? score+=80 : null;
    data.elite8winner59.team === bracket.elite8winner59 ? score+=80 : null;
    data.elite8winner60.team === bracket.elite8winner60 ? score+=80 : null;

    data.final4winner61.team === bracket.final4winner61 ? score+=160 : null;
    data.final4winner62.team === bracket.final4winner62 ? score+=160 : null;

    data.championshipwinner63.team === bracket.championshipwinner63 ? score+=320 : null;
    return score;
};

export const teamWasPicked = (team, game, bracketData = brackets) => {
    let inUse = false;
    for (let i = 0; i < bracketData.length; i++) {
        if (bracketData[i][game] === team) {
            inUse = true;
            break;
        }
    }
    return inUse;
}

export const percentFor = (team, game, bracketData = brackets) => {
    let countFor = 0;
    for (let i = 0; i < bracketData.length; i++) {
        if (team !== undefined && bracketData[i][game] === team.id) {
            countFor++;
        }
    }
    return Math.round(countFor * 100 / bracketData.length, 0);
}