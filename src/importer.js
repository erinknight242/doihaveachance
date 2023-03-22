import * as Data from './bracketdata';

/* To get your pool's string, navigate to your personal ESPN Tournament Challenge bracket 
(something like https://fantasy.espn.com/tournament-challenge-bracket/2021/en/entry?entryID=XXXXXXXXX), 
and open the developer tools. Refresh the page, and on the Network tab, filter to XHR requests. 
Click the one that starts like "group?groupId=", click the Response tab, select all, and copy it. 
Paste it below replacing the example object, and then run yarn test. It will output your bracket 
object in the console. Copy it, and paste it in bracketdata.js in place of "brackets". Run the tests
one more time after pasting it in to verify that it is formatted properly. */ 

const example = {
    g: {
        e: [
            {
                ps: "01|03|05|07|09|11|13|15|17|19|22|23|25|27|30|31|33|36|37|39|41|43|45|47|49|51|53|55|58|59|61|63|01|05|11|13|17|23|27|31|33|37|41|47|49|55|58|63|01|11|23|31|33|41|49|63|01|23|33|63|01|33|01",
                n_d: "userName",
                n_e: "entryName"                 
            },
            {
                ps: "01|04|05|07|09|11|13|15|17|19|22|23|25|27|29|31|33|35|37|39|41|43|45|47|49|52|53|55|57|59|62|63|01|05|11|15|17|23|27|31|33|37|43|47|49|53|59|63|01|11|17|31|33|43|49|63|01|31|33|49|01|33|01",
                n_d: "user2",
                n_e: "bracket"
            },
            {
                ps: "01|04|05|07|10|11|14|16|17|19|21|23|25|27|29|31|33|35|37|39|41|43|45|47|49|51|53|55|57|59|61|63|01|07|11|14|19|23|27|31|33|37|41|47|49|53|59|63|01|11|19|31|33|47|53|63|01|19|33|63|19|63|19",
                n_d: "user3",
                n_e: "losingBracket"
            }
        ]
    }
}


