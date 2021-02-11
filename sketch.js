var housewife;
var gameState="start";
var button,setReminder;
var form;
var button1;
var button2;
var button3;
function preload(){
  housewife = loadImage("housewife_img.jpg");
  homepageimage = loadImage("HomepageImage.jpg");
  kitchentips = loadImage("KitchenTips.jpg");
}



function setup() {
  createCanvas(displayWidth,displayHeight);
  button = createButton("Let's continue")
  button.position(width/2-20,height/2+20)
  

  setReminder = createButton("Set Reminder");
  form = new Form();
  
}

function draw() {
  if (gameState==="start"){
  background(housewife);
 

  textSize(20)
  fill("#C70039")
  text("WELCOME TO Mumma's Menu, The Helping Hand",width/2-220, height/2);
  
  
  button.mousePressed(function () {
    button.hide();
    clear()
    gameState= "homepage"

  })
}
else if (gameState==="homepage"){
  clear ();
  background(homepageimage);

  setReminder.position(10,10)
  button1 = createButton("Health Tips")
  button1.position(100,200)

  button2 = createButton("Games To Play")
  button2.position(200,200)

  button3 = createButton("Kitchen Tips")
  button3.position(320,200)


  button1.mousePressed(function () {
    button1.hide();
    button2.hide();
    button3.hide();

    clear()
   gameState= "Health Tips"
})
   button2.mousePressed(function () {
     button2.hide();
   } )
setReminder.mousePressed(function (){
   gameState= "showform"
 })
}

button3.mousePressed(function () {
  button3.hide();
} )

else if (gameState==="showform"){
  form.display();
}
  
if(gameState==="Health Tips"){
//clear()
background(kitchentips)

//button1.hide();
//button2.hide();
//button3.hide();
}
  drawSprites();
}

