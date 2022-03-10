const { badCar, Car } = require('./car')

// Test away!
test("that it works", () => { // this is a test
    // an empty test is a FALSE POSITIVE
    expect({}).toEqual({}) // this is an assertion
    expect(true).not.toBe(false) // another assetion
})

describe('badCar', () => {
    it('returns a toyota', () => {
        // comparing expected vs actual
        const acutalValue = badCar();
        const actualValue2 = acutalValue
        const expectedValue = { model: 'prius', make: 'toyota' }

        expect(acutalValue).toEqual(expectedValue) // shame shape

        expect(acutalValue).toBe(actualValue2) // same thing
    })
})

describe('Car class', () => {

    let prius
    beforeEach(() => {
        prius = new Car('toyota', 'prius')
    })

    it('exists', () => {
        // with TDD:
        // 1 - write the simplist test that will fail
        // 2 - write the least amount of code that will pass the test
        //  3 - reward yourself by refactoring the code
        expect(Car).toBeDefined()
    })
    it('can build instances of cars', () => {
        // make an instance of a car with Car
        const car = new Car()
        // assert that it's an instance of Car
        expect(car).toBeInstanceOf(Car)
    })
    it('can build car with make and model', () => {
        // assert that it has certain props... -OR-
        expect(prius).toHaveProperty('make')
        expect(prius).toHaveProperty('model')
        // assert that it has certain props with certain values... -OR-
        expect(prius.make).toBe('toyota')
        expect(prius.model).toBe('prius')
        expect(prius).toHaveProperty('make', 'toyota')
        expect(prius).toHaveProperty('model', 'prius')
        // assert that it is an object of a certain shape...
        // expect(prius).toEqual({ make: 'toyota', model: 'prius' }) // BAD
        expect(prius).toMatchObject({ make: 'toyota', model: 'prius' }) // better
    })
    it('new cars have an "odometer" prop initialized at zero', () => {
        expect(prius.odometer).toBe(0)
    })
    it('cars have a drive method', () => {
        expect(prius.drive).toBeDefined()
        expect(prius.drive).toBeInstanceOf(Function)
        expect(prius.drive).toBe(Car.prototype.drive)
    })
    it('driving a distance adds miles to the odometer', () => {
        prius.drive(10)
        expect(prius.odometer).toBe(10)
        prius.drive(5)
        expect(prius.odometer).toBe(15)
    })
    it('driving returns the updated odemeter', () => {
        expect(prius.drive(10)).toBe(10)
    })
    it('driving ASYNC resolves to the updated odemeter', async () => {
        expect(await prius.driveAsync(10)).toBe(10)
    })
})