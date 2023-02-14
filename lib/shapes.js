// Define primordial Shape class

class Shape {
    constructor (text, tColour, shape, sColour)
    {
        this.text=text;
        this.tColour=tColour;
        this.shape=shape;
        this.sColour=sColour;
    }
    setColor(colour) {
        this.sColour=colour;
    }
    // Require that each child have a render method
    render(text, tColour, shape, sColour) {new Error('No render function in child class!')}
    renderLogo(text, tColour, shape, sColour) {
        return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">${this.render()}
        <text x='50%' y='55%' style='font-size: 5vh;' text-anchor='middle' fill='${this.tColour}'>${this.text}</text>
        </svg>
        `
    }
    
}

// Extend shape to define the three specific shape classes, each returning distinct svg markup in
// its render method.

class Circle extends Shape {
    constructor(text, tColour, shape, sColour) {
    super(text, tColour, shape, sColour)
    }
    render() {
        return `<circle fill='${this.sColour}' cx='150' cy='100' r='80'/>`
    }
}

class Triangle extends Shape {
    constructor(text, tColour, shape, sColour) {
        super(text, tColour, shape, sColour)
        }
    render (text, tColour, shape, sColour) {
        return `<polygon fill='${this.sColour}' points='150,20 50,180 250,180' />`
    }

}

class Square extends Shape {
    constructor(text, tColour, shape, sColour) {
        super(text, tColour, shape, sColour)
        }
    render (text, tColour, shape, sColour) {
        return `<rect fill='${this.sColour}' x='60' y='12' width='180' height='180'/>`
    }

}

module.exports = {Shape, Circle, Triangle, Square}