const userOrders = require("../models/userOrders");

exports.createOrders = async (req, res) => {
    try {
        const { user_id, iceCreamName, price, quantity, total, purchaseStatus } = req.body;
        const orders = await userOrders.create({ user_id, iceCreamName, price, quantity, total, purchaseStatus });
        return res.status(200).json({
            success: true,
            message: "orders created succesfully"
        })

    } catch (error) {
        console.log("error in creating order");
        console.log(error)
        res.status(500).json({
            success: false,
            message: "error in creating order"
        })
    }


}
exports.getOrders = async (req, res) => {
    try {
        const user_id = req.params.id;
        console.log("userid",user_id);
        const orders = await userOrders.find({ user_id });

        res.status(200).json({
            success: true,
            data: orders,
            message: "orders fetched succesfully"

        })


    } catch (error) {
        console.log("error in fetching orders");
        console.log(error);
        res.status(500).json({
            success: false,
            message: "error in fetching orders"

        })
    }


}

