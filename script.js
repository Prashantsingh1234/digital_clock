const currentTime = () => {
    let curTime = new Date().toLocaleTimeString();
    document.getElementById("digital-watch").innerText = curTime;
};

currentTime();

setInterval(() => {
    currentTime();
}, 1000);
