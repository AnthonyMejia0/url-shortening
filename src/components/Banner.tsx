import BoostBGMobile from "../images/bg-boost-mobile.svg";
import BoostBGDesktop from "../images/bg-boost-desktop.svg";

function Banner() {
  return (
    <div className="relative overflow-hidden h-min w-screen text-white font-bold flex flex-col items-center justify-center space-y-4 mt-20 py-[4.5rem] bg-dark-violet">
      <img
        className="md:hidden absolute z-0 top-0 left-0 h-full w-full"
        src={BoostBGMobile}
        alt="Boost Banner"
      />
      <img
        className="hidden md:inline absolute z-0 -top-4 left-0 h-full w-full"
        src={BoostBGDesktop}
        alt="Boost Banner"
      />
      <h2 className="text-2xl md:text-4xl z-10">Boost your links today</h2>
      <button className="button-hover z-10 bg-cyan py-2 px-11 rounded-full">
        Get Started
      </button>
    </div>
  );
}

export default Banner;
