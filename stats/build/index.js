"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
var manWins = reader.data.reduce(function (winCount, row) {
    return (row[1] === 'Man United' && row[5] === MatchResult.HomeWin) ||
        (row[2] === 'Man United' && row[5] === MatchResult.AwayWin)
        ? winCount + 1
        : winCount;
}, 0);
console.log("Man United won " + manWins + " games.");
