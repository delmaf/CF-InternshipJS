export function fetchUser() {
  return fetch('http://localhost:3000/arr').then((response) => {
    return response.json()
  })
}

export function fetchTypeCard() {
  return fetch('http://localhost:3000/type').then((response) => {
    return response.json()
  })
}
