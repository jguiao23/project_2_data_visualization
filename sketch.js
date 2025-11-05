let monster;
let BIG;
let monsterMenu = 0;
let screenShuffle;
let dndFont;


function preload(){
 dndFont= loadFont("DUNGRG__.TTF");
}
function setup() {
  createCanvas(3000, 750);
  monster = loadJSON("dragons copy 2.json");
  //console.log(monster.monsters[0])
  textFont(dndFont);

}

function draw() {
  background(25);
  fill(255);

  if (monster) {
    if (monsterMenu===0){
    // startScreen();
    HPScreen();
    } else if (monsterMenu===1){
      HPScreen();
    } 
    

    }

  

}

function keyPressed() {
  // monsterMenu++;
}

function startScreen(){
  textSize(50);
  textAlign(CENTER);
  text("Welcome to DnD's(Dungeon and Dragons) \n Big Bads!",width/2,100)
}
function HPScreen(){
  if(monster){
    text("Scroll to the --> for more Monsters",1000,100);
    for (let i = 0; i < 8; i++) {
      let hub= monster.results;
      ellipseMode(CENTER);
      let x = 150 + i * 500;
      let y = height/2;
      let r = hub[i].stats.hit_points;
      let d = dist(mouseX,mouseY,x,y);

      // text(monster.results[i].name, 10, 10 + i * 20)
    ellipse(x,y,r,r);
    textAlign(CENTER);
    textSize(50);
    // text(hub[i].name,x, y+300)
    if(hub[i].stats.hit_points<50){
      text(hub[i].name,x, y+50)
    }else if(hub[i].stats.hit_points<200){
      text(hub[i].name,x, y+200)
    }else if(hub[i].stats.hit_points<600){
      text(hub[i].name,x, y+350)
    }

    if(d < r){
        stroke(255, 204, 0);
        strokeWeight(4);
        push()
        fill(0)
        textSize(17)
        rectMode(CENTER);
        rect(x,y,200,200)
        text("STATS:  ",x,y-70)
        text("strength:  " + hub[i].stats.strength,x,y)
        text("HEALTH:  " + hub[i].stats.hit_points,x,y+30)
        pop()
       }
       else{
        noStroke();
       }
    }
  }
}

function sizeScreen(){
  if(monster){
  let hub= monster.results;
  textAlign(CENTER);
  textSize(50);
  text("Size Comparison of the Monsters of DnD",width/2,100);
  text("Tiny",100,700);
  text("Small",350,700);
  text("Medium",600,700);
  text("Large",850,700);
  text("Huge",1100,700);
  text("Gargantuan",1350,700);
  for(let i=0; i<9; i++){
    let tin = 10;
    let smal = 50;
    let meduiu = 100;
    let larg = 200;
    let hug = 400;
    let gargantua = 600;
    let x = 50 + i * 100;
    let y = 500;
    let monSize = 60;
    let r = monSize;
    ellipseMode(CENTER)


    ellipse()
  }
}


}