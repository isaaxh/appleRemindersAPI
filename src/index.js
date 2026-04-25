import express from "express"; // Imports Express.js.
import reminderRoutes from "./routes/reminderRoutes.js";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

const app = express(); // Creates an Express application instance.
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/reminders", reminderRoutes);

app.get(errorHandlerMiddleware); // needs to be last

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
