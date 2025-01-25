var x = 0;
var y = 0;

function setup(){
    createCanvas(720,480);
    
}

function draw(){

    cursor(CROSS);
    background('#e1e1e1')

    strokeWeight(0.5);

    //First Line of Top

    fill('green');
    textAlign(CENTER, TOP);
    text('First Webpage Assignment', 360, 30)
    textStyle(ITALIC);

    

    //Squre Thing
    rect(x,y,10,10);
    x = x + 1;
    x = x % 700;
    y = y + 2;
    y = y % 480; 
}