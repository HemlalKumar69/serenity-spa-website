const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const bookingRoutes = require("./routes/bookingRoutes");
const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Booking Routes
app.use("/api/bookings", bookingRoutes);

// Contact Routes
app.use("/api/contacts", contactRoutes);

// Admin Routes
app.use("/api/admin", adminRoutes);

// Home/Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Simran Day/Night Spa Backend is running successfully!",
  });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});