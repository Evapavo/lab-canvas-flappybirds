function Faby (canvas, sprite){
  this.canvas = canvas;
  this.ctx = this.canvas.getContext ("2d");
  this.width = 30;
  this.height = 30;
  this.speedX = 0;
  this.speedY = 0;
  this.gravity = 0.15;
  this.gravitySpeed = 10;
  this.x = 50;
  this.y = 50;
  this.scale = 0.2;


this.sprite = new Image ();
this.sprite.src = "images/flappy.png";
this.sprite.onload = (function() {
    this.sprite.isReady = true;
     }).bind(this);

}

Faby.prototype.drawFaby = function (){
this.sprite.onload = function (){
this.ctx.drawImage(this.sprite.src,this.x,this.y);
};

//applying negative gravity//
Faby.prototype.push = function() {
  this.speedY -= 5;
};
};

//update//
Faby.prototype.update = function (){
ctx.clearRect(0,0, canvas.width, canvas.height);
};


//adding listener for spacebar//
document.addEventListener("keypress", function(event) {
  if (event.keyCode == 32) {
    ball.push();
  }

    });
