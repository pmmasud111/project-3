/* eslint-disable no-unreachable */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { MovieContext } from "../../App.jsx";
import getImageUrl from "../../util/utility.js";
import MovieDetailsModal from "./MovieDetailsModal.jsx";
import Rating from "./Rating.jsx";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { cartData, setCartData } = useContext(MovieContext);

  function handleModalClose() {
    setSelectedMovie(null);
    setShowModal(false);
  }

  function handleMovieSelection(movie) {
    setSelectedMovie(movie);
    setShowModal(true);
  }

  function handleAddCart(event, movie) {
    event.stopPropagation();
    event.preventDefault();
    const found = cartData.find((item) => {
      return item.id === movie.id;
    });

    if (!found) {
      setCartData([...cartData, movie]);
    } else {
      console.error(
        `The movie ${movie.title}has been added to the cart already`
      );
    }
  }
  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={handleAddCart}
        />
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover rounded xl"
            src={getImageUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              className="bg-green-400 rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddCart(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span className="font-bold text-base">
                ${movie.price} | Add to Cart
              </span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
