myInfo = {
    name: "Joshua Smith",
    favoriteFoods: ["Pizza", "Brownies", "Cinnamon Buns", "Ham", "Spaggetti"],
    hobbies: ["Sketching", "Wood Carving", "Biking"],
    placesLived: [
        {
            place: "Edmonton, AB",
            length: "11 years",
        },
        {
            place: "Leduc, AB",
            length: "8 years",
        },
        {
            place: "Los Angeles, CA",
            length: "2 years",
        },
        {
            place: "Calmar, AB",
            length: "1 year",
        },
        {
            place: "Edmonton, AB",
            length: "6 years",
        },
    ],
};

let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFoods[3]

document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-foods").appendChild(favoriteFood4);