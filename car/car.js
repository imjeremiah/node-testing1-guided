class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.odometer = 0;
    }

    drive(...distance) {
        for(let d of distance) {
            this.odometer += d;
        }
    }

    driveAsync(distance) {
        return new Promise(resolve => {
            setTimeout(() => {
                this.odometer += distance;
                resolve();
            }, 5 * distance);
        });
    }
}



// let car = new Car('Tesla', 'Model S');
// car.driveAsync()
//     .then(() => {})


module.exports = Car
