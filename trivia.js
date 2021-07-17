"use strict";

const $ = selector => document.querySelector(selector);

const triviaQuestions = [["What is the capital of Newfoundland", "St. John's", "Corner Brook", "Gander", "Mt. Pearl"],
                        ["2 + 2 = ?", "4", "6", "8", "10"],
                        ["Newfoundland joined confederation in what year?", "1949", "1972", "1849", "1872"],
                        ["CP1211 is the code designation of what course?", "Javascript", "Java", "Python", "SQL"],
                        ["Will the code for your project work properly?", "Yes", "No", "Maybe So", "I don't know"]];

let remainingQuestions = triviaQuestions.slice();
let question = [];

const populateTriviaQuestion = () => {
    $("#next").disabled = true;
    $("#confirm").disabled = true;

    let number = Math.floor(Math.random() * remainingQuestions.length);
    question = remainingQuestions[number];
    $("#question").textContent = question[0];
    /* $("#a").textContent = question[1];
    $("#b").textContent = question[2];
    $("#c").textContent = question[3];
    $("#d").textContent = question[4]; */

    remainingQuestions.splice(number, 1);

    const pElements = document.querySelectorAll("main div p");
    let choices = question.slice()

    // remove the question, have only the four choices remaining in array
    choices.splice(0, 1);

    for(let element of pElements){
        let randomIndex = Math.floor(Math.random() * choices.length);
        let choice = choices.splice(randomIndex, 1);
        element.textContent = choice;
    }

    for (let pElement of pElements) {
        pElement.addEventListener("click", toggle);
    } 
    
    console.log(question[0]);

    //return question;
};

// the event handler for the click event of each h2 element
const toggle = evt => {
    const pElementSelected = evt.currentTarget;              // get the clicked p element

    // create an array of all the p elements within a div inside of main
    const pElements = document.querySelectorAll("main div p");

    // reset all previously selected options
    for (let element of pElements) {
        element.className = "";
    }

    // highlight the selected option
    if(pElementSelected.className == "selected"){
        pElementSelected.className = "";
    } else {
        pElementSelected.className = "selected";
        console.log(pElementSelected.textContent);
    }

    $("#confirm").disabled = false;
};

const checkForSelectedAnswer = () => {
    // create an array of all the p elements within a div inside of main
    const pElements = document.querySelectorAll("main div p");
    console.log(question);

    // check to see which element has been selected
    for (let element of pElements) {
        element.removeEventListener("click", toggle, false);
        if(element.className == "selected"){
            console.log(element.textContent);
            if (element.textContent == question[1]){
                element.className = "correct";
            } else {
                element.className = "incorrect";
            }
        }
    }
    $("#confirm").disabled = true;
    $("#next").disabled = false;
};

document.addEventListener("DOMContentLoaded", () => {
    // get the p tags
    populateTriviaQuestion();
    const pElements = document.querySelectorAll("main div p");

    $("#next").addEventListener("click", () => {
        for (let pElement of pElements) {
            pElement.className = ""
        }
        populateTriviaQuestion();
    });

    // event handler for the confirm button
    $("#confirm").addEventListener("click", checkForSelectedAnswer);

      
    // attach event handler for each p tag	    
    for (let pElement of pElements) {
        pElement.addEventListener("click", toggle);
    }    
});