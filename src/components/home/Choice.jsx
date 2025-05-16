import "./Choice.scss";
import { motion, easeOut, easeIn } from "framer-motion";
import { useTranslation } from "react-i18next";

function Choice() {
  const { t } = useTranslation();

  return (
    <section id="schoolLife" className="choice">
      <div className="container">
        <div className="top">
          <motion.h1
            whileInView={{ y: [100, 1] }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            {t("choice1")} <span>{t("choice2")}</span>
          </motion.h1>
          <motion.p
            whileInView={{ y: [100, 1] }}
            transition={{ duration: 0.4, ease: easeOut }}
          >
            {t("choice3")}
          </motion.p>
          <motion.p
            whileInView={{ y: [100, 1] }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            {t("choice4")}
          </motion.p>
        </div>

        <ul>
          <motion.li
            whileInView={{ y: [100, 1] }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            <div className="img4"></div>
            <h2>{t("choice5")}</h2>
            <p>{t("choice6")}</p>
          </motion.li>
          <motion.li
            whileInView={{ y: [100, 1] }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            <div className="img1"></div>
            <h2>{t("choice7")}</h2>
            <p>{t("choice8")}</p>
          </motion.li>
          <motion.li
            whileInView={{ y: [100, 1] }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            <div className="img2"></div>
            <h2>{t("choice9")}</h2>
            <p>{t("choice10")} </p>
          </motion.li>
          <motion.li
            whileInView={{ y: [100, 1] }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            <div className="img3"></div>
            <h2>{t("choice11")}</h2>
            <p>{t("choice12")}</p>
          </motion.li>
        </ul>
      </div>
    </section>
  );
}

export default Choice;
