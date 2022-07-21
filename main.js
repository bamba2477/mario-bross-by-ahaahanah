function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_die = loadSound("die.wav");
	mario_kick = loadSound("kick.wav");

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
video.size(800,450);
video.parent(game_console);
poseNet = ml5.poseNet(video, modaloaded);
poseNet.on('pose', gotposes);
}
function modaloaded(){
	console.log("modal is lodaded");
}
function gotposes(results){
	if (results.lenght > 0)
{
	console.log(results);
	noseX = results[0].pose.nose.x;
	noseY = results[0].pose.nose.y;
	console.log("noseX = " + noseX+"noseY" +noseY);
}
}
function draw() {
	game();
}






