// DynamicLogoShapes.js

class BaseShape {
    constructor(label, labelColor, fillColor) {
      this.label = label;
      this.labelColor = labelColor;
      this.fillColor = fillColor;
    }
  }
  
  class CircularShape extends BaseShape {
    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="${this.fillColor}" />
        <text x="150" y="105" font-size="60" text-anchor="middle" fill="${this.labelColor}">${this.label}</text>
      </svg>`;
    }
  }
  
  class RectangularShape extends BaseShape {
    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="50" y="0" width="200" height="200" fill="${this.fillColor}" />
        <text x="150" y="105" font-size="60" text-anchor="middle" fill="${this.labelColor}">${this.label}</text>
      </svg>`;
    }
  }
  
  class TriangularShape extends BaseShape {
    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150,10 250,190 50,190" fill="${this.fillColor}" />
        <text x="150" y="130" font-size="60" text-anchor="middle" fill="${this.labelColor}">${this.label}</text>
      </svg>`;
    }
  }
  
  module.exports = { CircularShape, RectangularShape, TriangularShape };
  