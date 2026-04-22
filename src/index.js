import express from "express"; // Imports Express.js.

const app = express(); // Creates an Express application instance.
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
}); // Defines a route (/) that returns Hello, World!.

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
}); // Starts the server on port 3000 and logs a confirmation message.
