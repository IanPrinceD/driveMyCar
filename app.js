const driveButton = document.getElementById("driveButton");
const washButton = document.getElementById("washButton");
let wash = new Audio("sounds/carWashBuzzer.mp3");
let drive = new Audio("sounds/driveCar.mp3");

function Driver(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;

  this.driveMyCar = function () {
    document.body.style.backgroundImage = "url('images/driveMyCar.jpg')";
    setTimeout(() => {
      drive.play();
      alert("Move forward kuya " + this.name);
    }, 1000);
    setTimeout(() => {
      alert("Stop kuya " + this.name);
    }, 1000);
    setTimeout(() => {
      alert("Turn right kuya " + this.name);
    }, 1000);
  };

  this.carWash = function () {
    document.body.style.backgroundImage = "url('images/carWash.jpg')";
    setTimeout(() => {
      wash.play();
      alert("Pre-rinse the car kuya " + this.name);
    }, 1000);
    setTimeout(() => {
      alert("Wash the car kuya " + this.name);
    }, 1000);
    setTimeout(() => {
      alert("Rinse and dry the car kuya " + this.name);
    }, 1000);
  };
}

const toto = new Driver("Toto", 50, true);
driveButton.addEventListener("click", function () {
  toto.driveMyCar();
});

const boy = new Driver("Boy", 35, true);
washButton.addEventListener("click", function () {
  boy.carWash();
});
