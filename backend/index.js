const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
// const addDestinationRoutes = require("./routes/addDestination");
const userRoutes = require("./Routes/signup");
const loginRoutes = require("./Routes/signin");
const allFood = require("./Routes/allFood");
const geminiRoutes = require("./Routes/geminiRoute");
// const parseResumeRoutes = require("./Routes/parseResume"); // Add the parse-resume route

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Mount routes
app.use("/users", userRoutes);  // Mount user-related routes
app.use("/users", loginRoutes); // Mount login-related routes
app.use("/food", allFood);
app.use("/gemini", geminiRoutes); // Mount login-related routes
// app.use("/api", parseResumeRoutes); // Mount parse-resume route

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

