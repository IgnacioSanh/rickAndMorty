export async function fetchJson(url) {
  const response = await fetch(url);
  const responseJson = await response.json();
  return responseJson;
}

export async function fetchCharacterById(characterId) {
  return await fetchJson(
    `https://rickandmortyapi.com/api/character/${characterId}`
  );
}

export async function fetchAllCharacters() {
  return await fetchJson("https://rickandmortyapi.com/api/character");
}
