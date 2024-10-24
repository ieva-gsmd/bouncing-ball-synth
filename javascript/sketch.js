let x = 200;
let y = 200;
let d = 50
let ballSpeed = 2;

let sampler;

let playing = false;

function setup() {
  createCanvas(400, 400);

  sampler = new Tone.Sampler({
    urls: {
      C4: "./sounds/ball.mp3" // Replace with the actual path to your sample
    },
  });

  reverb = new Tone.Reverb({
    decay: 3, // Change this value for more or less reverb tail
    wet: 0.5  // Wet amount (how much of the effect is heard)
  }).toDestination();

  // Connect the sampler to the reverb, and the reverb to the destination (speakers)
  sampler.connect(reverb);

  //use synth instead
  //synth = new Tone.Synth().toDestination();

  rectMode(CENTER);
}

function draw() {
  background(220);

  if (playing) {

    circle(x, y, d)

    x = x + ballSpeed;
    y = y + ballSpeed;
    if ((x < d/2) || (x > height - d/2) || (y < d/2) || (y > height - d/2)) {
      ballSpeed *= -1;
  
      //puse synth instead
      //synth.triggerAttackRelease("C4", "8n");

      //play sampler note
      sampler.triggerAttackRelease("C4", "8n");
        
    } 
  } else {
    text('click to start', width/2, height/2)
  }


}

function mousePressed() {
  if (!playing) {
    Tone.start();
    playing = true;
  }
}