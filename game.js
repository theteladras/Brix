var pocetniSmer = 0;
var level = sessionStorage.getItem("level");
    if (level === null) {level = 1;}
console.log(level);
/* modal */

// Get the modal
var modal = document.getElementById('myModal');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

/* (x) */
span.onclick = function modall() {
    modal.style.display = "none";
}
/* NOTIFIKACIJA O PORAZU */
var openLost = function() {
    modal.style.display = "block";
	document.getElementById("modalInfo").innerHTML = "YOU HAVE LOST. . .";
	document.getElementById("scoreNote").innerHTML = score + "" +"<p style='display: inline-block; font-size: 12px;'> Brix</p>";
	document.getElementById("continue").style.display = "none";
	document.getElementById("retry").autofocus = true;
}


/* NOTIFIKACIJA O POBEDI */
var openWin = function() {
    modal.style.display = "block";
	document.getElementById("modalInfo").innerHTML = "CONGRATS! YOU WON!";
	document.getElementById("scoreNote").innerHTML = score + "" +"<p style='display: inline-block; font-size: 12px;'> Brix</p>";
	document.getElementById("continue").style.display = "inline-block";
	document.getElementById("continue").autofocus = true;
}
	
/* GASENJE MODALA KLIKOM NA OKOLINU */
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var colorr=[];
colorr[0] = "red";
colorr[1] = "blue";
colorr[2] = "green";
colorr[3] = "gold";
colorr[4] = "gray";
colorr[5] = "black";
colorr[6] = "orange";
colorr[7] = "skyblue";


var ggg = 0;
var score = 0;
var flag=0;
var f=0;


var canvas=document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

if (level == 1) {
var ballRadius=10;


var x=canvas.width/2;
var dx=2;
var y=canvas.height-30;
var dy=-2;
var paddleHeight=10;
var paddleWidth=120;
var paddleXposition=(canvas.width-paddleWidth)/2;
var rightPressed= false;
var leftPressed=false;


var brickColumnCount = 5;
var brickRowCount = 5;
var bWidth = 120;
var bHeight = 40;
var bPadding = 20;
var bOffsetTop = 45;
var bOffsetLeft = 65;
}

if (level == 2) {
var ballRadius=12;


var x=canvas.width/2;
var dx=3;
var y=canvas.height-30;
var dy=-3;
var paddleHeight=10;
var paddleWidth=130;
var paddleXposition=(canvas.width-paddleWidth)/2;
var rightPressed= false;
var leftPressed=false;


var brickColumnCount = 5;
var brickRowCount = 7;
var bWidth = 90;
var bHeight = 40;
var bPadding = 20;
var bOffsetTop = 45;
var bOffsetLeft = 30;
}

if (level == 3) {
var ballRadius=15;


var x=canvas.width/2;
var dx=4;
var y=canvas.height-30;
var dy=-4;
var paddleHeight=10;
var paddleWidth=140;
var paddleXposition=(canvas.width-paddleWidth)/2;
var rightPressed= false;
var leftPressed=false;


var brickColumnCount = 7;
var brickRowCount = 7;
var bWidth = 80;
var bHeight = 40;
var bPadding = 20;
var bOffsetTop = 45;
var bOffsetLeft = 70;
}
if (level == 4) {
var ballRadius=15;


var x=canvas.width/2;
var dx=6;
var y=canvas.height-30;
var dy=-6;
var paddleHeight=10;
var paddleWidth=140;
var paddleXposition=(canvas.width-paddleWidth)/2;
var rightPressed= false;
var leftPressed=false;


var brickColumnCount = 4;
var brickRowCount = 7;
var bWidth = 80;
var bHeight = 40;
var bPadding = 20;
var bOffsetTop = 45;
var bOffsetLeft = 70;
}

if (level == 5) {
var ballRadius=15;


var x=canvas.width/2;
var dx=6;
var y=canvas.height-30;
var dy=-6;
var paddleHeight=10;
var paddleWidth=100;
var paddleXposition=(canvas.width-paddleWidth)/2;
var rightPressed= false;
var leftPressed=false;


var brickColumnCount = 3;
var brickRowCount = 7;
var bWidth = 80;
var bHeight = 40;
var bPadding = 20;
var bOffsetTop = 45;
var bOffsetLeft = 70;
}

