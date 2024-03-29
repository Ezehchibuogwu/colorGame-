var numSquares = 6;
var colors = generateRandomColors(numSquares);	
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
 



easyBtn.addEventListener("click", function(){
   hardBtn.classList.remove("selected");
   easyBtn.classList.add("selected");
   numSquares = 3;
   colors = generateRandomColors(numSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for(var i = 0; i < squares.length; i++){
   	if(colors[i]){
   		squares[i].style.backgroundColor = colors[i];
   	}else{
   		squares[i].style.display = "none";
   	}
   }
   h1.style.backgroundColor = "steelBlue";
});

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
   easyBtn.classList.remove("selected");
   numSquares = 6;
   colors = generateRandomColors(numSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for(var i = 0; i < squares.length; i++){
   		squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
 }
   h1.style.backgroundColor = "steelBlue";
});

resetButton.addEventListener("click", function(){
  // generate all new colors
     colors = generateRandomColors(numSquares);
     pickedColor = pickColor();
     messageDisplay.textContent = "";
     colorDisplay.textContent = pickedColor;
     for(var i = 0; i < squares.length; i++){
  	 squares[i].style.backgroundColor = colors[i];
  	 this
  }

  h1.style.backgroundColor = "steelBlue";
});

 colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor
	  if(clickedColor === pickedColor){
	    messageDisplay.textContent = "CORRECT";
	    changeColor(clickedColor);
	    resetButton.textContent = "Play Again?"
	    h1.style.backgroundColor = pickedColor;

	  }else{
	  	this.style.backgroundColor = "#232323";
	  	messageDisplay.textContent = "Try Again";
	  	resetButton.textContent = "new colors";
	  }
	});
}

function changeColor(color){
	for(var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
 var random = Math.floor(Math.random() * colors.length)
 return colors[random];
}


function generateRandomColors(num){
   var arr = []
    for(var i =0; i < num; i++){
      arr.push(randomColor())
    }
   return arr;
}


function randomColor(){
	// pick a "red" from 0 - 256
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 256
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 256
	var b = Math.floor(Math.random() * 256);
	 
	 return"rgb(" + r + ", " + g + ", " + b + ")"
}