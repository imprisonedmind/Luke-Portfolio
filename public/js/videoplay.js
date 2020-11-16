var fbVideo = document.getElementById("fb-video");
var instaVidA = document.getElementById("insta-vidA");
var instaVidB = document.getElementById("insta-vidB");
var instaVidC = document.getElementById("insta-vidC");
var instaVidD = document.getElementById("insta-vidD");
var instaVidE = document.getElementById("insta-vidE");
var instaVidF = document.getElementById("insta-vidF");
var instaVidG = document.getElementById("insta-vidG");
var twitterVidA = document.getElementById("twitter-vidA");
var adVidA = document.getElementById("g-vidA");
var iVidA = document.getElementById("i-vidA");
// var bVidA = document.getElementById("B-vidA");
// var bVidB = document.getElementById("B-vidB");
// var bVidC = document.getElementById("B-vidC");
// var bVidD = document.getElementById("B-vidD");


// Play videos
function playVideo() {
    fbVideo.play();
}

function playVideo2() {
    instaVidA.play();
}

function playVideo3() {
    instaVidB.play();
}

function playVideo4() {
    instaVidC.play();
}

function playVideo5() {
    instaVidD.play();
}

function playVideo6() {
    instaVidE.play();
}

function playVideo7() {
    instaVidF.play();
}

function playVideo8() {
    instaVidG.play();
}

function playVideo9() {
    twitterVidA.play();
}

function playVideo10() {
    adVidA.play();
}

function playVideo11() {
    iVidA.play();
}




// Pause videos
function pauseVideo() {
    fbVideo.pause();
}


function pauseVideo2() {
    instaVidA.pause();
}

function pauseVideo3() {
    instaVidB.pause();
}

function pauseVideo4() {
    instaVidC.pause();
}

function pauseVideo5() {
    instaVidD.pause();
}

function pauseVideo6() {
    instaVidE.pause();
}

function pauseVideo7() {
    instaVidF.pause();
}

function pauseVideo8() {
    instaVidG.pause();
}

function pauseVideo9() {
    twitterVidA.pause();
}

function pauseVideo10() {
    adVidA.pause();
}

function pauseVideo11() {
    iVidA.pause();
}


// set frames 
function setTime() {
    instaVidA.currentTime = 12;
    instaVidB.currentTime = 5.5;
    instaVidC.currentTime = 3;
    instaVidD.currentTime = 2;
    instaVidE.currentTime = 5.5;
    instaVidF.currentTime = 3;
    instaVidG.currentTime = 2;
    twitterVidA.currentTime = 2;
    adVidA.currentTime = 0.3;
    iVidA.currentTime = 0.3;
}


// load volume
function loadVolume() {
    var volume = document.getElementsByTagName("video");

    volume.volume="0.5";
}


