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

