import express from "express"; // Imports Express.js.
import reminderRoutes from "./routes/reminderRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express(); // Creates an Express application instance.
const PORT = process.env.PORT || 3000;

app.use("/reminders", reminderRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Apple reminder app");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
}); // Starts the server on port 3000 and logs a confirmation message.
