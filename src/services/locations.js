export async function fetchLocationById(locationId) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/location/${locationId}`
  );
  const responseJson = await response.json();
  return responseJson;
}
