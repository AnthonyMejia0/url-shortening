import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function UrlCard({
  originalUrl,
  shortenedUrl,
  copied,
}: {
  originalUrl: string;
  shortenedUrl: string;
  copied: boolean;
}) {
  const [isCopied, setIsCopied] = useState(copied);

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 items-start lg:items-center justify-between rounded-lg bg-white lg:py-4 lg:px-5">
      <p className="p-4 lg:p-0 lg:flex-1">{originalUrl}</p>
      <div className="lg:hidden border-b border-b-gray w-full"></div>
      <p className="text-cyan p-4 lg:p-0">{shortenedUrl}</p>
      {isCopied ? (
        <button className="bg-dark-violet text-white font-bold w-[90%] lg:w-[6.5rem] mx-auto py-2 rounded-lg mb-4 lg:mb-0 cursor-default">
          Copied!
        </button>
      ) : (
        <CopyToClipboard text={shortenedUrl}>
          <button
            onClick={() => setIsCopied(true)}
            className="bg-cyan text-white font-bold button-hover w-[90%] lg:w-[6.5rem] mx-auto py-2 rounded-lg mb-4 lg:mb-0"
          >
            Copy
          </button>
        </CopyToClipboard>
      )}
    </div>
  );
}

export default UrlCard;
