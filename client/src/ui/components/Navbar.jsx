import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  return (
    <nav>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Link to="/" className="brand-logo left">
            Quote App
          </Link>
        </Grid>

        <Grid container item xs={6} justifyContent="space-around">
          {token ? (
            <>
              <Link to="/profile">Profile</Link>
              <Link to="/create">Create</Link>
              <Button
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </Grid>
      </Grid>
    </nav>
  );
};

export default Navbar;
