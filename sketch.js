var bgIMG;
var cat;
var mouse;
var catIMG1, catIMG2;
var mouseIMG1, mouseIMG2;


function preload() {
    //load the images here
    bgIMG=loadImage("images/garden.png");
    catIMG1=loadAnimation("images/cat1.png");
    mouseIMG1=loadAnimation("images/mouse1.png");
    catIMG2=loadAnimation("images/cat2.png", "images/cat3.png");
    mouseIMG2=loadAnimation("images/mouse2.png", "images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addAnimation("catRunning", catIMG1);
    cat.scale = 0.2;

    mouse=createSprite(200,600);
    mouse.addAnimation("mouseRunning", mouseIMG1);
    mouse.scale = 0.2;

}

function draw() {

    background(bgIMG);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width-mouse.width)/2){
        mouse.addAnimation('happyMouse', mouseIMG2);
        mouse.changeAnimation('happyMouse');
        mouse.scale = 0.1;
        
        cat.velocityX=0;
        cat.x=300;
        cat.addAnimation('happyCat', catIMG2);
        cat.changeAnimation('happyCat');
        cat.scale = 0.1;
        
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode  === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing", mouseIMG1);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;

        cat.velocityX = -5;
        cat.addAnimation("catTeasing", catIMG1);
        cat.changeAnimation("catTeasing");
    }

}
