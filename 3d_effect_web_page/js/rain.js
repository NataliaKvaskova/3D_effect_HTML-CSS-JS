let canvas = document.getElementsByClassName('rain')[0]; // Полуучаем доступ к объекту canvas HTML
canvas.width = window.innerWidth; // задаем размер вся ширина и вся высота окна
canvas.height = window.innerHeight;
let c = canvas.getContext('2d'); // определяем, что контент будет двухмерным

//создаем функцию рандомного числа округленного в меньшую сторону, которая будет использована в построение "капель"
function randomNum (max, min){
  return Math.floor(Math.random()*max) + min;
}

//создаем класс для объектов "капель"
function RainDrops(x,y,endy,velocity,opacity){
  //задаем параметры объектов класса
  this.x = x;
  this.y = y;
  this.endy = endy;
  this.velocity = velocity;
  this.opacity = opacity;
  //функция рисования объектов
    this.draw = function(){
      c.beginPath();
      c.moveTo(this.x, this.y);
      c.lineTo(this.x, this.y-this.endy);
      c.lineWidth = 1;
      c.strokeStyle = "rgba(255,255,255," + this.opacity + ")";
      c.stroke();
    }
  //создаем функцию обновления canvas
    this.update = function(){
      let rainEnd = window.innerHeight + 100;
      if (this.y >= rainEnd){
        this.y = this.endy - 100
      } else {
          this.y = this.y + this.velocity
        }

      this.draw();
    }
}

//создаем массив "капель"
 let rainArray = [];

 //создаем объекты класса RainDrops в кол-ве 140 и записываем в массив
 for (let i = 0; i < 140; i++){
  let rainXlocation = Math.floor(Math.random() * window.innerWidth) + 1;
  let rainYlocation = Math.random() * -500;
  let randomRainHeight = randomNum(10, 2);
  let randomSpeed = randomNum(20, .2);
  let randomOpacity = Math.random() * .55;
  rainArray.push(new RainDrops(rainXlocation, rainYlocation, randomRainHeight, randomSpeed, randomOpacity));
 }

 //создаем функции анимации дождя
 function animateRain() {
    requestAnimationFrame(animateRain);
    c.clearRect(0,0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < rainArray.length; i++) {
      rainArray[i].update();
    }
 }

 animateRain();

