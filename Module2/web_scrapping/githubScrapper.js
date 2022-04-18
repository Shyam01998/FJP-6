const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://github.com/topics";

request(link , cb)

function cb(error , respond , html){
    if(error){
        console.log(error);
    }
    else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allAnchorTags = document.querySelectorAll(".no-underline.d-flex.flex-column.flex-justify-center");
        for(let i = 0; i<allAnchorTags.length; i++){
            let link = allAnchorTags[i].href;
            let completeLink = "https://github.com/topics"+link;
            console.log(completeLink);
            request(completeLink , cb2)
        }
    }

    function cb2(error , respond , html){
        if(error){
            console.log(error);
        }else{
            const dom = new JSDOM(html);
            const document = dom.window.document;
        }
    }

}