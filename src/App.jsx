import "./App.scss";
import Home from "./pages/Home.jsx";
import OurTeam from "./pages/OurTeam.jsx";
import LessonTime from "./pages/LessonTime.jsx";
import RouterManual from "./components/Subjects/RouterManual.jsx";
// Layouts
import RootLayout from "./layout/RootLayout.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { useState } from "react";

function App() {
  const [onQuiz, setOnQuiz] = useState(false);
  const [select, setSelect] = useState(0);
  const [number, setNumber] = useState(5);
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/our_team" index element={<OurTeam />} />
        <Route path="/lesson_time" index element={<LessonTime />} />
        <Route path="/subjects" index element={<RouterManual />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
