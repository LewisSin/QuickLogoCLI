var inquirer = require("inquirer");
var {circle, triangle, square} = require("./lib/shapes");
var fs = require("fs");

const questions = [
    {
        name: "text",
        type: "input", 
        message: "Enter up to 3 characters for your logo text:"
    },
    {
        name: "textColor",
        type: "input",
        message: "Enter a color keyword or hex code for your text color:"
    }, 
    {
        name: "shapeColor",
        type: "input",
        message: "Enter a color keyword or hex code for your shape color:"
    },
    {
        name: "shape",
        type: "list",
        message: "Choose which shape you want your logo to be:",
        choices: ["circle", "triangle", "square"]
    }
]

function writeToFile(filename, data) {
fs.writeFile(filename, data, function(err) {
    if (err) {
        return console.log("error");
    }
    console.log("generated logo.svg");
})
}

async function shapeRender() {

    inquirer.prompt(questions).then(function(data) {
        if (data.text.length > 3) {
            console.log("error. Invalid text length");
        }
        else if (data.shape === "circle") {
            let svgCircle = new circle(data.text, data.textColor, data.shapeColor);
            writeToFile("./examples/logo.svg", svgCircle.render())
        }

        else if (data.shape === "triangle") {
            let svgTriangle = new triangle(data.text, data.textColor, data.shapeColor);
            writeToFile("./examples/logo.svg", svgTriangle.render())
        }

        else if (data.shape === "square") {
            let svgSquare = new square(data.text, data.textColor, data.shapeColor);
            writeToFile("./examples/logo.svg", svgSquare.render())
        }
    });
}

shapeRender();