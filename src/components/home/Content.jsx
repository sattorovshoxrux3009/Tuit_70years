import "./Content.scss";
import content from "../../video/content.mp4";
import { useEffect, useRef, useState } from "react";
import { motion, easeOut } from "framer-motion";
import { useTranslation } from "react-i18next";
import contentImg from "../../img/content.png";

function Content() {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev); // faqat holatni almashtiramiz
  };

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play();
    } else if (!isPlaying && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <section id="aboutUs" className="content">
      <div className="container">
        <motion.div
          whileInView={{ y: [100, 1] }}
          transition={{ duration: 0.3, ease: easeOut }}
          className="wrapper"
        >
          <div className="left">
            <motion.h1
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, ease: easeOut }}
            >
              <span>TA</span>TU
            </motion.h1>
            <motion.p
              whileInView={{ opacity: [0, 0.8] }}
              transition={{ duration: 1, ease: easeOut }}
            >
              {t("content1")}
            </motion.p>
            <motion.p
              whileInView={{ opacity: [0, 0.8] }}
              transition={{ duration: 1, ease: easeOut }}
            >
              {t("content2")}
            </motion.p>
          </div>
          <div className="right">
            {!isPlaying && (
              <img onClick={handlePlayPause} src={contentImg} alt="" />
            )}
            {isPlaying && (
              <video
                ref={videoRef}
                onClick={handlePlayPause}
                src={content}
                width="400"
                controls={false}
              />
            )}
            {!isPlaying && (
              <motion.button
                onClick={handlePlayPause}
                initial={{ scale: 0, x: "-50%", y: "-50%" }}
                animate={{ scale: 1, x: "-50%", y: "-50%" }}
                exit={{ scale: 0, x: "-50%", y: "-50%" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  width: "70px",
                  height: "70px",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  border: "none",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingLeft: "7px",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  cursor: "pointer",
                }}
              >
                <svg
                  width="26"
                  height="30"
                  viewBox="0 0 26 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.5 14.134C26.1667 14.5189 26.1667 15.4811 25.5 15.866L1.5 29.7224C0.833329 30.1073 -1.42614e-06 29.6262 -1.39249e-06 28.8564L-1.81122e-07 1.14359C-1.47473e-07 0.373789 0.833333 -0.107333 1.5 0.277567L25.5 14.134Z"
                    fill="white"
                  ></path>
                </svg>
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Content;
