//TIC TAC TOE GAME

//PLAYER TURN
let activePlayer = 'X';

let selectedSquares = []; //Store an array of moves. Use to determine win conditions.
//END PLAYER TURN

//PLACE AN X OR O IN A SQUARE
function placeXorO(squareNumber) {
    //This condition ensures a square hasn'te been selected already.
    //The some method is used to check each element of the selectedSquares array to see if it contains the squre number clicked on.
    if(!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber); //Retrieve the HTML element id that was clicked.
        if (activePlayer === 'X') {     //Check whose turn it is.
            select.style.backgroundImage = 'url("images/x.png")'; //If activePlayer is equal to "X", place x.png into HTML.
        }
        else {  //Active player may only be "X" or "O", so if not "X", it must be "O".
            select.style.backgroundImage = 'url("images/o.png")'; //If activePlayer is not "X", place o.png into HTML.
        }
        selectedSquares.push(squareNumber + activePlayer); //concatenate squareNumber and activePlayer and add to array.
        checkWinConditions();   //Call function to check for win conditions.
        if (activePlayer === 'X') {     //If activePlayer is X, change it to O.
            activePlayer = 'O';         
        }
        else {
            activePlayer = 'X';         //If activePlayer is anything other than X, change the active player to X.
        }        
        //PLACEMENT SOUNDS
        audio('./media/place.mp3'); //Play placement sound.
        if (activePlayer === 'O') {  //Check if it's the computers turn.
            disableClick();         //Disable clicking for computer's turn.
            setTimeout(function () { computersTurn(); }, 1000); //Add 1 second wait before the computer places an image and enables click.
        }
        return true; //return true; is needed for computersTurn() function to work.
    }
    function computersTurn() {  //The computer selects a random square.
        let success = false;    //Boolean variable needed for while loop.
        let pickASquare;        //Store a random number 0-8.
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9)); //Computer selects a random number 0-8.
            if (placeXorO(pickASquare)) {   //If the random number evalueated returns ture, the square hasn't been selected yet.
                placeXorO(pickASquare);     //Call the function
                success = true;             //Change the boolean to end the loop.
            };
        }
    }
}
//END PLACE AN X OR O IN A SQUARE

//MAKE BODY ELEMENT TEMPORARILY UNCLICKABLE
function disableClick() {
    body.style.pointerEvents = "none";  //Make the body unclickable.
    setTimeout(function () { body.style.pointerEvents = "auto"; }, 1000);    //Make the body clickable again after 1 second.
}
//END MAKE BODY ELEMENT TEMPORARILY UNCLICKABLE

//WIN CONDITIONS
//Parse the selectedSquares array to search for win conditions.
//drawLine() function to draw a line on the screen if the condition is met.
function checkWinConditions() {     
    //X 0, 1, 2 condition, and so on...
    if (arrayIncludes('0X', '1X', '2X')) {   
        drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) {
        drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) {
        drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) {
        drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) {
        drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) {
        drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) {
        drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) {
        drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0O', '1O', '2O')) {   
        drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) {
        drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) {
        drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) {
        drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) {
        drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) {
        drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) {
        drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) {
        drawWinLine(100, 100, 520, 520) }
    //Check for a tie.
    else if (selectedSquares.length >=9) {
        audio('./media/tie.mp3');
        setTimeout(function() { resetGame() }, 500);
    }
}
//END WIN CONDITIONS

//CHECK FOR EACH WIN CONDITION
function arrayIncludes(squareA, squareB, squareC) {
    //These three variables will be used to check for 3 in a row.
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    if (a === true && b === true && c === true) {
        return true;
    }
}
//END CHECK FOR EACH WIN CONDITION

//PLACEMENT SOUND
function audio(audioURL) {  //function to take a string parameter of the path set earlier for placement sound("./media/place.mp3").
    let audio = new Audio(audioURL);    //create new audio object and pass the path as a parameter.
    audio.play();   //Play audio sound. 
}
//END PLACEMENT SOUND

//DRAW WIN LINE ON CANVAS
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById("win-lines");    //Access HTML canvas element.
    const c = canvas.getContext('2d');  //Access methods and properties to use on canvas.
    let x1 = coordX1,   //Starting point of the lines x-axis. 
        x2 = coordX2,   //Ending point of the lines x-axis.
        y1 = coordY1,   //Starting poing of the lines y-axis.
        y2 = coordY2,   //Ending point of the lines y-axis. 
        x = x1,     //Store temporary x-axis data that updates in animation loop.
        y = y1;     //Store temporary y-axis data that updates in animation loop.
    function animateLineDrawing() { //Interacts with canvas
        const animationLoop = requestAnimationFrame(animateLineDrawing); //Create a loop
        c.clearRect(0, 0, 608, 608);    //Clear the content from the last loop iteration.
        c.beginPath();      //Start a new path
        c.moveTo(x1, y1);   //Move to a starting point in our line.
        c.lineTo(x, y);     //Indicate the end point in our line.
        c.lineWidth = 15;   //Set the width of the line.
        c.strokeStyle = 'rgba(70, 255, 33, .8)';    //Line color
        c.stroke();         //Draws the line
        if (x1 <= x2 && y1 <= y2) {     //Check if at endpoints
            if (x < x2) { x += 10; }    //Adds 10 to the previous end x endpoint. 
            if (y < y2) { y += 10; }    //Add 10 to the previous end y endpoint.
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }    //Necessary for the 6, 4, 2 diagonal win condition.
        }
        if (x1 <= x2 && y1 >= y2) {     //Necessary for the 6, 4, 2 diagonal win condition.
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    //CLEAR WIN LINE AFTER GAME
    function clear() {
        const animationLoop = requestAnimationFrame(clear);     //Start animation loop
        c.clearRect(0, 0, 608, 608);    //Clear the canvas
        cancelAnimationFrame(animationLoop);    //Stop animation loop
    }
    //DISABLE CLICK
    disableClick();     //Disables click while the win sound plays
    //WIN SOUND
    audio('./media/winGame.mp3');   //Play win sound.
    //CALL ANIMATION LOOP
    animateLineDrawing();       //Calls the main animation loop.
    //GAME RESET
    setTimeout(function () {
        clear();
        resetGame(); }, 1000);
}
//END DRAW WIN LINE ON CANVAS

//RESET GAME AFTER WIN OR TIE
function resetGame() {
    for (let i = 0; i < 9; i++) {   //Loop to iterate through each HTML square element
        let square = document.getElementById(String(i));    //Get HTML element i
        square.style.backgroundImage = ""; //Remove backgroundImage from elements
    }
    selectedSquares= []; //Resets array to null.
}
//END RESET GAME AFTER WIN OR TIE

//END TIC TAC TOE GAME