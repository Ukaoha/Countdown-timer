var officialTechSis = new Date ("Jul 30, 2022 12:00:00").getTime();
var myFunc = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = officialTechSis - now ;
    
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((timeleft % (1000 * 60 * 60 *24))/(1000 * 60 * 60));
    var minutes = Math.floor((timeleft  % ( 1000 * 60 * 60)) / (1000 * 60 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


    document.getElementById("days").innerHTML = days + "d  "
    document.getElementById("hours").innerHTML = hours + "  h  "
    document.getElementById("minutes").innerHTML = minutes + " m "
    document.getElementById("seconds").innerHTML = seconds + " s "
    
    if(timeleft < 0) {
        clearInterval(myFunc);
        document.getElementById("days").innerHTML = " "
        document.getElementById("hours").innerHTML = "  "
        document.getElementById("minutes").innerHTML = " "
        document.getElementById("seconds").innerHTML = " "
        document.getElementById("end").innerHTML = "Congrats !!";
    }
} , 1000 );