export const convertEspnPool = (poolJson = JSON.stringify(example)) => {
  const object = JSON.parse(poolJson);
  let bracketData = [];
  object.g.e.forEach((bracket) => {
    let bracketObject = {};
    const picks = bracket.ps.split('|');
    bracketObject.name = bracket.n_d;
    bracketObject.round64winner1 = mapEspnToReact(picks[22]);
    bracketObject.round64winner2 = mapEspnToReact(picks[21]);
    bracketObject.round64winner3 = mapEspnToReact(picks[24]);
    bracketObject.round64winner4 = mapEspnToReact(picks[20]);
    bracketObject.round64winner5 = mapEspnToReact(picks[23]);
    bracketObject.round64winner6 = mapEspnToReact(picks[16]);
    bracketObject.round64winner7 = mapEspnToReact(picks[25]);
    bracketObject.round64winner8 = mapEspnToReact(picks[26]);
    bracketObject.round64winner9 = mapEspnToReact(picks[27]);
    bracketObject.round64winner10 = mapEspnToReact(picks[17]);
    bracketObject.round64winner11 = mapEspnToReact(picks[31]);
    bracketObject.round64winner12 = mapEspnToReact(picks[19]);
    bracketObject.round64winner13 = mapEspnToReact(picks[30]);
    bracketObject.round64winner14 = mapEspnToReact(picks[28]);
    bracketObject.round64winner15 = mapEspnToReact(picks[29]);
    bracketObject.round64winner16 = mapEspnToReact(picks[18]);
    bracketObject.round64winner17 = mapEspnToReact(picks[10]);
    bracketObject.round64winner18 = mapEspnToReact(picks[11]);
    bracketObject.round64winner19 = mapEspnToReact(picks[5]);
    bracketObject.round64winner20 = mapEspnToReact(picks[9]);
    bracketObject.round64winner21 = mapEspnToReact(picks[8]);
    bracketObject.round64winner22 = mapEspnToReact(picks[2]);
    bracketObject.round64winner23 = mapEspnToReact(picks[15]);
    bracketObject.round64winner24 = mapEspnToReact(picks[4]);
    bracketObject.round64winner25 = mapEspnToReact(picks[7]);
    bracketObject.round64winner26 = mapEspnToReact(picks[14]);
    bracketObject.round64winner27 = mapEspnToReact(picks[3]);
    bracketObject.round64winner28 = mapEspnToReact(picks[1]);
    bracketObject.round64winner29 = mapEspnToReact(picks[0]);
    bracketObject.round64winner30 = mapEspnToReact(picks[12]);
    bracketObject.round64winner31 = mapEspnToReact(picks[13]);
    bracketObject.round64winner32 = mapEspnToReact(picks[6]);
    bracketObject.round32winner33 = mapEspnToReact(picks[44]);
    bracketObject.round32winner34 = mapEspnToReact(picks[45]);
    bracketObject.round32winner35 = mapEspnToReact(picks[46]);
    bracketObject.round32winner36 = mapEspnToReact(picks[47]);
    bracketObject.round32winner37 = mapEspnToReact(picks[40]);
    bracketObject.round32winner38 = mapEspnToReact(picks[41]);
    bracketObject.round32winner39 = mapEspnToReact(picks[42]);
    bracketObject.round32winner40 = mapEspnToReact(picks[43]);
    bracketObject.round32winner41 = mapEspnToReact(picks[32]);
    bracketObject.round32winner42 = mapEspnToReact(picks[33]);
    bracketObject.round32winner43 = mapEspnToReact(picks[34]);
    bracketObject.round32winner44 = mapEspnToReact(picks[35]);
    bracketObject.round32winner45 = mapEspnToReact(picks[36]);
    bracketObject.round32winner46 = mapEspnToReact(picks[37]);
    bracketObject.round32winner47 = mapEspnToReact(picks[38]);
    bracketObject.round32winner48 = mapEspnToReact(picks[39]);
    bracketObject.sweet16winner49 = mapEspnToReact(picks[52]);
    bracketObject.sweet16winner50 = mapEspnToReact(picks[53]);
    bracketObject.sweet16winner51 = mapEspnToReact(picks[54]);
    bracketObject.sweet16winner52 = mapEspnToReact(picks[55]);
    bracketObject.sweet16winner53 = mapEspnToReact(picks[48]);
    bracketObject.sweet16winner54 = mapEspnToReact(picks[49]);
    bracketObject.sweet16winner55 = mapEspnToReact(picks[50]);
    bracketObject.sweet16winner56 = mapEspnToReact(picks[51]);
    bracketObject.elite8winner57 = mapEspnToReact(picks[58]);
    bracketObject.elite8winner58 = mapEspnToReact(picks[59]);
    bracketObject.elite8winner59 = mapEspnToReact(picks[57]);
    bracketObject.elite8winner60 = mapEspnToReact(picks[56]);
    bracketObject.final4winner61 = mapEspnToReact(picks[60]);
    bracketObject.final4winner62 = mapEspnToReact(picks[61]);
    bracketObject.championshipwinner63 = mapEspnToReact(picks[62]);
    bracketData.push(bracketObject);
  });
  return bracketData;
};

