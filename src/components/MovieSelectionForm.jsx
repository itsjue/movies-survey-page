import { movies } from "./utils/MovieData";

function MovieSelectionForm({ selectedMovie, onMovieSelect }) {
  const handleChange = (event) => {
    const value = event.target.value;
    if (onMovieSelect) {
      onMovieSelect(value);
    }
  };

  return (
    <div className="flex flex-col mt-10">
      {movies.map((movie) => (
        <label key={movie.title} className="flex items-center gap-3 leading-6">
          <input
            type="radio"
            name="option"
            value={movie.title}
            checked={selectedMovie === movie.title} // ใช้ prop จากฟอร์มหลัก
            onChange={handleChange}
          />
          <span className="font-semibold text-[#0e0e0e]">Title:</span> {movie.title}
          <span className="font-semibold text-[#0e0e0e]">Year:</span> {movie.year}
          <span className="font-semibold text-[#0e0e0e]">Director:</span> {movie.director}
        </label>
      ))}
      <p className="my-4">
        <span className="font-semibold">Selected:</span> <span className="bg-[#383838] text-white py-1 px-2 rounded-sm">{selectedMovie || "None"}</span>
      </p>
    </div>
  );
}

export default MovieSelectionForm;
