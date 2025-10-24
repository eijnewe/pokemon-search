const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

async function searchPokemon(query) {
  if (!query.trim()) {
    searchResults.innerHTML = "<p>Please enter a search term</p>";
    return;
  }

  try {
    searchResults.innerHTML = "<p>Searching...</p>";

    const response = await fetch(`${BASE_URL}`);

    if (!response.ok) {
    }

    const pokemon = await response.json();
    displayPokemonResult(pokemon);
  } catch (error) {
    searchResults.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

function displayPokemonResult(pokemon) {
  const resultHTML = `
        <div class="pokemon-card">
            <h2>${
              pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
            }</h2>
            <img src="${pokemon.sprites.front_default}" alt="${
    pokemon.name
  }" class="pokemon-image">
            <div class="pokemon-details">
                <p><strong>ID:</strong> ${pokemon.id}</p>
                <p><strong>Height:</strong> ${pokemon.height / 10}m</p>
                <p><strong>Weight:</strong> ${pokemon.weight / 10}kg</p>
                <p><strong>Types:</strong> ${pokemon.types
                  .map((type) => type.type.name)
                  .join(", ")}</p>
                <p><strong>Abilities:</strong> ${pokemon.abilities
                  .map((ability) => ability.ability.name)
                  .join(", ")}</p>
            </div>
        </div>
    `;
}

searchForm.addEventListener("", (e) => {
  if (query && query.length > 2) {
  } else if (!query || query.length === 0) {
    searchResults.innerHTML = "<p>Enter a Pokemon name to search</p>";
  } else {
    searchResults.innerHTML = "<p>Please enter at least 3 characters</p>";
  }
});
