var myFont;
function preload() {
  myFont = loadFont('assets/fonts/quicksand/Quicksand-Bold.otf');
}


function setup(){
    frameRate(60);
    createCanvas(600, 600);
    angleMode(DEGREES)

}

function draw(){
    background(0);
    // translate(width / 4.1, height / 2);
var hr = hour();
var mn = minute();
var sc = second();
var zero
var zero2
var middle = (width/2, height/2);
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

    let end1 = map(sc, 0, 60, 0, 360);
    let end2 = map(mn, 0, 60, 0, 360);
    let end3 = map(hr % 12, 0, 12, 0, 360);
    
    push();
        let color = map(sc, 0, 60, 0, 256);
        let spin = map(sc, 0, 60, 0, 360);
        translate(0 , 600);
        rotate(-90);
        fill(200,200,200);
        stroke(1);
        
        strokeWeight(4);
        noFill();
        stroke(255);
        fill(0, 0, 0, 0,)
        ellipse(middle, middle, 322);
        
        stroke(200 ,100, 10);
        strokeWeight(20);
        push()
        
        arc(middle, middle, 100, 100, 0, end3);
        arc(middle, middle, 200, 200, 0, end2);
        pop()
        stroke(220 , color, pulse);
        arc(middle, middle, 300, 300, 0, end1);
    pop();

    var frequency = 2 * PI / 178;
    
    var pulse = sin(waveSin);

    var waveSin = function clockPulse(){
        var i = 0;
        if (i < 360){ i++ }
        else { i--};
        console.log(i)
        return(i)
    }
    console.print(i)
}
    
  


