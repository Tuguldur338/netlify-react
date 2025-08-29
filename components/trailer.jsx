const Trailer = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
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
    </div>
  );
};

export default Trailer;
