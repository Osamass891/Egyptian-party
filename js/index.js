/// <reference types="../@types/jquery" />
$('.open-close').on('click',function(){
$('.sidebar').animate({width:'toggle'},1000)


})

$('.fa-xmark ').on('click',function(){
    $('.sidebar').animate({width:'toggle'},1000)
    })


$('.Singer-one').on('click',function(){
    $('.singer-one-text').slideToggle(500)
    $('.singer-two-text').slideUp(500)
    $('.singer-three-text').slideUp(500)
    $('.singer-four-text').slideUp(500)
})


$('.Singer-two').on('click',function(){
    $('.singer-two-text').slideToggle(500)
    $('.singer-one-text').slideUp(500)
    $('.singer-three-text').slideUp(500)
    $('.singer-four-text').slideUp(500)
    
})


$('.Singer-three').on('click',function(){
    $('.singer-three-text').slideToggle(500)
    $('.singer-one-text').slideUp(500)
    $('.singer-two-text').slideUp(500)
    $('.singer-four-text').slideUp(500)
})


$('.Singer-four').on('click',function(){
    $('.singer-four-text').slideToggle(500)
    $('.singer-one-text').slideUp(500)
    $('.singer-two-text').slideUp(500)
    $('.singer-three-text').slideUp(500)
})


let targetDate = new Date("October 21, 2025 00:00:00").getTime();

function updateCountdown() {
    let now = new Date().getTime(); 
    let timeDifference = targetDate - now; 

    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = `${days} D`;
    document.getElementById("hours").innerHTML = `${hours} h`;
    document.getElementById("minutes").innerHTML = `${minutes} m`;
    document.getElementById("seconds").innerHTML = `${seconds} s`;

    
    if (timeDifference < 0) {
        document.getElementById("days").innerHTML = "0 D";
        document.getElementById("hours").innerHTML = "0 h";
        document.getElementById("minutes").innerHTML = "0 m";
        document.getElementById("seconds").innerHTML = "0 s";
    }
}

setInterval(updateCountdown, 1000);



let maxCharacters = 100;

let messageInput = document.getElementById("myText");
let remainingCharacters = document.getElementById("changing-number");

remainingCharacters.textContent = maxCharacters;

messageInput.addEventListener("input", function() {
    
    let charactersTyped = messageInput.value.length;
    let charactersLeft = maxCharacters - charactersTyped;

    
    remainingCharacters.textContent = charactersLeft >= 0 ? charactersLeft : 0;

   
    if (charactersTyped > maxCharacters) {
        messageInput.value = messageInput.value.substring(0, maxCharacters);
    }
});



