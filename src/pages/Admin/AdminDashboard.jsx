import { API_BASE_URL } from "../../utils/constants";

import { useEffect, useState } from "react";
import axios from "axios";

import {
    CalendarCheck,
    CheckCircle2,
    Clock3,
    Mail,
    LogOut,
    RefreshCw,
    MessageSquare,
    Trash2,
} from "lucide-react";

const AdminDashboard = () => {
    const [bookings, setBookings] = useState([]);
    const [contacts, setContacts] = useState([]);

    const [loading, setLoading] = useState(true);
    const [updatingBookingId, setUpdatingBookingId] = useState(null);
    const [updatingContactId, setUpdatingContactId] = useState(null);
    const [replyText, setReplyText] = useState({});
    const [replyingContactId, setReplyingContactId] = useState(null);
    const [error, setError] = useState("");

    const adminData = JSON.parse(
        localStorage.getItem("adminData") || "{}"
    );

    // Fetch dashboard data
    const fetchDashboardData = async () => {
        try {
            setLoading(true);
            setError("");

            const currentToken = localStorage.getItem("adminToken");

            if (!currentToken) {
                setError("Admin login required.");
                return;
            }

            const config = {
                headers: {
                    Authorization: `Bearer ${currentToken}`,
                },
            };

            const [bookingResponse, contactResponse] =
                await Promise.all([
                    axios.get(
                        `${API_BASE_URL}/api/bookings`,
                        config
                    ),

                    axios.get(
                        `${API_BASE_URL}/api/contacts`,
                        config
                    ),
                ]);

            if (bookingResponse.data.success) {
                setBookings(
                    bookingResponse.data.bookings || []
                );
            }

            if (contactResponse.data.success) {
                setContacts(
                    contactResponse.data.contacts || []
                );
            }
        } catch (error) {
            console.error("Dashboard API Error:", error);

            if (error.response?.status === 401) {
                localStorage.removeItem("adminToken");
                localStorage.removeItem("adminData");

                window.location.href = "/admin/login";
                return;
            }

            setError(
                error.response?.data?.message ||
                "Unable to load dashboard data."
            );
        } finally {
            setLoading(false);
        }
    };

    // Load dashboard data
    useEffect(() => {
        fetchDashboardData();
    }, []);

    // Update booking status
    const handleBookingStatus = async (
        bookingId,
        status
    ) => {
        try {
            const currentToken =
                localStorage.getItem("adminToken");

            if (!currentToken) {
                window.location.href = "/admin/login";
                return;
            }

            setUpdatingBookingId(bookingId);
            setError("");

            const response = await axios.patch(
                `${API_BASE_URL}/api/bookings/${bookingId}/status`,
                {
                    status,
                },
                {
                    headers: {
                        Authorization: `Bearer ${currentToken}`,
                    },
                }
            );

            if (response.data.success) {
                setBookings((prevBookings) =>
                    prevBookings.map((booking) =>
                        booking._id === bookingId
                            ? {
                                ...booking,
                                status: response.data.booking.status,
                            }
                            : booking
                    )
                );
            }
        } catch (error) {
            console.error(
                "Booking Status Update Error:",
                error
            );

            if (error.response?.status === 401) {
                localStorage.removeItem("adminToken");
                localStorage.removeItem("adminData");

                window.location.href = "/admin/login";
                return;
            }

            setError(
                error.response?.data?.message ||
                "Unable to update booking status."
            );
        } finally {
            setUpdatingBookingId(null);
        }
    };

    // Delete booking
    const handleDeleteBooking = async (bookingId) => {
        try {
            const currentToken =
                localStorage.getItem("adminToken");

            if (!currentToken) {
                window.location.href = "/admin/login";
                return;
            }

            const confirmDelete = window.confirm(
                "Are you sure you want to delete this booking?"
            );

            if (!confirmDelete) {
                return;
            }

            setUpdatingBookingId(bookingId);
            setError("");

            const response = await axios.delete(
                `${API_BASE_URL}/api/bookings/${bookingId}`,
                {
                    headers: {
                        Authorization: `Bearer ${currentToken}`,
                    },
                }
            );

            if (response.data.success) {
                setBookings((prevBookings) =>
                    prevBookings.filter(
                        (booking) => booking._id !== bookingId
                    )
                );
            }
        } catch (error) {
            console.error(
                "Delete Booking Error:",
                error
            );

            if (error.response?.status === 401) {
                localStorage.removeItem("adminToken");
                localStorage.removeItem("adminData");

                window.location.href = "/admin/login";
                return;
            }

            setError(
                error.response?.data?.message ||
                "Unable to delete booking."
            );
        } finally {
            setUpdatingBookingId(null);
        }
    };

    // Update contact message status
    const handleContactStatus = async (
        contactId,
        status
    ) => {
        try {
            const currentToken =
                localStorage.getItem("adminToken");

            if (!currentToken) {
                window.location.href = "/admin/login";
                return;
            }

            setUpdatingContactId(contactId);
            setError("");

            const response = await axios.patch(
                `${API_BASE_URL}/api/contacts/${contactId}/status`,
                {
                    status,
                },
                {
                    headers: {
                        Authorization: `Bearer ${currentToken}`,
                    },
                }
            );

            if (response.data.success) {
                setContacts((prevContacts) =>
                    prevContacts.map((contact) =>
                        contact._id === contactId
                            ? {
                                ...contact,
                                status: response.data.contact.status,
                            }
                            : contact
                    )
                );
            }
        } catch (error) {
            console.error(
                "Contact Status Update Error:",
                error
            );

            if (error.response?.status === 401) {
                localStorage.removeItem("adminToken");
                localStorage.removeItem("adminData");

                window.location.href = "/admin/login";
                return;
            }

            setError(
                error.response?.data?.message ||
                "Unable to update contact status."
            );
        } finally {
            setUpdatingContactId(null);
        }
    };

    // Reply to contact message
    const handleContactReply = async (contactId) => {
        try {
            const currentToken =
                localStorage.getItem("adminToken");

            if (!currentToken) {
                window.location.href = "/admin/login";
                return;
            }

            const reply = replyText[contactId] || "";

            if (!reply.trim()) {
                setError("Please enter a reply message.");
                return;
            }

            setReplyingContactId(contactId);
            setError("");

            const response = await axios.patch(
                `${API_BASE_URL}/api/contacts/${contactId}/reply`,
                {
                    reply: reply.trim(),
                },
                {
                    headers: {
                        Authorization: `Bearer ${currentToken}`,
                    },
                }
            );

            if (response.data.success) {
                setContacts((prevContacts) =>
                    prevContacts.map((contact) =>
                        contact._id === contactId
                            ? response.data.contact
                            : contact
                    )
                );

                setReplyText((prev) => ({
                    ...prev,
                    [contactId]: "",
                }));
            }
        } catch (error) {
            console.error(
                "Contact Reply Error:",
                error
            );

            if (error.response?.status === 401) {
                localStorage.removeItem("adminToken");
                localStorage.removeItem("adminData");

                window.location.href = "/admin/login";
                return;
            }

            setError(
                error.response?.data?.message ||
                "Unable to send reply."
            );
        } finally {
            setReplyingContactId(null);
        }
    };

    // Delete contact message
    const handleDeleteContact = async (contactId) => {
        try {
            const currentToken =
                localStorage.getItem("adminToken");

            if (!currentToken) {
                window.location.href = "/admin/login";
                return;
            }

            const confirmDelete = window.confirm(
                "Are you sure you want to delete this contact message?"
            );

            if (!confirmDelete) {
                return;
            }

            setUpdatingContactId(contactId);
            setError("");

            const response = await axios.delete(
                `${API_BASE_URL}/api/contacts/${contactId}`,
                {
                    headers: {
                        Authorization: `Bearer ${currentToken}`,
                    },
                }
            );

            if (response.data.success) {
                setContacts((prevContacts) =>
                    prevContacts.filter(
                        (contact) => contact._id !== contactId
                    )
                );
            }
        } catch (error) {
            console.error(
                "Delete Contact Error:",
                error
            );

            if (error.response?.status === 401) {
                localStorage.removeItem("adminToken");
                localStorage.removeItem("adminData");

                window.location.href = "/admin/login";
                return;
            }

            setError(
                error.response?.data?.message ||
                "Unable to delete contact message."
            );
        } finally {
            setUpdatingContactId(null);
        }
    };

    // Logout
    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminData");

        window.location.href = "/admin/login";
    };

    // Statistics
    const totalBookings = bookings.length;

    const pendingBookings = bookings.filter(
        (booking) => booking.status === "Pending"
    ).length;

    const confirmedBookings = bookings.filter(
        (booking) => booking.status === "Confirmed"
    ).length;

    const completedBookings = bookings.filter(
        (booking) => booking.status === "Completed"
    ).length;

    const totalContacts = contacts.length;

    const stats = [
        {
            title: "Total Bookings",
            value: totalBookings,
            icon: CalendarCheck,
        },
        {
            title: "Pending Bookings",
            value: pendingBookings,
            icon: Clock3,
        },
        {
            title: "Confirmed",
            value: confirmedBookings,
            icon: CheckCircle2,
        },
        {
            title: "Completed",
            value: completedBookings,
            icon: CheckCircle2,
        },
        {
            title: "Messages",
            value: totalContacts,
            icon: MessageSquare,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* =========================
          HEADER
      ========================= */}
            <header className="bg-emerald-900 text-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">
                                    🌿
                                </span>

                                <h1 className="text-xl sm:text-2xl font-bold">
                                    Suman Day/Night Spa
                                </h1>
                            </div>

                            <p className="text-emerald-200 text-sm mt-1">
                                Admin Dashboard
                            </p>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-3">
                            <div className="text-right">
                                <p className="font-medium">
                                    {adminData.name || "Admin"}
                                </p>

                                <p className="text-xs text-emerald-200">
                                    {adminData.email || ""}
                                </p>
                            </div>

                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition"
                            >
                                <LogOut size={18} />

                                <span className="hidden sm:inline">
                                    Logout
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* =========================
          MAIN
      ========================= */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

                {/* Heading */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                            Dashboard Overview
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Manage your spa bookings and customer messages.
                        </p>
                    </div>

                    <button
                        onClick={fetchDashboardData}
                        disabled={loading}
                        className="flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 disabled:bg-emerald-500 text-white px-4 py-2.5 rounded-lg transition"
                    >
                        <RefreshCw
                            size={18}
                            className={
                                loading ? "animate-spin" : ""
                            }
                        />

                        Refresh
                    </button>
                </div>

                {/* Error */}
                {error && (
                    <div className="mb-6 rounded-xl bg-red-50 border border-red-200 text-red-600 px-4 py-3">
                        {error}
                    </div>
                )}

                {/* =========================
            STATS
        ========================= */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
                    {stats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.title}
                                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            {stat.title}
                                        </p>

                                        <h3 className="text-3xl font-bold text-gray-800 mt-2">
                                            {loading
                                                ? "..."
                                                : stat.value}
                                        </h3>
                                    </div>

                                    <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                                        <Icon size={22} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Recent Bookings */}
                <section className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <div className="p-5 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <CalendarCheck
                                size={22}
                                className="text-emerald-700"
                            />

                            <div>
                                <h3 className="text-lg font-bold text-gray-800">
                                    Recent Bookings
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Latest customer appointments
                                </p>
                            </div>
                        </div>
                    </div>

                    {loading ? (
                        <div className="p-8 text-center text-gray-500">
                            Loading bookings...
                        </div>
                    ) : bookings.length === 0 ? (
                        <div className="p-8 text-center text-gray-500">
                            No bookings found.
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1050px]">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="text-left px-5 py-3 text-sm font-semibold text-gray-600">
                                            Customer
                                        </th>

                                        <th className="text-left px-5 py-3 text-sm font-semibold text-gray-600">
                                            Service
                                        </th>

                                        <th className="text-left px-5 py-3 text-sm font-semibold text-gray-600">
                                            Therapist
                                        </th>

                                        <th className="text-left px-5 py-3 text-sm font-semibold text-gray-600">
                                            Date
                                        </th>

                                        <th className="text-left px-5 py-3 text-sm font-semibold text-gray-600">
                                            Time
                                        </th>

                                        <th className="text-left px-5 py-3 text-sm font-semibold text-gray-600">
                                            Status & Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {bookings
                                        .slice(0, 10)
                                        .map((booking) => (
                                            <tr
                                                key={booking._id}
                                                className="border-t border-gray-100 hover:bg-gray-50"
                                            >
                                                {/* Customer */}
                                                <td className="px-5 py-4">
                                                    <p className="font-medium text-gray-800">
                                                        {booking.name}
                                                    </p>

                                                    <p className="text-xs text-gray-500">
                                                        {booking.phone}
                                                    </p>

                                                    {booking.email && (
                                                        <p className="text-xs text-gray-500 mt-1">
                                                            {booking.email}
                                                        </p>
                                                    )}
                                                </td>

                                                {/* Service */}
                                                <td className="px-5 py-4 text-sm text-gray-700">
                                                    {booking.service}
                                                </td>

                                                {/* Therapist */}
                                                <td className="px-5 py-4 text-sm text-gray-700">
                                                    {booking.therapist}
                                                </td>

                                                {/* Date */}
                                                <td className="px-5 py-4 text-sm text-gray-700">
                                                    {booking.date}
                                                </td>

                                                {/* Time */}
                                                <td className="px-5 py-4 text-sm text-gray-700">
                                                    {booking.time}
                                                </td>

                                                {/* Status + Actions */}
                                                <td className="px-5 py-4">
                                                    <div className="flex flex-col gap-3">

                                                        {/* Current Status */}
                                                        <span
                                                            className={`inline-flex w-fit items-center px-3 py-1 rounded-full text-xs font-semibold ${booking.status === "Pending"
                                                                ? "bg-yellow-100 text-yellow-700"
                                                                : booking.status === "Confirmed"
                                                                    ? "bg-blue-100 text-blue-700"
                                                                    : booking.status === "Completed"
                                                                        ? "bg-green-100 text-green-700"
                                                                        : "bg-red-100 text-red-700"
                                                                }`}
                                                        >
                                                            {booking.status}
                                                        </span>

                                                        {/* Pending Actions */}
                                                        {booking.status === "Pending" && (
                                                            <div className="flex flex-wrap gap-2">

                                                                {/* Confirm */}
                                                                <button
                                                                    onClick={() =>
                                                                        handleBookingStatus(
                                                                            booking._id,
                                                                            "Confirmed"
                                                                        )
                                                                    }
                                                                    disabled={
                                                                        updatingBookingId ===
                                                                        booking._id
                                                                    }
                                                                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white text-xs font-medium transition"
                                                                >
                                                                    {updatingBookingId ===
                                                                        booking._id
                                                                        ? "Updating..."
                                                                        : "Confirm"}
                                                                </button>

                                                                {/* Cancel */}
                                                                <button
                                                                    onClick={() =>
                                                                        handleBookingStatus(
                                                                            booking._id,
                                                                            "Cancelled"
                                                                        )
                                                                    }
                                                                    disabled={
                                                                        updatingBookingId ===
                                                                        booking._id
                                                                    }
                                                                    className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white text-xs font-medium transition"
                                                                >
                                                                    Cancel
                                                                </button>

                                                                {/* Delete */}
                                                                <button
                                                                    onClick={() =>
                                                                        handleDeleteBooking(
                                                                            booking._id
                                                                        )
                                                                    }
                                                                    disabled={
                                                                        updatingBookingId ===
                                                                        booking._id
                                                                    }
                                                                    className="px-3 py-1.5 rounded-lg bg-gray-700 hover:bg-gray-800 disabled:bg-gray-400 text-white text-xs font-medium transition flex items-center gap-1.5"
                                                                >
                                                                    <Trash2 size={14} />

                                                                    {updatingBookingId ===
                                                                        booking._id
                                                                        ? "Deleting..."
                                                                        : "Delete"}
                                                                </button>
                                                            </div>
                                                        )}

                                                        {/* Confirmed Actions */}
                                                        {booking.status === "Confirmed" && (
                                                            <div className="flex flex-wrap gap-2">

                                                                {/* Complete */}
                                                                <button
                                                                    onClick={() =>
                                                                        handleBookingStatus(
                                                                            booking._id,
                                                                            "Completed"
                                                                        )
                                                                    }
                                                                    disabled={
                                                                        updatingBookingId ===
                                                                        booking._id
                                                                    }
                                                                    className="px-3 py-1.5 rounded-lg bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white text-xs font-medium transition"
                                                                >
                                                                    {updatingBookingId ===
                                                                        booking._id
                                                                        ? "Updating..."
                                                                        : "Complete"}
                                                                </button>

                                                                {/* Cancel */}
                                                                <button
                                                                    onClick={() =>
                                                                        handleBookingStatus(
                                                                            booking._id,
                                                                            "Cancelled"
                                                                        )
                                                                    }
                                                                    disabled={
                                                                        updatingBookingId ===
                                                                        booking._id
                                                                    }
                                                                    className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white text-xs font-medium transition"
                                                                >
                                                                    Cancel
                                                                </button>

                                                                {/* Delete */}
                                                                <button
                                                                    onClick={() =>
                                                                        handleDeleteBooking(
                                                                            booking._id
                                                                        )
                                                                    }
                                                                    disabled={
                                                                        updatingBookingId ===
                                                                        booking._id
                                                                    }
                                                                    className="px-3 py-1.5 rounded-lg bg-gray-700 hover:bg-gray-800 disabled:bg-gray-400 text-white text-xs font-medium transition flex items-center gap-1.5"
                                                                >
                                                                    <Trash2 size={14} />

                                                                    {updatingBookingId ===
                                                                        booking._id
                                                                        ? "Deleting..."
                                                                        : "Delete"}
                                                                </button>
                                                            </div>
                                                        )}

                                                        {/* Completed */}
                                                        {booking.status === "Completed" && (
                                                            <div className="flex flex-wrap items-center gap-2">
                                                                <span className="text-xs text-green-600 font-medium">
                                                                    Booking completed
                                                                </span>

                                                                {/* Delete */}
                                                                <button
                                                                    onClick={() =>
                                                                        handleDeleteBooking(
                                                                            booking._id
                                                                        )
                                                                    }
                                                                    disabled={
                                                                        updatingBookingId ===
                                                                        booking._id
                                                                    }
                                                                    className="px-3 py-1.5 rounded-lg bg-gray-700 hover:bg-gray-800 disabled:bg-gray-400 text-white text-xs font-medium transition flex items-center gap-1.5"
                                                                >
                                                                    <Trash2 size={14} />

                                                                    {updatingBookingId ===
                                                                        booking._id
                                                                        ? "Deleting..."
                                                                        : "Delete"}
                                                                </button>
                                                            </div>
                                                        )}

                                                        {/* Cancelled */}
                                                        {booking.status === "Cancelled" && (
                                                            <div className="flex flex-wrap items-center gap-2">
                                                                <span className="text-xs text-red-600 font-medium">
                                                                    Booking cancelled
                                                                </span>

                                                                {/* Delete */}
                                                                <button
                                                                    onClick={() =>
                                                                        handleDeleteBooking(
                                                                            booking._id
                                                                        )
                                                                    }
                                                                    disabled={
                                                                        updatingBookingId ===
                                                                        booking._id
                                                                    }
                                                                    className="px-3 py-1.5 rounded-lg bg-gray-700 hover:bg-gray-800 disabled:bg-gray-400 text-white text-xs font-medium transition flex items-center gap-1.5"
                                                                >
                                                                    <Trash2 size={14} />

                                                                    {updatingBookingId ===
                                                                        booking._id
                                                                        ? "Deleting..."
                                                                        : "Delete"}
                                                                </button>
                                                            </div>
                                                        )}

                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>


                {/* =========================
            CONTACT MESSAGES
        ========================= */}
                <section className="bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="p-5 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <Mail
                                size={22}
                                className="text-emerald-700"
                            />

                            <div>
                                <h3 className="text-lg font-bold text-gray-800">
                                    Recent Contact Messages
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Latest messages from customers
                                </p>
                            </div>
                        </div>
                    </div>

                    {loading ? (
                        <div className="p-8 text-center text-gray-500">
                            Loading messages...
                        </div>
                    ) : contacts.length === 0 ? (
                        <div className="p-8 text-center text-gray-500">
                            No contact messages found.
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-100">
                            {contacts
                                .slice(0, 5)
                                .map((contact) => (
                                    <div
                                        key={contact._id}
                                        className="p-5 hover:bg-gray-50 transition"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">

                                            {/* Customer Details */}
                                            <div>
                                                <h4 className="font-semibold text-gray-800">
                                                    {contact.name}
                                                </h4>

                                                <p className="text-sm text-gray-500">
                                                    {contact.email}
                                                </p>

                                                {contact.phone && (
                                                    <p className="text-sm text-gray-500">
                                                        {contact.phone}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Current Status */}
                                            <span
                                                className={`inline-flex items-center gap-1 self-start px-3 py-1 rounded-full text-xs font-semibold ${contact.status === "New"
                                                    ? "bg-blue-100 text-blue-700"
                                                    : contact.status === "Read"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : contact.status === "Replied"
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-gray-100 text-gray-700"
                                                    }`}
                                            >
                                                <MessageSquare
                                                    size={13}
                                                />

                                                {contact.status}
                                            </span>
                                        </div>

                                        {/* Message */}
                                        <p className="text-gray-600 text-sm mt-3 leading-6">
                                            {contact.message}
                                        </p>

                                        {/* Admin Reply */}
                                        <div className="mt-4">
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Reply to Customer
                                            </label>

                                            <textarea
                                                value={replyText[contact._id] || ""}
                                                onChange={(e) =>
                                                    setReplyText((prev) => ({
                                                        ...prev,
                                                        [contact._id]: e.target.value,
                                                    }))
                                                }
                                                placeholder="Write your reply here..."
                                                rows={3}
                                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                                            />

                                            <div className="mt-2">
                                                <button
                                                    onClick={() =>
                                                        handleContactReply(contact._id)
                                                    }
                                                    disabled={
                                                        replyingContactId === contact._id
                                                    }
                                                    className="px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 disabled:bg-emerald-400 text-white text-sm font-medium transition"
                                                >
                                                    {replyingContactId === contact._id
                                                        ? "Sending..."
                                                        : "Send Reply"}
                                                </button>
                                            </div>
                                        </div>

                                        {/* Contact Status Actions */}
                                        <div className="flex flex-wrap gap-2 mt-4">

                                            {/* New -> Read */}
                                            {contact.status === "New" && (
                                                <button
                                                    onClick={() =>
                                                        handleContactStatus(
                                                            contact._id,
                                                            "Read"
                                                        )
                                                    }
                                                    disabled={
                                                        updatingContactId ===
                                                        contact._id
                                                    }
                                                    className="px-3 py-1.5 rounded-lg bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-300 text-white text-xs font-medium transition"
                                                >
                                                    {updatingContactId ===
                                                        contact._id
                                                        ? "Updating..."
                                                        : "Mark as Read"}
                                                </button>
                                            )}

                                            {/* Read -> Replied */}
                                            {contact.status === "Read" && (
                                                <button
                                                    onClick={() =>
                                                        handleContactStatus(
                                                            contact._id,
                                                            "Replied"
                                                        )
                                                    }
                                                    disabled={
                                                        updatingContactId ===
                                                        contact._id
                                                    }
                                                    className="px-3 py-1.5 rounded-lg bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white text-xs font-medium transition"
                                                >
                                                    {updatingContactId ===
                                                        contact._id
                                                        ? "Updating..."
                                                        : "Mark as Replied"}
                                                </button>
                                            )}

                                            {/* Replied -> Closed */}
                                            {contact.status === "Replied" && (
                                                <button
                                                    onClick={() =>
                                                        handleContactStatus(
                                                            contact._id,
                                                            "Closed"
                                                        )
                                                    }
                                                    disabled={
                                                        updatingContactId ===
                                                        contact._id
                                                    }
                                                    className="px-3 py-1.5 rounded-lg bg-gray-600 hover:bg-gray-700 disabled:bg-gray-300 text-white text-xs font-medium transition"
                                                >
                                                    {updatingContactId ===
                                                        contact._id
                                                        ? "Updating..."
                                                        : "Close Message"}
                                                </button>
                                            )}

                                            {/* Closed */}
                                            {contact.status === "Closed" && (
                                                <span className="text-xs text-gray-500 font-medium py-1.5">
                                                    Message closed
                                                </span>
                                            )}

                                            <button
                                                onClick={() =>
                                                    handleDeleteContact(contact._id)
                                                }
                                                disabled={
                                                    updatingContactId === contact._id
                                                }
                                                className="px-3 py-1.5 rounded-lg bg-gray-700 hover:bg-gray-800 disabled:bg-gray-400 text-white text-xs font-medium transition flex items-center gap-1.5"
                                            >
                                                <Trash2 size={14} />

                                                {updatingContactId === contact._id
                                                    ? "Deleting..."
                                                    : "Delete"}
                                            </button>

                                        </div>
                                    </div>
                                ))}
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
};

export default AdminDashboard;