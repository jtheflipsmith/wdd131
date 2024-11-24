// create boxes for our items we want to use
const mainNavigation = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu")

//toggle
hambutton.addEventListener('click', () => {
    mainNavigation.classList.toggle('show');

    hambutton.classList.toggle('show');
});


// getting current year to the copyright
const year = new Date().getFullYear();
document.querySelector("#currentYear").textContent = year;

// creating a line for last modified
const modified = new Date().getDate();

document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

let temperature = -10
let windSpeed = 10

function calculateWindChill() {
    let windChill = 35.74 + (0.6215 * temperature) - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature (Math.pow(windSpeed, 0.16))
    return windChill.toFixed(2);
}

document.getElementById('windChillResult').innerText = windChill;