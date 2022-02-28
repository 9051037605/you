canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2D");
Rover_width= 100;
Rover_height= 90;
back_image= "mars.jpg";
rover_image= "rover.png";
rover_x=10;
rover_y=10;
function add(){
    Bg_imgTag = new Image();
    Bg_imgTag.onload= uploadbackground;
    Bg_imgTag.src= back_image;
    rover_imgTag= new Image();
    rover_imgTag.onload= uploadrover;
    rover_imgTag.src= rover_image;
}
function uploadbackground(){
    ctx.drawImage(Bg_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,Rover_width,Rover_height);
}
window.addEventListener("keydown",mykey_down);
function mykey_down(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
        up();
        console.log ("up");
    }
}