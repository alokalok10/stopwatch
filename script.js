//declarations
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const clockContainer = document.querySelector('#clock')
let millisecondsCounter=0;
let secondCounter=0;
let minuteCounter=0;
let timer;
// minutesDisplay
function minutesDisplay(){
    //to start from 1 not from 0;
    minuteCounter++;
    document.querySelector('.minute .one').innerText =minuteCounter%10;

    if(minuteCounter %10 == 0)
        document.querySelector('.minute .ten').innerText =Math.floor(minuteCounter/10);  
}
// secondsDisplay
function secondsDisplay(){
    
    secondCounter++;
    //border color change
    if(secondCounter%2==0)
    {
        document.getElementById('clock').style.borderColor = 'yellow';  
    }
    else{
        document.getElementById('clock').style.borderColor = 'rgb(0, 255, 255)';
    }

    document.querySelector('.second .one').innerText =secondCounter%10;
    if(secondCounter % 10 == 0)
    {
        document.querySelector('.second .ten').innerText =Math.floor(secondCounter/10);
    }
    if(secondCounter >59)
    {
        minutesDisplay();
        secondCounter=0;
        document.querySelector('.second .one').innerText =secondCounter;
        document.querySelector('.second .ten').innerText =secondCounter;   
    }
}
// millisecondDisplay
function milliDisplay(){
    if(millisecondsCounter >99)
    {
        millisecondsCounter=0;
        secondsDisplay(); 
    }
    document.querySelector('.millisecond .one').innerText =millisecondsCounter%10;
    if(millisecondsCounter %10 == 0)
    {
        document.querySelector('.millisecond .ten').innerText =millisecondsCounter/10;
    }
    millisecondsCounter++;
}

// for start button
start.addEventListener('click',()=>{
    timer=setInterval(milliDisplay,10);
    start.style.cursor='none';   
});
// for stop button
stop.addEventListener('click',()=>{
    clearInterval(timer);
    document.getElementById('clock').style.borderColor = 'black';
    start.style.cursor='pointer';
});
// for reset button
reset.addEventListener('click',()=>{
    clearInterval(timer);
    secondCounter=0
    document.querySelectorAll('.digit').forEach(digit=> digit.innerText=secondCounter);
    document.getElementById('clock').style.borderColor = 'black'; 
    start.style.cursor='pointer';

});