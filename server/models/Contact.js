const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      trim: true,
      default: "",
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    // Admin reply
    reply: {
      type: String,
      trim: true,
      default: "",
    },

    // Contact message status
    status: {
      type: String,
      enum: ["New", "Read", "Replied", "Closed"],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model(
  "Contact",
  contactSchema
);

module.exports = Contact;