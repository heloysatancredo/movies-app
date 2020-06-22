export const updateFilters = (show) => {
  let filters = []

  if (show === 'tv') {
    filters = [
      {
        value: 'airing_today',
        label: 'airing_today',
      },
      {
        value: 'on_the_air',
        label: 'on_the_air',
      },
      {
        value: 'popular',
        label: 'popular',
      },
      {
        value: 'top_rated',
        label: 'top_rated',
      },
    ]
  } else {
    filters = [
      {
        value: 'now_playing',
        label: 'now_playing',
      },
      {
        value: 'popular',
        label: 'popular',
      },
      {
        value: 'top_rated',
        label: 'top_rated',
      },
      {
        value: 'upcoming',
        label: 'upcoming',
      },
    ]
  }

  return filters
}
