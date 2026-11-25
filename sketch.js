//NOTE I FORGOT TO ADD THIS TO GITHUB FOR THE FIRST HOUR OF WORK

//currently a little delayed
let drumloop = 
[
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //openhat
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //hihat
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //snare
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //kick
];

let drumRackWidth = 1000;
let drumRackHeight = 300;
let fontSize = 15;
let textDistanceFromTop = 15;
let remainingWidth = drumRackWidth - 56;
let remainingHeight = drumRackHeight - fontSize - textDistanceFromTop;
let drumRectWidth = remainingWidth / drumloop[0].length;
let drumRectHeight = remainingHeight / drumloop.length;

let synthRackWidth = 1000;
let synthRackHeight = 720 - drumRackHeight;

let BPM = 120;
let currentNote = 0;
let lastTime = 0;
let playingOpenHat = false;

let openhat;
let hihat;
let snare;
let kick;

async function setup() {
    createCanvas(1280, 720);
    
    openhat = await loadSound('assets/drums/openhat.wav');
    hihat = await loadSound('assets/drums/hihat.wav');
    snare = await loadSound('assets/drums/snare.wav');
    kick = await loadSound('assets/drums/kick.wav');
}

function draw() {
    background(220);
    moveRackOnBPM();
    drawDrumRack();
    drawSynthRack();
}

function drawDrumRack() {
    fill(100);
    rect(0, 0, drumRackWidth, drumRackHeight);
    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(fontSize);
    text("Drum Rack", drumRackWidth / 2, textDistanceFromTop);
    fill(30);
    line(0, fontSize + textDistanceFromTop, drumRackWidth, fontSize + textDistanceFromTop);
    
    //56 is space for instrument names
    line(56, fontSize + textDistanceFromTop, 56, fontSize + textDistanceFromTop + remainingHeight);

    stroke(0, 0, 0);
    //start at 1 cause the line at 0 already filled
    for(let r = 1; r < drumloop.length; r++) {
        line(0, fontSize + textDistanceFromTop + (remainingHeight / drumloop.length) * r, 56 + remainingWidth, fontSize + textDistanceFromTop + (remainingHeight / 4) * r);
    }
    for(let c = 0; c < drumloop[0].length; c++) {
        if(c == currentNote) {
            stroke(0, 255, 255);
            strokeWeight(2);
            line(56 + ((remainingWidth / drumloop[0].length) * c), fontSize + textDistanceFromTop, 56 + ((remainingWidth / drumloop[0].length) * c), fontSize + textDistanceFromTop + remainingHeight);
            stroke(0, 0, 0);
            strokeWeight(1);
        } else {
            line(56 + ((remainingWidth / drumloop[0].length) * c), fontSize + textDistanceFromTop, 56 + ((remainingWidth / drumloop[0].length) * c), fontSize + textDistanceFromTop + remainingHeight);
        }
    }

    //fill in filled drum areas
    fill(255, 0, 0);
    for(let r = 0; r < drumloop.length; r++) {
        for(let c = 0; c < drumloop[0].length; c++) {
            if(drumloop[r][c] == 1) {
                rect(57 + drumRectWidth * c, fontSize + textDistanceFromTop + drumRectHeight * r, drumRectWidth, drumRectHeight);
            }
        }
    }    
}

function drawSynthRack() {
    fill(100);
    rect(0, drumRackHeight, synthRackWidth, synthRackHeight);
    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(fontSize);
    text("Synth Rack", drumRackWidth / 2, textDistanceFromTop + drumRackHeight);
    fill(30);
    line(0, fontSize + textDistanceFromTop + drumRackHeight, drumRackWidth, fontSize + textDistanceFromTop + drumRackHeight);

    
}

function mouseClicked(event) {
    if(mouseX > 56 && mouseX < drumRackWidth && mouseY > fontSize + textDistanceFromTop && mouseY < drumRackHeight) {
        let col = floor((mouseX - 56) / drumRectWidth);

        let row = floor((mouseY - fontSize - textDistanceFromTop) / drumRectHeight);
        drumloop[row][col] = 1 - drumloop[row][col];
    }
}

function moveRackOnBPM() {
    let timeToMoveNote = 60000 / (BPM * 4);
    if(millis() - lastTime >= timeToMoveNote) {
        lastTime = millis();
        currentNote = (currentNote + 1) % drumloop[0].length;
        playDrum();
    }
}

function playDrum() {
    let col = currentNote;
    for(let r = 0; r < drumloop.length; r++) {
        if(drumloop[r][col] == 1) {
            if(r == 1) {
                if(playingOpenHat == true) {
                    openhat.stop();
                    playingOpenHat = false;
                }
                hihat.play();
            } else if(r == 0) {
                openhat.play();
                playingOpenHat = true;
            } else if(r == 2) {
                snare.play();
            } else if(r == 3) {
                kick.play();
            }
        }
    }
}

//just testing the audios
function keyPressed() {
    if(key == 'k') {
        kick.play();
    }
    if(key == 's') {
        snare.play();
    }
    if(key == 'h') {
        hihat.play();
    }
    if(key == 'o') {
        openhat.play();
    }
}