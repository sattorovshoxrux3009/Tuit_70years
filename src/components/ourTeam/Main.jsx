import "./Main.scss";
import { easeOut, motion } from "framer-motion";
import ourTeamBG from "../../img/content.png";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  return (
    <div className="main">
      <div className="container">
        <span>
          <motion.h1
            whileInView={{ y: [100, 1] }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            {t("ourTeam1")}
          </motion.h1>
          <motion.p
            whileInView={{ y: [100, 1] }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            {t("ourTeamTeachers")}
          </motion.p>
        </span>
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.3, ease: easeOut }}
          src={ourTeamBG}
          alt=""
        />
      </div>
    </div>
  );
}

export default Main;
