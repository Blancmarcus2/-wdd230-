// Step 1: Declare and initialize a new variable to hold the current date
const newToday = new Date();
// Step 2: Declare another variable to hold the day of the week
let newDayWeek;
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
newDayWeek = newToday.getDay();
// Step 4: Declare a variable to hold a message that will be displayed
let newMessage_a;
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (newDayWeek != 5 && newDayWeek != 5) {
    newMessage_a = 'No preston pancakes until Friday';
}
/* SWITCH, CASE, BREAK */
// Step 1: Declare a new variable to hold another message
let newMessage_b;
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (newDayWeek) {
    case 0:
        newMessage_b = 'Sunday';
        break;
    case 1:
        newMessage_b = 'Monday';
        break;
    case 2:
        newMessage_b = 'Tuesday';
        break;
    case 3:
        newMessage_b = 'Wednesday';
        break;
    case 4:
        newMessage_b = 'Thursday';
        break;
    case 5:
        newMessage_b = 'Friday';
        break;
    case 6:
        newMessage_b = 'Saturday';
        break;
    default:
        newMessage_b = 'Unknown - ' + newDayWeek;
        break;
}
if (newDayWeek != 5 && newDayWeek != 5) {
    newMessage_a = 'No preston pancakes until Friday';
} else {
    newMessage_a = "Preston Pancakes in the Park!  9:00 a.m. " + `${newMessage_b}` + " at the city park pavilion.";
}
/* OUTPUT */
document.getElementById('banner').innerHTML = newMessage_b + ' = ' + newMessage_a;
