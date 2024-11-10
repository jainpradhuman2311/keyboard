
document.addEventListener("DOMContentLoaded", function() {
  // Get the iframe element
const iframe = document.querySelector('.rte-editable');

// Get a reference to the document inside the iframe
const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    const textInput = iframeDocument.querySelector(".rte-toggleborder");
    const keys = document.querySelectorAll(".keyboard button");
  
    keys.forEach(key => {
        key.addEventListener("click", () => {
            const char = key.getAttribute("data-char");
            // Focus textInput to enable updates with custom keyboard
            textInput.focus(); 
  
  
            if (char === "←") {
                // Backspace functionality
                textInput.innerHTML = textInput.innerText.slice(0, -1);
                textInput.innerHTML = textInput.innerText.slice(0, -1);
            }else if (char === "←←") {
              textInput.innerHTML = textInput.innerText.slice(0, -1);
            }else if (char === "space") {
                // Space functionality
                console.log("Space is pressed");
                textInput.innerHTML += ' ';
            }else if (char === "↩") {
              // Enter functionality (new line)
              textInput.innerHTML += '\n';  // Adds a new line
            }else {
                // Insert character
                textInput.innerHTML += char;
            }
        });
    });
  });
  // Function to toggle the display of keyboards
  function toggleKeyboard(keyboardId) {
    // Hide all keyboards
    const keyboards = document.querySelectorAll('.keyboard');
    keyboards.forEach(keyboard => {
        keyboard.style.display = 'none'; // Hide all keyboards
    });
  
    // Show the selected keyboard
    const selectedKeyboard = document.getElementById(keyboardId);
    hideAllKeyboards();
    if (selectedKeyboard) {
        selectedKeyboard.style.display = 'flex'; // Show the selected keyboard
        selectedKeyboard.style.flexDirection = 'row'; // Ensure it's in row layout
    }
  }
  
  // Function to hide all keyboard elements (if needed in future extensions)
  function hideAllKeyboards() {
    const keyboards = document.querySelectorAll(".keyboard");
    keyboards.forEach(keyboard => {
        keyboard.style.display = "none";
    });
  }
  
  function hideAllKeyboards() {
    for (let i = 1; i <= 12; i++) {
      const keyboard = document.getElementById(`keyboard${i}`);
      if (keyboard) {
        keyboard.style.display = "none";
      }
    }
  }
  
  // Function to show the second alternate keyboard (signs) and hide all others
  function showOtherKeyboards() {
    hideAllKeyboards(); // Hide all keyboards
    document.getElementById("otherKeyboard").style.display = "none";
    document.getElementById("otherKeyboardsigns").style.display = "flex"; // Show the second alternate keyboard
  }
  
  // Function to show the main keyboard (keyboard1) only
  function showMainKeyboard() {
    hideAllKeyboards(); // Ensure all keyboards are hidden first
    document.getElementById("otherKeyboard").style.display = "none";
    document.getElementById("otherKeyboardsigns").style.display = "none"; 
    document.getElementById("keyboard1").style.display = "flex"; // Display the main keyboard
  }