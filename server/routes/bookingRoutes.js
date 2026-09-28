const express = require("express");

const {
  createBooking,
  getBookings,
  updateBookingStatus,
  deleteBooking,
} = require("../controllers/bookingController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Public - Create booking
router.post("/", createBooking);

// Protected - Get all bookings
router.get("/", protect, getBookings);

// Protected - Update booking status
router.patch("/:id/status", protect, updateBookingStatus);

// Protected - Delete booking
router.delete("/:id", protect, deleteBooking);

module.exports = router;