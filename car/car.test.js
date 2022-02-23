const Car = require('./car');

describe('Car class test', () => {
    test('it should exist', () => {
        expect(Car).toBeDefined();
    });

    let car;
    
    beforeEach(() => {
        car = new Car('toyota', 'prius');
    });

    test('Car constructor', () => {
        expect(car).toBeInstanceOf(Car);
    });

    test('Car make & model', () => {
        // expect(car.make).toBe('toyota');
        // expect(car.model).toBe('prius');
        expect(car).toHaveProperty('make', 'toyota')
        expect(car).toHaveProperty('model', 'prius')
    });

    describe('Car can drive', () => {
        test('drive() method', () => {
            expect(car).toHaveProperty('drive');
            expect(car.drive).toBeInstanceOf(Function);
        })
    })
});