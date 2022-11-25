const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number
    }
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;