// cookies

// make cookie

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// get cookie

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
      const [key, value] = c.split("=");
      if (key === name) return value;
    }
    return null;
}




// welcome

// check if visted
const visted = getCookie("visited")

if (visted) {
    document.getElementById("wMsg").innerHTML = "Really back again?"
    document.getElementById("mMsg").innerHTML = "I know you might of been intrested the first time but now your just weird if you use this as an actual clock."
} else {
    document.getElementById("wMsg").innerHTML = "Welcome to the clock!"
    document.getElementById("mMsg").innerHTML = "I know crazy creation here! Im like the new mozart but for web development."
    setCookie("visited", "true", 365)
    setCookie("timewaste", 1, 365)
}


// clock and time waste

// time waste
let timewaste = parseInt(getCookie("timewaste")) || 0;

function updateClock() {
    
    // raw

    const rawtime = new Date()

    // date

    const formatteddate = `${rawtime.getDate()}/${rawtime.getMonth() + 1}/${rawtime.getFullYear()}`

    document.getElementById("date").innerHTML = formatteddate


    // time

    const formattedtime = `${rawtime.getHours()}:${rawtime.getMinutes()}:${rawtime.getSeconds()}`

    document.getElementById("time").innerHTML = formattedtime

    // time waste

    timewaste += 1
    setCookie("timewaste", timewaste, 365)
    document.getElementById("timewaste").innerText = timewaste

}

// page start

updateClock()


// update every second

setInterval(updateClock, 1000)