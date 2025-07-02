import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 🎥 Vidéo de fond */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌫️ Overlay sombre */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* 💬 Contenu principal */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full text-white px-4">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 animate-fade-in-down">
          Bienvenue sur CinéExplorer 🎬
        </h1>
        <p className="text-lg sm:text-2xl mb-8 animate-fade-in-up">
          Explorez, filtrez et ajouter vos films préférés en quelques clics.
        </p>
        <Link
          to="/movies"
          className="bg-[#3d6e70] hover:bg-[#2f595b] text-white font-bold py-3 px-6 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg"
        >
          🎥 Voir les Films
        </Link>
      </div>
    </div>
  );
}

export default Home;
