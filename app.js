//import
import { Cost, Cycle } from "./classes.js";

// Global Variables
const costList = new Cycle();

// Function Invoked by HTML when button is pressed with js hook;
document.getElementById("test").onclick = function () {
  let name = document.getElementById("txtCost").value;
  let amount = document.getElementById("txtAmount").value;
  let type = document.querySelector('input[name="type"]:checked').value;
  AmountCheck(amount)(name, type);
};

// IIFE To create 2 starting costs
(function () {
  costList.addCost(new Cost("Rent", 270.25, "Monthly"));
  costList.addCost(new Cost("Food", 7.50, "Daily"));
})();

// Function that returns a function
const AmountCheck = function (amountString = NaN) {
  //Convert Amount to double
  let amountNumber = parseFloat(amountString);
  //falsy check, NaN skips if statement
  if (amountNumber) {
    return function (name, type) {
      let cost = new Cost(name, amountNumber, type);
      costList.addCost(cost);
      console.log("The Cost was succesfully added!")
    };
  } else {
      return function (name, _){
          console.log(`the amount for the cost with name "${name}" you have entered was not a number and has not been entered!`);
      }
  }
};

// Show Daily costs (JS HOOK)
document.getElementById("showDaily").onclick = function (){
    console.log(arrayToString(costList.dailyCosts()));
}

// Show Weekly costs (JS HOOK)
document.getElementById("showWeekly").onclick = function (){
    console.log(arrayToString(costList.weeklyCosts()));
}

// Show Monthly costs (JS HOOK)
document.getElementById("showMonthly").onclick = function (){
    console.log(arrayToString(costList.monthlyCosts()));
}

// Show Total Cost (JS HOOK)
document.getElementById("showAllCosts").onclick = function (){
    console.log(costList.totalCost());
}

// Converts inputed arrays to string objects with forEach
const arrayToString = (array) => {
    let result = "";
    array.forEach(element => {
        result += `Name: ${element.name}, Amount: ${element.amount}, Type: ${element.type} \n`;
    })
    return result;
};

/* Included Features
ALL FEATURES ARE INCLUDED IN THIS AND PREVIOUS ITERATIONS OF THIS IN THE ./OLD FOLDER
THIS IS A CLEANER VERSION OF THE EXERCISE without features that add no value.

In this final iteration:
Const
Let
Arrow functions
Classes
Class Inheritance
Imports/Exports
Spread operator
IIFE
Falsy
String Literals/ Template literals
Function expressions
.filter
.forEach
.map
Default values
*/
