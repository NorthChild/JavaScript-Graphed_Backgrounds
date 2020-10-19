////////////////////////////////////////////////////////////
// ideally works square canvas (i.e 400x400, 500x500 etc.)
////////////////////////////////////////////////////////////

// mouse tracker
var mouse_tracker = function() {
    var x = mouseX - 20;
    var label = mouseX + '/' + mouseY;
    fill(0,0,139 );
    if (mouseX < (width-20) && mouseY < (height-20)) {
        text(label, mouseX + 15, mouseY + 15);
    } else {
        text(label, mouseX - 50, mouseY - 10);
    }
};

////////////////////////////////////////////////////////////
// spaced lines for the environment
// x pos
var graph_x = function() {
    var x = 0;
    while (x < width) {
        line(0, x, width, x);
        x += 10;
    }
};
// y pos
var graph_y = function() {
    var y = 0;
    while (y < height) {
        line(y, 0, y, height);
        y += 10;
    }
};

////////////////////////////////////////////////////////////
// ruler for the environment

var ruler_x_I = function() {
    var x_II = 0;
    while (x_II < width) {
        fill(247, 17, 52);
        text(x_II, x_II, 10);
        x_II += 40;
    }
};

var ruler_y_I = function() {
    var y_II = 40;
    while (y_II < height) {
        fill(255, 0, 0);
        text(y_II, 0, y_II);
        y_II += 40;
    }
};

////////////////////////////////////////////////////////////

function setup() {
  createCanvas(600, 600);
}

////////////////////////////////////////////////////////////
// real-time display
////////////////////////////////////////////////////////////


function draw() {
  background(232, 247, 202);

    // line grid
    graph_x();
    graph_y();

    // ruler on grid
    // x pos
    ruler_x_I();

    // y pos
    ruler_y_I();

    // mouse position tracker
    mouse_tracker();
}

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
