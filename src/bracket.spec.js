import { brackets, calculateEspnScore, teamWasPicked } from './bracketdata.js';
import { convertEspnPool, convertCbsBracket } from './importer.js';

const sampleData = {
    round64winner1: { team: 1, played: true },
    round64winner2: { team: 3, played: true },
    round64winner3: { team: 5, played: false },
    round64winner4: { team: 7, played: false },
    round64winner5: { team: 9, played: false },
    round64winner6: { team: 11, played: false },
    round64winner7: { team: 13, played: false },
    round64winner8: { team: 15, played: false },
    round64winner9: { team: 17, played: false },
    round64winner10: { team: 19, played: false },
    round64winner11: { team: 21, played: false },
    round64winner12: { team: 23, played: false },
    round64winner13: { team: 25, played: false },
    round64winner14: { team: 27, played: false },
    round64winner15: { team: 29, played: false },
    round64winner16: { team: 31, played: false },
    round64winner17: { team: 33, played: false },
    round64winner18: { team: 35, played: false },
    round64winner19: { team: 37, played: false },
    round64winner20: { team: 39, played: false },
    round64winner21: { team: 41, played: false },
    round64winner22: { team: 43, played: false },
    round64winner23: { team: 45, played: false },
    round64winner24: { team: 47, played: false },
    round64winner25: { team: 49, played: false },
    round64winner26: { team: 51, played: false },
    round64winner27: { team: 53, played: false },
    round64winner28: { team: 55, played: false },
    round64winner29: { team: 57, played: false },
    round64winner30: { team: 59, played: false },
    round64winner31: { team: 61, played: false },
    round64winner32: { team: 63, played: false },
    round32winner33: { team: 5, played: false },
    round32winner34: { team: 15, played: false },
    round32winner35: { team: 29, played: false },
    round32winner36: { team: 21, played: false },
    round32winner37: { team: 11, played: false },
    round32winner38: { team: 31, played: false },
    round32winner39: { team: 3, played: false },
    round32winner40: { team: 9, played: false },
    round32winner41: { team: 57, played: false },
    round32winner42: { team: 43, played: false },
    round32winner43: { team: 37, played: false },
    round32winner44: { team: 49, played: false },
    round32winner45: { team: 41, played: false },
    round32winner46: { team: 35, played: false },
    round32winner47: { team: 61, played: false },
    round32winner48: { team: 45, played: false },
    sweet16winner49: { team: 11, played: false },
    sweet16winner50: { team: 3, played: false },
    sweet16winner51: { team: 5, played: false },
    sweet16winner52: { team: 21, played: false },
    sweet16winner53: { team: 57, played: false },
    sweet16winner54: { team: 37, played: false },
    sweet16winner55: { team: 41, played: false },
    sweet16winner56: { team: 45, played: false },
    elite8winner57: { team: 11, played: false },
    elite8winner58: { team: 5, played: false },
    elite8winner59: { team: 45, played: false },
    elite8winner60: { team: 57, played: false },
    final4winner61: { team: 57, played: false },
    final4winner62: { team: 11, played: false },
    championshipwinner63: { team: 57, played: false }
};

