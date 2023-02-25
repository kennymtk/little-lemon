import { Grid, Card, Link } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Grid item>
      <Grid item lg={6} container sx={{ justifyContent: "space-around" }}>
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
        <Card>
          <h3>Contact</h3>
          <p>Address: Little Lemon Building</p>
          <p>Phone number: 1234-567</p>
          <p>email: littlelemon@email.com</p>
        </Card>
        <Card>
          <h3>Social Media</h3>
          <p>Facebook: Little Lemon</p>
          <p>Instagram: littlelemon</p>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Footer;