function mapEspnToReact(espnId) {
    switch(espnId) {
        case '01': return Data.Gonzaga;
        case '02': return Data.NorfolkState;
        case '03': return Data.Oklahoma;
        case '04': return Data.Missouri;
        case '05': return Data.Creighton;
        case '06': return Data.UCSantaBarbara;
        case '07': return Data.Virginia;
        case '08': return Data.Ohio;
        case '09': return Data.USC;
        case '10': return Data.Drake;
        case '11': return Data.Kansas;
        case '12': return Data.EasternWashington;
        case '13': return Data.Oregon;
        case '14': return Data.VCU;
        case '15': return Data.Iowa;
        case '16': return Data.GrandCanyon;
        case '17': return Data.Michigan;
        case '18': return Data.TexasSouthern;
        case '19': return Data.LSU;
        case '20': return Data.StBonaventure;
        case '21': return Data.Colorado;
        case '22': return Data.Georgetown;
        case '23': return Data.FloridaState;
        case '24': return Data.UNCGreensboro;
        case '25': return Data.BYU;
        case '26': return Data.UCLA;
        case '27': return Data.Texas;
        case '28': return Data.AbelineChristian;
        case '29': return Data.UConn;
        case '30': return Data.Maryland;
        case '31': return Data.Alabama;
        case '32': return Data.Iona;
        case '33': return Data.Baylor;
        case '34': return Data.Hartford;
        case '35': return Data.NorthCarolina;
        case '36': return Data.Wisconsin;
        case '37': return Data.Villanova;
        case '38': return Data.Winthrop;
        case '39': return Data.Purdue;
        case '40': return Data.NorthTexas;
        case '41': return Data.TexasTech;
        case '42': return Data.UtahState;
        case '43': return Data.Arkansas;
        case '44': return Data.Colgate;
        case '45': return Data.Florida;
        case '46': return Data.VirginiaTech;
        case '47': return Data.OhioSt;
        case '48': return Data.OralRoberts;
        case '49': return Data.Illinois;
        case '50': return Data.Drexel;
        case '51': return Data.LoyolaChicago;
        case '52': return Data.GeorgiaTech;
        case '53': return Data.Tennessee;
        case '54': return Data.OregonState;
        case '55': return Data.OklahomaState;
        case '56': return Data.Liberty;
        case '57': return Data.SanDiegoState;
        case '58': return Data.Syracuse;
        case '59': return Data.WestVirginia;
        case '60': return Data.MoreheadState;
        case '61': return Data.Clemson;
        case '62': return Data.Rutgers;
        case '63': return Data.Houston;
        case '64': return Data.ClevelandState;
        default: return null;
    }
}

/* To import a CBS Bracket (these have to be done individually instead of the whole pool at once), 
open the bracket you want to import (something like 
https://picks.cbssports.com/college-basketball/ncaa-tournament/bracket/pools/XXX====?entryId=YYY), 
and open the developer tools. Refresh the page, and on the Network tab, filter to XHR requests. 
Click the one that starts like "graphql?operationName=EntryDetailsQuery", click the Response tab,
select all, and copy it. Paste it below replacing the example object, and then run yarn test. It
will output your bracket object in the console. Copy it, and paste it in bracketdata.js in place
of one of the brackets in the "brackets" array. Repeat for each bracket you want to add to the app.
Run the tests one more time after pasting everything in to verify that it is formatted properly. */ 

const cbsExample = {
    data: {
        entry: {
            name: "TestBracket",
            picks:[
                { slotId:"jvqxiy3iovydumryga======", itemId:"krswc3j2giytemby" },
                { slotId:"jvqxiy3iovydumryge======", itemId:"krswc3j2giytemrt" },
                { slotId:"jvqxiy3iovydumrygi======", itemId:"krswc3j2giytcmzw" },
                { slotId:"jvqxiy3iovydumzqgq======", itemId:"krswc3j2giytgmbq" }
            ]
        }
    }
};



export const convertCbsBracket = (bracketJson = cbsExample) => {
    const object = bracketJson; //JSON.parse(bracketJson);
    let bracketObject = {};
    bracketObject.name = object.data.entry.name;
    for (let i = 0; i < object.data.entry.picks.length; i++) {
        const winner = mapCbsTeamToReact(object.data.entry.picks[i].itemId);
        const game = mapCbsGameToReact(object.data.entry.picks[i].slotId);
        bracketObject[game] = winner;
    }
    return bracketObject;
}

