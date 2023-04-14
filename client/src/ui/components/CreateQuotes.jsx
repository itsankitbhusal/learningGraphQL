import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_QUOTE } from "../../gqloperations/mutations";
import { GET_ALL_QUOTES } from "../../gqloperations/queries";

const CreateQuotes = () => {
  const [quote, setQuote] = useState("");
  const [createQuote, { loading, error, data }] = useMutation(CREATE_QUOTE, {
    refetchQueries: [GET_ALL_QUOTES, "getAllQuotes"],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quote);
    createQuote({
      variables: {
        name: quote,
      },
    });
  };
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    console.log(error.message);
  }
  if (data) {
    console.log(data);
  }
  return (
    <>
      <div>
        {error && <div>{error.message}</div>}
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
