const express = require("express");

const {
  createContact,
  getContacts,
  updateContactStatus,
  replyToContact,
  deleteContact,
} = require("../controllers/contactController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Public - Create contact message
router.post("/", createContact);

// Protected - Get all contact messages
router.get("/", protect, getContacts);

// Protected - Update contact status
router.patch("/:id/status", protect, updateContactStatus);

// Protected - Reply to contact message
router.patch("/:id/reply", protect, replyToContact);

// Protected - Delete contact message
router.delete("/:id", protect, deleteContact);

module.exports = router;