function mapCbsTeamToReact(cbsItemId) {
    const cbsId = cbsItemId.slice(11,16);
    switch(cbsId) {
        case 'daobv': return Data.AbelineChristian;
        case 'tgnjs': return Data.Alabama;
        case 'tgmzv': return Data.Arizona;
        case 'tgmzw': return Data.ArizonaState;
        case 'tgnjt': return Data.Arkansas;
        case 'tgnju': return Data.Auburn;
        case 'tembr': return Data.Baylor;
        case 'temjt': return Data.BoiseState;
        case 'timru': return Data.BYU;
        case 'tgnrx': return Data.Charleston;
        case 'tcmrz': return Data.Clemson;
        case 'teojx': return Data.ClevelandState;
        case 'tgnbx': return Data.Colgate;
        case 'tembs': return Data.Colorado;
        case 'tgmbv': return Data.Creighton;
        case 'tcmzq': return Data.Duke;
        case 'tgmbw': return Data.Drake;
        case '?????': return Data.Drexel;
        case 'tcnzt': return Data.EasternWashington;
        case 'tgnjv': return Data.Florida;
        case 'timbx': return Data.FloridaAtlantic;
        case 'tcmzr': return Data.FloridaState;
        case 'tgnzq': return Data.Furman;
        case 'tcnrs': return Data.Georgetown;
        case 'tcmzs': return Data.GeorgiaTech;
        case 'timjv': return Data.Gonzaga;
        case '??': return Data.GrandCanyon;
        case '????': return Data.Hartford;
        case 'temzx': return Data.Houston;
        case 'tcojq': return Data.Illinois;
        case 'tcojr': return Data.Indiana;
        case 'tenjw': return Data.Iona;
        case 'tcojs': return Data.Iowa;
        case 'tembt': return Data.IowaState;
        case 'tembu': return Data.Kansas;
        case 'tembv': return Data.KansasState;
        case 'tgnjx': return Data.Kentucky;
        case 'tenzq': return Data.KentState;
        case 'tcobu': return Data.Liberty;
        case 'timbs': return Data.Louisiana;
        case 'tgmbq': return Data.LoyolaChicago;
        case 'tgnjy': return Data.LSU;
        case 'temzz': return Data.Marquette;
        case 'tcmzt': return Data.Maryland;
        case 'tenbq': return Data.Memphis;
        case 'tcnrt': return Data.Miami;
        case 'tcojt': return Data.Michigan;
        case 'tcoju': return Data.MichiganState;
        case 'tembw': return Data.Missouri;
        case 'tcnzw': return Data.MontanaState;
        case 'tgmrz': return Data.MoreheadState;
        case 'tcmzv': return Data.NCState;
        case '?': return Data.NorfolkState;
        case 'tcmzu': return Data.NorthCarolina;
        case 'temrr': return Data.NorthTexas;
        case 'tcojw': return Data.Northwestern;
        case 'tenzu': return Data.Ohio;
        case 'tcojx': return Data.OhioSt;
        case 'temby': return Data.Oklahoma;
        case 'tembz': return Data.OklahomaState;
        case 'tenzz': return Data.OralRoberts;
        case 'tgmzy': return Data.Oregon;
        case 'tgmzz': return Data.OregonState;
        case 'tcojy': return Data.PennState;
        case 'tcnrv': return Data.Pittsburgh;
        case 'tcnrw': return Data.Providence;
        case 'tcojz': return Data.Purdue;
        case 'tcnrx': return Data.Rutgers;
        case 'timrs': return Data.SaintMarys;
        case 'timzr': return Data.SanDiegoState;
        case 'tcnbv': return Data.StBonaventure;
        case 'tcnzq': return Data.Syracuse;
        case 'timzu': return Data.TCU;
        case 'tgnrs': return Data.Tennessee;
        case 'temjq': return Data.Texas;
        case 'temjr': return Data.TAMU;
        case '???': return Data.TexasSouthern;
        case 'temjs': return Data.TexasTech;
        case 'tgnbr': return Data.UCLA;
        case 'tcnrr': return Data.UConn;
        case 'temrt': return Data.UCSantaBarbara;
        case 'tgnzs': return Data.UNCGreensboro;
        case 'tgnbs': return Data.USC;
        case 'temru': return Data.UtahState;
        case 'temzs': return Data.VCU;
        case 'tcnzr': return Data.Villanova;
        case 'tcmzw': return Data.Virginia;
        case 'tcnby': return Data.VirginiaTech;
        case 'tcnzs': return Data.WestVirginia;
        case 'tcobx': return Data.Winthrop;
        case 'tembq': return Data.Wisconsin;
        case 'tcnbz': return Data.Xavier;

        default: return null;
    }
}

