import "./Agenda.scss";
import png1 from "../../img/3d1.webp";
import png2 from "../../img/3d2.webp";
import png4 from "../../img/3d3.webp";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Agenda() {
  const { t } = useTranslation();

  return (
    <section id="agenda" className="agenda">
      <div className="container">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0 }}
        >
          {t("agenda1")}
        </motion.h1>
        <ul>
          <li>
            <div>
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0 }}
              >
                08:30-12:50
              </motion.h2>
            </div>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {t("agenda2")} <span>{t("agenda3")}</span> {t("agenda4")}
            </motion.p>
            <img src={png1} alt="" />
          </li>
          <li>
            <div>
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0 }}
              >
                12:50-13:30
              </motion.h2>
            </div>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <span>{t("agenda5")}</span> {t("agenda6")}
            </motion.p>
            <img src={png2} alt="" />
          </li>
          <li>
            <div>
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0 }}
              >
                13:30-17:50
              </motion.h2>
            </div>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {t("agenda7")} <span>{t("agenda8")}</span> {t("agenda9")}
            </motion.p>
            <img src={png4} alt="" />
          </li>
          {/* <li>
            <div>
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0 }}
              >
                16:00-17:00
              </motion.h2>
            </div>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {t("agenda10")} <span>{t("agenda11")}</span> {t("agenda12")}
            </motion.p>
            <img src={png3} alt="" />
          </li> */}
        </ul>
      </div>
    </section>
  );
}

export default Agenda;
