import React, { useState } from "react";

function Shorten() {
  const [link, setLink] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Link >>", link);
    setLink("");
  };

  return (
    <div className="flex justify-center h-36 w-screen absolute -translate-y-1/2">
      <div className="flex flex-col space-y-3 justify-center p-4 bg-[url(images/bg-boost-mobile.svg)] bg-right-top bg-dark-violet bg-no-repeat h-full w-[80%] max-w-[1200px] rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            className="rounded-lg p-2"
            placeholder="Shorten a link here..."
            type="text"
            onChange={(e) => setLink(e.target.value)}
            value={link}
          />
          <button className="text-white font-black bg-cyan py-2 px-10 rounded-lg hover:opacity-80 w-full">
            Shorten It!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Shorten;
