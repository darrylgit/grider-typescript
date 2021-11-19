"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matches = fs_1.default
    .readFileSync('football.csv', {
    encoding: 'utf-8'
})
    .split('\n')
    .map(function (row) { return row.split(','); });
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
var manWins = matches.reduce(function (winCount, row) {
    return (row[1] === 'Man United' && row[5] === MatchResult.HomeWin) ||
        (row[2] === 'Man United' && row[5] === MatchResult.AwayWin)
        ? winCount + 1
        : winCount;
}, 0);
console.log("Man United won " + manWins + " games.");
