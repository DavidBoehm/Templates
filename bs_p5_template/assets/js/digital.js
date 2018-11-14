var myFont;
function preload() {
  myFont = loadFont('assets/fonts/quicksand/Quicksand-Bold.otf');
}


function setup(){
    frameRate(60);
    createCanvas(600, 600);
    angleMode(DEGREES)
    rectMode(CENTER)
}

function draw(){
    background(0);

var hr = hour();
var mn = minute();
var sc = second();
var zero;
var zero2;
var middle = (width/2, height/2);
var box = 20;
minuteZero(mn)
secondZero(sc)

    function minuteZero(mn){
        if (10 > mn) {
        zero = "0";
        //console.log("it is");
        }
        else {
        zero = "";
        //console.log("it isnt");
        }

    }
    function secondZero(sc){
        if (10 > sc) {
        zero2 = "0";
        //console.log("it is");
        }
        else {
        zero2 = "";
        //console.log("it isnt");
        }

    }
    
    push()
        fill(255);
        noStroke();
        textFont(myFont);
        text(hr + ':' + zero + mn + ':' + zero2 + sc, 10, 200);
        textSize(20)
    pop()

    let end1 = map(sc, 0, 60, 0, 60);
    let end2 = map(mn, 0, 60, 0, 360);
    let end3 = map(hr % 12, 0, 12, 0, 360);
    
    rect(box, sc*box, box, box)
    rect(box*2, mn*box, box, box)
    rect(box*3, hr*box, box, box)




}


    