function mapCbsGameToReact(cbsSlotId) {
    const cbsId = cbsSlotId.slice(16,21);
    switch (cbsId) {
        case 'geyds': return 'round64winner1';
        case 'geytc': return 'round64winner2';
        case 'geytg': return 'round64winner3';
        case 'geytk': return 'round64winner4';
        case 'geyto': return 'round64winner5';
        case 'geyts': return 'round64winner6';
        case 'gezdc': return 'round64winner7';
        case 'gezdi': return 'round64winner8';
        case 'ge3ta': return 'round64winner9';
        case 'ge3te': return 'round64winner10';
        case 'ge3ti': return 'round64winner11';
        case 'ge3tk': return 'round64winner12';
        case 'ge3tq': return 'round64winner13';
        case 'ge4da': return 'round64winner14';
        case 'ge4de': return 'round64winner15';
        case 'ge4di': return 'round64winner16';
        case 'ge2da': return 'round64winner17';
        case 'ge2de': return 'round64winner18';
        case 'ge2di': return 'round64winner19';
        case 'ge2dm': return 'round64winner20';
        case 'ge2dq': return 'round64winner21';
        case 'ge2ta': return 'round64winner22';
        case 'ge2te': return 'round64winner23';
        case 'ge2ti': return 'round64winner24';
        case 'giyda': return 'round64winner25';
        case 'giyde': return 'round64winner26';
        case 'giydk': return 'round64winner27';
        case 'giydo': return 'round64winner28';
        case 'giyta': return 'round64winner29';
        case 'giyte': return 'round64winner30';
        case 'giyti': return 'round64winner31';
        case 'giyto': return 'round64winner32';
        case 'gezdm': return 'round32winner33';
        case 'gezdq': return 'round32winner34';
        case 'gezds': return 'round32winner35';
        case 'gezte': return 'round32winner36';
        case 'ge4dm': return 'round32winner37';
        case 'ge4dq': return 'round32winner38';
        case 'ge4ta': return 'round32winner39';
        case 'ge4te': return 'round32winner40';
        case 'ge2tm': return 'round32winner41';
        case 'ge2tq': return 'round32winner42';
        case 'ge3dc': return 'round32winner43';
        case 'ge3de': return 'round32winner44';
        case 'gizda': return 'round32winner45';
        case 'gizde': return 'round32winner46';
        case 'gizdi': return 'round32winner47';
        case 'gizdk': return 'round32winner48';
        case 'gezti': return 'sweet16winner49';
        case 'geztm': return 'sweet16winner50';
        case 'ge4ti': return 'sweet16winner51';
        case 'ge4tm': return 'sweet16winner52';
        case 'ge3di': return 'sweet16winner53';
        case 'ge3dm': return 'sweet16winner54';
        case 'gizdm': return 'sweet16winner55';
        case 'gizdo': return 'sweet16winner56';
        case 'geztq': return 'elite8winner57';
        case 'ge4tq': return 'elite8winner58';
        case 'ge3dq': return 'elite8winner59';
        case 'gizdq': return 'elite8winner60';
        case 'gizds': return 'final4winner61';
        case 'gizta': return 'final4winner62';
        case 'giztc': return 'championshipwinner63';
        default: return null;
    }
}