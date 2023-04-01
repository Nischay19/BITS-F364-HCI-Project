window.onload = function () {
  console.log(2);
};


//FRAME A1
var lastClick = 0;
var mt11 = 0;
//clicking 1st circle 
function A1_start(){
  var d = new Date();
  lastClick = d.getTime();
}
//clicking 2nd circle
function A1_done(){ 
  var d = new Date();
  var newclick = d.getTime();
  mt11 = newclick- lastClick;
  lastClick = 0;
  document.getElementById('Mtime11').innerHTML = "The Movement Time 1 (MT1): "+ mt11 +" milliseconds";
}


//FRAME A2
var lastClick2 = 0;
var mt12 = 0; 
//clicking 1st circle
function A2_start(){
  var d = new Date();
  lastClick2 = d.getTime();
}
//clicking 2nd circle
function A2_done(){
  var d = new Date();
  var newclick = d.getTime();
  mt12 = newclick- lastClick2;
  lastClick2 = 0;
  document.getElementById('Mtime12').innerHTML = "The Movement Time 2 (MT2): "+ mt12 +" milliseconds";
}

function ratio1(){
  var ratio = mt11/mt12;
  document.getElementById('Ratio1').innerHTML = "___"+ratio.toFixed(2)+"___";
}





//FRAME B1
var lastClick3 = 0;
var mt21 = 0; 
//clicking 1st circle
function B1_start(){
  var d = new Date();
  lastClick3 = d.getTime();
}
//clicking 2nd circle
function B1_done(){
  var d = new Date();
  var newclick = d.getTime();
  mt21 = newclick- lastClick3;
  lastClick3 = 0;
  document.getElementById('Mtime21').innerHTML = "The Movement Time 1 (MT1): "+ mt21 +" milliseconds";
}




//FRAME B2
var lastClick4 = 0;
var mt22 = 0; 
//clicking 1st circle
function B2_start(){
  var d = new Date();
  lastClick4 = d.getTime();
}
//clicking 2nd circle
function B2_done(){
  var d = new Date();
  var newclick = d.getTime();
  mt22 = newclick- lastClick4;
  lastClick4 = 0;
  document.getElementById('Mtime22').innerHTML = "The Movement Time 2 (MT2): "+ mt22 +" milliseconds";
}


function ratio2(){
  var ratio = mt21/mt22;
  document.getElementById('Ratio2').innerHTML = "___"+ratio.toFixed(2)+"___";
}

//


