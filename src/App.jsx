import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import ServiceDetails from "./pages/Services/ServiceDetails";
import Therapists from "./pages/Therapists/Therapists";
import TherapistDetails from "./pages/Therapists/TherapistDetails";
import Gallery from "./pages/Gallery/Gallery";
// import Pricing from "./pages/Pricing/Pricing";
import Booking from "./pages/Booking/Booking";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

import ScrollToTop from "./components/common/ScrollToTop";

import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminProtectedRoute from "./components/admin/AdminProtectedRoute";

import FloatingContact from "./components/common/FloatingContact";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Floating Call + WhatsApp */}
      <FloatingContact />

      <Routes>
        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Admin Dashboard */}
        <Route element={<AdminProtectedRoute />}>
          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />
        </Route>

        {/* Main Website */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path="services" element={<Services />} />

          <Route
            path="services/:id"
            element={<ServiceDetails />}
          />

          <Route path="therapists" element={<Therapists />} />

          <Route
            path="therapists/:id"
            element={<TherapistDetails />}
          />

          <Route path="gallery" element={<Gallery />} />

          {/* Pricing removed */}
          {/* <Route path="pricing" element={<Pricing />} /> */}

          <Route path="booking" element={<Booking />} />

          <Route path="contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;