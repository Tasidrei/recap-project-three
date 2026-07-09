let page = 1;
let maxPage = 1; // must be let, not const
import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

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
// const maxPage = 1;
// const page = 1;
let searchQuery = "";

//console.clear();

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

// async function fetchCharacters() {
//console.clear();

//async function fetchCharacters() {
  //const response = await fetch("https://rickandmortyapi.com/api/character");
  //const data = await response.json();

  //console.log("Full data:", data);
  //console.log("Characters array:", data.results);
//}

fetchCharacters();

async function fetchCharacters() {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`);
  const data = await response.json();
  
  
 
  const pagenationDisplay = document.querySelector('[data-js="pagination"]');

  // Clear old cards
  cardContainer.innerHTML = "";

  // Create a card for each character
  data.results.forEach((character) => {
    const card = createCharacterCard(character);
    cardContainer.append(card);
  });

// maxPage Update & pagination display
  maxPage = data.info.pages;
  pagenationDisplay.textContent = `Page ${page} of ${maxPage}`;

}


nextButton.addEventListener("click", () => {
  page++;
  fetchCharacters();
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});
fetchCharacters();


searchBar.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(searchBar);
  searchQuery = formData.get("query");

  page = 1; // reset to page 1
  fetchCharacters();
});