describe('Bracket Validity', () => {
    it('checks all brackets have appropriate winners to avoid typos when possible', () => {
        brackets.forEach((bracket) => {
            expect(bracket.round64winner1).toBeOneOf([0, 1]);
            expect(bracket.round64winner2).toBeOneOf([2, 3]);
            expect(bracket.round64winner3).toBeOneOf([4, 5]);
            expect(bracket.round64winner4).toBeOneOf([6, 7]);
            expect(bracket.round64winner5).toBeOneOf([8, 9]);
            expect(bracket.round64winner6).toBeOneOf([10, 11]);
            expect(bracket.round64winner7).toBeOneOf([12, 13]);
            expect(bracket.round64winner8).toBeOneOf([14, 15]);
            expect(bracket.round64winner9).toBeOneOf([16, 17]);
            expect(bracket.round64winner10).toBeOneOf([18, 19]);
            expect(bracket.round64winner11).toBeOneOf([20, 21]);
            expect(bracket.round64winner12).toBeOneOf([22, 23]);
            expect(bracket.round64winner13).toBeOneOf([24, 25]);
            expect(bracket.round64winner14).toBeOneOf([26, 27]);
            expect(bracket.round64winner15).toBeOneOf([28, 29]);
            expect(bracket.round64winner16).toBeOneOf([30, 31]);
            expect(bracket.round64winner17).toBeOneOf([32, 33]);
            expect(bracket.round64winner18).toBeOneOf([34, 35]);
            expect(bracket.round64winner19).toBeOneOf([36, 37]);
            expect(bracket.round64winner20).toBeOneOf([38, 39]);
            expect(bracket.round64winner21).toBeOneOf([40, 41]);
            expect(bracket.round64winner22).toBeOneOf([42, 43]);
            expect(bracket.round64winner23).toBeOneOf([44, 45]);
            expect(bracket.round64winner24).toBeOneOf([46, 47]);
            expect(bracket.round64winner25).toBeOneOf([48, 49]);
            expect(bracket.round64winner26).toBeOneOf([50, 51]);
            expect(bracket.round64winner27).toBeOneOf([52, 53]);
            expect(bracket.round64winner28).toBeOneOf([54, 55]);
            expect(bracket.round64winner29).toBeOneOf([56, 57]);
            expect(bracket.round64winner30).toBeOneOf([58, 59]);
            expect(bracket.round64winner31).toBeOneOf([60, 61]);
            expect(bracket.round64winner32).toBeOneOf([62, 63]);
            expect(bracket.round32winner33).toBeOneOf([4, 5, 12, 13]);
            expect(bracket.round32winner34).toBeOneOf([14, 15, 16, 17]);
            expect(bracket.round32winner35).toBeOneOf([26, 27, 28, 29]);
            expect(bracket.round32winner36).toBeOneOf([20, 21, 24, 25]);
            expect(bracket.round32winner37).toBeOneOf([10, 11, 18, 19]);
            expect(bracket.round32winner38).toBeOneOf([22, 23, 30, 31]);
            expect(bracket.round32winner39).toBeOneOf([2, 3, 6, 7]);
            expect(bracket.round32winner40).toBeOneOf([0, 1, 8, 9]);
            expect(bracket.round32winner41).toBeOneOf([54, 55, 56, 57]);
            expect(bracket.round32winner42).toBeOneOf([42, 43, 52, 53]);
            expect(bracket.round32winner43).toBeOneOf([36, 37, 46, 47]);
            expect(bracket.round32winner44).toBeOneOf([48, 49, 62, 63]);
            expect(bracket.round32winner45).toBeOneOf([38, 39, 40, 41]);
            expect(bracket.round32winner46).toBeOneOf([32, 33, 34, 35]);
            expect(bracket.round32winner47).toBeOneOf([58, 59, 60, 61]);
            expect(bracket.round32winner48).toBeOneOf([44, 45, 50, 51]);
            expect(bracket.sweet16winner49).toBeOneOf([10, 11, 18, 19, 22, 23, 30, 31]);
            expect(bracket.sweet16winner50).toBeOneOf([2, 3, 6, 7, 0, 1, 8, 9]);
            expect(bracket.sweet16winner51).toBeOneOf([4, 5, 12, 13, 14, 15, 16, 17]);
            expect(bracket.sweet16winner52).toBeOneOf([26, 27, 28, 29, 20, 21, 24, 25]);
            expect(bracket.sweet16winner53).toBeOneOf([54, 55, 56, 57, 42, 43, 52, 53]);
            expect(bracket.sweet16winner54).toBeOneOf([36, 37, 46, 47, 48, 49, 62, 63]);
            expect(bracket.sweet16winner55).toBeOneOf([38, 39, 40, 41, 32, 33, 34, 35]);
            expect(bracket.sweet16winner56).toBeOneOf([58, 59, 60, 61, 44, 45, 50, 51]);
            expect(bracket.elite8winner57).toBeOneOf([10, 11, 18, 19, 22, 23, 30, 31, 2, 3, 6, 7, 0, 1, 8, 9]);
            expect(bracket.elite8winner58).toBeOneOf([4, 5, 12, 13, 14, 15, 16, 17, 26, 27, 28, 29, 20, 21, 24, 25]);
            expect(bracket.elite8winner59).toBeOneOf([38, 39, 40, 41, 32, 33, 34, 35, 58, 59, 60, 61, 44, 45, 50, 51]);
            expect(bracket.elite8winner60).toBeOneOf([54, 55, 56, 57, 42, 43, 52, 53, 36, 37, 46, 47, 48, 49, 62, 63]);
            expect(bracket.final4winner61).toBeOneOf([54, 55, 56, 57, 42, 43, 52, 53, 36, 37, 46, 47, 48, 49, 62, 63, 38, 39, 40, 41, 32, 33, 34, 35, 58, 59, 60, 61, 44, 45, 50, 51]);
            expect(bracket.final4winner62).toBeOneOf([10, 11, 18, 19, 22, 23, 30, 31, 2, 3, 6, 7, 0, 1, 8, 9, 4, 5, 12, 13, 14, 15, 16, 17, 26, 27, 28, 29, 20, 21, 24, 25]);
        });
    });
});

