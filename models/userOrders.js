const mongoose = require("mongoose");

const userOrdersSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    iceCreamName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    purchaseStatus: {
        type: String,
        required: true
    }
}
    , {
        timestamps: true
    })

module.exports = new mongoose.model("userOrders", userOrdersSchema);