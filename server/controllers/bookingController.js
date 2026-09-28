const Booking = require("../models/Booking");

// Create new booking
const createBooking = async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      service,
      therapist,
      date,
      time,
      message,
    } = req.body;

    // Check required fields
    if (!name || !phone || !service || !date || !time) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Create booking
    const booking = await Booking.create({
      name,
      phone,
      email: email || "",
      service,
      therapist: therapist || "Any available therapist",
      date,
      time,
      message: message || "",
    });

    res.status(201).json({
      success: true,
      message: "Booking created successfully!",
      booking,
    });
  } catch (error) {
    console.error(
      "Booking creation error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while creating the booking.",
    });
  }
};

// Get all bookings
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    console.error(
      "Get bookings error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while fetching bookings.",
    });
  }
};

// Update booking status
const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Allowed booking statuses
    const allowedStatuses = [
      "Pending",
      "Confirmed",
      "Completed",
      "Cancelled",
    ];

    // Validate status
    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking status.",
      });
    }

    // Find and update booking
    const booking = await Booking.findByIdAndUpdate(
      id,
      {
        status,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    // Booking not found
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found.",
      });
    }

    res.status(200).json({
      success: true,
      message:
        "Booking status updated successfully.",
      booking,
    });
  } catch (error) {
    console.error(
      "Update booking status error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while updating booking status.",
    });
  }
};

// Delete booking
const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete booking
    const booking = await Booking.findByIdAndDelete(id);

    // Booking not found
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully.",
      booking,
    });
  } catch (error) {
    console.error(
      "Delete booking error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while deleting the booking.",
    });
  }
};

module.exports = {
  createBooking,
  getBookings,
  updateBookingStatus,
  deleteBooking,
};