export const search = (restaurants, query) => {
  if (restaurants.length === 0) {
    return []
  }
  if (!query) {
    return restaurants
  }
  return restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(query))
}