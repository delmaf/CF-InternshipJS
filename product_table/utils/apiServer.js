class ApiService {
  constructor(baseUrl, headers) {
    this.baseUrl = baseUrl
    this.headers = headers
  }

  get(url, headers = {}) {
    return fetch(this.baseUrl + url, {
      method: 'GET',
      headers: { ...this.headers, headers },
    })
  }

  post(url, headers = {}, body) {
    return fetch(this.baseUrl + url, {
      method: 'POST',
      headers: { ...this.headers, headers },
      body: JSON.stringify(body),
    })
  }

  update(url, headers = {}, body) {
    return fetch(this.baseUrl + url, {
      method: 'PATCH',
      headers: { ...this.headers, headers },
      body: JSON.stringify(body),
    })
  }

  delete(url, headers = {}) {
    return fetch(this.baseUrl + url, {
      method: 'DELETE',
      headers: { ...this.headers, headers },
    })
  }
}

const api = new ApiService('http://localhost:3000', {
  'Content-Type': 'application/json',
})

export const getAllGoods = () => {
  return api.get('/goodsTableArr').then((response) => {
    if (!response.ok) {
      throw new Error(response.status)
    } else {
      return response.json()
    }
  })
}

export const updateGood = (id, updateProduct) => {
  return api
    .update(`/goodsTableArr/${id}`, {}, updateProduct)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status)
      } else {
        return response.json()
      }
    })
}

export const addGood = (newProduct) => {
  const req = api.post('/goodsTableArr', {}, newProduct).then((response) => {
    if (!response.ok) {
      throw new Error(response.status)
    } else {
      return response.json()
    }
  })
  return req
}

export const deleteGood = (id) => {
  return api.delete(`/goodsTableArr/${id}`).then((response) => {
    if (!response.ok) {
      throw new Error(response.status)
    } else {
      return response.json()
    }
  })
}
