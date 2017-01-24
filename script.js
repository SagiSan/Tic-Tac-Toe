var x = "X";
var o = "O";
var sign = x;
var tglSign = 0;
var win = false;
var fields = ["one","two","three","four","five","six","seven","eight","nine"];

function draw(id){
  win = false;
  if(document.getElementById(id).innerHTML === ""){
  document.getElementById(id).innerHTML = sign;
    toggleSign();
    checkWin();
    console.log(win);
    if(win == false) {
      console.log("sike");
      comPlayer();
    }
  }

}

function toggleSign() {
    if(tglSign == 0) {
    sign = o;
    tglSign = 1;
  }else {
    sign = x;
    tglSign = 0;
  }
}

function checkWin(){
 function temp(a) {
   return document.getElementById(a).innerHTML;
 }

  if(temp("one")==temp("two") && temp("two")==temp("three") && temp("one") !== "") {
    win = true;
    alert(temp("one") + " is winner");
    clearBtn();
    chooseSign();

  }
  if(temp("four")==temp("five") && temp("five")==temp("six") && temp("four") !== "") {
    win = true;
    alert(temp("four") + " is winner");
    clearBtn();  
     chooseSign();

  }
  if(temp("seven")==temp("eight") && temp("eight")==temp("nine") && temp("seven") !== "") {
    win = true;
    alert(temp("seven") + " is winner");
    clearBtn();
    chooseSign();
  }
  if(temp("one")==temp("four") && temp("four")==temp("seven") && temp("one") !== "") {
    win = true;
    alert(temp("one") + " is winner");
    clearBtn(); 
    chooseSign();
  }
  if(temp("two")==temp("five") && temp("five")==temp("eight") && temp("two") !=="") {
    win = true;
    alert(temp("two") + " is winner");
    clearBtn(); 
    chooseSign();
  }
  if(temp("three")==temp("six") && temp("six")==temp("nine") && temp("three") !== "") {
    win = true;
    alert(temp("three") + " is winner");
    clearBtn();
    chooseSign();
  }
  if(temp("one")==temp("five") && temp("five")==temp("nine") && temp("one") !== "") {
    win = true;
    alert(temp("one") + " is winner");
    clearBtn();   
    chooseSign();
  }
  if(temp("three")==temp("five") && temp("five")==temp("seven") && temp("three") !== "") {
    win = true;
    alert(temp("three") + " is winner");
    clearBtn();
    chooseSign();
  }
    var x = document.querySelectorAll("button");
    temp = true;
    x.forEach(function(a) {
      if(a.innerHTML == "") {
        temp = false;
      }
    });
  if(temp) {
    alert("Tie");
    win = true;
    clearBtn();
    chooseSign();
  }
}

  function chooseSign(){
    var choice = prompt("Choose a sign (X or O)");
    while(choice !== "X" && choice !== "x" && choice !== "O" && choice !== "o"){
      choice = prompt("Choose a sign (X or O)");
    }
      if(choice.toUpperCase() == "X") {
        if(sign == "O") {
          toggleSign();
        }
      }
      if(choice.toUpperCase() == "O") {
        if(sign == "X"){
          toggleSign();
        }
      }
  };

function clearBtn() {
    var x = document.querySelectorAll("button");
    x.forEach(function(btn) {
      btn.innerHTML = "";
    });
    toggleSign();
}

function comPlayer() {
  var btnIndex = Math.floor(Math.random() * 9);
  if(document.getElementById(fields[btnIndex]).innerHTML == "" ) {
    document.getElementById(fields[btnIndex]).innerHTML = sign;
    toggleSign();
  }else comPlayer();
  checkWin();
}