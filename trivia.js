"use strict";

const $ = selector => document.querySelector(selector);

const triviaQuestions = [["Who scored the very first goal in NHL history?", "Dave Ritchie", "Harry Hyland", "Joe Malone", "Eddie Gerard"],
                        ["Who was the first NHL commissioner?", "Gary Bettman", "Red Dutton", "Frank Calder", "Clarence Campbell"],
                        ["Who roared to NHL stardom as \"the Golden Jet\"?", "Bobby Hull", "Bobby Orr", "Gordie Howe", "Wayne Gretzky"],
                        ["What was the first NHL team to win back-to-back Stanley Cup titles?", "Ottawa Senators", "New York Rangers", "Vancouver Millionaires", "Montreal Canadiens"],
                        ["What year was the offsides rule introduced by the NHL?", "1930", "1950", "1970", "1990"],
                        ["Who was the fastest player in NHL history to reach 1,000 career points?", "Wayne Gretzky", "Mario Lemieux", "Sidney Crosby", "Gordie Howe"],
                        ["What player set an NHL record in 1976, with 10 points in one game?", "Darryl Sittler", "Bobby Clarke", "Phil Esposito", "Marcel Dionne"],
                        ["Which NHL team once drafted a player that didn't exist?", "Buffalo Sabres", "Philadelphia Flyers", "Pittsburgh Penguins", "Montreal Canadiens"],
                        ["The first NHL All-Star game was held as a benefit for what injured star?", "Ace Bailey", "Howie Morenz", "Eddie Shore", "King Clancy"],
                        ["Who was the first NHL player to score 50 goals in a season?", "Maurice Richard", "Gordie Howe", "Mike Bossy", "Wayne Gretzky"],
                        ["Who was the first hockey player to win Sportsman of the Year honors from Sports Illustrated?", "Bobby Orr", "Phil Esposito", "Gordie Howe", "Wayne Gretzky"],
                        ["What is a hockey puck sometimes called?", "Biscuit", "Wafer", "Cookie", "Pretzel"],
                        ["In 1993, Kris Draper was traded to the Detroit Red Wings for ____.", "$1", "$100", "Future Considerations", "A bucket of pucks"],
                        ["Who is the only NHL player that was suspended for life?", "Billy Coutu", "Marty McSorley", "Todd Bertuzzi", "Tiger Williams"],
                        ["Which No. 1 overall draft pick refused to play for Quebec Nordiques?", "Eric Lindros", "Mats Sundin", "Owen Nolan", "Alexandre Daigle"],
                        ["How many different Minnesota North Stars players scored goals against the Winnipeg Jets on November 11, 1981", "11", "12", "10", "9"],
                        ["Who is the youngest NHL captain to ever hoist the Stanley Cup?", "Sidney Crosby", "Jonathan Toews", "Mario Lemieux", "Wayne Gretzky"],
                        ["Which player won NHL Rookie of the Year at age 31?", "Sergei Makarov", "Bob Barlow", "Ken Dryden", "Evgeni Nabokov"],
                        ["Who is the oldest man ever to coach an NHL game?", "Al Arbour", "Art Ross", "Glen Sather", "Scotty Bowman"],
                        ["Who was the first woman to get her name on the Stanley Cup?", "Marguerite Norris", "Marian Ilitch", "Sonia Scurfield", "Marie-Denise Debartolo"],
                        ["Why was ThunderBug, the Tampa Bay Lightning mascot, fired in 2012?", "Spraying a fan with silly string", "Sitting in a fan's lap", "Stealing a fan's drink", "Tackling a fan"],
                        ["Which coach led the Montreal Canadiens to Stanley Cup championships in each of his first five seasons?", "Toe Blake", "Scotty Bowman", "Dick Irvin", "Cecil Hart"],
                        ["How tall was the original Stanley Cup?", "7 inches", "17 inches", "27 inches", "37 inches"],
                        ["What was the nickname of the 1970s Philadelphia Flyers?", "Broad Street Bullies", "Dirty Birds", "Flying Aces", "Orange Crush"],
                        ["Who is the only coach ever suspended in the Stanley Cup Finals?", "Jack Adams", "Pat Quinn", "Scotty Bowman", "Bob Hartley"],
                        ["Which Calgary Flames goaltender had three assists in one game?", "Jeff Reese", "Mikka Kiprusoff", "Roman Turek", "Trevor Kidd"],
                        ["Who was the only player to win the Hart Memorial Trophy as league MVP during a season that he played for two different teams?", "Joe Thornton", "Dominik Hasek", "Eddie Shore", "Phil Esposito"],
                        ["Who was the 2004 NHL Rookie of the Year?", "Andrew Raycroft", "Henrik Zetterberg", "Alexander Ovechkin", "Barett Jackman"],
                        ["How many times did Mario Lemieux score 8 points in a game?", "3", "4", "5", "2"],
                        ["Which player once ripped off a fan's shoe and beat him with it?", "Mike Milbury", "Frank Mahovlich", "Phil Esposito", "Terry O'Reilly"],
                        ["What year were the Montreal Canadiens founded?", "1909", "1914", "1919", "1924"],
                        ["Who was the first player to win the Kelly Cup (ECHL), Calder Cup (AHL), and the Stanley Cup (NHL)?", "Jay Beagle", "Patrice Bergeron", "Tomas Vokoun", "Tim Thomas"],
                        ["Who scored the goal that gave Wayne Gretzky his final point recorded in an Oilers sweater?", "Craig Simpson", "Mark Messier", "Esa Tikkanen", "Kevin Lowe"],
                        ["How many goaltenders played for the Vancouver Canucks between Kirk McLean's departure in 1998 and Roberto Luongo's arrival in 2006?", "18", "20", "16", "14"],
                        ["What did Florida Panthers fans throw on the ice during the 1995-96 season?", "Rats", "Snakes", "Catfish", "Lobsters"],
                        ["Which player holds the NHL single-season record for shooting percentage?", "Charlie Simmer", "Craig Simpson", "Alexander Ovechkin", "Sergei Federov"],
                        ["What's the most goals scored in a season by a rookie", "76", "78", "74", "72"],
                        ["Who holds the record for the most Stanley Cups as a player?", "Henri Richard", "Wayne Gretzky", "Guy Lafleur", "Brian Trottier"],
                        ["Who is the only player to score five goals five different ways in one game?", "Mario Lemieux", "Wayne Gretzky", "Sidney Crosby", "Gordie Howe"],
                        ["Who was the first goalie to be credited with a goal in NHL history?", "Bobby Smith", "Grant Fuhr", "Ron Hextall", "Andy Moog"],
                        ["In which year did the NHL officially start?", "1917", "1912", "1921", "1924"],
                        ["What NHL team did not participate in the 1983 entry draft?", "St. Louis Blues", "Edmonton Oilers", "Montreal Canadiens", "Hartford Whalers"],
                        ["What team holds the record for the most shots on goal in one game?", "Boston Bruins", "Washington Capitals", "Edmonton Oilers", "Montreal Canadiens"],
                        ["What team was forced to leave the league after its arena burned down after six games in the NHL's first season?", "Montreal Wanderers", "Vancouver Millionaires", "Seattle Metropolitans", "Quebec Bulldogs"],
                        ["Which 1960s NHL player first made waving to the crowd at centre ice popular after receiving a star of the game?", "Johnny Bower", "Jean Beliveau", "Gump Worsley", "Eddie Shack"],
                        ["What was the format for the first ever NHL All-Star Game?", "Toronto Maple Leafs vs NHL All Stars", "Whales vs Campbell", "East vs West", "North America vs World"],
                        ["Over his career, how many goals did goaltender Ron Hextall score?", "2", "1", "0", "3"],
                        ["Which NHL player was the first to begin curving their stick blade?", "Stan Mikita", "Bobby Hull", "Gordie Howe", "Yvan Cournoyer"],
                        ["Who had the second most points throughout the 80s, behind Wayne Gretzky?", "Peter Stastny", "Mark Messier", "Mike Bossy", "Mario Lemieux"],
                        ["Which player was responsible for pushing for the NHL player's association", "Ted Lindsay", "Gordie Howe", "Serge Savard", "Maurice Richard"]];

