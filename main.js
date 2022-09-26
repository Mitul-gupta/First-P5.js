function preload() {

}

function setup() {
 canvas= createCanvas(640,480);
 canvas.position(350, 190);
 video = createCapture(VIDEO);
 video.hide();
 }

function draw() {
image(video,130 ,120,400,300);
fill(255,0,0)
circle(80, 80, 80);
fill(0,255,0)
rect(122, 50, 420, 55, 20);
fill(255,0,0)
circle(582,80 , 80  );
fill(255,255,0)
ellipse(80, 270, 80, 300);
fill(255,0,0)
circle(80, 460, 80);
fill(0,255,0)
rect(122, 430, 420, 55, 20);
fill(255,0,0)
circle(583, 460  , 80);
fill(255,255,0)
ellipse(580, 270, 80, 300);
}
function take_snapshot() {
    save('photo.png')
}
