// Things that changed from second version:
// Changed IIFE function to an arrow IIFE function
// Already using arrow functions for .foreach and .filter
// Added template literals to all my sting concatonations
// Already using spread syntax to add to the costspan array in Calculate function
// Dont use parameters so the default values isnt something I can use. but its easy anyway

// Destructuring Array
const times = [  {span:"Daily", days:1},
                {span:"Weekly", days:7},
                {span:"Monthly", days:30.45},
            ];

const costSpan = [] = times;
//Destructuring object
const rent = {name:"Rent", amount:270.25, span:costSpan[2]};
const food = {name:"Food", amount:7.50, span:costSpan[0]};

const costs = [{name, amount, span} = rent, {name, amount, span} = food];


// Output the lists in orderd fashion to the html page
var displayCost = function () {
    "use strict";
    let output = "";
    let arrayFilter = [];
    // Order them by daily weekly monthly in the output
    // For each type of bill
    costSpan.forEach(type => {
        output += `Current   ${type.span}  costs are: <br/>`;
        // Filter to Daily / Monthly / Weekly from costs
        arrayFilter = costs.filter(object => type.span == object.span.span)
        // build string for each in filtered array
        arrayFilter.forEach(cost => {
            output += `${cost.name} ${cost.amount} € <br/>`;
        })

    });
    document.getElementById("divOutput").innerHTML = output;
};
// submitting the value to the lists
var calculate = function () {
    // retreiving values from HTML
    let name = document.getElementById("txtCost").value;
    let amount = document.getElementById("txtAmount").value;
    let type = document.querySelector('input[name="type"]:checked').value;
    // createobject for costs
    let temp = {
        name: name,
        amount: parseFloat(amount)
    };
    // Find costType in CostSpan and add to object before appending
    let object = costSpan.find(element => element.span == type); 
    temp = {...temp, span: object};
    costs.push(temp);
    displayCost();
    fullMonthCosts();
};

// calculate cost totals per month average and output them to the html
var fullMonthCosts = function (){
    let total = 0;
    costs.forEach(element => {
        if (element.span.span == "Daily"){
            total += (element.amount * 30.45);
        }else if (element.span.span == "Weekly"){
            total += (element.amount * (30.45/7));
        }else {
            total += element.amount;
        }
    });
    document.getElementById("totals").innerHTML = `The total costs(based on 30.45 days per month) per month is: ${total.toFixed(2)}€`;
};

// Checks if the browser has cookies enabled and return a function that can print the result
var cookiesEnabled = function () {
    "use strict";
    if (navigator.cookieEnabled === true){
        return function(){
            document.getElementById("cookies").innerHTML = "Cookies are enabled!";
        }
    } else {
        return function(){
            document.getElementById("cookies").innerHTML = "Cookies are disabled!";
        }
    }
};


// IIFE Arrow function
((version) => document.getElementById("remark").innerHTML = ` ${version} +  - Geoffrey`)( "Version 3 (Functions 2 + Functions 3)");

// Calling both functions cookiesEnabled and return function
cookiesEnabled()();
displayCost();
fullMonthCosts();

