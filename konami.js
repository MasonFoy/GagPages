// a key map of allowed keys
var allowedKeys = {
  77: 'M',
  69: 'E',
};

// the 'official' Konami Code sequence
var konamiCode = ['M', 'E', 'M', 'E'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

var audio = new Audio('https://masonfoy.github.io/GagPages/Undertale%20-%20Megalovania_.mp3')

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
audio.play();
}
