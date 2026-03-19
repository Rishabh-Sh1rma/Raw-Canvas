/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { FreeTraining } from "./pages/FreeTraining";
import { TrainingVideo } from "./pages/TrainingVideo";
import { ThankYou } from "./pages/ThankYou";

function AppLayout() {
  const location = useLocation();
  const isFunnelPage = ["/free-training", "/training-video", "/thank-you"].includes(location.pathname);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        // Use setTimeout to ensure the DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#c2f2d0] selection:text-black">
      {!isFunnelPage && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/free-training" element={<FreeTraining />} />
          <Route path="/training-video" element={<TrainingVideo />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      {!isFunnelPage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
