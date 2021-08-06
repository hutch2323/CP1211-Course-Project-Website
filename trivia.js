"use strict";

// function used to select a particular html element
const $ = selector => document.querySelector(selector);

// 2D array used to hold all of the trivia questions. The answer to each question is stored in the 2nd index of that array
const triviaQuestions = [["Who scored the very first goal in NHL history?", "Dave Ritchie", "Harry Hyland", "Joe Malone", "Eddie Gerard"],
                        ["Who was the first NHL commissioner?", "Gary Bettman", "Red Dutton", "Frank Calder", "Clarence Campbell"],
                        ["Who roared to NHL stardom as \"The Golden Jet\"?", "Bobby Hull", "Bobby Orr", "Gordie Howe", "Wayne Gretzky"],
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
                        ["How many different Minnesota North Stars players scored goals against the Winnipeg Jets on November 11, 1981?", "11", "12", "10", "9"],
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
                        ["What's the most goals scored in a season by a rookie?", "76", "78", "74", "72"],
                        ["Who holds the record for the most Stanley Cups as a player?", "Henri Richard", "Wayne Gretzky", "Guy Lafleur", "Brian Trottier"],
                        ["Who is the only player to score five goals five different ways in one game?", "Mario Lemieux", "Wayne Gretzky", "Sidney Crosby", "Gordie Howe"],
                        ["Who was the first goalie to be credited with a goal in NHL history?", "Billy Smith", "Grant Fuhr", "Ron Hextall", "Andy Moog"],
                        ["In which year did the NHL officially start?", "1917", "1912", "1921", "1924"],
                        ["What NHL team did not participate in the 1983 entry draft?", "St. Louis Blues", "Edmonton Oilers", "Montreal Canadiens", "Hartford Whalers"],
                        ["What team holds the record for the most shots on goal in one game?", "Boston Bruins", "Washington Capitals", "Edmonton Oilers", "Montreal Canadiens"],
                        ["What team was forced to leave the league after its arena burned down after six games in the NHL's first season?", "Montreal Wanderers", "Vancouver Millionaires", "Seattle Metropolitans", "Quebec Bulldogs"],
                        ["Which 1960s NHL player first made waving to the crowd at centre ice popular after receiving a star of the game?", "Johnny Bower", "Jean Beliveau", "Gump Worsley", "Eddie Shack"],
                        ["What was the format for the first ever NHL All-Star Game?", "Toronto Maple Leafs vs NHL All Stars", "Wales vs Campbell", "East vs West", "North America vs World"],
                        ["Over his career, how many goals did goaltender Ron Hextall score?", "2", "1", "0", "3"],
                        ["Which NHL player was the first to begin curving their stick blade?", "Stan Mikita", "Bobby Hull", "Gordie Howe", "Yvan Cournoyer"],
                        ["Who had the second most points throughout the 80s, behind Wayne Gretzky?", "Peter Stastny", "Mark Messier", "Mike Bossy", "Mario Lemieux"],
                        ["Which player was responsible for pushing for the NHL player's association?", "Ted Lindsay", "Gordie Howe", "Serge Savard", "Maurice Richard"]];

let question = []; // array used to hold the current question
let playerScore = 0; // variable used to hold the number of correct answers
let incorrectAnswers = 0; // variable used to hold the number of incorrect answers
let questionsAsked = 0; // variable used to count the number of questions asked to the user
let currentQuestion = 0; // variable used to hold the number of the current question being displayed
let questionsLog = [[], [], [], [], [], [], [], [], [], []]; // array used to hold the questions that have been previously asked during the quiz
let questionsRemaining = 10; // variable used to hold the number of questions to be asked that are remaining. Initialized to 10
let questionCount = 0; // variable that holds the number of questions asked to display on the scoreboard
let goal; // variable used to hold the .gif file that plays when user gets a correct answer
let noGoal; // variable used to hold the .gif file that plays when user guesses the wrong answer
const imageCache = []; // array to hold the cached images for the goal/no goal referee gifs
let isReview = false; // boolean variable used when the user reviews their quiz. Set to false if not "reviewing"

// set up an array of all div elements within the trivia game that are used for the trivia answers. 
// Do not include the question div or the message div.
const divElements = document.querySelectorAll(".triviaGame div:not(#triviaQuestion):not(#message)");

