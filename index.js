var randomNum = Math.floor((Math.random() * 2) + 1);

var coinChange = "images/coin" + randomNum + ".png";

document.querySelector("img").setAttribute("src", coinChange);

if(randomNum === 1)
document.querySelector("h3").innerHTML = "It's a head!";

else if(randomNum === 2)
document.querySelector("h3").innerHTML = "It's a tail!";