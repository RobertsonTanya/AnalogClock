    var secondHand = document.getElementById('seconds');
    var minuteHand = document.getElementById('minutes');
    var hourHand = document.getElementById('hour');
    
    function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    console.log(new Date().getSeconds());
    console.log(new Date().getMinutes());
    console.log(new Date().getHours()-12);
    console.log(new Date());
    var seconds = new Date().getSeconds();
    secondHand.style.transform = `rotate(${(seconds * 6)-180}deg)`;
    var minutes = new Date().getMinutes();
    minuteHand.style.transform = `rotate(${(minutes * 6)-180}deg)`;
    var hour = new Date().getHours();
    if(hour > 12){
        hourHand.style.transform = `rotate(${((hour-12) * 3)}deg)`;
    } else {
        hourHand.style.transform = `rotate(${(hour * 3)}deg)`;
    }
}, 1000);
