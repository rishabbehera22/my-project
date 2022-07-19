let valuedisplay = document.querySelectorAll(".num");
let interval = 5000;

valuedisplay.forEach((valuedisplay) => {
    let startvalue = 0;
    let endvalue = parseInt(valuedisplay.getAttribute("data-val"));
    
    let duration = Math.floor(interval / endvalue);
    let counter = setInterval(function (){
        startvalue += 1;
        valuedisplay.textContent = startvalue;
    });
});