export function SearchBar(onSubmit) {
  const form = document.createElement("form");
  form.classList.add("search-bar");
  form.setAttribute("data-js", "search-bar");

  const input = document.createElement("input");
  input.name = "query";
  input.classList.add("search-bar__input");
  input.type = "text";
  input.placeholder = "search characters";
  input.setAttribute("aria-label", "character name");

  const button = document.createElement("button");
  button.classList.add("search-bar__button");
  button.setAttribute("aria-label", "search for character");

  const icon = document.createElement("img");
  icon.classList.add("search-bar__icon");
  icon.src = "assets/magnifying-glass.png";
  icon.alt = "";

  button.append(icon);
  form.append(input, button);

  form.addEventListener("submit", onSubmit);

  return form;
}
