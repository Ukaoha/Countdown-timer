let officialTechSis = new Date ("Jul 31, 2022 12:00:00").getTime();
let myFunc = setInterval(function() {
    let now = new Date().getTime();
    let timeleft = officialTechSis - now ;
    
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24)); 
    let hours = Math.floor((timeleft % (1000 * 60 * 60 *24))/(1000 * 60 * 60));
    let minutes = Math.floor((timeleft  % ( 1000 * 60 * 60 )) / (1000 * 60 ));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "days  "
    document.getElementById("hours").innerHTML = hours + "  hr "
    document.getElementById("minutes").innerHTML = minutes + " mins "
    document.getElementById("seconds").innerHTML = seconds + " secs "
    
    if(timeleft < 0) {
        clearInterval(myFunc);
    
        document.getElementById("days").innerHTML = " "
        document.getElementById("hours").innerHTML = "  "
        document.getElementById("minutes").innerHTML = " "
        document.getElementById("seconds").innerHTML = " "
        document.getElementById("end").innerHTML = "Congrats !!";
    }
} , 1000 );