if (level == 6) {
var ballRadius=18;


var x=canvas.width/2;
var dx=6.5;
var y=canvas.height-30;
var dy=-6.5;
var paddleHeight=10;
var paddleWidth=90;
var paddleXposition=(canvas.width-paddleWidth)/2;
var rightPressed= false;
var leftPressed=false;


var brickColumnCount = 3;
var brickRowCount = 7;
var bWidth = 80;
var bHeight = 40;
var bPadding = 20;
var bOffsetTop = 45;
var bOffsetLeft = 70;
}

if (level == 7) {
var ballRadius=30;


var x=canvas.width/2;
var dx=0.5;
var y=canvas.height-30;
var dy=-0.5;
var paddleHeight=10;
var paddleWidth=90;
var paddleXposition=(canvas.width-paddleWidth)/2;
var rightPressed= false;
var leftPressed=false;


var brickColumnCount = 1;
var brickRowCount = 1;
var bWidth = 600;
var bHeight = 200;
var bPadding = 20;
var bOffsetTop = 45;
var bOffsetLeft = 105;
}

document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("keydown",keyDownHandler, false);
document.addEventListener("keyup",keyUpHandler, false);
 
var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };  /*statusom proveravam dali je cigla unistena*/
    }
}


function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
		flag = 1;
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleXposition = relativeX - paddleWidth/2;
    }
}

function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+bWidth && y > b.y && y < b.y+bHeight) {
                    dy = -dy;
                    b.status = 0;
					ggg = Math.random()*7 <<0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
						dx=0;
						dy=0;
                        openWin();												/* WIN */
						level++;
                        window.onbeforeunload = function() {
						sessionStorage.setItem("level", level);
						console.log(level)
						}
						
                    }
                }
            }
        }
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
	ctx.fillStyle = colorr[ggg];
    ctx.fill();
    ctx.closePath();
	
}
/* pomerajuca plocica */
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleXposition, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	ctx.strokeRect(paddleXposition-0.6, canvas.height-paddleHeight-0.6, paddleWidth+0.5, paddleHeight);
    ctx.fillStyle = colorr[ggg-1];
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (r*(bWidth+bPadding))+bOffsetLeft;
                var brickY = (c*(bHeight+bPadding))+bOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, bWidth, bHeight);
                ctx.fillStyle = colorr[ggg-2];
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function Score() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 10, 20);
}
function stageLevel() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Level: "+ level, 740, 20);
}
/*generalna fja za crtanje na ekranu*/
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    Score();
	stageLevel();
    collisionDetection();
	
	/*ogranicenja*/
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
	
    }
    if(y + dy < ballRadius) {
        dy = -dy;
		
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleXposition - ballRadius/2 && x < paddleXposition + paddleWidth + ballRadius/2) {
            dy = -dy;

        }
        else {
			x=-10;
			y=-10;
			openLost(); 							/* LOST */
			

        }
    }
    /*pomeranje ploce*/
    if(rightPressed && paddleXposition < canvas.width-paddleWidth) {
        paddleXposition += 7;
    }
    else if(leftPressed && paddleXposition > 0) {
        paddleXposition -= 7;
    }
	/* POCETNI ODZIV LOPTE, PRVI POKRET */
    if (flag == 1 || leftPressed || rightPressed) {
		if (pocetniSmer == 0) {
			setInterval( function() {
				if (pocetniSmer == 0 && paddleXposition + paddleWidth/2 < canvas.width/2 ) {
					dx = dx*(-1);
					pocetniSmer = 1;}
				},1);
			setInterval( function() {
				if (pocetniSmer == 0 && paddleXposition + paddleWidth/2 > canvas.width/2 ) {
					dx = dx*(1);
					pocetniSmer = 1;}
				},1);}

		x += dx;
		y += dy - 0.0015*paddleXposition;
	}
	else {
		x = paddleXposition + paddleWidth/2;
	}
    
    
}
document.getElementById("myCanvas").addEventListener("click", play);

function play() {
	flag = 1;
	console.log(flag);
}

setInterval(draw,10);
console.log(flag);