let remainingQuestions = triviaQuestions.slice();
let question = [];
let playerScore = 0;
let questionsAsked = 0;
let currentQuestion = 0;
let questionsLog = [[], [], [], [], [], [], [], [], [], []];

let incorrectAnswers = 0;
let questionsRemaining = 10;

const goal = $("#result").src;
const noGoal = $("#result").alt;

// set up an array of all div elements within the trivia gamethat are used for the trivia answers. 
// Do not include the question div or the message div.
const divElements = document.querySelectorAll(".triviaGame div:not(#triviaQuestion):not(#message)");

const populateTriviaQuestion = () => {
    //$("#next").disabled = true; // disable 'next' event listener
    $("#next").removeEventListener("click", nextQuestion);
    //$("#confirm").disabled = true;
    $("#confirm").removeEventListener("click", checkForSelectedAnswer);

    if(questionsAsked > 0){
        $("#previous").addEventListener("click", previousQuestion);
    } else {
        $("#previous").removeEventListener("click", previousQuestion);
    }


    questionsRemaining--;
    $("#qrDisplay").textContent = questionsRemaining;

    let number = Math.floor(Math.random() * remainingQuestions.length);
    question = remainingQuestions[number];
    $("#question").textContent = question[0];
    /* $("#a").textContent = question[1];
    $("#b").textContent = question[2];
    $("#c").textContent = question[3];
    $("#d").textContent = question[4]; */

    remainingQuestions.splice(number, 1);

    //const divElements = document.querySelectorAll(".triviaGame div:not(#triviaQuestion):not(#message)");
    /* for(let element of divElements){
        if ( element.id == "triviaQuestion") { 
            divElements.splice(element, 1); 
        }
    } */
    let choices = question.slice();

    // remove the question, have only the four choices remaining in array. Add question to questionsLog array
    questionsLog[questionsAsked][0] = choices[0];
    choices.splice(0, 1);

    let count = 1;
    for(let element of divElements){
        let randomIndex = Math.floor(Math.random() * choices.length);
        let choice = choices.splice(randomIndex, 1);
        element.textContent = choice;
        console.log(choice);
        questionsLog[questionsAsked][count] = choice[0];
        count++;
    }

    // store answer in element 5 for questionsLog. Answer is always the first option in the question array (index 1)
    questionsLog[questionsAsked][5] = question[1]

    for (let divElement of divElements) {
        divElement.addEventListener("click", optionSelected);
    } 
    
    console.log(questionsLog[questionsAsked])
    console.log(question[0]);

    for (let i = 0; i < questionsLog.length; i++){
        console.log(questionsLog[i]);
    }

    //return question;
};

