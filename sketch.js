//NOTE I FORGOT TO ADD THIS TO GITHUB FOR THE FIRST HOUR OF WORK

//currently a little delayed
let drumloop = 
[
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //openhat
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //hihat
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //snare
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //kick
];

let synthloop1 = 
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

let synthloop2 = 
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

let synthloop3 = 
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

let drumNames = ["Open Hat", "Hi-Hat", "Snare", "Kick"];
let noteNames = ["B", "A#", "A", "G#", "G", "F#", "F", "E", "D#", "D", "C#", "C"];

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
let synthRectWidth = remainingSynthWidth / synthloop1[0].length;
let synthRectHeight = remainingSynthHeight / synthloop1.length;

let BPM = 120;
let currentNote = 0;
let lastTime = 0;
let playingOpenHat = false;

let oscillators = [];
let currentOscillator = 1;
let osc;
let glide = .1;
let synthOnePlaying = false;
let synthTwoPlaying = false;
let synthThreePlaying = false;

let openhat;
let hihat;
let snare;
let kick;

//user input stuff
let BPMField;
let waveSelect;
let synthSelection; //1 is middle, 2 is left, 3 is right

async function setup() {
    createCanvas(1280, 720);
    
    openhat = await loadSound('assets/drums/openhat.wav');
    hihat = await loadSound('assets/drums/hihat.wav');
    snare = await loadSound('assets/drums/snare.wav');
    kick = await loadSound('assets/drums/kick.wav');

    oscillators.push(new p5.Oscillator(440, 'sawtooth'), new p5.Oscillator(440, 'sawtooth'), new p5.Oscillator(440, 'sawtooth'));
    //osc = new p5.Oscillator(440, 'sawtooth');
    for(let i = 0; i < oscillators.length; i++) {
        oscillators[i].amp(.2);
    }
    //osc.amp(.2);

    BPMField = createInput('120', 'number');
    BPMField.attribute('placeholder', 'BPM number')
    BPMField.size(100, 20);
    BPMField.position(drumRackWidth + (1280 - drumRackWidth) - 60, 100);

    waveSelect = createSelect();
    waveSelect.position(drumRackWidth + (1280 - drumRackWidth) - 60, 150);
    waveSelect.option('sine');
    waveSelect.option('sawtooth');
    waveSelect.option('square');
    waveSelect.option('triangle');

    waveSelect.selected('sawtooth');

    synthSelection = createSelect();
    synthSelection.position(drumRackWidth + (1280 - drumRackWidth) - 60, 180);
    synthSelection.option('1');
    synthSelection.option('2');
    synthSelection.option('3');

    synthSelection.selected('1');
}

