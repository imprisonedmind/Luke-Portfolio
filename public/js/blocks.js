// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // mybutton.style.display = "block";
  } else {
    // mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




// show hide content

var isShowing = true;

var isHome = true;

function showHide() {
    hide();
    show();
    isShowing = !isShowing;
    console.log("is showing value",isShowing);

}

function hide() {
    if (isShowing == true) {
      hideHome();
      showProjects();
    }
}

function show() {
    if (isShowing == false) {
      showHome();
      hideProjects();
    }
}

function showAbout() {
  isShowing =  !isShowing;
  hideHome();
  hideProjects();
  aboutShow()
}

function aboutShow() {
  var about = document.getElementById("about")

  about.style.display = "flex";
}

function aboutHide () {
  var about = document.getElementById("about")

  about.style.display = "none";
}


function hideHome() {
  console.log("hiding home");
        // hide existing elements     
        var introHeader = document.getElementById("intro-header");
        var workCon = document.getElementById("work-con");
        var contactCon = document.getElementById("contact-con");
        var copyrightCon = document.getElementById("copyright");

        introHeader.style.display="none";
        workCon.style.display=("none");
        contactCon.style.display=("none");
        copyrightCon.style.display=("none")
}

function showHome() {
  aboutHide();
  console.log("showing home")
  // show hidden elements     
        var introHeader = document.getElementById("intro-header");
        var workCon = document.getElementById("work-con");
        var contactCon = document.getElementById("contact-con");
        var copyrightCon = document.getElementById("copyright");

        introHeader.style.display="flex";
        workCon.style.display=("flex");
        contactCon.style.display=("flex");
        copyrightCon.style.display=("flex")
}


var isProject1 = false;
var isProject2 = false;
var isProject3 = false;
var isProject4 = false;
var isProject5 = false;
var isProject6 = false;
var isProject7 = false;
var isProject8 = false;
var isProject9 = false;


function project1() {
  isProject1 = true;
}

function project2() {
  isProject2 = true;
}

function project3() {
  isProject3 = true;
}

function project4() {
  isProject4 = true;
}

function project5() {
  isProject5 = true;
}

function project6() {
  isProject6 = true;
}

function project7() {
  isProject7 = true;
}

function project7() {
  isProject7 = true;
}

function project8() {
  isProject8 = true;
}

function project9() {
  isProject9 = true;
}


function showProjects() {
        // show projects 
        if (isProject1 == true) {
          var projectCon = document.getElementById("project1");
          projectCon.style.display="flex";
        } 

        if (isProject2 == true) {
          var projectCon = document.getElementById("project2");
          projectCon.style.display="flex";
        }

        if (isProject3 == true) {
          var projectCon = document.getElementById("project3");
          projectCon.style.display="flex";
        }

        if (isProject4 == true) {
          var projectCon = document.getElementById("project4");
          projectCon.style.display="flex";
        }

        if (isProject5 == true) {
          var projectCon = document.getElementById("project5");
          projectCon.style.display="flex";
        }

        if (isProject6 == true) {
          var projectCon = document.getElementById("project6");
          projectCon.style.display="flex";
        }

        if (isProject7 == true) {
          var projectCon = document.getElementById("project7");
          projectCon.style.display="flex";
        }

        if (isProject8 == true) {
          var projectCon = document.getElementById("project8");
          projectCon.style.display="flex";
        }
        autoPlay()


}

function hideProjects() {
        isProject1 = false;
        isProject2 = false;
        isProject3 = false;
        isProject4 = false;
        isProject5 = false;
        isProject6 = false;
        isProject7 = false;
        isProject8 = false;



        // hide existing elements
        var project1 = document.getElementById("project1");
        var project2 = document.getElementById("project2");
        var project3 = document.getElementById("project3");
        var project4 = document.getElementById("project4");
        var project5 = document.getElementById("project5");
        var project6 = document.getElementById("project6");
        var project7 = document.getElementById("project7");
        var project8 = document.getElementById("project8");


        project1.style.display="none";
        project2.style.display="none";
        project3.style.display="none";
        project4.style.display="none";
        project5.style.display="none";
        project6.style.display="none";
        project7.style.display="none";
        project8.style.display="none";
        autoPlay()

}


function showProject1() {
  // show project 1
  var projectCon1 = document.getElementById("project1");
  projectCon1.style.display="flex";
  // hide project 2
  var projectCon2 = document.getElementById("project2");
  projectCon2.style.display="none";
  // hide project 3
  var projectCon3 = document.getElementById("project3");
  projectCon3.style.display="none";
  // hide project 4
  var projectCon4 = document.getElementById("project4");
  projectCon4.style.display="none";
  // hide project 5
  var projectCon5 = document.getElementById("project5");
  projectCon5.style.display="none";
  // hide project 6
  var projectCon6 = document.getElementById("project6");
  projectCon6.style.display="none";
  // hide project 7
  var projectCon7 = document.getElementById("project7");
  projectCon7.style.display="none";
  // hide project 8
  var projectCon8 = document.getElementById("project8");
  projectCon8.style.display="none";
}

function showProject2() {
  // hide project 1
  var projectCon1 = document.getElementById("project1");
  projectCon1.style.display="none";
  // show project 2
  var projectCon2 = document.getElementById("project2");
  projectCon2.style.display="flex";
  // hide project 3
  var projectCon3 = document.getElementById("project3");
  projectCon3.style.display="none";
  // hide project 4
  var projectCon4 = document.getElementById("project4");
  projectCon4.style.display="none";
  // hide project 5
  var projectCon5 = document.getElementById("project5");
  projectCon5.style.display="none";
  // hide project 6
  var projectCon6 = document.getElementById("project6");
  projectCon6.style.display="none";
  // hide project 7
  var projectCon7 = document.getElementById("project7");
  projectCon7.style.display="none";
  // hide project 8
  var projectCon8 = document.getElementById("project8");
  projectCon8.style.display="none";
}

function showProject3() {
  // hide project 1
  var projectCon1 = document.getElementById("project1");
  projectCon1.style.display="none";
  // hide project 2
  var projectCon2 = document.getElementById("project2");
  projectCon2.style.display="none";
  // show project 3
  var projectCon3 = document.getElementById("project3");
  projectCon3.style.display="flex";
  // hide project 4
  var projectCon4 = document.getElementById("project4");
  projectCon4.style.display="none";
  // hide project 5
  var projectCon5 = document.getElementById("project5");
  projectCon5.style.display="none";
  // hide project 6
  var projectCon6 = document.getElementById("project6");
  projectCon6.style.display="none";
  // hide project 7
  var projectCon7 = document.getElementById("project7");
  projectCon7.style.display="none";
  // hide project 8
  var projectCon8 = document.getElementById("project8");
  projectCon8.style.display="none";
}

function showProject4() {
  // hide project 1
  var projectCon1 = document.getElementById("project1");
  projectCon1.style.display="none";
  // hide project 2
  var projectCon2 = document.getElementById("project2");
  projectCon2.style.display="none";
  // hide project 3
  var projectCon3 = document.getElementById("project3");
  projectCon3.style.display="none";
  // show project 4
  var projectCon4 = document.getElementById("project4");
  projectCon4.style.display="flex";
  // hide project 5
  var projectCon5 = document.getElementById("project5");
  projectCon5.style.display="none";
  // hide project 6
  var projectCon6 = document.getElementById("project6");
  projectCon6.style.display="none";
  // hide project 7
  var projectCon7 = document.getElementById("project7");
  projectCon7.style.display="none";
  // hide project 8
  var projectCon8 = document.getElementById("project8");
  projectCon8.style.display="none";
}

function showProject5() {
  // hide project 1
  var projectCon1 = document.getElementById("project1");
  projectCon1.style.display="none";
  // hide project 2
  var projectCon2 = document.getElementById("project2");
  projectCon2.style.display="none";
  // hide project 3
  var projectCon3 = document.getElementById("project3");
  projectCon3.style.display="none";
  // hide project 4
  var projectCon4 = document.getElementById("project4");
  projectCon4.style.display="none";
  // show project 5
  var projectCon5 = document.getElementById("project5");
  projectCon5.style.display="flex";
  // hide project 6
  var projectCon6 = document.getElementById("project6");
  projectCon6.style.display="none";
  // hide project 7
  var projectCon7 = document.getElementById("project7");
  projectCon7.style.display="none";
  // hide project 8
  var projectCon8 = document.getElementById("project8");
  projectCon8.style.display="none";
}


function showProject6() {
  // hide project 1
  var projectCon1 = document.getElementById("project1");
  projectCon1.style.display="none";
  // hide project 2
  var projectCon2 = document.getElementById("project2");
  projectCon2.style.display="none";
  // hide project 3
  var projectCon3 = document.getElementById("project3");
  projectCon3.style.display="none";
  // hide project 4
  var projectCon4 = document.getElementById("project4");
  projectCon4.style.display="none";
  // hide project 5
  var projectCon5 = document.getElementById("project5");
  projectCon5.style.display="none";
  // show project 6
  var projectCon6 = document.getElementById("project6");
  projectCon6.style.display="flex";
  // hide project 7
  var projectCon7 = document.getElementById("project7");
  projectCon7.style.display="none";
  // hide project 8
  var projectCon8 = document.getElementById("project8");
  projectCon8.style.display="none";
}

function showProject7() {
  // hide project 1
  var projectCon1 = document.getElementById("project1");
  projectCon1.style.display="none";
  // hide project 2
  var projectCon2 = document.getElementById("project2");
  projectCon2.style.display="none";
  // hide project 3
  var projectCon3 = document.getElementById("project3");
  projectCon3.style.display="none";
  // hide project 4
  var projectCon4 = document.getElementById("project4");
  projectCon4.style.display="none";
  // hide project 5
  var projectCon5 = document.getElementById("project5");
  projectCon5.style.display="none";
  // hide project 6
  var projectCon6 = document.getElementById("project6");
  projectCon6.style.display="none";
  // show project 7
  var projectCon7 = document.getElementById("project7");
  projectCon7.style.display="flex";
  // hide project 8
  var projectCon8 = document.getElementById("project8");
  projectCon8.style.display="none";
}

function showProject8() {
  // hide project 1
  var projectCon1 = document.getElementById("project1");
  projectCon1.style.display="none";
  // hide project 2
  var projectCon2 = document.getElementById("project2");
  projectCon2.style.display="none";
  // hide project 3
  var projectCon3 = document.getElementById("project3");
  projectCon3.style.display="none";
  // hide project 4
  var projectCon4 = document.getElementById("project4");
  projectCon4.style.display="none";
  // hide project 5
  var projectCon5 = document.getElementById("project5");
  projectCon5.style.display="none";
  // hide project 6
  var projectCon6 = document.getElementById("project6");
  projectCon6.style.display="none";
  // hide project 7
  var projectCon7 = document.getElementById("project7");
  projectCon7.style.display="none";
  // show project 8
  var projectCon8 = document.getElementById("project8");
  projectCon8.style.display="flex";

}















