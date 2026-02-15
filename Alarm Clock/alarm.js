let set=document.getElementById("set-alarm");
set.addEventListener("click",save)
var time;
var now;
function save(){
    let alarmTime=document.getElementById("alarm-time");
    
    let item=document.createElement("li");
    item.innerText=alarmTime.value;
    alarmTime.value="";
    document.querySelector("ul").appendChild(item);
    
}
setInterval(updateTime,1000);
function formatTime(t){
    return t < 10 ? "0" + t : t;
}
function updateTime(){
    time=new Date();
    

    let hours = formatTime(time.getHours());
    let minutes = formatTime(time.getMinutes());
now=hours+":"+minutes;
checkAlarm();
}
let audio = document.getElementById("myAudio");

function checkAlarm(){
    let alarms=document.querySelectorAll("li");
    let alarms_list=Array.from(alarms);
    for(let i=0;i<alarms_list.length;i++){
        if(alarms_list[i].innerText==now){
            audio.play();
            setTimeout(() => {
                audio.pause();
            }, 10000);
            alarms_list[i].style.color="grey";
            break;
        }
    }
}
