var numberOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttomAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttomAnimation(event.key);
});

function makeSound(key) {
  if (key == "w") {
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
  } else if (key == "a") {
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
  } else if (key == s) {
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
  } else if (key == d) {
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
  } else if (key == "j") {
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
  } else if (key == "k") {
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
  } else if (key == "l") {
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
  } else {
    console.log(buttonInnerHtml);
  }
}

function buttomAnimation(currentKey) {

  var activeButtom = document.querySelector("." + currentKey);
  activeButtom.classList.add("pressed");

  setTimeout(function() {
    activeButtom.classList.remove("pressed");
  }, 100);
}




// switch (key) {
//   case "w":
//     var tom1 = new Audio("sounds/tom-1.mp3");
//     tom1.play();
//     break;
//   case "a":
//     var tom2 = new Audio("sounds/tom-2.mp3");
//     tom2.play();
//     break;
//   case "s":
//     var tom3 = new Audio("sounds/tom-3.mp3");
//     tom3.play();
//     break;
//   case "d":
//     var tom4 = new Audio("sounds/tom-4.mp3");
//     tom4.play();
//     break;
//   case "j":
//     var kick = new Audio("sounds/kick-bass.mp3");
//     kick.play();
//     break;
//   case "k":
//     var snare = new Audio("sounds/snare.mp3");
//     snare.play();
//     break;
//   case "l":
//     var crash = new Audio("sounds/crash.mp3");
//     crash.play();
//     break;
//   default:
//     console.log(buttonInnerHtml);
// }
