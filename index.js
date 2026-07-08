const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

console.clear();

// function fetchCharacters() {
  // const url = "https://rickandmortyapi.com/api/character"; 

  //fetch(url)
    //.then((response) => response.json())
    //.then((data) => {
      //console.log("Full data:", data);          
      //console.log("Characters array:", data.results); 
    //})
    //.catch((error) => {
      //console.error("Error fetching characters:", error);
    //});
//}

//fetchCharacters();


console.clear();

async function fetchCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  console.log("Full data:", data);
  console.log("Characters array:", data.results);
}

fetchCharacters();


import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
const li = createCharacterCard();
cardContainer.append(li);

