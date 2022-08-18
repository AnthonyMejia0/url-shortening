import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { urlState } from "../atoms/urlAtom";
import BoostBGMobile from "../images/bg-shorten-mobile.svg";
import BoostBGDesktop from "../images/bg-shorten-desktop.svg";

function Shorten() {
  //GET/POST: https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html
  const [link, setLink] = useState("");
  const [error, setError] = useState(null);
  const shortURL = "https://api.shrtco.de/v2/shorten?url=";
  const [urls, setUrls] = useRecoilState(urlState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLink("");
    var inputField = document.getElementById("link-input") as HTMLInputElement;
    inputField.placeholder = "Generating link, please wait...";
    inputField.readOnly = true;

    if (link === "") {
      setError("Please add a link");
      inputField.placeholder = "Shorten a link here...";
      inputField.readOnly = false;
      return;
    }

    fetch(`${shortURL}${link}`)
      .then(async (response) => {
        await response.json().then((data) => {
          if (data.error_code === 2) {
            setError("Error: invalid url");
          } else {
            const newUrl = {
              originalUrl: data.result.original_link,
              shortenedUrl: data.result.short_link,
            };

            setUrls([...urls, newUrl]);
          }

          inputField.placeholder = "Shorten a link here...";
          inputField.readOnly = false;
        });
      })
      .catch((err) => {
        setError("An error occured");
        inputField.placeholder = "Shorten a link here...";
        inputField.readOnly = false;
        console.error(err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-10 w-screen h-min absolute -translate-y-1/2">
      <div className="relative overflow-hidden flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-center p-4 lg:py-10 lg:px-16 bg-dark-violet bg-no-repeat h-full w-[92%] max-w-[1200px] rounded-lg">
        <img
          className="lg:hidden absolute z-0 top-0 right-0 h-4/5 w-4/5"
          src={BoostBGMobile}
          alt="Boost Banner"
        />
        <img
          className="hidden lg:inline absolute z-0 -top-0 left-0 h-full w-full"
          src={BoostBGDesktop}
          alt="Boost Banner"
        />
        <form
          onSubmit={handleSubmit}
          className="z-10 flex flex-col grow-0 lg:flex-row lg:space-y-0 lg:space-x-6 w-full"
        >
          <div className="flex flex-col flex-1 h-full mb-3">
            <input
              id="link-input"
              className={`lg:relative rounded-lg py-2 px-4 lg:flex-1 ${
                error ? "border-2 border-red" : ""
              }`}
              placeholder="Shorten a link here..."
              type="text"
              onChange={(e) => setLink(e.target.value)}
              value={link}
            />
            {error ? (
              <i className="text-red lg:absolute lg:left-16 lg:bottom-3">
                {error}
              </i>
            ) : null}
          </div>
          <button className="button-hover text-white font-black bg-cyan py-2 px-10 rounded-lg">
            Shorten It!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Shorten;
