// Love Calculator

var fname = prompt("Input your name");
var lname = prompt("Input your lover's name");
function loveCalculator() {
   
result = fname + lname ;
 result = Math.random(result);
 result = result * 100;
 result = Math.floor(result) + 1;

 output = fname + " and " + lname + " are a " + result + "% match!!";

 return output;
}
var latest = loveCalculator(fname, lname)

document.getElementById("msg").innerHTML = latest;
document.querySelector("#msg").style.color= "red";

