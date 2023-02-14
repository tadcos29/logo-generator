class Shape {
    constructor (text, tColour, shape, sColour)
    {
        this.text=text;
        this.tColour=tColour;
        this.shape=shape;
        this.sColour=sColour;
    }
    // render(text, tColour, shape, sColour) {}
    renderLogo(text, tColour, shape, sColour) {
        return `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">${this.render()}
        <text x='50%' y='55%' style='font-size: 10vh;' text-anchor='middle' fill='${this.tColour}'>${this.text}</text>
        </svg>
        `
    }
    
}

class Circle extends Shape {
    constructor(text, tColour, shape, sColour) {
    super(text, tColour, shape, sColour)
    }
    render() {
        console.log(this.sColour);
        return `<circle fill='${this.sColour}' cx='250' cy='250' r="200"/>`
    }
}

class Triangle extends Shape {
    constructor(text, tColour, shape, sColour) {
        super(text, tColour, shape, sColour)
        }
    render (text, tColour, shape, sColour) {
        return `<polygon fill='${this.sColour}' points='250,60 60,400 440,400' />`
    }

}

class Square extends Shape {
    constructor(text, tColour, shape, sColour) {
        super(text, tColour, shape, sColour)
        }
    render (text, tColour, shape, sColour) {
        return `<rect fill='${this.sColour}' x='50' y='50' width='400' height='400'/>`
    }

}

module.exports = {Shape, Circle, Triangle, Square}