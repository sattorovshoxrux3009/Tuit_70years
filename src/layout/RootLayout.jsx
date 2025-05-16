import Navbar from "../sections/Navbar.jsx";
import Footer from "../sections/Footer.jsx";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function RootLayout() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main style={{ marginTop: scrolled ? "100px" : "0px" }}>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
