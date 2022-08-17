import React, { useState } from "react";

function Shorten() {
  //GET/POST: https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html
  const [link, setLink] = useState("");
  const shortURL = "https://api.shrtco.de/v2/shorten?url=";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Link >>", link);
    fetch(`${shortURL}${link}`)
      .then(async (response) => {
        const shortResponse = await response.json();
        console.log("RESPONSE >>", shortResponse);
      })
      .catch((err) => console.error(err));
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
          <button className="button-hover text-white font-black bg-cyan py-2 px-10 rounded-lg w-full">
            Shorten It!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Shorten;
