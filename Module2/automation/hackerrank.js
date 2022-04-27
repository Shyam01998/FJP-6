const puppeteer = require('puppeteer');
const mail = "gerexo3510@idurse.com";
const pass = "sahoo@2022";

let browserPromise = puppeteer.launch({headless: false,}) ;
let page;

browserPromise.then(function(browser){
    console.log("browser is opened");
     let pagePromise = browser.newPage();
     return pagePromise;
 }).then(function(pageInstance){
     console.log("page is opened");
     page = pageInstance;
     let urlPromise = page.goto("https://www.hackerrank.com/")
 }).then(function(){
     console.log("Hackrank page is opened");
     let waitPromise = page.waitForSelector("ul.menu a");
     return waitPromise;
 }).then(function(){
     let clickPromise = page.click("ul.menu a");
     return clickPromise;
 }).then(function(){
     let waitPromise = page.waitForSelector(".fl-module-content.fl-node-content .fl-button");
     return waitPromise;
 }).then(function(){
     let domClickPromise = page.evaluate(function(){
         let btns = document.querySelectorAll(".fl-module-content.fl-node-content .fl-button") 
         btns[1].click();
         return;
     });
     return domClickPromise;
 }).then(function(){
     let waitPromise = page.waitForSelector("#input-1");
     return waitPromise;
 }).then(function(){
     let mailTypedPromise = page.type("#input-1",mail,{delay:100});
     return mailTypedPromise;
 }).then(function(){
     let passTypedPromise = page.type("#input-2",pass,{delay:100});
     return passTypedPromise;
 }).then(function(){
     let clickPromse = page.click('button[data-analytics="LoginPassword"]');
     return clickPromse;
 }).then(function(){
     console.log("Login successfull ho gaya hai");
     let waitPromise = page.waitForSelector('[data-automation="algorithms"]');
     return waitPromise;
 }).then(function(){
     let clickPromise = page.click('[data-automation="algorithms"]');
     return clickPromise;
 })

    .then(function () {
        return page.waitForSelector(".filter-group");
    }).then(function () {
        let domSelectPromise = page.evaluate(function () {
            let allDivs = document.querySelectorAll(".filter-group");
            let div = allDivs[3];
            let clickSelector = div.querySelector(".ui-checklist-list-item input");
            clickSelector.click();
            return;
        })
        return domSelectPromise;
    }).then(function () {
        console.log("warmup Selected");
        return page.waitForSelector('.challenges-list .js-track-click.challenge-list-item');
    }).then(function () {
    })