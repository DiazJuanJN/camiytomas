let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`)

//CIRCLE TEXT
new CircleType(document.getElementById('marrying-text'))
    .radius(384);

//COUNTDOWN TIMER
var countDownDate = new Date("Oct 14, 2023 19:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements
    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

    // If the count down is finished, write the hearts!
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "🤍"
        document.getElementById("hours").innerHTML = "🤍"
        document.getElementById("minutes").innerHTML = "🤍"
        document.getElementById("seconds").innerHTML = "🤍"
    }
}, 1000);

//BANK ACCOUNT MESSAGE
let bankinfo = document.getElementById("bank-info");
bankinfo.addEventListener("click", () => {
    Swal.fire({
        imageUrl: 'assets/img/icon1.png',
        imageWidth: '200',
        imageAlt: 'Naranja X',
        title: "Muchas gracias!",
        html: "CBU: 4530000800015497108528<br>Alias: FLIA.STARCEVICH<br>Titular: Tomas Gabriel Starcevich",
        button: "Ok",
    });
})