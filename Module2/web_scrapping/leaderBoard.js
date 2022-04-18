const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');
const xlsx = require("json-as-xlsx");

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

let leaderboard = [];
let counter = 0;

request(link, cb)
function cb(error, respond, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allScorecardTags = document.querySelectorAll(".ds-border-b.ds-border-line");
        for (let i = 0; i < 60; i++) {
            let anchorTagAll = allScorecardTags[i].querySelectorAll("a");
            let link = anchorTagAll[2].href;
            let completeLink = "https://www.espncricinfo.com" + link;
           // console.log(completeLink);
            request(completeLink, cb2);
            counter++;
        }
    }
}

function cb2(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsmanRow = document.querySelectorAll('tbody [class="ds-border-b ds-border-line ds-text-tight-s"]');
        for (let i = 0; i < batsmanRow.length; i++) {
            let cell = batsmanRow[i].querySelectorAll("td");
            if (cell.length == 8) {
                let name = cell[0].textContent;
                let runs = cell[2].textContent;
                let balls = cell[3].textContent;
                let fours = cell[5].textContent;
                let sixes = cell[6].textContent;
               // console.log("Name :", name, "Runs :", runs, "Balls :", balls, "Fours :", fours, "Sixes :", sixes);
                processPlayer(name, runs, balls, fours, sixes);


            }
        }
        counter--;
        if (counter == 0) {
            console.log(leaderboard);
            let data = JSON.stringify(leaderboard);
            fs.writeFileSync('BatsmenStats.json', data); 
            let dataExcel = [
                {
                    sheet: "IPL Stats",
                    columns: [
                        { label: "Name", value: "Name" }, // Top level data
                        { label: "Innings", value: "Innings" },
                        { label: "Runs", value: "Runs" }, // Custom format
                        { label: "Balls", value: "Balls" }, // Run functions
                        { label: "Fours", value: "Fours" },
                        { label: "Sixes", value: "Sixes" },
                    ],
                    content: leaderboard

                },

            ]

            let settings = {
                fileName: "BatsmenDetail", // Name of the resulting spreadsheet
                extraLength: 3, // A bigger number means that columns will be wider
                writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
            }

            xlsx(dataExcel, settings) // Will download the excel file
        }
    }
}

function processPlayer(name, runs, balls, fours, sixes) {
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);

    for (let i = 0; i < leaderboard.length; i++) {
        let playerObj = leaderboard[i];
        if (playerObj.Name == name) {
            //will do some work here
            playerObj.Runs += runs;
            playerObj.Innings += 1;
            playerObj.Balls += balls;
            playerObj.Fours += fours;
            playerObj.Sixes += sixes;
            return;
        }
    }
    //come coming hear means we did not find our player inside leaderboard
    let obj = {
        Name: name,
        Innings: 1, 
        Runs: runs,
        Balls: balls,
        Fours: fours,
        Sixes: sixes
    }
    leaderboard.push(obj);
}
