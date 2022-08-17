import StatCard from "./StatCard";
import BrandRecognition from "../images/icon-brand-recognition.svg";
import DetailedRecords from "../images/icon-detailed-records.svg";
import FullyCustomizable from "../images/icon-fully-customizable.svg";

function Statistics() {
  return (
    <div className="mt-40 mb-10 w-screen">
      <h3 className="font-bold text-2xl text-center">Advanced Statistics</h3>
      <p className="text-gray mt-4 text-center px-10">
        Track how your links are performing across the web with{" "}
        <br className="hidden lg:inline" /> our advanced statistics dashboard.
      </p>

      <div className="relative flex flex-col items-center w-screen justify-center lg:flex-row lg:space-x-7  space-y-20 mt-0">
        <div className="lg:hidden absolute h-[90%] w-[10px] bg-cyan bottom-0 left-1/2 -translate-x-1/2"></div>
        <div className="hidden lg:inline absolute h-[10px] w-[25%] bg-cyan bottom-[40%] left-1/2 -translate-x-1/2"></div>

        <StatCard
          icon={BrandRecognition}
          title="Brand Recognition"
          description="Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help intstil confidence in your content."
        />

        <div className="lg:pt-16">
          <StatCard
            icon={DetailedRecords}
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions."
          />
        </div>

        <div className="lg:pt-32">
          <StatCard
            icon={FullyCustomizable}
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
