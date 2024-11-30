const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Edmonton Alberta",
      location: "Edmonton, Alberta",
      dedicated: "1999, December, 11",
      area: 110700,
      imageUrl:
      "https://www.churchofjesuschrist.org/imgs/eed1439015e47d43916bc7c9701d9c32e71c67cc/full/500%2C/0/default"

    },
    {
      templeName: "Salt Lake Utah",
      location: "Salt Lake City, Utah",
      dedicated: "1893, April, 6", 
      area: 382207,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
      templeName: "Cardston Alberta",
      location: "Cardston, Alberta",
      dedicated: "1923, 29, 1923",
      area: 88562,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/cardston-alberta-temple/cardston-alberta-temple-13287-main.jpg "
      
    }
    
    // Add more temple objects here...
  ];



function templeCardCreation(filteredTemples) {
    document.querySelector(".cards").innerHTML = "";
    filteredTemples.forEach ((temple) => {
        let card = document.createElement("section");
        let name = document.createElement("h1");
        let location = document.createElement("p");
        let date = document.createElement("p");
        let area = document.createElement("p");
        let image = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
        date.innerHTML = `<span class="label">Dedication: </span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area: </span> ${temple.area}`;
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `${temple.templename} Temple`);
        image.setAttribute("loading", "lazy")


        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(date);
        card.appendChild(area);
        card.appendChild(image);

        document.querySelector(".cards").appendChild(card);
  });
}

templeCardCreation();



const year = new Date().getFullYear();
document.querySelector("#currentyear").textContent = year;

const modified = new Date().getDate();

document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;