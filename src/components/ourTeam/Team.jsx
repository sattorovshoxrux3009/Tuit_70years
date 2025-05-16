import { easeOut, motion } from "framer-motion";
import { act, useState } from "react";
import "./Team.scss";
import { useTranslation } from "react-i18next";
import rektorat1 from "../../img/rektorat1.jpg";
import rektorat2 from "../../img/rektorat2.jpg";
import rektorat3 from "../../img/rektorat3.jpg";
import rektorat4 from "../../img/rektorat4.jpg";
import rektorat5 from "../../img/rektorat5.jpg";
import rektorat6 from "../../img/rektorat6.jpg";
import bolimlar1 from "../../img/bolimlar1.png";
import bolimlar2 from "../../img/bolimlar2.png";
import bolimlar3 from "../../img/bolimlar3.png";
import bolimlar4 from "../../img/bolimlar4.png";
import akt1 from "../../img/akt1.png";
import akt2 from "../../img/akt2.png";
import akt3 from "../../img/akt3.png";

function Team() {
  const { t } = useTranslation();
  const [active, setActive] = useState("leadership");
  console.log(active);
  return (
    <div className="team">
      <div className="container">
        <span>
          <motion.button
            whileInView={{ y: [50, 1] }}
            transition={{ duration: 0.2, ease: easeOut }}
            onClick={() => {
              setActive("leadership");
            }}
            className={active == "leadership" ? "active" : ""}
          >
            {t("leadership")}
          </motion.button>
          <motion.button
            whileInView={{ y: [50, 1] }}
            transition={{ duration: 0.3, ease: easeOut }}
            onClick={() => {
              setActive("beginner");
            }}
            className={active == "beginner" ? "active" : ""}
          >
            {t("beginner")}
          </motion.button>
          <motion.button
            whileInView={{ y: [50, 1] }}
            transition={{ duration: 0.4, ease: easeOut }}
            onClick={() => {
              setActive("high");
            }}
            className={active == "high" ? "active" : ""}
          >
            {t("high")}
          </motion.button>
        </span>
        <ul>
          {active == "leadership" ? (
            <>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.2, ease: easeOut }}
              >
                <img src={rektorat1} alt="" />
                <h1>{t("team1")}</h1>
                <p>{t("team2")}</p>
              </motion.li>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.2, ease: easeOut }}
              >
                <img src={rektorat2} alt="" />
                <h1>{t("team3")}</h1>
                <p>{t("team4")}</p>
              </motion.li>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.2, ease: easeOut }}
              >
                <img src={rektorat3} alt="" />
                <h1>{t("team5")}</h1>
                <p>{t("team6")}</p>
              </motion.li>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.2, ease: easeOut }}
              >
                <img src={rektorat4} alt="" />
                <h1>{t("team7")}</h1>
                <p>{t("team8")}</p>
              </motion.li>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.2, ease: easeOut }}
              >
                <img src={rektorat5} alt="" />
                <h1>{t("team9")}</h1>
                <p>{t("team10")}</p>
              </motion.li>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.2, ease: easeOut }}
              >
                <img src={rektorat6} alt="" />
                <h1>{t("team11")}</h1>
                <p>{t("team12")}</p>
              </motion.li>
            </>
          ) : active == "beginner" ? (
            <>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.2, ease: easeOut }}
              >
                <img src={bolimlar1} alt="" />
                <h1>{t("team13")}</h1>
                <p>{t("team14")}</p>
              </motion.li>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.2, ease: easeOut }}
              >
                <img src={bolimlar2} alt="" />
                <h1>{t("team15")}</h1>
                <p>{t("team16")}</p>
              </motion.li>{" "}
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.2, ease: easeOut }}
              >
                <img src={bolimlar3} alt="" />
                <h1>{t("team17")}</h1>
                <p>{t("team18")}</p>
              </motion.li>{" "}
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.2, ease: easeOut }}
              >
                <img src={bolimlar4} alt="" />
                <h1>{t("team19")}</h1>
                <p>{t("team20")}</p>
              </motion.li>
            </>
          ) : (
            <>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.2, ease: easeOut }}
              >
                <img src={akt1} alt="" />
                <h1>{t("team21")}</h1>
                <p>{t("team22")}</p>
              </motion.li>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.2, ease: easeOut }}
              >
                <img src={akt2} alt="" />
                <h1>{t("team23")}</h1>
                <p>{t("team24")}</p>
              </motion.li>{" "}
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.2, ease: easeOut }}
              >
                <img src={akt3} alt="" />
                <h1>{t("team25")}</h1>
                <p>{t("team26")}</p>
              </motion.li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Team;
