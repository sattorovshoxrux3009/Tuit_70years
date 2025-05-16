import "./App.scss";
import Home from "./pages/Home.jsx";
import OurTeam from "./pages/OurTeam.jsx";
import LessonTime from "./pages/LessonTime.jsx";

// Layouts
import RootLayout from "./layout/RootLayout.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/our_team" index element={<OurTeam />} />
        <Route path="/lesson_time" index element={<LessonTime />} />
        {/* <Route path="*" element={<PageError />} /> */}
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
