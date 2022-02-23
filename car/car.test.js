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
        expect(car.model).toBeInstanceOf(String)
    });

    describe('Car can drive', () => {
        test('drive() method', () => {
            // car.drive exists
            expect(car).toHaveProperty('drive');

            // car.drive.constructor = Function
            expect(car.drive).toBeInstanceOf(Function);

            expect(car).toHaveProperty('odometer');
            expect(car.odometer).toBe(0);
            
            car.drive(10)

            expect(car.odometer).toBe(10);
        })
    })
});