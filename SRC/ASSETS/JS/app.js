class Speaker {
    constructor(
    name,
    description,
    price,
    brand,
    hasFreeDelivery,
    isInStock,
    rating,
    colour
    ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.hasFreeDelivery = hasFreeDelivery;
    this.isInStock = isInStock;
    this.rating = rating;
    this.colour = colour;
    }

    toHtml() {
        const div = document.createElement('div');
        const entries = Object.entries(this);
        
        entries.forEach(entry => {
            const span = document.createElement('span');
            span.textContent = entry[0] + ' : ' + entry[1];
            div.appendChild(span);
        })
        return div
    }
}


const speakers = [
    new Speaker(
    "Echo Dot",
    "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
    "47.99",
    "Amazon",
    true,
    true,
    4.5,
    "black"
    ),
    new Speaker(
    "Echo Dot",
    "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
    "47.99",
    "Amazon",
    true,
    true,
    4.5,
    "black"
    ),
    new Speaker(
    "Echo Dot",
    "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
    "47.99",
    "Amazon",
    true,
    true,
    4.5,
    "black"
    ),
    new Speaker(
    "Echo Dot",
    "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
    "47.99",
    "Amazon",
    true,
    true,
    4.5,
    "black"
    ),
];

speakers.forEach(Speaker =>{
    document.body.appendChild(Speaker.toHtml());
});