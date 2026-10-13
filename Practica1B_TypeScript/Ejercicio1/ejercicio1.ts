type Ranking = [number, string, boolean];

let position: number;
let playerName: string;
let finishedGame: boolean;
let ranking: Ranking;
let hallOfRanking: Ranking[] = [];


position = 1;
playerName = "Lucía";
finishedGame = true;
ranking = [position, playerName, finishedGame];
hallOfRanking.push(ranking);

position = 2;
playerName = "Mateo";
finishedGame = false;
ranking = [position, playerName, finishedGame];
hallOfRanking.push(ranking);

console.log("Hall of Ranking:", hallOfRanking);