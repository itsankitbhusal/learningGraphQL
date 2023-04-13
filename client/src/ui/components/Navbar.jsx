import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Link to="/" className="brand-logo left">
            Quote App
          </Link>
        </Grid>

        <Grid container item xs={6} justifyContent="space-around">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/create">Create</Link>
        </Grid>
      </Grid>
    </nav>
  );
};

export default Navbar;
