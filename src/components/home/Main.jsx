import "./Main.scss";
import mainImage from "../../img/homeMain.jpg";
import { useTranslation } from "react-i18next";
import { easeOut, motion } from "framer-motion";

function Main() {
  const { t } = useTranslation();
  return (
    <section id="main" className="main">
      <div className="container">
        <div className="left">
          <motion.h1
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, ease: easeOut }}
          >
            {t("child")} <span> {t("success")}</span> {t("education")}
          </motion.h1>
          <motion.p
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            {t("mainText")}
          </motion.p>
        </div>
        <div className="right">
          <img src={mainImage} alt="main" className="walpaper" />
          <a href="#">
            <button> {t("signUp")}</button>
          </a>
        </div>
        <div className="bottom"></div>
        <a href="#" className="btn">
          <button> {t("signUp")}</button>
        </a>
      </div>
    </section>
  );
}

export default Main;
