//COUNTDOWN TIMER
function countdown() {
    var seconds = document.getElementById("seconds").value;
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); //“setTimeout(tick, 1000);” means that the program is pausing for 1,000 milliseconds (i.e., 1 second)
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();     //this loops the function until the if condition is met
}
//END COUNTDOWN TIMER 

//SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

//NEXT AND PREVIOUS CONTROLS
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

//END SLIDESHOW