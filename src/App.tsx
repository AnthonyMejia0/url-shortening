import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Statistics from "./components/Statistics";
import UrlDisplay from "./components/UrlDisplay";

function App() {
  return (
    <div className="h-screen w-screen overflow-x-hidden scrollbar-hide">
      <Navbar />
      <Hero />
      <UrlDisplay />
      <Statistics />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
