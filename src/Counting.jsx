import React from "react";

function Counting() {
  let valuedisplay = document.querySelectorAll(".num");
let interval = 3000;

valuedisplay.forEach((valuedisplay) => {
    let startvalue = 0;
    let endvalue = parseInt(valuedisplay.getAttribute("data-val"));
    
    let duration = Math.floor(interval / endvalue);
    let counter = setInterval(function (){
        startvalue += 1;
        valuedisplay.textContent = startvalue;
        if (startvalue == endvalue)
        {
          clearInterval(counter);
        }
    }, duration);
});
  return (
    

    <dives className="wrapper">
      
        <div className=" cuteness">
          <i className="fa-solid fa-person quest"></i>
          <span className="num" data-val={400}>
            000
          </span>
          <span className="text">
            Customer served
          </span>
        </div>
        <div className=" cuteness">
          <i className="fa-solid fa-smile-beam quest"></i>
          <span className="num" data-val={340}>
            000
          </span>
          <span className="text">
            Happy customers
          </span>
        </div>
        <div className=" cuteness">
          <i className="fa-solid fa-list quest"></i>
          <span className="num" data-val={225}>
            000
          </span>
          <span className="text">
            Problems solved
          </span>
        </div>
        <div className=" cuteness">
          <i className="fa-solid fa-star quest"></i>
          <span className="num" data-val={280}>
            000
          </span>
          <span className="text">
            Rating
          </span>
        </div>
      

    </dives>


  )
}

export default Counting;