import "./Main.scss";
import { useRef, useState } from "react";
import computer from "../../../public/Data/computer.js";
import Latex from "../../../public/Data/Latex.js";
import pedagogika from "../../../public/Data/pedagogika.js";
import talimnazariya from "../../../public/Data/talimnazariya.js";
import talimpsixologiya from "../../../public/Data/talimpsixologiya.js";
import webcoder from "../../../public/Data/webcoder.js";

function Main({ setOnQuiz, select, setSelect, number, setNumber }) {
  const subjects = [
    computer,
    Latex,
    pedagogika,
    talimnazariya,
    talimpsixologiya,
    webcoder,
  ];
  const subject = subjects[select - 1];
  let shuffledQuestions = subject.sort(() => Math.random() - 0.5);
  // 4 tasini qirqib olish
  let Data = shuffledQuestions.slice(0, number);

  let [index, setindex] = useState(0);
  let [question, setquestion] = useState(Data[index]);
  let [lock, setlock] = useState(false);
  let [score, setscore] = useState(0);

  const [modalShow, setmodalShow] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  function checkAns(e, ans) {
    if (lock === false) {
      if (question.correct === ans) {
        e.target.classList.add("correct");
        setscore(++score);
        setlock(true);
      } else {
        e.target.classList.add("uncorrect");
        option_array[question.correct - 1].current.classList.add("correct");
        setlock(true);
      }
    }
  }

  function next() {
    if (lock) {
      if (index === Data.length - 1) {
        setmodalShow(true);
      } else {
        setindex(++index);
        setquestion(Data[index]);
        setlock(false);
        option_array.map((option) => {
          option.current.classList.remove("correct");
          option.current.classList.remove("uncorrect");
          return 0;
        });
      }
    }
  }

  function restart() {
    setmodalShow(false);
    setindex(0);
    setlock(false);
    setscore(0);
    shuffledQuestions = subject.sort(() => Math.random() - 0.5);
    Data = shuffledQuestions.slice(0, number);
    option_array.map((option) => {
      option.current.classList.remove("correct");
      option.current.classList.remove("uncorrect");
      return 0;
    });
  }

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="wrapper">
            <button
              className="close"
              onClick={() => {
                setOnQuiz(false);
                setSelect(0);
                setNumber(5);
              }}
            >
              X
            </button>
            <h1 className="title" id="question">
              {index + 1}. {question.question}
            </h1>
            <ul className="list">
              <li
                ref={Option1}
                onClick={(e) => {
                  checkAns(e, 1);
                }}
                className="item"
              >
                {question.answers.ans1}
              </li>
              <li
                ref={Option2}
                onClick={(e) => {
                  checkAns(e, 2);
                }}
                className="item"
              >
                {question.answers.ans2}
              </li>
              <li
                ref={Option3}
                onClick={(e) => {
                  checkAns(e, 3);
                }}
                className="item"
              >
                {question.answers.ans3}
              </li>
              <li
                ref={Option4}
                onClick={(e) => {
                  checkAns(e, 4);
                }}
                className="item"
              >
                {question.answers.ans4}
              </li>
            </ul>
            <p className="text">
              {" "}
              {index + 1}/{Data.length}{" "}
            </p>
            <div className="buttons">
              <button onClick={next} className="button">
                Keyingi
              </button>
            </div>
          </div>
        </div>
      </div>

      {modalShow && (
        <div className="modal">
          <div className="container">
            <h1 className="modal-title">
              Siz {score} ta savolga to'g'ri javob berdingiz{" "}
              {score / Data.length < 0.6
                ? "😭"
                : score / Data.length < 0.6 && score / Data.length <= 0.8
                ? "😊"
                : "🤩"}
            </h1>
            <button onClick={restart} className="button">
              Takrorlash
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