function draw() {
    background(220);
    text("Osc 1 bass, Osc 2 mids, Osc 3 highs", drumRackWidth + (1280 - drumRackWidth) - 140, 400);
    currentOscillator = Number(synthSelection.value()) - 1;
    oscillators[currentOscillator].setType(waveSelect.selected());
    moveRackOnBPM();
    drawDrumRack();
    BPM = Number(BPMField.value());
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
        line(0, fontSize + textDistanceFromTopDrums + (remainingDrumHeight / drumloop.length) * r, 56 + remainingDrumWidth, fontSize + textDistanceFromTopDrums + (remainingDrumHeight / drumloop.length) * r);
    }

    textAlign(CENTER, CENTER);
    textSize(12);
    for(let r = 0; r < drumNames.length; r++) {
        text(drumNames[r], 28, fontSize + textDistanceFromTopDrums + drumRectHeight * r + drumRectHeight / 2);
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
    for(let r = 1; r < synthloop1.length; r++) {
        line(0, fontSize + synthDistanceFromTop + (remainingSynthHeight / synthloop1.length) * r, 56 + remainingSynthWidth, fontSize + synthDistanceFromTop + (remainingSynthHeight / synthloop1.length) * r);
    }

    textAlign(CENTER, CENTER);
    textSize(12);
    for(let r = 0; r < noteNames.length; r++) {
        text(noteNames[r], 28, fontSize + synthDistanceFromTop + synthRectHeight * r + synthRectHeight / 2);
    }

    for(let c = 0; c < synthloop1[0].length; c++) {
        if(c == currentNote) {
            stroke(0, 255, 255);
            strokeWeight(2);
            line(56 + ((remainingSynthWidth / synthloop1[0].length) * ((c + 31) % 32)), fontSize + synthDistanceFromTop, 56 + ((remainingSynthWidth / synthloop1[0].length) * ((c + 31) % 32)), fontSize + synthDistanceFromTop + remainingSynthHeight);
            stroke(0, 0, 0);
            strokeWeight(1);
            //line(56 + ((remainingSynthWidth / synthloop[0].length) * ((c + 31) % 32)), fontSize + synthDistanceFromTop, 56 + ((remainingSynthWidth / synthloop[0].length) * ((c + 31) % 32)), fontSize + synthDistanceFromTop + remainingSynthHeight);
        } else {
            line(56 + ((remainingSynthWidth / synthloop1[0].length) * ((c + 31) % 32)), fontSize + synthDistanceFromTop, 56 + ((remainingSynthWidth / synthloop1[0].length) * ((c + 31) % 32)), fontSize + synthDistanceFromTop + remainingSynthHeight);
        }
    }

    //fill in filled drum areas
    fill(255, 0, 0);
    if(currentOscillator == 0) {
        for(let r = 0; r < synthloop1.length; r++) {
            for(let c = 0; c < synthloop1[0].length; c++) {
                if(synthloop1[r][c] == 1) {
                    rect(57 + synthRectWidth * c, fontSize + synthDistanceFromTop + synthRectHeight * r, synthRectWidth, synthRectHeight);
                }
            }
        } 
    } else if(currentOscillator == 1) {
        for(let r = 0; r < synthloop2.length; r++) {
            for(let c = 0; c < synthloop2[0].length; c++) {
                if(synthloop2[r][c] == 1) {
                    rect(57 + synthRectWidth * c, fontSize + synthDistanceFromTop + synthRectHeight * r, synthRectWidth, synthRectHeight);
                }
            }
        } 
    } else if(currentOscillator == 2) {
        for(let r = 0; r < synthloop3.length; r++) {
            for(let c = 0; c < synthloop3[0].length; c++) {
                if(synthloop3[r][c] == 1) {
                    rect(57 + synthRectWidth * c, fontSize + synthDistanceFromTop + synthRectHeight * r, synthRectWidth, synthRectHeight);
                }
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
        if(currentOscillator == 0) {
            synthloop1[row][col] = 1 - synthloop1[row][col];
        } else if (currentOscillator == 1) {
            synthloop2[row][col] = 1 - synthloop2[row][col];
        } else {
            synthloop3[row][col] = 1 - synthloop3[row][col];
        }
    }
}

function moveRackOnBPM() {
    let timeToMoveNote = 60000 / (BPM * 4);
    if(millis() - lastTime >= timeToMoveNote) {
        lastTime = millis();
        currentNote = (currentNote + 1) % drumloop[0].length;
        playDrum();
        //drum and synth have same length in project
        if(synthOnePlaying == true) {
            oscillators[0].stop();
            synthOnePlaying = false;
        }
        if(synthTwoPlaying == true) {
            oscillators[1].stop();
            synthTwoPlaying = false;
        }
        if(synthThreePlaying == true) {
            oscillators[2].stop();
            synthThreePlaying = false;
        }
        playSynth();
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

function playSynth() {
    let col = currentNote;
    for(let r = 0; r < synthloop1.length; r++) {
        if(synthloop1[r][col] == 1) {
            oscillators[0].freq(midiToFreq(47 - r), glide);
            if(synthOnePlaying == false) {
                oscillators[0].start();
            }
            synthOnePlaying = true;
        }
    }

    for(let r = 0; r < synthloop2.length; r++) {
        if(synthloop2[r][col] == 1) {
            oscillators[1].freq(midiToFreq(71 - r), glide);
            if(synthTwoPlaying == false) {
                oscillators[1].start();
            }
            synthTwoPlaying = true;
        }
    }

    for(let r = 0; r < synthloop3.length; r++) {
        if(synthloop3[r][col] == 1) {
            oscillators[2].freq(midiToFreq(95 - r), glide);
            if(synthThreePlaying == false) {
                oscillators[2].start();
            }
            synthThreePlaying = true;
        }
    }
}

//Found the equation online and just translated to code
function midiToFreq(note) {
  return 440 * Math.pow(2, (note - 69) / 12); //C4 is 60, C#/Db4 is 61
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