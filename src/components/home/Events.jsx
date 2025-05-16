import "./Events.scss";
import eventImg from "../../img/events.jpg";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Events() {
  const { t } = useTranslation();

  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);
  const faqs = [
    {
      question: t("event2"),
      answer: t("event3"),
    },
    {
      question: t("event4"),
      answer: t("event5"),
    },
    {
      question: t("event6"),
      answer: t("event7"),
    },
    {
      question: t("event8"),
      answer: t("event9"),
    },
    // {
    //   question: t("event10"),
    //   answer: t("event11"),
    // },
  ];
  const handleClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, i) => {
      if (!ref) return;
      if (i === openIndex) {
        ref.style.height = "0px"; // oldin nol qilamiz
        const scrollHeight = ref.scrollHeight;
        requestAnimationFrame(() => {
          ref.style.height = scrollHeight + "px";
        });
      } else {
        ref.style.height = "0px";
      }
    });
  }, [openIndex]);
  return (
    <section id="events" className="events">
      <div className="container">
        <div className="left">
          <motion.h1
            whileInView={{ y: [100, 1] }}
            transition={{ delay: 0, duration: 0.3, ease: "easeOut" }}
          >
            {t("event1")}
          </motion.h1>
          <ul className="max-w-xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.li
                key={index}
                onClick={() => handleClick(index)}
                whileInView={{ opacity: [0, 1] }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <div>
                  <div
                    className={
                      openIndex === index ? "active question" : "question"
                    }
                  >
                    {faq.question}
                  </div>
                  <div className="symbol">
                    <div className="line horizontal" />
                    <div
                      className={`line vertical ${
                        openIndex === index ? "fade-out" : "fade-in"
                      }`}
                    />
                  </div>
                </div>
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="answer-wrapper"
                >
                  <div className="answer">{faq.answer}</div>
                </div>
                {/* <hr /> */}
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          className="right"
          whileInView={{ opacity: [0, 1] }}
          transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
        >
          <img src={eventImg} alt="" />
        </motion.div>
      </div>
    </section>
  );
}

export default Events;
