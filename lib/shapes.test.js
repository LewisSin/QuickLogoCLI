class Shape {
    constructor(text, textColor, backgroundColor) {
        this.text = text;
        this.textColor = textColor;
        this.backgroundColor = backgroundColor;
    }
}

class CircleShape extends Shape {
    constructor(text, textColor, backgroundColor) {
        super(text, textColor, backgroundColor);
    }

    renderSVG() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.backgroundColor}" />
        <text x="150" y="105" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

class TriangleShape extends Shape {
    constructor(text, textColor, backgroundColor) {
        super(text, textColor, backgroundColor);
    }

    renderSVG() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,10 250,190 50,190" fill="${this.backgroundColor}" />
        <text x="150" y="130" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

class SquareShape extends Shape {
    constructor(text, textColor, backgroundColor) {
        super(text, textColor, backgroundColor);
    }

    renderSVG() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="0" width="200" height="200" fill="${this.backgroundColor}" />
        <text x="150" y="105" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

module.exports = { CircleShape, TriangleShape, SquareShape };
