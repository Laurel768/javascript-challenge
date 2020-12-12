// from data.js
var tableData = data;

// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page 
//and then adds new rows of data for each UFO sighting.
//Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.
//Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column 
//to find rows that match user input.

var tbody = d3.select("tbody");
console.log(data);

data.forEach((sighting) => {
    console.log(sighting);
    // append one table row for each sighting
    var row = tbody.append("tr");
    
    // iterate through keys and values
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  var button = d3.select("#Filter Table");
  var form = d3.select("#form");
  function runEnter() {

     // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#example-form-input");

  // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    d3.select()
  }

  // button.on("click", runEnter);

  // })

  // var inputField = d3.select("#input-field");

  // inputField.on("change", function () {

  //  var text = d3.event.target.value;
  // })

  var filteredData = data.filter((sighting) => sighting.datetime ===inputValue);