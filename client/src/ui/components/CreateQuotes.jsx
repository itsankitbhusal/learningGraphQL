import React, { useState } from "react";

const CreateQuotes = () => {
  const [quote, setQuote] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quote);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            placeholder="Write your quote here"
          />
          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
};

export default CreateQuotes;
