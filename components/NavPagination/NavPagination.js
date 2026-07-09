export function setupPagination(nextButton, prevButton, fetchCharacters, page, maxPage) {
  nextButton.addEventListener("click", () => {
    if (page < maxPage) {
      page++;
      fetchCharacters();
    }
  });

  prevButton.addEventListener("click", () => {
    if (page > 1) {
      page--;
      fetchCharacters();
    }
  });
}
