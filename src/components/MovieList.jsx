import React, { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [films, setFilms] = useState([
    {
      titre: "Inception",
      description:
        "Un voleur utilise une technologie pour infiltrer les rêves.",
      posterURL:
        "https://th.bing.com/th/id/R.f196ddde236122aba2bacd13f34ca6a7?rik=KzqmHTqqET9fMQ&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f12300000%2fInception-wallpapers-inception-2010-12396721-1440-900.jpg&ehk=OaEo2M4I1ueoo6jtiZOVAvUd0HwaZBlcecfq4UsKmhA%3d&risl=&pid=ImgRaw&r=0",
      classement: 8.8,
    },
    {
      titre: "Interstellar",
      description: "Une mission à travers l’espace pour sauver l’humanité.",
      posterURL:
        "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
      classement: 8.6,
    },
    {
      titre: "The Dark Knight",
      description: "Batman affronte le Joker dans une guerre psychologique.",
      posterURL:
        "https://th.bing.com/th/id/R.889d01e101d65bf2dd37ec04a130102c?rik=T%2bIOFXI3%2btiC1g&pid=ImgRaw&r=0",
      classement: 9.0,
    },
    {
      titre: "Parasite",
      description: "Une satire sociale entre deux familles très différentes.",
      posterURL:
        "https://th.bing.com/th/id/R.e437478d00b3bfc0496e8c5005003c68?rik=zu8U1S07s8%2bdmA&pid=ImgRaw&r=0",
      classement: 8.6,
    },
  ]);

  const [newFilm, setNewFilm] = useState({
    titre: "",
    description: "",
    posterURL: "",
    classement: "",
  });

  const [searchTitre, setSearchTitre] = useState("");
  const [minClassement, setMinClassement] = useState(0);

  const handleAddFilm = (e) => {
    e.preventDefault();
    const { titre, description, posterURL, classement } = newFilm;

    if (!titre || !description || !posterURL || classement === "") {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const nouveau = {
      titre,
      description,
      posterURL,
      classement: parseFloat(classement),
    };

    setFilms([...films, nouveau]);
    setNewFilm({ titre: "", description: "", posterURL: "", classement: "" });
  };

  const filteredFilms = films.filter(
    (film) =>
      film.titre.toLowerCase().includes(searchTitre.toLowerCase()) &&
      film.classement >= parseFloat(minClassement || 0)
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#3d6e70]">
        🎬 Liste de Films
      </h1>

      {/* 🔍 Filtres */}
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Rechercher par titre"
          value={searchTitre}
          onChange={(e) => setSearchTitre(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          placeholder="⭐ Note minimum"
          value={minClassement}
          onChange={(e) => setMinClassement(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
          min="0"
          max="10"
          step="0.1"
        />
      </div>

      {/* ➕ Formulaire d'ajout */}
      <form onSubmit={handleAddFilm} className="grid sm:grid-cols-2 gap-4 mb-8">
        <input
          type="text"
          placeholder="Titre"
          value={newFilm.titre}
          onChange={(e) => setNewFilm({ ...newFilm, titre: e.target.value })}
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Description"
          value={newFilm.description}
          onChange={(e) =>
            setNewFilm({ ...newFilm, description: e.target.value })
          }
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Lien image"
          value={newFilm.posterURL}
          onChange={(e) =>
            setNewFilm({ ...newFilm, posterURL: e.target.value })
          }
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          placeholder="Classement"
          value={newFilm.classement}
          onChange={(e) =>
            setNewFilm({ ...newFilm, classement: e.target.value })
          }
          className="p-2 border border-gray-300 rounded-lg"
          min="0"
          max="10"
          step="0.1"
        />
        <button
          type="submit"
          className="col-span-1 sm:col-span-2 bg-[#3d6e70] text-white font-bold py-2 rounded-lg hover:bg-[#2f595b]"
        >
          ➕ Ajouter le film
        </button>
      </form>

      {/* 🎞️ Affichage */}
      <MovieCard films={filteredFilms} />
    </div>
  );
};

export default MovieList;
