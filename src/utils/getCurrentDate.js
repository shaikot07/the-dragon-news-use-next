
export function getCurrentDate() {
    // Get the current date
    const currentDate = new Date();

    // Array of days and months for better readability
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Get the current day, month, date, and year
    const day = days[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();

    // Display the current day, month, date, and year
    // console.log(`Today is ${day}, ${month} ${date}, ${year}`);
    return ` ${day}, ${month} ${date}, ${year}`;
}

// Call the function
// showCurrentDate();