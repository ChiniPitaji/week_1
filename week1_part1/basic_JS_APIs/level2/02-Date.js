function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate()); //gives the day of the month
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1 //gives the current month (1-12)
  console.log("Year:", currentDate.getFullYear());//gives the current year
  console.log("Hours:", currentDate.getHours());//gives the current hour (0-23)
  console.log("Minutes:", currentDate.getMinutes());//gives the current minute (0-59)
  console.log("Seconds:", currentDate.getSeconds());//gives the current second (0-59)

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);
  //it will set the year of the currentDate object to 2022

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Setting the date to the 15th

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());
  //it will return the number of milliseconds since January 1, 1970, 00:00:00 UTC

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}
//gives the current date and time, and demonstrates how to get and set various components of the date using JavaScript's Date object methods.
// Example Usage for Date Methods
dateMethods();
// Output: