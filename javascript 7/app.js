// 1. Write a program that displays current date and time in
// your browser.

var today = new Date()
document.write(today + "<br>")

// 2. Write a program that alerts the current month in words.
// For example December.


var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];


var currentMonthIndex = today.getMonth();
var currentMonthName = monthNames[currentMonthIndex];
alert(currentMonthName);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDayIndex = today.getDay();

var currentDayAbbreviation = dayNames[currentDayIndex];
alert(currentDayAbbreviation);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

var myBirthday=new Date("10 4 2003");
// alert(today +"</br>");
if(myBirthday.getDay()===0 ||myBirthday.getDay()===6){
    document.write("today is fun day" + "<br>");
}
else{
    document.write("Today is a working day");
}


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.


var currentDay = today.getDate();

if (currentDay < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}


//6: Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

let minutesSinceEpoch = (today.getTime() - new Date(today.getFullYear(), 0, 1).getTime()) / (1000 * 60);

document.write("Minutes since midnight, Jan. 1, 1970:", minutesSinceEpoch + "<br>");


//7: Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

let currentHour = today.getHours();


if (currentHour < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}


//8: Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.


var laterDate = new Date(2020, 11, 31);
document.write("Later date:", laterDate + "<br>");


//9: Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015


var ramadanStartDate = new Date(2015, 5, 18); 
var timeDifference =today.getTime() - ramadanStartDate.getTime();
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

alert(`Number of days passed since 1st Ramadan, June 18, 2015: ${daysPassed} days`);


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var referenceDate = new Date(); 
var beginningOf2015 = new Date(2015, 0, 1); 
var timeDifferenceSeconds = (referenceDate.getTime() - beginningOf2015.getTime()) / 1000;

document.write(`Seconds elapsed between the beginning of 2015 and the reference date: ${timeDifferenceSeconds} seconds` + "<br>");

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.


var currentHours = today.getHours();
today.setHours(currentHours + 1);

document.write(`Current date: ${today}` + "<br>");

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.


var userAge = prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - userAge;

document.write(`Your age is: ${userAge}` + "<br>");
document.write(`Your birth year is: ${birthYear}`);



// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

var customerName = "ABC Customer";

      var months = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
        var currentDate = new Date();
        var currentMonth = months[currentDate.getMonth()];
        var numberOfUnits = 250;
        var chargesPerUnit = 10.75;
        var latePaymentSurcharge = 150.00;

        var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);

        var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);

        document.write(`<h1>K-Electric Bill</h1>`);
        document.write(`<p><strong>Customer Name:</strong> ${customerName}</p>`);
        document.write(`<p><strong>Current Month:</strong> ${currentMonth}</p>`);
        document.write(`<p><strong>Number of units:</strong> ${numberOfUnits}</p>`);
        document.write(`<p><strong>Charges per unit:</strong> ${chargesPerUnit.toFixed(2)}</p>`);
        document.write(`<p><strong>Net Amount Payable (within Due Date):</strong> ${netAmountPayable}</p>`);
        document.write(`<p><strong>Late Payment Surcharge:</strong> ${latePaymentSurcharge.toFixed(2)}</p>`);
        document.write(`<p><strong>Gross Amount Payable (after Due Date):</strong> ${grossAmountPayable}</p>`);
