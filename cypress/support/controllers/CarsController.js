const BaseController = require('./BaseController.js');

class CarsController extends BaseController {
  constructor() {
    super();
    this.API_CARS = '/cars';
    this.API_CARS_ID = '/cars/{id}';
    this.API_CARS_BRANDS = '/cars/brands';
    this.API_CARS_MODELS = '/cars/models';
  }

  async createCar(carBrandId, carModelId, mileage) {
    return this.post(this.API_CARS, {
      carBrandId,
      carModelId,
      mileage,
    });
  }

  async deleteCar(carId) {
    return this.delete(this.API_CARS_ID.replace('{id}', carId));
  }

  async getCarsBrands() {
    return cy.request({
      method: 'GET',
      url: `${this.baseURL}${this.API_CARS_BRANDS}`,
      headers: this.headers,
      failOnStatusCode: false,
    });
  }

  async getCarsModels() {
    return this.get(this.API_CARS_MODELS);
  }

  async getCars() {
    return cy.request({
      method: 'GET',
      url: `${this.baseURL}${this.API_CARS}`,
      headers: this.headers,
      failOnStatusCode: false,
    });
  }
}

module.exports = CarsController;
