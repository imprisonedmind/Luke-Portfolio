// set autoplay for acid mage 
function autoPlay() {
    
// get elements
var vid = document.getElementsByClassName("acid-vid")
var vid2 = document.getElementsByClassName("blinki-vid")
var project5 = document.getElementById("project5");
var project7 = document.getElementById("project7");


// play or pause if event 5 shown
// look for display
if (project5.style.display == "flex") {
    // play videos
    console.log("***play*** videos")
        // convert to an array using Array.from() 
        Array.from(vid).forEach(function(element) { 
            element.play();
        });
} 

if (project5.style.display == "none") {
    // pause videos
   console.log("pause videos")
        // convert to an array using Array.from() 
        Array.from(vid).forEach(function(element) { 
            element.pause();
        });
}



// play pause if event 7 shown
if (project7.style.display == "flex") {
    // play videos
    console.log("***play*** videos blinki")
        // convert to an array using Array.from() 
        Array.from(vid2).forEach(function(element) { 
            element.play();
        });
} 

if (project7.style.display == "none") {
    // pause videos
   console.log("pause videos blinki")
        // convert to an array using Array.from() 
        Array.from(vid2).forEach(function(element) { 
            element.pause();
        });
}

}