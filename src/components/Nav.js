import React from "react";
import { Box, Link, Grid } from "@mui/material";

import ComapnyLogo from "../assets/Logo.svg";

const Nav = () => {
  return (
    <Grid item lg={12} container sx={{ alignItems: "center" }}>
      <Grid item lg={2} />
      <Grid item lg={2}>
        <Box>
          <img src={ComapnyLogo} alt="Company Logo" className="logo" />
        </Box>
      </Grid>
      <Grid item lg={6} container sx={{ justifyContent: "space-between" }}>
        <Link
          href="/"
          color="primary"
          underline="hover"
          sx={{ margin: "1rem" }}
        >
          Home
        </Link>
        <Link
          href="/"
          color="primary"
          underline="hover"
          sx={{ margin: "1rem" }}
        >
          About
        </Link>
        <Link
          href="/"
          color="primary"
          underline="hover"
          sx={{ margin: "1rem" }}
        >
          Menu
        </Link>
        <Link
          href="/reservation"
          color="primary"
          underline="hover"
          sx={{ margin: "1rem" }}
        >
          Reservation
        </Link>
        <Link
          href="/login"
          color="primary"
          underline="hover"
          sx={{ margin: "1rem" }}
        >
          Order Online
        </Link>
        <Link
          href="/login"
          color="primary"
          underline="hover"
          sx={{ margin: "1rem" }}
        >
          Login
        </Link>
      </Grid>
      <Grid item lg={2} />
    </Grid>
  );
};

export default Nav;
