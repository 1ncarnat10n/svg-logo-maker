const Circle = require("../lib/circle");
const Square = require("../lib/square");
const Triangle = require("../lib/triangle");

describe('Circle', () => {
    it('should render the shape circle', () => {
        const shape = new Circle('hi', 'green', 'blue');
        shape.render();
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="blue" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">hi</text> </svg>`)
    });                                               
});

describe('Square', ()=>{
    it('should render the shape square', () => {
        const shape = new Square('wt', 'red', 'grey');
        shape.render();
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect width="100%" height="100%" fill="grey" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">wt</text> </svg>`)
    });                                               
});

describe('Triangle', () => {
    it('should render the shape triangle', () => {
        const shape = new Triangle('bye', 'yellow', 'skyblue');
        shape.render();
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="90 10, 180 150, 0 150" fill="skyblue" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">bye</text> </svg>`)
    });                                               
});