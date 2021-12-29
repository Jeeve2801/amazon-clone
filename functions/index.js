const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KBc6ISBgtls5DFADN5iJPVvSYOYWRZzzz9wJB8S8bj8eM1kxSr5aUhzit2xvXW0xMB1v0iV3Ddpdm9R6Q1IWqfV00dH9THVpH"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello dhamo"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request received for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  // Status code 201: OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Liten command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-c9224/us-central1/api
