import MovieSelectionForm from "./MovieSelectionForm";
import CommentSection from "./CommentSection";
import { useState } from "react";

function SurveyFormSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState({});

  function isValidateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateForm() {
    const errorMessage = {};

    if (!name.trim()) {
      errorMessage.name = "โปรดใส่ชื่อของคุณ";
    }
    if (!email.trim()) {
      errorMessage.email = "โปรดใส่อีเมลของคุณ";
    } else if (!isValidateEmail(email)) {
      errorMessage.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }

    if (!selectedMovie.trim()) {
      errorMessage.movie = "กรุณาเลือกหนังที่คุณชอบ";
    }

    setError(errorMessage);
    return Object.keys(errorMessage).length;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm() !== 0) return;

    const submittedFormData = {
      Name: name.trim(),
      Email: email.trim(),
      Movie: selectedMovie.trim(),
      Comment: comment.trim(),
    };

    alert(JSON.stringify(submittedFormData, null, 2));

    setName("");
    setEmail("");
    setSelectedMovie("");
    setComment("");
    setError({});
  };

  const handleReset = () => {
  setName("");
  setEmail("");
  setSelectedMovie("");
  setComment("");
  setError({});
};

  return (
    <div className="w-fit h-fit bg-[#404040] flex flex-col items-center justify-center px-14">
      <h1 className="text-white text-4xl font-bold mt-10">Movies Survey Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center p-12">
        <div className="flex items-center">
          <label htmlFor="name" className="font-semibold text-[#0e0e0e]">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="enter your name..."
            className="w-[300px] bg-[#898989] rounded-sm py-1 px-3 ml-4 mr-6 placeholder:text-[#bdbdbd] placeholder:text-sm focus:border focus:border-[#bdbdbd]"
          />
          {error.name && <p className="text-red-700 text-sm">{error.name}</p>}
        </div>
        <div className="flex items-center mt-3">
          <label htmlFor="email" className="font-semibold text-[#0e0e0e]">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your name..."
            className="w-[300px] bg-[#898989] rounded-sm py-1 px-3 ml-4 mr-6 placeholder:text-[#bdbdbd] placeholder:text-sm focus:border focus:border-[#bdbdbd]"
          />
          {error.email && <p className="text-red-700 text-sm">{error.email}</p>}
        </div>

        <MovieSelectionForm selectedMovie={selectedMovie} onMovieSelect={setSelectedMovie} />
        {error.movie && <p>{error.movie}</p>}

        <CommentSection comment={comment} onCommentChange={setComment} />

        <div className="flex justify-center gap-5 mt-4">
          <button type="submit" className="bg-green-700 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-green-600 transition">
            Submit Survey
          </button>
          <button type="reset" onClick={handleReset} className="bg-red-800 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-red-700 transition">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default SurveyFormSection;
