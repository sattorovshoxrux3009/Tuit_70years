import "./Navbar.scss";
import logo from "../img/logo.jpg";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpenButtons, setIsOpenButtons] = useState(false);
  const [active, setActive] = useState(false);
  const [activeLang, setActiveLang] = useState(
    localStorage.getItem("i18nextLng")
  );

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng"));

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  function setLanguage(lang) {
    setIsOpenButtons(false);
    setActiveLang(lang);
    setLang(lang);
  }

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className={`navbar ${scrolled ? "fixed" : ""}`}>
        <div className="container">
          <div className="wrapper">
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={logo} alt="logo" />
            </a>

            <div className="links">
              <a
                href="#aboutUs"
                onClick={() => {
                  navigate("/");
                }}
              >
                {t("aboutUs")}
              </a>
              <a
                onClick={() => {
                  navigate("/our_team");
                }}
                className={
                  location.pathname === "/our_team" ? "active-link" : ""
                }
              >
                {t("ourTeam")}
              </a>
              <a
                href="#agenda"
                onClick={() => {
                  navigate("/");
                }}
              >
                {t("agenda")}
              </a>
              <a
                href="#schoolLife"
                onClick={() => {
                  navigate("/");
                }}
              >
                {t("schoolLife")}
              </a>

              <a
                href="#contact"
                onClick={() => {
                  navigate("/");
                }}
              >
                {t("contact")}
              </a>
              <a
                onClick={() => {
                  navigate("/lesson_time");
                }}
                className={
                  location.pathname === "/lesson_time" ? "active-link" : ""
                }
              >
                {t("videos")}
              </a>
              <a
                href="#"
                onClick={() => {
                  navigate("/subjects");
                }}
              >
                {t("admission")}
              </a>
            </div>
            <div className="right">
              <a href="tel:+998712034444">+998-71-203-44-44</a>
              <button
                onClick={() => {
                  setIsOpenButtons(!isOpenButtons);
                }}
                className={isOpenButtons ? "btn active" : "btn"}
              >
                {activeLang == "uz" ? "O'z" : activeLang == "en" ? "En" : "Ру"}
              </button>
              <ul className={isOpenButtons ? "" : "hidden"}>
                <li>
                  <button
                    onClick={() => {
                      const nextLang =
                        activeLang == "uz"
                          ? "en"
                          : activeLang == "en"
                          ? "ru"
                          : "uz";
                      setLanguage(nextLang);
                    }}
                    className="btn1"
                  >
                    {activeLang == "uz"
                      ? "En"
                      : activeLang == "en"
                      ? "Ру"
                      : "O'z"}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const nextLang =
                        activeLang === "uz"
                          ? "ru"
                          : activeLang === "ru"
                          ? "en"
                          : "uz";
                      setLanguage(nextLang);
                    }}
                    className="btn2"
                  >
                    {activeLang === "uz"
                      ? "Ру"
                      : activeLang === "en"
                      ? "O'z"
                      : "En"}
                  </button>
                </li>
              </ul>
            </div>
            <div
              className={`hamburger ${active ? "active" : ""}`}
              onClick={() => setActive(!active)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className={`navbar-mobile ${active ? "active" : ""}`}>
        <div className="container">
          <div
            className={`hamburger ${active ? "active" : ""}`}
            onClick={() => setActive(!active)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="links">
            <a
              href="#aboutUs"
              onClick={() => {
                navigate("/");
                setActive(false);
              }}
            >
              {t("aboutUs")}
            </a>
            <a
              onClick={() => {
                navigate("/our_team");
                setActive(false);
              }}
              href="#"
            >
              {t("ourTeam")}
            </a>
            <a
              href="#agenda"
              onClick={() => {
                navigate("/");
                setActive(false);
              }}
            >
              {t("agenda")}
            </a>
            <a
              href="#schoolLife"
              onClick={() => {
                navigate("/");
                setActive(false);
              }}
            >
              {t("schoolLife")}
            </a>

            <a
              href="#contact"
              onClick={() => {
                navigate("/");
                setActive(false);
              }}
            >
              {t("contact")}
            </a>
            <a
              href="#"
              onClick={() => {
                navigate("/lesson_time");
                setActive(false);
              }}
            >
              {t("videos")}
            </a>
            <a
              href="#"
              onClick={() => {
                navigate("/subjects");
                setActive(false);
              }}
            >
              {t("admission")}
            </a>
          </div>
          <div className="bottom">
            <a href="tel:+998712034444">+998-71-203-44-44</a>
            <button
              onClick={() => {
                setIsOpenButtons(!isOpenButtons);
              }}
              className={isOpenButtons ? "btn active" : "btn"}
            >
              {activeLang == "uz" ? "O'z" : activeLang == "en" ? "En" : "Ру"}
            </button>
            <ul className={isOpenButtons ? "" : "hidden"}>
              <li>
                <button
                  onClick={() => {
                    const nextLang =
                      activeLang == "uz"
                        ? "en"
                        : activeLang == "en"
                        ? "ru"
                        : "uz";
                    setLanguage(nextLang);
                    setActive(false);
                  }}
                  className="btn1"
                >
                  {activeLang == "uz"
                    ? "En"
                    : activeLang == "en"
                    ? "Ру"
                    : "O'z"}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const nextLang =
                      activeLang === "uz"
                        ? "ru"
                        : activeLang === "ru"
                        ? "en"
                        : "uz";
                    setLanguage(nextLang);
                    setActive(false);
                  }}
                  className="btn2"
                >
                  {activeLang === "uz"
                    ? "Ру"
                    : activeLang === "en"
                    ? "O'z"
                    : "En"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