// the event handler for the click event of each h2 element
const optionSelected = evt => {
    const divElementSelected = evt.currentTarget;              // get the clicked div element

    // create an array of all the p elements within a div inside of main
    //const divElements = document.querySelectorAll(".triviaGame div");

    // reset all previously selected options
    for (let element of divElements) {
        element.className = "";
    }

    // highlight the selected option
    if(divElementSelected.className == "selected"){
        divElementSelected.className = "";
    } else {
        divElementSelected.className = "selected";
        console.log(divElementSelected.firstChild.textContent)
    }

    //$("#confirm").disabled = false;
    $("#confirm").addEventListener("click", checkForSelectedAnswer);
    //$("#next").addEventListener("click", nextQuestion);
};

const checkForSelectedAnswer = () => {
    // create an array of all the p elements within a div inside of main
    //const divElements = document.querySelectorAll(".triviaGame div");
    console.log(question);

    //$("#confirm").disabled = true;
    $("#confirm").removeEventListener("click", checkForSelectedAnswer);

    // check to see which element has been selected
    for (let element of divElements) {
        element.removeEventListener("click", optionSelected, false);
        if(element.className == "selected"){
            console.log(element.textContent);
            questionsLog[questionsAsked][6] = element.textContent;
            if (element.textContent == question[1]){
                element.className = "correct";
                playerScore++;
                $("#homeScore").textContent = playerScore;
                displayResult(true);
                setTimeout(showTriviaGame, 2000);
            } else {
                element.className = "incorrect";
                incorrectAnswers++;
                $("#awayScore").textContent = incorrectAnswers;
                displayResult(false);
                setTimeout(showTriviaGame, 2000);
            }
        }
        if ((element.textContent == question[1]) && !(element.className == "correct")){
            element.className = "answer";
        }
    }
    // $("#next").disabled = false; // add 'next' event listener
    $("#next").addEventListener("click", nextQuestion);
    questionsAsked++;
};

const hideTriviaGame = () => {
    $(".hidden").className = "reveal";
    $(".triviaGame").className = "hidden";
    //$("#result").display.none;
    $(".resultImage").className = "hidden";
    $(".resultText h2").textContent = playerScore + " out of " + questionsAsked + " correct!";
    for(let i = 0; i < questionsLog.length; i++){
        console.log(i + " : " + questionsLog[i]);
    }
    
}

