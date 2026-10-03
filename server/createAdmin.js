const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const path = require("path");
const dotenv = require("dotenv");

const Admin = require("./models/Admin");

// Load .env from server folder
dotenv.config({
    path: path.join(__dirname, ".env"),
});

const createAdmin = async () => {
    try {
        // Check MongoDB URI
        if (!process.env.MONGODB_URI) {
            console.error("MONGODB_URI is missing from .env file.");
            process.exit(1);
        }

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB connected!");

        const existingAdmin = await Admin.findOne({
            email: "admin@spa.com",
        });

        if (existingAdmin) {
            console.log("Admin already exists!");
            process.exit(0);
        }

        const hashedPassword = await bcrypt.hash("Admin@12345", 10);

        const admin = await Admin.create({
            name: "Simran Day/Night Spa Admin",
            email: "admin@spa.com",
            password: hashedPassword,
        });

        console.log("Admin created successfully!");
        console.log("Email:", admin.email);
        console.log("Password: Admin@12345");

        process.exit(0);
    } catch (error) {
        console.error("Admin creation failed:", error.message);
        process.exit(1);
    }
};

createAdmin();
