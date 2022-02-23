const Car = require('./car');

describe('Car class test', () => {
    test('it should exist', () => {
        expect(Car).toBeDefined();
    });

    test('Car constructor', () => {
        let car = new Car('toyota', 'prius');
        expect(car).toBeInstanceOf(Car);
    });

    test('Car make & model', () => {
        let car = new Car('toyota', 'prius');
        expect(car.make).toBe('toyota');
        expect(car.model).toBe('prius');
    });
});