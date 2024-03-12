// LogoGenerator.js

const inquirer = require("inquirer");
const fs = require("fs").promises;
const { CircularShape, RectangularShape, TriangularShape } = require("./lib/shapes");

const prompts = [
  { name: "label", type: "input", message: "Enter up to 3 characters for your logo label:" },
  { name: "labelColor", type: "input", message: "Enter a color keyword or hex code for the label color:" },
  { name: "fillColor", type: "input", message: "Enter a color keyword or hex code for the background color:" },
  { name: "shapeType", type: "list", message: "Choose the shape for your logo:", choices: ["Circular", "Triangular", "Rectangular"] }
];

async function initiateLogoCreation() {
  try {
    const responses = await inquirer.prompt(prompts);
    let svgContent;

    switch (responses.shapeType) {
      case "Circular":
        svgContent = new CircularShape(responses.label, responses.labelColor, responses.fillColor).render();
        break;
      case "Triangular":
        svgContent = new TriangularShape(responses.label, responses.labelColor, responses.fillColor).render();
        break;
      case "Rectangular":
        svgContent = new RectangularShape(responses.label, responses.labelColor, responses.fillColor).render();
        break;
    }

    await fs.writeFile("logo.svg", svgContent);
    console.log("Generated logo.svg successfully.");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

initiateLogoCreation();
