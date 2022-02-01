let players = [
    ["tamim",20],
    ["imrul",30],
    ["shakib",150],
    ["Mushi",160],
    ["mahmudullah",34]
];

function highestRunGetter(players) {

    let highestScorer = players[0][0];
    let highestRun = players[0][1];

    for (let x = 1; x < players.length; x++) {
        if(highestRun < players[x][1]){
            highestRun = players[x][1];
            highestScorer = players[x][0];
        }
        
    }

    return highestScorer;
    
}
console.table(players)

var manOfTheMatch= highestRunGetter(players);
console.log(manOfTheMatch)