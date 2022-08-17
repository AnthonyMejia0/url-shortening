import WorkingIllustration from "../images/illustration-working.svg";
import Shorten from "./Shorten";

function Hero() {
  return (
    <div className="relative w-screen bg-white">
      <div className="overflow-hidden xl:px-28 xl:pt-10 pb-40 grid grid-cols-1 xl:grid-cols-11 md:justify-items-center xl:justify-items-stretch items-center">
        <div className="h-[25rem] w-[35rem] xl:h-full bg-contain overflow-visible xl:col-start-7 2xl:col-start-8">
          <img
            className="ml-4 md:mx-auto xl:ml-2 w-full 2xl:scale-110"
            src={WorkingIllustration}
            alt="Working"
          />
        </div>

        <div className="text-center xl:text-left xl:row-start-1 xl:col-start-1 3xl:col-start-2 xl:col-span-6 3xl:col-span-5 2xl:col-span-5 2xl:pl-10 2xl:pt-10">
          <h2 className="text-[2.5rem] xl:text-5xl 2xl:text-[3.5rem] 3xl:text-7xl 3xl:leading-[1.2] leading-none xl:leading-[1.2] 2xl:leading-[1.25] font-bold pt-10 xl:pt-0">
            More than just shorter links
          </h2>
          <p className="text-gray text-lg px-10 xl:p-0 pt-5 3xl:pr-[5.5vw]">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="text-white font-bold bg-cyan mt-5 py-2 px-12 rounded-full hover:opacity-50">
            Get Started
          </button>
        </div>
      </div>

      <Shorten />
    </div>
  );
}

export default Hero;
