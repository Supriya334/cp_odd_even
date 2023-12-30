function generateNumber() {
  // generate a random integer(hint : Math.random)
  let number = document.getElementById("number");
  let randomNum = Math.floor(Math.random()*100)+1
  number.textContent = randomNum;
  checkOddEven(randomNum)
}

function checkOddEven(num) {
  // logic for even / odd
   let oddEven = document.getElementById("odd-even")
  if(+num%2==0){
    oddEven.textContent = "The number is even"
  }
  else{
    oddEven.textContent = "The number is odd"
    
  }
}


window.onload = function () {
  // add event listeners to the button here
  let generateBtn = document.getElementById("generate-number");
  generateBtn.addEventListener("click", generateNumber())
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}