const showTriviaGame = () => {
    $(".hidden").className = "triviaGame";
    $(".reveal").className = "hidden";  
}

const loadQuestion = () => {
    //$("#next").disabled = true;
    //$("#confirm").disabled = true;
    $("#confirm").removeEventListener("click", checkForSelectedAnswer);

    if(currentQuestion == questionsAsked){
        $("#next").removeEventListener("click", nextQuestion);
    } else {
        $("#next").addEventListener("click", nextQuestion);
    }

    if(currentQuestion == 0){
        //$("#previous").disabled = true;
        $("#previous").removeEventListener("click", previousQuestion);
    } else {
        //$("#previous").disabled = false;
        $("#previous").addEventListener("click", previousQuestion);
    }

    $("#question").textContent = questionsLog[currentQuestion][0];

    //const divElements = document.querySelectorAll(".triviaGame div");
    let selection = questionsLog[currentQuestion][6];
    console.log("Selection: " + selection);

    let count = 1;
    for(let element of divElements){
        element.className = "";
        element.textContent = questionsLog[currentQuestion][count];
        count++;
    }

    if(selection){ 
    
        for(let element of divElements){
            if (element.textContent == selection){
                element.className = "selected";
            }
        }
        let answer = questionsLog[currentQuestion][5]
        console.log("Answer: " + answer);
        // check to see which element has been selected
        for (let element of divElements) {
            element.removeEventListener("click", optionSelected, false);
            if(element.className == "selected"){
                if (element.textContent == answer){
                    element.className = "correct";
                } else {
                    element.className = "incorrect";
                }
            }
            if ((element.className != "correct") && (element.textContent == answer)){
                element.className = "answer";
            }
        }
    } else {
        for (let divElement of divElements) {
            divElement.addEventListener("click", optionSelected);
        } 
        //$("#confirm").disabled = true;
        $("#confirm").removeEventListener("click", checkForSelectedAnswer);
        $("#next").removeEventListener("click", nextQuestion);
       // $("#next").disabled = true;
    }
}

// these functions had to be moved from the anonymous function created by clicking on the buttons/images. This was done in order to
// disable the event listeners at certain stages of the trivia game.

const nextQuestion = () => {
        // if there are less than 10 questions (counter starts at 0) asked and the current question to be asked has not yet been shown
        if ((questionsAsked < 10) && (questionsLog[questionsAsked][0] == null)){
            for (let divElement of divElements) {
                divElement.className = ""
            }
            currentQuestion++;
            populateTriviaQuestion();
        // if less than 10 questions are asked and the current question has already been shown and entered into the questionsLog
        } else if ((questionsAsked < 10) && (questionsLog[questionsAsked][0] != null)){
            currentQuestion++;
            loadQuestion();
        // if more than 10 questions have been asked, hide the trivia game
        } else {
            hideTriviaGame();
        }
}

const previousQuestion = () => {
    currentQuestion--;
    loadQuestion();
}

// function that changes the display after each question is answered to tell user whether they're correct or not. Accepts a boolean parameter
const displayResult = isCorrect => {
    $(".hidden").className = "reveal";
    $(".triviaGame").className = "hidden";
    
    if(isCorrect){
        $("#result").src = goal;
        $(".resultText h2").textContent = "Correct!";
        //$(".reveal").firstChild.nextElementSibling.nextElementSibling.textContent = "Correct!";
    } else {
        $("#result").src = noGoal;        
        $(".resultText h2").textContent = "Incorrect!";
        //$(".reveal").firstChild.nextElementSibling.nextElementSibling.textContent = "Incorrect!";
    }

    //$(".reveal").appendChild(document.createElement("br"));
    //$(".reveal").appendChild(textToDisplay);

    //$("#result").display.none;
}

document.addEventListener("DOMContentLoaded", () => {
    populateTriviaQuestion();
    //const divElements = document.querySelectorAll(".triviaGame div");

    //$("#next").addEventListener("click", nextQuestion);

    //$("#previous").addEventListener("click", previousQuestion);

    // event handler for the confirm button
    $("#confirm").addEventListener("click", checkForSelectedAnswer);

    // initialize scoreboard
    $("#awayScore").textContent = incorrectAnswers;
    $("#homeScore").textContent = playerScore;

      
    // attach event handler for each div tag	    
    for (let divElement of divElements) {
        divElement.addEventListener("click", optionSelected);
    }    
});