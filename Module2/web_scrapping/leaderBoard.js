const request = require('request'); 
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

let leaderboard = []

request(link , cb)
function cb(error , respond , html){
    if(error){
        console.log(error);
    }else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allScorecardTag = document.querySelectorAll('a[data-hover="Scorecard"]');
       
        for (let i = 0; i < allScorecardTag.length; i++){
            let link = allScorecardTag[i].href;   
            let completeLink = "https://www.espncricinfo.com/" + link;
            //console.log(completeLink);
            request(completeLink, cb2)
         }
    }
}

function cb2(error , response , html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsmanRow = document.querySelectorAll(".table.batsman tbody tr");
        for (let i = 0; i < batsmanRow.length;i++){
            let cell = batsmanRow[i].querySelectorAll("td");
            if(cell.length == 8){
                let name = cell[0].textContent;
                let runs = cell[2].textContent;
                let balls = cell[3].textContent;
                let fours  = cell[5].textContent;
                let sixes = cell[6].textContent;
                //console.log("Name :",name , "Runs :",runs, "Balls :",balls , "Fours :", fours, "Sixes :",sixes );


            }
        }
    }
}

processPlayer('Rohit','10','4','2','4');
processPlayer('Virat','30','10','3','2');
processPlayer('Rohit','40','8','2','3');
console.log(leaderboard);

function processPlayer(name,runs,balls,fours,sixes){
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);

    for(let i=0; i<leaderboard.length;i++){
        let playerObj = leaderboard[i];
        if(playerObj.Name == name){
            //will do some work here
            playerObj.Runs += runs;
            playerObj.Balls += balls;
            playerObj.Fours += fours;
            playerObj.Sixes += sixes;
            return ; 
        } 
    }
    //come coming hear means we did not find our player inside leaderboard
    let obj = {
        Name :name,
        Runs :runs,
        Balls :balls,
        Fours :fours,
        Sixes : sixes
    }
    leaderboard.push(obj);
}