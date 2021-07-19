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
                playerScore++;
            } else {
                element.className = "incorrect";
            }
        }
    }
    $("#confirm").disabled = true;
    $("#next").disabled = false;
    questionsAsked++;
};

const hideTriviaGame = () => {
    $(".hidden").className = "reveal";
    $(".triviaGame").className = "hidden";
    $(".reveal").firstChild.nextElementSibling.textContent = playerScore + " out of " + questionsAsked + " correct!";
}

document.addEventListener("DOMContentLoaded", () => {
    // get the p tags
    populateTriviaQuestion();
    const pElements = document.querySelectorAll("main div p");

    $("#next").addEventListener("click", () => {
        if (questionsAsked < 10){
            for (let pElement of pElements) {
                pElement.className = ""
            }
            populateTriviaQuestion();
        }
        else{
            hideTriviaGame();
        }
    });

    $("#test").addEventListener("click", hideTriviaGame);

    // event handler for the confirm button
    $("#confirm").addEventListener("click", checkForSelectedAnswer);

      
    // attach event handler for each p tag	    
    for (let pElement of pElements) {
        pElement.addEventListener("click", toggle);
    }    
});