// function that is called to display a new trivia question on the screen
const populateTriviaQuestion = () => {
    // remove event listeners for the next and confirm buttons
    $("#next").removeEventListener("click", nextQuestion);
    $("#confirm").removeEventListener("click", checkForSelectedAnswer);
    // if the question being asked is not first question of the quiz
    if(questionsAsked > 0){
        // add event listener for the previous button
        $("#previous").addEventListener("click", previousQuestion);
    } else { // if it is the first question
        // remove event listener for the previous button
        $("#previous").removeEventListener("click", previousQuestion);
    }
    questionsRemaining--; // decrease the questionsRemaining counter by 1
    questionCount = 10 - questionsRemaining; // determine question count
   // display the question count to the scoreboard
    $("#qrDisplay p").textContent = questionCount;
    // work around for custom scoreboard font being offset when the question # is 1
    if ((questionCount == 1) || (questionCount == 10)) {
        $("#qrDisplay p").style.padding = "0 10px 0 0";
    } else {
        $("#qrDisplay p").style.padding = "0px 0px 0px 0px";
    }
    let number = Math.floor(Math.random() * triviaQuestions.length); // generate a random number (0-49)
    question = triviaQuestions[number]; // grab a question from triviaQuestion using the random number as an index
    // display the question number as well as the question in the trivia game section
    $("#question").textContent = questionCount + ". " + question[0]; 
    triviaQuestions.splice(number, 1); // remove the question from the triviaQuestions array
    let choices = question.slice(); // copy question array to a new array
    // remove the question, have only the four choices remaining in array. Add question to questionsLog array
    questionsLog[questionsAsked][0] = choices[0];
    choices.splice(0, 1);
    let count = 1; // initialize counter to 1. Counter used for array indexing in the following for-loop
    // loop through the divElements array
    for(let element of divElements){
        let randomIndex = Math.floor(Math.random() * choices.length); // generate a random number (0-3)
        let choice = choices.splice(randomIndex, 1); // grab an answer from the choices array using the random number. This will radomize order.
        element.textContent = choice; // assign the choice to the current divElement
        // add the choice to the questionLog in the "random" order presented to the user. Used to keep track of which choices were displayed where for reviewing
        questionsLog[questionsAsked][count] = choice[0]; 
        count++; // increase the counter
    }
    // store answer in element 5 for questionsLog. Answer is always the first option in the question array (index 1). Since the options in the new
    // array are different than the triviaQuestions array, the answer is no longer guarenteed to be at index 1, therefore it needs to be added.
    questionsLog[questionsAsked][5] = question[1]
    // loop through the array of div elements and add event listeners
    for (let divElement of divElements) {
        divElement.addEventListener("click", optionSelected);
    } 
};

// the function (event handler) for the click event of each div element
const optionSelected = evt => {
    const divElementSelected = evt.currentTarget; // get the clicked div element
    $("#previous").removeEventListener("click", previousQuestion); // remove event listener for previous/back button
    // reset all previously selected options by changing their class name to an empty string
    for (let element of divElements) {
        element.className = "";
    }
    // if the element selected currently has the class name of "selected", set it to the empty string
    if(divElementSelected.className == "selected"){
        divElementSelected.className = "";
    } else { // otherwise, set it to "selected". This will highlight it yellow
        divElementSelected.className = "selected";
    }
    // add event listener for the confirm button
    $("#confirm").addEventListener("click", checkForSelectedAnswer);
};

const checkForSelectedAnswer = () => {
    $("#confirm").removeEventListener("click", checkForSelectedAnswer); // remove event listener for the confirm button
    // check to see which element has been selected by looping through the divElements array
    for (let element of divElements) {
        element.removeEventListener("click", optionSelected); // remove the event lister for the current div element
        if(element.className == "selected"){ // if the element is the selected element
            questionsLog[questionsAsked][6] = element.textContent; // add the user's answer to the question log
            if (element.textContent == question[1]){ // if the user's answer is the actual answer to the question
                element.className = "correct"; // change the class name of the element to "correct". This will highlight it green
                playerScore++; // increment the player's score by 1
                displayResult(true); // call the displayResult function with a parameter of true
                setTimeout(showTriviaGame, 2000); // after 2 seconds, call the showTriviaGame function
                // work around for custom scoreboard font being offset when the score is 1
                if (playerScore == 1){
                    $("#homeScore p").style.padding = "0 25px 0 0";
                } else if (playerScore == 10){
                    $("#homeScore p").style.padding = "0 25px 0 0";
                } else {
                    $("#homeScore p").style.padding = "0px 0px 0px 0px";
                }
                $("#homeScore p").textContent = playerScore; // assign the player's score to the scoreboard
            } else { // if the user's answer is not the actual answer to the question
                element.className = "incorrect"; // change the class name to "incorrect". This will highlight it red
                incorrectAnswers++; // increment the user's number of incorrect answers by 1
                displayResult(false); // call displayResult with a boolean parameter of false
                setTimeout(showTriviaGame, 2000); // wait 2 seconds and then call the showTriviaGame function
                // work around for custom scoreboard font being offset when the score is 1
                if ((incorrectAnswers == 1) || (incorrectAnswers == 10)){
                    $("#awayScore p").style.padding = "0 25px 0 0";
                }
                else {
                    $("#awayScore p").style.padding = "0px 0px 0px 0px";
                }
                $("#awayScore p").textContent = incorrectAnswers; // assign the number of incorrect answers to the scoreboard
            }
        }
        // if the current element holds the answer, but the className is not "correct", set the class name to "answer". This will put a green border around the correct answer.
        if ((element.textContent == question[1]) && !(element.className == "correct")){
            element.className = "answer";
        }
    }
    $("#next").addEventListener("click", nextQuestion); // add event lisener for the next button
    questionsAsked++; // increase the questionsAsked counter by 1
};

