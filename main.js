function preload(){

}
function setup(){
canvas=createCanvas(450,350);
canvas.position(70,250);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}
function draw(){
 image(video,0,0,450,350);
 tint(tint_color);
}
function filter_color(){
    tint_color=document.getElementById("input").value;
}
function take_snapshot(){
  save('neev.png');
}