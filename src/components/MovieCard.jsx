import React from "react";

const MovieCard = ({ films }) => {
  return (
    <div className="overflow-x-auto p-4">
      <div className="flex gap-6 whitespace-nowrap">
        {films.length === 0 ? (
          <p className="text-center text-gray-500">Aucun film trouvé.</p>
        ) : (
          films.map((film, index) => (
            <div
              key={index}
              className="inline-block align-top bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-80 flex-shrink-0"
            >
              <img
                src={film.posterURL}
                alt={film.titre}
                className="h-64 w-full object-cover rounded-t-xl"
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-2">{film.titre}</h2>
                  <p className="text-sm text-gray-600 mb-2">
                    {film.description}
                  </p>
                </div>
                <span className="text-yellow-500 font-semibold">
                  ⭐ {film.classement}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieCard;
