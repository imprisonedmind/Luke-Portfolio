var input = document.getElementById('form');


console.log(input);



input[0].addEventListener('focus', function() {
    console.log('focusing');
    hideName();
});


input[1].addEventListener('focus', function() {
    console.log('focusing');
    hideName1();
});

input[2].addEventListener('focus', function() {
    console.log('focusing');
    hideName2();
});

function hideName() {
    var name = document.getElementsByClassName('form-title')
    console.log(name)
    name[0].style.display = "none"
}


function hideName1() {
    var name = document.getElementsByClassName('form-title')
    console.log(name)
    name[1].style.display = "none"
}

function hideName2() {
    var name = document.getElementsByClassName('form-title')
    console.log(name)
    name[2].style.display = "none"
}



