function clock() {
    var hour = document.getElementById('hour');
    var minute = document.getElementById('minute');
    var second = document.getElementById('second');
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
}

var interval = setInterval(clock, 1000);