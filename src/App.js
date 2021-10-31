import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ServicesHome from "./components/services/ServicesHome";
import "./_variables.css";
import "./_local_resets.css";
import "./_globals.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ServicesHome />
    </>
  );
}

export default App;
