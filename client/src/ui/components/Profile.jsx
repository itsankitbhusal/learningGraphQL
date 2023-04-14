import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MY_PROFILE } from "../../gqloperations/queries";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { loading, error, data } = useQuery(GET_MY_PROFILE);

  const navigate = useNavigate();

  loading && <h2>Loading...</h2>;

  if (error) {
    console.log(error);
  }
  if (!localStorage.getItem("token")) {
    navigate("/");
  }
  return (
    <>
      {data && (
        <>
          <div>
            <h3>
              {data.user.firstName} {data.user.lastName}
            </h3>
            <h3>{data.user.email}</h3>
          </div>
          <h2>Your Quotes</h2>
          {console.log(data.user.quote)}
          {data.user.quotes ? (
            data.user.quotes.map((quote) => {
              return (
                <blockquote>
                  <h5>{quote.name}</h5>
                </blockquote>
              );
            })
          ) : (
            <>
              <h5>Quotes not found</h5>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Profile;