// this function displays the quiz results and shows the "reveal" class on the webpage
const showQuizResults = () => {
    $("#reveal").className = "reveal"; // reveal the hidden results page
    $(".triviaGame").className = "hidden"; // hide the triviaGame div
    $("#resultImage").className = "hidden"; // hide the resultImage div
    $('#reviewQuiz').className = "reviewQuiz"; // ensure that reviewQuiz is no longer hidden
    $(".resultText h1").textContent = "Quiz Complete!" // add text to the h1 element
    $(".resultText h2").textContent = playerScore + " out of " + questionsAsked + " correct!"; // display user's score to h2 element
    $(".resultText h3").textContent = playerScore + "/" + questionsAsked + " = " + playerScore/questionsAsked*100 + "%"; // display quiz % to h3
    let playerMessage = ""; // initialize the playerMessage variable
    // determining a message to the display based on the player's quiz result
    if (playerScore <= 2){ 
        playerMessage = "Awful performance. Time to head back to training camp!";
    } else if (playerScore < 5) { 
        playerMessage = "Poor performance. Maybe listen to the coach next time!";
    } else if (playerScore == 5){
        playerMessage = "Decent performance, but it could use improvement!"
    } else if (playerScore <= 7){
        playerMessage = "Good job! The coach is impressed!"
    } else if (playerScore <= 9) {
        playerMessage = "Great job! You're on the path to become a superstar!"
    } else if (playerScore == 10) {
        playerMessage = "Amazing job! You're on track to make the Hall-of-Fame!"
    }
    $(".resultText h4").textContent = playerMessage; // display the message to the h4 element
    $("#reviewQuiz").textContent = "Review Quiz"; // display the Review button
    $("#retakeQuiz").textContent = "Retake Quiz"; // display the Retake button
    $("#reviewQuiz").addEventListener("click", reviewQuiz); // add event listener for the review button
    $("#retakeQuiz").addEventListener("click", () => { // if the user wants to retake the quiz, refresh the browser and begin new quiz
        location.reload();
    });    
}

// function that "switches" the website into review mode
const reviewQuiz = () => {
    currentQuestion = 0; // set the currentQuestion to 0
    isReview = true; // set the isReview boolean to true. This indicates "review" mode
    loadQuestion(); // call the loadQuestion function. This will now load the first question in the quiz
    $("#next").addEventListener("click", nextQuestion); // add an event listener for the next button
    showTriviaGame(); // call function to show the trivia game again
}

// function used to display the trivia game
const showTriviaGame = () => {
    $("#triviaGame").className = "triviaGame";
    $("#reveal").className = "hidden"; // hide the reveal page
    $("#welcome").className = "hidden"; // hide the welcome page
}

// function used to load questions. This is used when navigating previously asked questions or reviewing
const loadQuestion = () => {
    $("#confirm").removeEventListener("click", checkForSelectedAnswer); // remove event listener for the confirm button
    if(currentQuestion == questionsAsked){ // if the currentQuestion is the question being asked, prevent moving forward
        $("#next").removeEventListener("click", nextQuestion); // remove the event listener for the next button
    } else { // otherwise
        $("#next").addEventListener("click", nextQuestion); // add the event listner for the next button
    }
    if(currentQuestion == 0){ // if looking at the first question in the quiz
        $("#previous").removeEventListener("click", previousQuestion); // remove the event lisener for the previous button
    } else { // if it's not the first question
        $("#previous").addEventListener("click", previousQuestion); // add an event listener for the previous button
    }
    $("#question").textContent = currentQuestion + 1 + ". " + questionsLog[currentQuestion][0]; // load the question and number into the question div
    let selection = questionsLog[currentQuestion][6]; // grab the user's selection that was previously assigned to the questions log
    let count = 1; // initialize this counter to 1. The purpose for this is to skip the question, which is scored at the 1st index
    for(let element of divElements){ // loop through the div elements of the trivia game
        element.className = ""; // set the class name to an empty string
        element.textContent = questionsLog[currentQuestion][count]; // assign the options (multiple choice) as they appeared when first asked
        count++; // increment counter by 1
    }
    if(selection){ // if there is currently a user selected answer logged in the array
        for(let element of divElements){ // loop through the div elements
            if (element.textContent == selection){ // if the content of the div elements is equal to the user's selection
                element.className = "selected"; // assign the class name "selected" to the element
            }
        }
        let answer = questionsLog[currentQuestion][5] // grab the answer from the questionLog
        // loop through the divElements again
        for (let element of divElements) {
            element.removeEventListener("click", optionSelected); // remove the event listener for each div
            if(element.className == "selected"){ // if the class name of the element is selected
                if (element.textContent == answer){ // if the text content of the selected element is equal to the answer
                    element.className = "correct"; // change the element's classname to "correct"
                } else { // otherwise
                    element.className = "incorrect"; // change the element's classname to "incorrect"
                }
            }
            if ((element.className != "correct") && (element.textContent == answer)){ // if the classname is not "correct", but the text content of the div holds the answer
                element.className = "answer"; // assign the "answer" classname to the div
            }
        }
    } else { // if the question currently doesn't have a user selected answer
        for (let divElement of divElements) {
            divElement.addEventListener("click", optionSelected); // add event listeners to each div
        } 
        $("#confirm").removeEventListener("click", checkForSelectedAnswer); // remove the event listener for the confirm button
        $("#next").removeEventListener("click", nextQuestion); // remove the event listener for the next button
    }
}

