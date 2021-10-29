function setup(){
    video= createCapture();
    video.size(550, 500);
    canvas=createCanvas(550, 450);
    canvas.position(600, 100);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized  !");
}

function draw(){
    video.volume(0);
    
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
    }
}
