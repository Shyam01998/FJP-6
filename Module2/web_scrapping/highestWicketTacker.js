const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link ="https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link , cb);

function cb(error, respond , html){
    if(error){
        console.log(error);
    }else 
    {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let maxWicket = 0;
        let nameofhighestwickettacket= 0;
        let bowlerTable = document.querySelectorAll(".table.bowler");
        for(let i = 0; i <bowlerTable.length; i++){
            let rows = bowlerTable[i].querySelectorAll('tbody tr')
            for(let j = 0; j < rows.length; j++){
                let tds = rows[j].querySelectorAll("td");
                if(tds.length >1){
                    let name = tds[0].textContent;
                    let wicket = tds[4].textContent;
                    console.log("Name of Bowler--> ",name, "      Wickets--> ", wicket);
                    if(wicket > maxWicket){
                        maxWicket = wicket; 
                        nameofhighestwickettacket = name;
        

                    }
                    
                }
            }
        }
        console.log("Name of highest wicket tacker :",nameofhighestwickettacket);
        console.log("Number of wicket  : " ,maxWicket )
        
    }

}