import API_KEY from '../config/api_config'

export const getData = async (term, type) => {
  const url = `https://api.themoviedb.org/3/search/${type.value}?api_key=${API_KEY}&query=${term.value}`

  const api_call = await fetch(url)

  const data = await api_call.json()

  const results = await data.results

  return results
}

export const updateShow = async (newFilter, show) => {
  const url = `https://api.themoviedb.org/3/${show}/${newFilter}?api_key=${API_KEY}`

  const api_call = await fetch(url)

  const data = await api_call.json()

  const finalList = await data.results

  return finalList
}
