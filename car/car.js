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


const p = new Promise((resolve) => {
    resolve();
});

p.then()


module.exports = Car
