let EuaClock = () =>{
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let time = `${hrs}:${mins}`

    if (hrs > 12){
        time = `${hrs - 12}:${mins}`
        time = time + " PM"
    }

    else{
        time = time + " AM"
    }

    if (cancel == 0){
        return;
    }
    
    document.getElementById("clock").innerHTML = time;
    setTimeout(EuaClock, 1000);
}

let clock = () =>{   
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let time = `${hrs}:${mins}:${secs}`

    if (secs < 10 & mins < 10 & hrs < 10) {
        time = `${"0"+hrs}:${"0"+mins}:${"0"+secs}`
    }
    
    else if (secs < 10 & mins < 10)  {
        time = `${hrs}:${"0"+mins}:${"0"+secs}`
    }

    else if (secs < 10 & hrs < 10) {
        time = `${"0"+hrs}:${mins}:${"0"+secs}`
    }

    else if (mins < 10 & hrs < 10) {
        time = `${"0"+hrs}:${"0"+mins}:${secs}`
    }

    else if (hrs < 10) {
        time = `${"0"+hrs}:${mins}:${secs}`
    }

    else if (mins < 10) {
        time = `${hrs}:${"0"+mins}:${secs}`
    }

    else if (secs < 10) {
        time = `${hrs}:${mins}:${"0"+secs}`
    }

    if (cancel == 0){
        return;
    }

    document.getElementById("clock").innerHTML = time;
    setTimeout(clock, 1000);
}