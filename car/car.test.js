const Car = require('./car');

describe('Car class test', () => {
    test('it should exist', () => {
        expect(Car).toBeDefined();
    });

    test('Car constructor', () => {
        let car = Car('toyota', 'prius');
        expect(car).toBeInstanceOf(Car);
    })
});