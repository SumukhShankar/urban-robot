const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundimage();
}

function setup() {
    var canvas = createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;
    

}

function draw() {

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }
    Engine.update(engine);

    // write code to display time in correct format here
    


}

async function getBackgroundimage() {
    var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Tokyo');
    var responsejson = await response.json();
    var datetime = responsejson.datetime;
    // console.log(datetime);
    var hour = datetime.slice(11, 13);
    console.log(hour);
    //console.log(responsejson);

    
    if (hour >= 04 && hour <= 06) {
        bg = "sunrise1.png";
    }
    else if (hour >= 07 && hour <= 08) {
        bg = "sunrise2.png";
    }
    else if (hour >= 09 && hour <= 10) {
        bg = "sunrise3.png";
    }
    else if (hour >= 11 && hour <= 12) {
        bg = "sunrise4.png";
    }
    else if (hour >= 13 && hour <= 14) {
        bg = "sunrise5.png";
    }
    else if (hour >= 15 && hour <= 16) {
        bg = "sunrise6.png";
    }
    else if (hour >= 17 && hour <= 18) {
        bg = "sunset7.png";
    }
    else if (hour >= 19 && hour <= 20) {
        bg = "sunset10.png";
    }
    else if (hour >= 21 && hour <= 22) {
        bg = "sunset12.png";
    }
    else if (hour >= 23 && hour <= 00) {
        bg = "sunset12.png";
    }
    else if (hour >= 01 && hour <= 02) {
        bg = "sunset12.png";
    }
    else if (hour >= 03 && hour <= 04) {
        bg = "sunset12.png";
    }


    backgroundImg = loadImage(bg);
}