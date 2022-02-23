class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.odometer = 0;
    }

    drive(...distance) {
        for(d of distance) {
            this.odometer += d;
        }
    }

    driveAsync(distance) {
        return new Promise(resolve => {
            setTimeout(() => {
                this.odometer += distance;
                resolve();
            }, 500 * distance);
        });
    }
}

module.exports = Car
