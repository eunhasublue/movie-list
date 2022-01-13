import React from "react";

const InputField = ({ type, value, placeholder, onChange, errorMsg }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <br />
      <div style={{ color: "red" }}>{errorMsg}</div>
    </>
  );
};

export default InputField;
