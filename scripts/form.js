const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];


products.forEach(product => {
  let option = document.createElement("OPTION");
  option.setAttribute("value", product.name);
  option.setAttribute("id", option.id);
  let text = document.createTextNode(product.name);
  option.appendChild(text);
  document.querySelector("#pOptions").appendChild(option)
});


const displayVisits = document.querySelector(".visits")

//Getting number of visits from the local storage using the "timesVisited-ls" key
let numVisits = Number(window.localStorage.getItem("timesVisited-ls")) || 0;


if (numVisits !== 0) {
  displayVisits.textContent = numvisits;
} else {
  displayVisits.textContent = `Good to see a new face around here! Welcome!`
}

// Adding one to every visit
numVisits++;

// setting local storage value with the key of "timesVisited-ls" to be the value of the number of times visited.
localStorage.setItem("timesVisited-ls", numVisits);

// getting current year to the copyright
const year = new Date().getFullYear();
document.querySelector("#currentYear").textContent = year;

// creating a line for last modified
const modified = new Date().getDate();

document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

