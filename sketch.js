//NOTE I FORGOT TO ADD THIS TO GITHUB FOR THE FIRST HOUR OF WORK

//currently a little delayed
let drumloop = 
[
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //openhat
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //hihat
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //snare
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //kick
];

let synthloop = 
[
    //probably gon be the fourth octave or smthn
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //c note
];

let drumRackWidth = 1000;
let drumRackHeight = 300;
let fontSize = 15;
let textDistanceFromTopDrums = 15;
let remainingDrumWidth = drumRackWidth - 56;
let remainingDrumHeight = drumRackHeight - fontSize - textDistanceFromTopDrums;
let drumRectWidth = remainingDrumWidth / drumloop[0].length;
let drumRectHeight = remainingDrumHeight / drumloop.length;

let synthRackWidth = 1000;
let synthRackHeight = 720 - drumRackHeight;
let synthDistanceFromTop = textDistanceFromTopDrums + drumRackHeight;
let remainingSynthWidth = synthRackWidth - 56;
let remainingSynthHeight = synthRackHeight - fontSize - textDistanceFromTopDrums;
let synthRectWidth = remainingSynthWidth / synthloop[0].length;
let synthRectHeight = remainingSynthHeight / synthloop.length;

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
    text("Drum Rack", drumRackWidth / 2, textDistanceFromTopDrums);
    fill(30);
    line(0, fontSize + textDistanceFromTopDrums, drumRackWidth, fontSize + textDistanceFromTopDrums);
    
    //56 is space for instrument names
    line(56, fontSize + textDistanceFromTopDrums, 56, fontSize + textDistanceFromTopDrums + remainingDrumHeight);

    stroke(0, 0, 0);
    //start at 1 cause the line at 0 already filled
    for(let r = 1; r < drumloop.length; r++) {
        line(0, fontSize + textDistanceFromTopDrums + (remainingDrumHeight / drumloop.length) * r, 56 + remainingDrumWidth, fontSize + textDistanceFromTopDrums + (remainingDrumHeight / 4) * r);
    }
    for(let c = 0; c < drumloop[0].length; c++) {
        if(c == currentNote) {
            stroke(0, 255, 255);
            strokeWeight(2);
            line(56 + ((remainingDrumWidth / drumloop[0].length) * ((c + 31) % 32)), fontSize + textDistanceFromTopDrums, 56 + ((remainingDrumWidth / drumloop[0].length) * ((c + 31) % 32)), fontSize + textDistanceFromTopDrums + remainingDrumHeight);
            stroke(0, 0, 0);
            strokeWeight(1);
            line(56 + ((remainingDrumWidth / drumloop[0].length) * c), fontSize + textDistanceFromTopDrums, 56 + ((remainingDrumWidth / drumloop[0].length) * c), fontSize + textDistanceFromTopDrums + remainingDrumHeight);
        } else {
            line(56 + ((remainingDrumWidth / drumloop[0].length) * c), fontSize + textDistanceFromTopDrums, 56 + ((remainingDrumWidth / drumloop[0].length) * c), fontSize + textDistanceFromTopDrums + remainingDrumHeight);
        }
    }

    //fill in filled drum areas
    fill(255, 0, 0);
    for(let r = 0; r < drumloop.length; r++) {
        for(let c = 0; c < drumloop[0].length; c++) {
            if(drumloop[r][c] == 1) {
                rect(57 + drumRectWidth * c, fontSize + textDistanceFromTopDrums + drumRectHeight * r, drumRectWidth, drumRectHeight);
            }
        }
    }    
}

function drawSynthRack() {
    fill(20, 90, 170);
    rect(0, drumRackHeight, synthRackWidth, synthRackHeight);
    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(fontSize);
    text("Synth Rack", drumRackWidth / 2, synthDistanceFromTop);
    fill(30);
    line(0, fontSize + synthDistanceFromTop, drumRackWidth, fontSize + synthDistanceFromTop);

    //HERE
    //56 is space for note names
    line(56, fontSize + synthDistanceFromTop, 56, fontSize + synthDistanceFromTop + synthRackHeight);

    stroke(0, 0, 0);
    //start at 1 cause the line at 0 already filled
    for(let r = 1; r < synthloop.length; r++) {
        line(0, fontSize + synthDistanceFromTop + (remainingSynthHeight / synthloop.length) * r, 56 + remainingSynthWidth, fontSize + synthDistanceFromTop + (remainingSynthHeight / synthloop.length) * r);
    }
    for(let c = 0; c < synthloop[0].length; c++) {
        if(c == currentNote) {
            stroke(0, 255, 255);
            strokeWeight(2);
            line(56 + ((remainingSynthWidth / synthloop[0].length) * ((c + 31) % 32)), fontSize + synthDistanceFromTop, 56 + ((remainingSynthWidth / synthloop[0].length) * ((c + 31) % 32)), fontSize + synthDistanceFromTop + remainingSynthHeight);
            stroke(0, 0, 0);
            strokeWeight(1);
            //line(56 + ((remainingSynthWidth / synthloop[0].length) * ((c + 31) % 32)), fontSize + synthDistanceFromTop, 56 + ((remainingSynthWidth / synthloop[0].length) * ((c + 31) % 32)), fontSize + synthDistanceFromTop + remainingSynthHeight);
        } else {
            line(56 + ((remainingSynthWidth / synthloop[0].length) * ((c + 31) % 32)), fontSize + synthDistanceFromTop, 56 + ((remainingSynthWidth / synthloop[0].length) * ((c + 31) % 32)), fontSize + synthDistanceFromTop + remainingSynthHeight);
        }
    }

    //fill in filled drum areas
    fill(255, 0, 0);
    for(let r = 0; r < synthloop.length; r++) {
        for(let c = 0; c < synthloop[0].length; c++) {
            if(synthloop[r][c] == 1) {
                rect(57 + synthRectWidth * c, fontSize + synthDistanceFromTop + synthRectHeight * r, synthRectWidth, synthRectHeight);
            }
        }
    }    
}

function mouseClicked(event) {
    if(mouseX > 56 && mouseX < drumRackWidth && mouseY > fontSize + textDistanceFromTopDrums && mouseY < drumRackHeight) {
        let col = floor((mouseX - 56) / drumRectWidth);

        let row = floor((mouseY - fontSize - textDistanceFromTopDrums) / drumRectHeight);
        drumloop[row][col] = 1 - drumloop[row][col];
    } else if(mouseX > 56 && mouseX < synthRackWidth && mouseY > fontSize + synthDistanceFromTop && mouseY < fontSize + synthDistanceFromTop + remainingSynthHeight) {
        let col = floor((mouseX - 56) / synthRectWidth);
        let row = floor((mouseY - fontSize - synthDistanceFromTop) / synthRectHeight);
        synthloop[row][col] = 1 - synthloop[row][col];
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