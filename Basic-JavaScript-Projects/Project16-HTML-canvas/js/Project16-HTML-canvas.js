//GET ELEMENT BY CLASS
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";  //calls the variable A, at the 0 number instance- which is any with class "Click"
}
//END GET ELEMENT BY CLASS

//CANVAS HTML ELEMENT
var canv = document.getElementById("Canvas_Name");
var ctx = canv.getContext("2d");
//line:
ctx.moveTo(0, 0);
ctx.lineTo(500, 300);   //the height and width dimensions
ctx.stroke();           //inserts the image
//circle:
ctx.beginPath();
ctx.arc(250, 150, 50, 0 , 2 * Math.PI);  //x position, y position, diameter, degrees, ?
ctx.stroke();		    //inserts the image 	
//text: 
ctx.font = "30px Sans-serif";
ctx.fillText("Canvas Box", 10, 150);    //x position, y position

var canva = document.getElementById("Canvas_2");
var ctxa = canva.getContext("2d");
//create gradient:
var grd = ctxa.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "teal");
grd.addColorStop(1, "lightblue");
//fill with gradient:
ctxa.fillStyle = grd;
ctxa.fillRect(0,0,500, 300);
//END CANVAS HTML ELEMENT