// these functions had to be moved from the anonymous function created by clicking on the buttons/images. This was done in order to
// disable the event listeners at certain stages of the trivia game.

// function used to handle the click event of the next button. It moves the trivia game to the next question
const nextQuestion = () => {
        // if there are less than 10 questions asked (counter starts at 0) and the current question to be asked has not yet been shown
        if ((questionsAsked < 10) && (questionsLog[questionsAsked][0] == null)){
            for (let divElement of divElements) {
                divElement.className = "" // remove the classname for each element
            }
            currentQuestion++; // increase the currentQuestion counter by one
            populateTriviaQuestion(); // call the populateTriviaQuestion function to grab a new question
        // if less than 10 questions are asked and the current question has already been shown and entered into the questionsLog
        // or the quiz is being reviewed and not on the 10th question
        } else if (((questionsAsked < 10) && (questionsLog[questionsAsked][0] != null)) || ((isReview) && (currentQuestion != 9))){
            currentQuestion++; // increase the current question counter by 1
            loadQuestion(); // call the loadQuestion function to load the question as it was previously shown to the user
        // if 10 questions have been asked and the quiz is not being reviewed
        // or if the quiz is being reviewed and currently on the 10th question, hide the trivia game
        } else if ((!isReview) || ((isReview) && (currentQuestion == 9))){
            isReview = false; // move out of review mode
            showQuizResults(); // display the results page
        }
}

// function used to handle the event when the previous button is clicked
const previousQuestion = () => {
    currentQuestion--; // decrease the currentQuestion counter by 1
    loadQuestion(); // call the loadQuestion function
}

// function that changes the display after each question is answered to tell user whether they're correct or not. Accepts a boolean parameter
const displayResult = isCorrect => {
    if(isCorrect){ // if the user's answer is correct
        $("#result").src = goal; // display the image corresponding to having a correct answer
        $(".resultText h1").textContent = "Correct!";
    } else {
        $("#result").src = noGoal; // display the image corresponding to having an incorrect answer
        $(".resultText h1").textContent = "Incorrect!";
    }
    $("#reveal").className = "reveal"; // reveal the hidden page
    $("#triviaGame").className = "hidden"; // hide the trivia page
}

document.addEventListener("DOMContentLoaded", () => {
    questionCount = 10 - questionsRemaining; // calculate the question count. This should be 0 for scoreboard display
    $("#qrDisplay p").textContent = questionCount; // assign value of questionCount to the scoreboard
    $("#reveal").className = "hidden"; // hide the reveal page
    $("#triviaGame").className = "hidden"; // hide the trivia game
    $('.reviewQuiz').className = "hidden"; // hide the reviewQuiz class
    $("#startQuiz").addEventListener("click", () => { // add event listener to the start quiz button
        populateTriviaQuestion(); // populate the first trivia question
        showTriviaGame(); // show the trivia game
    });
    // initialize scoreboard. Both values will be 0 at this point
    $("#awayScore p").textContent = incorrectAnswers;
    $("#homeScore p").textContent = playerScore;    
    // attach event handler for each div tag	    
    for (let divElement of divElements) {
        divElement.addEventListener("click", optionSelected);
    }    
    // process and pre-load images
    goal = $("#result").src;
    noGoal = $("#result").alt;
    const hiddenImage = new Image(); // preload the image stored in id (hidden no goal image)
    hiddenImage.src = $("#result").alt; // assign the id of the current image as the src of the hidden image
    hiddenImage.alt = $("#result").src; // assign the src of the current image as the id of the hidden image
    imageCache[imageCache.length] = hiddenImage; // add hidden image to array to cache it
});