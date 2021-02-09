var count=5
var computers_guess=Math.floor(Math.random() * 10) + 1;
function checkguess(){document.getElementById("user_lives").innerHTML="You have "+count+"lives remaining"
  var c=document.getElementById("num_input").value;
  if (c==computers_guess){alert ("right")}
  else {
    alert("wrong")
    count-=1
    if (count==0) window.location.href="https://www.google.com"
    document.getElementById("user_lives").innerHTML="You have "+count+" lives remaining"
  }

}
