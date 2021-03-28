// alert ("Welcome! (^_^)");

{
const card = document.getElementsByClassName('card')[0]
const cardTitle = card.getElementsByTagName('h3')[0]
const description = card.getElementsByTagName('p')[0]

cardTitle.innerText = "Debut as a CAD(Computer Aided Design) Designer in US"
description.innerText = "Started a position at Women's Fashion company"
}
{
const card = document.getElementsByClassName('card card-1')[1]
const cardTitle = card.getElementsByTagName('h3')[1]
const description = card.getElementsByTagName('p')[1]

cardTitle.innerText = "Started Front-End Web Design"
description.innerText = "Created Web sites using self service template"
}




// METHOD 2: Creating card templates

// removes cards from html

// const cards = document.querySelectorAll(".card")
// for(i = 0; i < cards.length; i++) {
//   cards[i].remove()
// }

// creates a card

// function createCardFromEvents(event) {
//   const card = document.createElement("div");
//   card.className = "card";
//   card.innerHTML = 
//   `<h3>${city.name}</h3>
//   <small>population: ${city.population}</small>
//   <p>You'll want to go see the ${city.attraction}</p>
//   `
//   return card
// }

// appends created cards to cards-container for each object in cities array

const cardContainer = document.getElementsByClassName("card-container")[0]

// for (i = 0; i < cities.length; i++) {
//   const card = createCardFromCity(cities[i])
//   cardsContainer.appendChild(card)
// }

// Using forEach loop instead of for loop

// cities.forEach(city => {
//   const card = createCardFromCity(city)
//   cardsContainer.appendChild(card)
// })

