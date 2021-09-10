var xplayer = 200;
var yplayer = 400;
var xnpc = 950;
var ynpc = 400;
var speed = 50; // make this number smaller to move faster
var leftPointer, rightPointer,upPointer,downPointer;
var c, ctx, img;

var playerHp = 100
var npcHp = 1000

document.getElementById('plyrhp').innerHTML = "Hp: " + playerHp;
document.getElementById('npchp').innerHTML = "Hp: " + npcHp;

function load_image() {
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    
    background = document.getElementById("bg");
    ctx.drawImage(background,0,0)
    img = document.getElementById("testpic");
    npc = document.getElementById("npc");
    lose = document.getElementById("lose");
    // ctx.drawImage(lose,0,0)
    ctx.drawImage(img,xplayer,yplayer);
    ctx.drawImage(npc,xnpc,ynpc);
    
}
load_image();

function attack() {
    rightPointer = setInterval(function () {
        xplayer = xplayer + 20;
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.drawImage(background,0,0)
        ctx.drawImage(npc,xnpc,ynpc);
        ctx.drawImage(img,xplayer,yplayer);
        
        if (xplayer === 900){
            clearInterval(rightPointer);
            rightPointer = '';
            npcHp = npcHp - 10
            document.getElementById('npchp').innerHTML = "Hp: " + npcHp;
            setTimeout(function () {
                leftPointer = setInterval(function () {
                    xplayer = xplayer - 20;
                    ctx.clearRect(0, 0, c.width, c.height);
                    ctx.drawImage(background,0,0)
                    ctx.drawImage(npc,xnpc,ynpc);
                    ctx.drawImage(img,xplayer,yplayer);
                    
                    if (xplayer === 200){
                        clearInterval(leftPointer);
                        leftPointer = '';
                        setTimeout(function () {
                            npcattack()
                        }, 1700);
                    }
                }, speed)
            }, 2000);
        }
    }, speed)  
}

function npcattack(){
    leftPointer = setInterval(function () {
        xnpc = xnpc - 20;
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.drawImage(background,0,0)
        ctx.drawImage(npc,xnpc,ynpc);
        ctx.drawImage(img,xplayer,yplayer);
        
        if (xnpc === 270){
            clearInterval(leftPointer);
            leftPointer = '';
            playerHp = playerHp - 100
            document.getElementById('plyrhp').innerHTML = "Hp: " + playerHp;
            setTimeout(function () {
                rightPointer = setInterval(function () {
                    xnpc = xnpc + 20;
                    ctx.clearRect(0, 0, c.width, c.height);
                    ctx.drawImage(background,0,0)
                    ctx.drawImage(npc,xnpc,ynpc);
                    // ctx.drawImage(img,xplayer,yplayer);
                    console.log(xnpc+","+ynpc)
                    if (xnpc === 950){
                        clearInterval(rightPointer);
                        rightPointer = '';
                        ctx.drawImage(lose,0,0);
                        document.addEventListener('keydown', function(e) {
                            console.log(e.keyCode);
                            if (e.keyCode == 32) {
                                // CODE THAT STARTS LEFT IMAGE MOVEMENT GOES HERE.
                                console.log("hi")
                                window.open("game.html", target="_self");
                            }
                           
                        }, true);
                        btnhide()
                    }
                }, speed)  
            }, 1700);
        }
    }, speed)
}

function btnhide(){
    document.getElementById("atkbtn").style.display === "none"
}




// var styl = document.getElementById("styl");
// if (590 >= xval <= 730 && 340 >= yval <= 400){
//     console.log("yex");
//     styl.style.display = "block";
// }else {
//     console.log("no");
//     styl.style.display = "none";
// }

