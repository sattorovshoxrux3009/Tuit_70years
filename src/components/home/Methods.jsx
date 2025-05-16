import "./Methods.scss";
import method1 from "../../img/method1.jpg";
import method2 from "../../img/method2.jpg";
import method3 from "../../img/method3.jpg";
import { useRef } from "react";
import { motion, easeOut } from "framer-motion";
import { useTranslation } from "react-i18next";

function Methods() {
  const { t } = useTranslation();

  const listRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - listRef.current.offsetLeft;
    scrollLeft.current = listRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - listRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    listRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="methods">
      <div className="container">
        <div>
          <motion.h1
            whileInView={{ y: [100, 1] }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            {t("method1")} <span>{t("method2")}</span>
          </motion.h1>
          <motion.p
            whileInView={{ y: [100, 1] }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            {t("method3")}
          </motion.p>
        </div>
        <ul
          ref={listRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onContextMenu={(e) => {
            e.preventDefault();
            console.log("Right-click context menu prevented");
          }}
        >
          <motion.li
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <img src={method1} alt="" />
            <span>
              <h1>{t("method4")}</h1>
              <p>{t("method5")}</p>
            </span>
          </motion.li>
          <motion.li
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <img src={method2} alt="" />
            <span>
              <h1>{t("method6")}</h1>
              <p>{t("method7")}</p>
            </span>
          </motion.li>
          <motion.li
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <img src={method3} alt="" />
            <span>
              <h1>{t("method8")}</h1>
              <p>{t("method9")}</p>
            </span>
          </motion.li>
        </ul>
      </div>
    </div>
  );
}

export default Methods;