describe('Score Calculation', () => {
    it('Calculates a perfect score', () => {
        const bracket = {
            round64winner1: 1,
            round64winner2: 3,
            round64winner3: 5,
            round64winner4: 7,
            round64winner5: 9,
            round64winner6: 11,
            round64winner7: 13,
            round64winner8: 15,
            round64winner9: 17,
            round64winner10: 19,
            round64winner11: 21,
            round64winner12: 23,
            round64winner13: 25,
            round64winner14: 27,
            round64winner15: 29,
            round64winner16: 31,
            round64winner17: 33,
            round64winner18: 35,
            round64winner19: 37,
            round64winner20: 39,
            round64winner21: 41,
            round64winner22: 43,
            round64winner23: 45,
            round64winner24: 47,
            round64winner25: 49,
            round64winner26: 51,
            round64winner27: 53,
            round64winner28: 55,
            round64winner29: 57,
            round64winner30: 59,
            round64winner31: 61,
            round64winner32: 63,
            round32winner33: 5,
            round32winner34: 15,
            round32winner35: 29,
            round32winner36: 21,
            round32winner37: 11,
            round32winner38: 31,
            round32winner39: 3,
            round32winner40: 9,
            round32winner41: 57,
            round32winner42: 43,
            round32winner43: 37,
            round32winner44: 49,
            round32winner45: 41,
            round32winner46: 35,
            round32winner47: 61,
            round32winner48: 45,
            sweet16winner49: 11,
            sweet16winner50: 3,
            sweet16winner51: 5,
            sweet16winner52: 21,
            sweet16winner53: 57,
            sweet16winner54: 37,
            sweet16winner55: 41,
            sweet16winner56: 45,
            elite8winner57: 11,
            elite8winner58: 5,
            elite8winner59: 45,
            elite8winner60: 57,
            final4winner61: 57,
            final4winner62: 11,
            championshipwinner63: 57
        };
        expect(calculateEspnScore(sampleData, bracket)).toBe(1920);
    });
    it('Calculates a zero score', () => {
        const bracket = {
            round64winner1: 0,
            round64winner2: 2,
            round64winner3: 4,
            round64winner4: 6,
            round64winner5: 8,
            round64winner6: 10,
            round64winner7: 12,
            round64winner8: 14,
            round64winner9: 16,
            round64winner10: 18,
            round64winner11: 20,
            round64winner12: 22,
            round64winner13: 24,
            round64winner14: 26,
            round64winner15: 28,
            round64winner16: 30,
            round64winner17: 32,
            round64winner18: 34,
            round64winner19: 36,
            round64winner20: 38,
            round64winner21: 40,
            round64winner22: 42,
            round64winner23: 44,
            round64winner24: 46,
            round64winner25: 48,
            round64winner26: 50,
            round64winner27: 52,
            round64winner28: 54,
            round64winner29: 56,
            round64winner30: 58,
            round64winner31: 60,
            round64winner32: 62,
            round32winner33: 4,
            round32winner34: 14,
            round32winner35: 28,
            round32winner36: 20,
            round32winner37: 10,
            round32winner38: 30,
            round32winner39: 2,
            round32winner40: 8,
            round32winner41: 56,
            round32winner42: 42,
            round32winner43: 36,
            round32winner44: 48,
            round32winner45: 40,
            round32winner46: 34,
            round32winner47: 60,
            round32winner48: 44,
            sweet16winner49: 10,
            sweet16winner50: 2,
            sweet16winner51: 4,
            sweet16winner52: 20,
            sweet16winner53: 56,
            sweet16winner54: 36,
            sweet16winner55: 40,
            sweet16winner56: 44,
            elite8winner57: 10,
            elite8winner58: 4,
            elite8winner59: 44,
            elite8winner60: 56,
            final4winner61: 56,
            final4winner62: 10,
            championshipwinner63: 56
        };
        expect(calculateEspnScore(sampleData, bracket)).toBe(0);
    });
});

describe('Helper functions', () => {
    it('Checks if anyone picked that team for that game', () => {
        const demoBrackets = [
            {
                name: 'Test1',
                game1: 1,
                game2: 2,
                game3: 3
            }, {
                name: 'Test2',
                game1: 4,
                game2: 5,
                game3: 6
            }, {
                name: 'Test3',
                game1: 1,
                game2: 5,
                game3: 7
            }
        ];
        expect(teamWasPicked(1, 'game1', demoBrackets)).toBeTrue();
        expect(teamWasPicked(3, 'game1', demoBrackets)).toBeFalse();
        expect(teamWasPicked(7, 'game3', demoBrackets)).toBeTrue();
        expect(teamWasPicked(4, 'game2', demoBrackets)).toBeFalse();
    });
});
 
describe('Import bracket data', () => {
    it('Imports ESPN data', () => {
        const object = {/* Paste JSON here */};
        console.log(convertEspnPool(/*object*/));
    });
    it('Imports CBS data', () => {
        const object = {/* Paste JSON here */};
        console.log(convertCbsBracket(/*object*/));
    });
});
