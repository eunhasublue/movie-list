import React, { useState } from "react";
import InputField from "./InputField";

const MovieForm = ({ addMovie }) => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [titleError, setTitleError] = useState("");
  const [yearError, setYearError] = useState("");

  const resetForm = () => {
    setMovieTitle("");
    setMovieYear("");
  };

  const validateForm = () => {
    resetErrorMsg();
    let validated = true;
    if (!movieTitle) {
      setTitleError("영화 제목을 입력해주세요.");
      validated = false;
    }
    if (!movieYear) {
      setYearError("개봉년도를 입력해주세요.");
      validated = false;
    }
    return validated;
  };

  const resetErrorMsg = () => {
    setTitleError("");
    setYearError("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addMovie({
        id: Date.now(),
        title: movieTitle,
        year: movieYear,
      });
      resetErrorMsg();
      resetForm();
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <InputField
        type="text"
        value={movieTitle}
        placeholder="영화제목"
        onChange={(e) => setMovieTitle(e.target.value)}
        errorMsg={titleError}
      />
      <InputField
        type="number"
        value={movieYear}
        placeholder="개봉년도"
        onChange={(e) => setMovieYear(e.target.value)}
        errorMsg={yearError}
      />
      <button type="submit">영화 추가</button>
    </form>
  );
};

export default MovieForm;
