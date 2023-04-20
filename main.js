nose_x = ""
nose_y = ""


function preload(){
mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotposes);
}



function take_snapshot(){
    save('mustache.png');
}

function modelLoaded(){
    console.log('poseNet is Initialized');
}
    
function gotposes(results){
if(results.length > 0){
    console.log(results);
    console.log("nose x ="+results[0].pose.nose.x);
    console.log("nose y ="+results[0].pose.nose.y);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
}
}
function draw(){
    image(video,0,0,300,300);
    image(mustache,nose_x-35,nose_y-5,70,30);
    }
