

const ApiToken = "044b2b23fa54fb43bd4521916a7158ab";

export function GetFilms (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + ApiToken + '&language=fr&query=' + text
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }