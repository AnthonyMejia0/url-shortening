import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Statistics from "./components/Statistics";

function App() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Statistics />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
