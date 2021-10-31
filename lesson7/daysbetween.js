// determine days between stored date and visit date ... today
// determine todays date
const millisecondsToDays = 8640000; // divide the difference between dates in milli
// Last visit ... stored in localStorage
const lastVisit = localStorage.getItem('lastvisit');
// determine number of days (lastVisit - Date.now() / millisecondsToDays)  .toFixed(0)
// display to wherever I want to
// need update the strored-----localStorage.setItem('lastvisit', Date.now());