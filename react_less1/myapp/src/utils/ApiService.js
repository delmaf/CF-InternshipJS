export class ApiService {
  constructor(headers) {
    // this.baseUrl = baseUrl;
    this.headers = headers;
  }

  get(url, headers = {}) {
    return fetch(url, {
      method: "GET",
      headers: {
        ...this.headers,
        headers,
      },
    }).then((respone) => respone.json());
  }

  post(url, headers, body) {
    return fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

  update(url, headers = {}, body) {
    return fetch(this.baseUrl + url, {
      method: "PATCH",
      headers: {
        ...this.headers,
        headers,
      },
      body: JSON.stringify(body),
    });
  }

  delete(url, headers = {}) {
    return fetch(this.baseUrl + url, {
      method: "DELETE",
      headers: {
        ...this.headers,
        headers,
      },
    });
  }
}

export const api = new ApiService({
  "Content-Type": "application/json",
  Accept: "application/json",
});
