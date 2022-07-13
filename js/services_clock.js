const clockContainer = document.querySelector('.services_clock');


function updateClock() {
    clockContainer.innerText = new Date().toLocaleTimeString(); 
}
setInterval (updateClock, 1000);