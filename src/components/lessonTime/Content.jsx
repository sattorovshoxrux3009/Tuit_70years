import "./Main.scss";
import { useRef, useState } from "react";
import { motion, easeOut } from "framer-motion";

import video1 from "../../video/lessonTime1.mp4";
import video2 from "../../video/lessonTime2.mp4";
import video3 from "../../video/lessonTime3.mp4";
import poster1 from "../../img/poster1.png";
import poster2 from "../../img/poster2.png";
// import poster3 from "../../img/poster3.png";

const videos = [
  { id: 1, src: video1, poster: poster1 },
  // { id: 2, src: video2, poster: poster2 },
  // { id: 3, src: video3, poster: poster2 },
];

function Content() {
  const videoRefs = useRef({});
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const handlePlay = (id) => {
    if (playingVideoId && playingVideoId !== id) {
      videoRefs.current[playingVideoId]?.pause();
    }
    videoRefs.current[id]?.play();
    setPlayingVideoId(id);
  };

  const handlePause = (id) => {
    videoRefs.current[id]?.pause();
    if (playingVideoId === id) {
      setPlayingVideoId(null);
    }
  };
  return (
    <div className="content">
      <div className="container">
        <ul>
          {videos.map((video) => (
            <motion.li
              initial={
                video.id % 3 == 1
                  ? { y: 100, opacity: 0 }
                  : video.id % 3 == 2
                  ? { x: 100, opacity: 0 }
                  : { x: -100, opacity: 0 }
              }
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
              key={video.id}
              style={{ marginBottom: "20px", position: "relative" }}
            >
              {/* Show image when video is not playing */}
              {playingVideoId !== video.id && (
                <img
                  src={video.poster}
                  alt={`Poster ${video.id}`}
                  width="400"
                  style={{ display: "block" }}
                />
              )}
              <video
                ref={(el) => (videoRefs.current[video.id] = el)}
                src={video.src}
                onClick={() => handlePause(video.id)}
                width="400"
                style={{
                  display: playingVideoId === video.id ? "block" : "none",
                }}
                controls={false}
              />
              <div>
                {playingVideoId === video.id ? (
                  <></>
                ) : (
                  <motion.button
                    initial={{ scale: 0, x: "-50%", y: "-50%" }}
                    animate={{ scale: 1, x: "-50%", y: "-50%" }}
                    exit={{ scale: 0, x: "-50%", y: "-50%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onClick={() => handlePlay(video.id)}
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
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Content;
