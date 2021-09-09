var xval = 650;
var yval = 360;
var speed = 50; // make this number smaller to move faster
var leftPointer, rightPointer,upPointer,downPointer;
var c, ctx, img;

function load_image() {
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    
    background = document.getElementById("bg");
    ctx.drawImage(background,0,0)
    img = document.getElementById("testpic");
    ctx.drawImage(img,xval,yval);
}
load_image();

// var styl = document.getElementById("styl");
// if (590 >= xval <= 730 && 340 >= yval <= 400){
//     console.log("yex");
//     styl.style.display = "block";
// }else {
//     console.log("no");
//     styl.style.display = "none";
// }

document.addEventListener('keydown', function(e) {
    console.log(e.keyCode);
    if (e.keyCode == 37) {
        // CODE THAT STARTS LEFT IMAGE MOVEMENT GOES HERE.
        if(!leftPointer) {
            leftPointer = setInterval(function () {
                xval = xval - 10;
                ctx.clearRect(0, 0, c.width, c.height);
                ctx.drawImage(background,0,0)
                ctx.drawImage(img,xval,yval);
                console.log(xval+","+yval)
            }, speed)
        }
    }
    else if (e.keyCode == 39) {
        // CODE THAT STARTS RIGHT IMAGE MOVEMENT GOES HERE.
        if(!rightPointer) {
            rightPointer = setInterval(function () {
                xval = xval + 10;
                ctx.clearRect(0, 0, c.width, c.height);
                ctx.drawImage(background,0,0)
                ctx.drawImage(img,xval,yval);
                console.log(xval+","+yval)
            }, speed)
        }
    }
    else if (e.keyCode == 38) {
        // CODE THAT STARTS LEFT IMAGE MOVEMENT GOES HERE.
        if(!upPointer) {
            upPointer = setInterval(function () {
                yval = yval - 10;
                ctx.clearRect(0, 0, c.width, c.height);
                ctx.drawImage(background,0,0)
                ctx.drawImage(img,xval,yval);
                console.log(xval+","+yval)
            }, speed)
        }
    }
    else if (e.keyCode == 40) {
        // CODE THAT STARTS RIGHT IMAGE MOVEMENT GOES HERE.
        if(!downPointer) {
            downPointer = setInterval(function () {
                yval = yval + 10;
                ctx.clearRect(0, 0, c.width, c.height);
                ctx.drawImage(background,0,0)
                ctx.drawImage(img,xval,yval);
                console.log(xval+","+yval)
            }, speed)
        }
    }
}, true);

document.addEventListener('keyup', function(e) {
    if (e.keyCode == 37) {
        // CODE THAT STOPS LEFT IMAGE MOVEMENT GOES HERE.
        clearInterval(leftPointer);
        leftPointer = '';
    }
    else if (e.keyCode == 39) {
        // CODE THAT STOPS RIGHT IMAGE MOVEMENT GOES HERE.
        clearInterval(rightPointer);
        rightPointer = '';
    }
    else if (e.keyCode == 38) {
        // CODE THAT STOPS RIGHT IMAGE MOVEMENT GOES HERE.
        clearInterval(upPointer);
        upPointer = '';
    }
    else if (e.keyCode == 40) {
        // CODE THAT STOPS RIGHT IMAGE MOVEMENT GOES HERE.
        clearInterval(downPointer);
        downPointer = '';
    }
}, true);