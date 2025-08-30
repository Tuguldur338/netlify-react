"use client";

import Button from "react-bootstrap/Button";

const Trailer = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <iframe
          width="1200"
          height="700"
          src="https://www.youtube.com/embed/EXeTwQWrcwY?autoplay=1&mute=1&loop=1&playlist=EXeTwQWrcwY&controls=0&modestbranding=1&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <h1 className="font-semibold !text-[20px] relative bottom-[10px] left-[20px]">
          <b>The Dark Knight</b> |<b> Action</b> |<b> 2h 32m</b> |
          <b> IMDb: 9</b>
        </h1>

        <p className="relative left-[20px]">
          Author: <b>Frank Miller</b>
        </p>

        <Button
          className="w-[150px] position-relative bottom-[150px] left-[20px]"
          onClick={() =>
            (window.location.href = "https://www.netflix.com/mn/title/70079583")
          }
        >
          <b>Watch</b>
        </Button>
      </div>
    </div>
  );
};

export default Trailer;
