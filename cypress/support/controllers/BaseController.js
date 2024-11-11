class BaseController {
  constructor() {
    this.baseURL = Cypress.env('API_BASE_URL');
    this.cookie = null;
  }

  async login() {
    await cy
      .request('POST', `${this.baseURL}/auth/signin`, {
        email: Cypress.env('API_USER_EMAIL'),
        password: Cypress.env('API_USER_PASSWORD'),
        remember: false,
      })
      .then((response) => {
        this.cookie = response.headers['set-cookie'][0].split(';')[0];
      });
  }

  get(url) {
    return cy.request({
      method: 'GET',
      url: `${this.baseURL}${url}`,
      headers: { Cookie: this.cookie },
    });
  }

  post(url, body) {
    return cy.request({
      method: 'POST',
      url: `${this.baseURL}${url}`,
      headers: { Cookie: this.cookie },
      body,
    });
  }

  delete(url) {
    return cy.request({
      method: 'DELETE',
      url: `${this.baseURL}${url}`,
      headers: { Cookie: this.cookie },
    });
  }
}

module.exports = BaseController;