import { Key } from "react";
import { useRecoilValue } from "recoil";
import { urlCard, urlState } from "../atoms/urlAtom";
import UrlCard from "./UrlCard";

function UrlDisplay() {
  const urls = useRecoilValue(urlState);

  return (
    <div className="flex w-screen items-center justify-center mt-24 lg:mt-20">
      <div className="flex flex-col space-y-4 w-[92%] max-w-[1200px]">
        {urls.map((url: urlCard, i: Key) => (
          <UrlCard
            key={i}
            originalUrl={url.originalUrl}
            shortenedUrl={url.shortenedUrl}
            copied={false}
          />
        ))}
      </div>
    </div>
  );
}

export default UrlDisplay;
