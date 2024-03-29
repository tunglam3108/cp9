const intervalID = setInterval(updateTime, 1000);


function updateTime(){
    const date = new Date();
    document.getElementById("dong ho").innerHTML = date.toLocaleTimeString();
    
}


