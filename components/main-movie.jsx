"use client";

import Carousel from "react-bootstrap/Carousel";

const MainContent = () => {
  const movieContainer = [
    {
      name: "The Dark Knight",
      category: "Action",
      movieTime: "2h 32m",
      imdbScore: 9.0,
      coverImage:
        "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      description:
        "Batman faces his greatest psychological and physical test as the Joker unleashes chaos on Gotham City.",
    },
    {
      name: "Interstellar",
      category: "Sci-Fi",
      movieTime: "2h 49m",
      imdbScore: 8.6,
      coverImage:
        "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      description:
        "A team of explorers travels through a wormhole in space to save humanity as Earth faces a global food crisis.",
    },
    {
      name: "Parasite",
      category: "Thriller",
      movieTime: "2h 12m",
      imdbScore: 8.5,
      coverImage:
        "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      description:
        "A poor family schemes to infiltrate the lives of a wealthy household, but their plan spirals out of control.",
    },
    {
      name: "The Shawshank Redemption",
      category: "Drama",
      movieTime: "2h 22m",
      imdbScore: 9.3,
      coverImage:
        "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      description:
        "A banker wrongfully imprisoned for murder finds hope and friendship behind bars as he plots his escape.",
    },
    {
      name: "The Godfather",
      category: "Crime",
      movieTime: "2h 55m",
      imdbScore: 9.2,
      coverImage:
        "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      description:
        "The aging patriarch of a powerful crime family hands control to his reluctant son, igniting a saga of loyalty and betrayal.",
    },
    {
      name: "Spirited Away",
      category: "Animation",
      movieTime: "2h 5m",
      imdbScore: 8.6,
      coverImage:
        "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      description:
        "A young girl enters a magical world of spirits and must find a way to free herself and her parents from a mysterious curse.",
    },
    {
      name: "Mad Max: Fury Road",
      category: "Action",
      movieTime: "2h 0m",
      imdbScore: 8.1,
      coverImage:
        "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
      description:
        "In a desert wasteland, Max teams up with Furiosa to flee a tyrant and lead a rebellion for freedom.",
    },
    {
      name: "La La Land",
      category: "Musical",
      movieTime: "2h 8m",
      imdbScore: 8.0,
      coverImage:
        "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
      description:
        "An aspiring actress and a jazz musician fall in love while chasing their dreams in Los Angeles.",
    },
  ];

  // split movies into chunks of 4
  const movieChunks = [];
  for (let i = 0; i < movieContainer.length; i += 4) {
    movieChunks.push(movieContainer.slice(i, i + 4));
  }

  return (
    <div className="relative overflow-visible">
      <Carousel interval={5000} indicators={true} pause={false}>
        {movieChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="flex justify-center gap-8 p-8 h-full overflow-visible">
              {chunk.map((movie, idx) => (
                <div
                  key={idx}
                  tabIndex={0}
                  className="relative w-[150px] flex-shrink-0 text-center flex flex-col h-full transition-transform duration-300 transform hover:scale-110 cursor-pointer z-20"
                  onClick={() =>
                    (window.location.href =
                      "https://www.netflix.com/mn/title/70079583")
                  }
                >
                  <img
                    src={movie.coverImage}
                    alt={movie.name}
                    className="rounded-[16px] w-full object-cover flex-1"
                  />
                  <h2 className="text-white text-sm font-semibold mt-2 !text-[20px]">
                    {movie.name}
                  </h2>
                  <p className="text-gray-400 !text-[12px]">
                    {movie.category} | {movie.movieTime} | IMDb:{" "}
                    {movie.imdbScore}
                  </p>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MainContent;
