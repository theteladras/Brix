var colorr=[];
colorr[0] = "red";
colorr[1] = "blue";
colorr[2] = "green";
colorr[3] = "#fc3";
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
var ballRadius=10;


var x=canvas.width/2;
var dx=2;
var y=canvas.height-30;
var dy=-2;
var paddleHeight=10;
var paddleWidth=150;
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


document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);

var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };  /*statusom proveravam dali je cigla unistena*/
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

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

function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+bWidth && y > b.y && y < b.y+bHeight) {
                    dy = -dy;
						dx = 0.8*dx;
                    b.status = 0;
					ggg = Math.random()*7 <<0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        setInterval(alert("YOU WIN, CONGRATS!"),1000);
                        document.location.reload();
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

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleXposition, canvas.height-paddleHeight, paddleWidth, paddleHeight);
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
/*generalna fja*/
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    Score();
    collisionDetection();
	
	/*ogranicenja*/
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
		dx=1.6*dx;
        dx = -dx;
	
    }
    if(y + dy < ballRadius) {
        dy = -dy;
		
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleXposition - ballRadius/2 && x < paddleXposition + paddleWidth + ballRadius/2) {
            dy = -dy;
			if (leftPressed) {
			
			dx = 1.3*dx;
			}
		if (rightPressed) {
			
			dx = 1.3*dx;
			}
		else {
		x += dx;	
		}

        }
        else {
		document.location.reload();
           alert("GAME OVER"); /* ako prodje dole */
			
        }
    }
    /*pomeranje ploce*/
    if(rightPressed && paddleXposition < canvas.width-paddleWidth) {
        paddleXposition += 7;
    }
    else if(leftPressed && paddleXposition > 0) {
        paddleXposition -= 7;
    }
    if (flag == 1 || leftPressed || rightPressed) {

		x += dx;
		y += dy;
	}
	else {
		x = paddleXposition + paddleWidth/2;
	}
    
    
}
var btnPlay = document.getElementById("myCanvas").addEventListener("click", play);

function play() {

	console.log(flag);
}

setInterval(draw,10);
console.log(flag);


