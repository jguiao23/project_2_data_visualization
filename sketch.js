let monster;
let BIG;
let monsterMenu = 0;
let screenShuffle;
function setup() {
  createCanvas(800, 600);
  monster = loadJSON("dragons copy 2.json");
  //console.log(monster.monsters[0])
}

function draw() {
  background(220);

  if (monster) {
    if (monsterMenu===0){
    startScreen();
    } else if (monsterMenu===1){
      HPScreen();
    } 
    

    }

  

}

function keyPressed() {
  monsterMenu++;
}

function startScreen(){
  textSize(32);
  textAlign(CENTER);
  text("Welcome to DnD's(Dungeon and Dragons) \n Big Bads!",width/2,100)
}
function HPScreen(){
  if(monster){
    for (let i = 0; i < 10; i++) {
      let hub= monster.results;
      ellipseMode(CENTER);
      noStroke();
      let x = 50 + i * 80;
      let y = height/2;
      let r = hub[i].stats.hit_points / 6;

      // text(monster.results[i].name, 10, 10 + i * 20)
    ellipse(x,y,r)
    if(hub[i].stats.hit_points>200){
    }
    }
  }
}

function sizeScreen(){
  textAlign(CENTER);
  text("Size Comparison of the Monsters of DnD",width/2,100);
}