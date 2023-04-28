song = "";
song2 = "";

function preload(){
    song=loadSound("music2.mp3");
    song2=loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(600,550);
    canvas.position(600,580);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,550);
}
