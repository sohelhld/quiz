const express = require("express");
const { quizModel } = require("../models/quiz.model");

require("dotenv").config();

const quizRouter = express.Router();

// Place an quiz
quizRouter.post("/addquiz", async (req, res) => {
  try {
    const payload = req.body;

    // Create a new quiz
    const quiz = new quizModel({payload});

    await quiz.save();

    res.status(201).send({ message: "quiz placed successfully", quiz });
  } catch (error) {
    res.status(400).send({ error: "Failed to place quiz" });
  }
});

// // Get details of a specific order
// orderRouter.get("/orders/:id", async (req, res) => {
//   try {
//     const orderId = req.params.id;

//     const order = await orderModel
//       .findById(orderId)
//     //   .populate("users", "-password")
//     //   .populate("restaurant");

//     if (!order) {
//       return res.status(404).send({ error: "Order not found" });
//     }

//     res.status(200).send(order);
//   } catch (error) {
//     res.status(400).send({ error: error.message });
//   }
// });

// // Update the status of a specific order
// orderRouter.patch("/orders/:id", async (req, res) => {
//   try {
//     const orderId = req.params.id;
//     const { status } = req.body;

//     const order = await orderModel.findById(orderId);

//     if (!order) {
//       return res.status(404).json({ error: "Order not found" });
//     }

//     order.status = status;

//     await order.save();

//     res
//       .status(204)
//       .send({ message: "Order status updated successfully", order });
//   } catch (error) {
//     res.status(400).json({ error: "Failed to update order status" });
//   }
// });

module.exports = {
  quizRouter,
};
