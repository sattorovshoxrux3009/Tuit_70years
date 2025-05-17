import Subjects from "./Subjects.jsx";
import Main from "./Main.jsx";
import { useState } from "react";

function RouterManual() {
  const [onQuiz, setOnQuiz] = useState(false);
  const [select, setSelect] = useState(0);
  const [number, setNumber] = useState(5);
  return (
    <div className="Manual">
      {" "}
      {!onQuiz && (
        <Subjects
          setOnQuiz={setOnQuiz}
          select={select}
          setSelect={setSelect}
          number={number}
          setNumber={setNumber}
        />
      )}
      {onQuiz && (
        <Main
          setOnQuiz={setOnQuiz}
          select={select}
          setSelect={setSelect}
          number={number}
          setNumber={setNumber}
        />
      )}
    </div>
  );
}

export default RouterManual;
