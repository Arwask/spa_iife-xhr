var Predator = (function () {
  var carnivores = [];
  var herbivores = [];
  return {
    loadCarnivores: function (showCarnivores) {
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
        // Set the value of the private array
        let carnivores = JSON.parse(this.responseText);
        showCarnivores(carnivores);
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.

      });
      loader.open("GET", "carnivores.json");
      loader.send();
    },
    loadHerbivores: function (showHerbivores)
    {
      var loader = new XMLHttpRequest();
      loader.addEventListener('load', function()
      {
        let herbivores = JSON.parse(event.target.responseText);
        showHerbivores(herbivores);
      });
      loader.open("GET", "herbivores.json");
      loader.send();
    }
    }
})();

// Create two JSON files. One should contain an array of carnivores, and the other should contain an array of herbivores.
// Create an IIFE with the name of Predator.
// Predator should have two private arrays to store carnivores and herbivores.
// Predator should expose two public functions to load each JSON file and store the array of animals in the appropriate private array. Each of those functions should accept one argument that will store the callback function to be executed.
// In the iife-xhr.js file, define two functions that will be executed after each type of animal is loaded then display those animals in your DOM. (Example given below)
// In the Predator IIFE, invoke the callback function, passed in from iife-xhr.js, after each file is loaded.