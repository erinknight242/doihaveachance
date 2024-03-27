/* eslint-disable no-unused-expressions */
export const UConn = 0;
export const Stetson = 1;
export const FloridaAtlantic = 2;
export const Northwestern = 3;
export const SanDiegoState = 4;
export const UAB = 5;
export const Auburn = 6;
export const Yale = 7;
export const BYU = 8;
export const Duquesne = 9;
export const Illinois = 10;
export const MoreheadState = 11;
export const WashingtonState = 12;
export const Drake = 13;
export const IowaState = 14;
export const SouthDakotaState = 15;
export const NorthCarolina = 16;
export const Wagner = 17;
export const MississippiState = 18;
export const MichiganState = 19;
export const SaintMarys = 20;
export const GrandCanyon = 21;
export const Alabama = 22;
export const Charleston = 23;
export const Clemson = 24;
export const NewMexico = 25;
export const Baylor = 26;
export const Colgate = 27;
export const Dayton = 28;
export const Nevada = 29;
export const Arizona = 30;
export const LongBeachState = 31;
export const Houston = 32;
export const Longwood = 33;
export const Nebraska = 34;
export const TAMU = 35;
export const Wisconsin = 36;
export const JamesMadison = 37;
export const Duke = 38;
export const Vermont = 39;
export const TexasTech = 40;
export const NCState = 41;
export const Kentucky = 42;
export const Oakland = 43;
export const Florida = 44;
export const Colorado = 45;
export const Marquette = 46;
export const WesternKentucky = 47;
export const Purdue = 48;
export const GramblingState = 49;
export const UtahState = 50;
export const TCU = 51;
export const Gonzaga = 52;
export const McNeese = 53;
export const Kansas = 54;
export const Samford = 55;
export const SouthCarolina = 56;
export const Oregon = 57;
export const Creighton = 58;
export const Akron = 59;
export const Texas = 60;
export const ColoradoState = 61;
export const Tennessee = 62;
export const SaintPeters = 63;

export const brackets = [/* Paste formatted bracket objects here */];

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