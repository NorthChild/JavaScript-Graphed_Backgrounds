////////////////////////////////////////////////////
// ideally works on 400W x 400H, JavaScript
////////////////////////////////////////////////////
// mouse tracker
var mouse_tracker = function() {
    var x = mouseX - 20;
    var label = mouseX + '/' + mouseY;
    fill(242, 9, 64);
    if (mouseX < 315) {
        text(label, mouseX + 15, mouseY + 15);
    } else {
        text(label, mouseX - 50, mouseY - 10);
    }
};

// spaced lines for the environment
// x pos
var graph_x = function() {
    var x = 0;
    while (x < 400) {
        line(0, x, 400, x);
        x += 10;
    }
};
// y pos
var graph_y = function() {
    var y = 0;
    while (y < 400) {
        line(y, 0, y, 400);
        y += 10;
    }
};
////////////////////////////////////////////////////
// add more variables and functions in here



////////////////////////////////////////////////////
// real-time testing display
////////////////////////////////////////////////////
draw = function() {
    ///// environment
    background(79, 108, 255);
    stroke(191, 189, 189);
    graph_x();
    graph_y();
    textSize(20);
    mouse_tracker();
    ///// environment
    /// insert obj to test here



    /// insert obj to test here
};
