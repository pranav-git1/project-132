status = "";

function preload() {
    img = loadImage("tv.jfif");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects.....";
}

function modelLoaded() {
    console.log("Model loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
}