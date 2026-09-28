const Contact = require("../models/Contact");

// Create new contact message
const createContact = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      message,
    } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      phone: phone || "",
      message,
    });

    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully!",
      contact,
    });
  } catch (error) {
    console.error(
      "Contact creation error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while sending your message.",
    });
  }
};

// Get all contact messages
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: contacts.length,
      contacts,
    });
  } catch (error) {
    console.error(
      "Get contacts error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while fetching contact messages.",
    });
  }
};

// Update contact message status
const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatuses = [
      "New",
      "Read",
      "Replied",
      "Closed",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid contact status.",
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      id,
      {
        status,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found.",
      });
    }

    res.status(200).json({
      success: true,
      message:
        "Contact status updated successfully.",
      contact,
    });
  } catch (error) {
    console.error(
      "Update contact status error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while updating contact status.",
    });
  }
};

// Admin reply to contact message
const replyToContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { reply } = req.body;

    // Check reply
    if (!reply || !reply.trim()) {
      return res.status(400).json({
        success: false,
        message: "Reply message is required.",
      });
    }

    // Find contact
    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found.",
      });
    }

    // Save reply
    contact.reply = reply.trim();

    // Automatically change status
    contact.status = "Replied";

    await contact.save();

    res.status(200).json({
      success: true,
      message: "Reply saved successfully.",
      contact,
    });
  } catch (error) {
    console.error(
      "Reply contact error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while saving the reply.",
    });
  }
};

// Delete contact message
const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete contact message
    const contact = await Contact.findByIdAndDelete(id);

    // Contact not found
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact message deleted successfully.",
      contact,
    });
  } catch (error) {
    console.error(
      "Delete contact error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Something went wrong while deleting the contact message.",
    });
  }
};

module.exports = {
  createContact,
  getContacts,
  updateContactStatus,
  replyToContact,
  deleteContact,
};