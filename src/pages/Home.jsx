import Main from "../components/home/Main.jsx";
import Support from "../components/home/Support.jsx";
import Content from "../components/home/Content.jsx";
import Methods from "../components/home/Methods.jsx";
import Events from "../components/home/Events.jsx";
import ContactForm from "../components/home/ContactForm.jsx";
import Choice from "../components/home/Choice.jsx";
import Agenda from "../components/home/Agenda.jsx";

function Home() {
  return (
    <div className="home">
      <Main />
      <Support />
      <Content />
      <Methods />
      <Agenda />
      <Events />
      <Choice />
      <ContactForm />
    </div>
  );
}

export default Home;
