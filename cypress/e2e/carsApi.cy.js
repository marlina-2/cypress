const ApiCarsController = require('../support/controllers/ApiCarsController');
const carsData = require('../fixtures/cars.json');

describe('Cars API Tests', () => {
  const carBrandId = carsData.carBrandIds.carBrandId;
  const carModelId = carsData.carModelIds.carModelId;
  const mileage = carsData.mileages.mileage;

  const carsController = new ApiCarsController();

  before(() => {
    carsController.login();
  });

  it('Get Cars Models', () => {
    carsController.getCarsModels().then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Create a Car', () => {
    carsController
      .createCar(carBrandId, carModelId, mileage)
      .then((response) => {
        expect(response.status).to.equal(201);
        expect(response.body.data).to.have.property('id');
        Cypress.env('createdCarId', response.body.data.id);
      });
  });

  it('Delete the Created Car', () => {
    const carId = Cypress.env('createdCarId');

    carsController.deleteCar(carId).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
