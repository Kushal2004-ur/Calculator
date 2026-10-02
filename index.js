const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
  adjustFontSize();
}

function clearDisplay() {
  display.value = "";
  adjustFontSize();
}

function deleteNumber() {
  display.value = display.value.slice(0, -1);
  adjustFontSize();
}

function calculate() {
  try {
    display.value = eval(display.value);
    adjustFontSize();
  } catch (error) {
    display.value = "Error";
    adjustFontSize();
  }
}

function adjustFontSize() {
  const length = display.value.length;

  if (length <= 8) {
    display.style.fontSize = "3rem";
  } 
  else if (length <= 12) {
    display.style.fontSize = "2.5rem";
  } 
  else if (length <= 16) {
    display.style.fontSize = "2rem";
  } 
  else if (length <= 20) {
    display.style.fontSize = "1.5rem";
  } 
  else {
    display.style.fontSize = "1.2rem";
  }
}