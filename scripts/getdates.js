const year = new Date().getFullYear();
document.querySelector("#currentyear").textContent = year;

const modified = new Date().getDate();

document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;