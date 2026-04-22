import express from "express"; // Imports Express.js.
import reminderRoutes from "./routes/reminderRoutes.js";

const app = express(); // Creates an Express application instance.
const PORT = process.env.PORT || 3000;

app.use("/reminders", reminderRoutes);

app.get("/", (req, res) => {
  res.send("Apple reminder app");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
}); // Starts the server on port 3000 and logs a confirmation message.
