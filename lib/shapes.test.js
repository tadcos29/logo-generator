const {Shape, Circle, Triangle, Square} = require('./shapes.js');


// For each class of shape object, verify that the render method outputs correct svg given the test input of blue colour.

describe ('Triangle', () => {
    it('Should return the correct triangle string when given a blue colour', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual("<polygon fill='blue' points='150,20 50,180 250,180' />");
    })
});

describe ('Square', () => {
    it('Should return the correct square string when given a blue colour', () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual("<rect fill='blue' x='60' y='12' width='180' height='180'/>");
    })
});


describe ('Circle', () => {
    it('Should return the correct circle string when given a blue colour', () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual("<circle fill='blue' cx='150' cy='100' r='80'/>");
    })
});
