import { Container, Grid } from "@mui/material";
import React from "react";
import { Nav, Main, Menu, Footer } from "../components";

const Home = () => {
  return (
    <Container maxWidth="lg, xl">
      <Grid container spacing={8}>
        <Nav />
        <Main />
        <Menu />
        <Grid item />
        <Footer />
      </Grid>
    </Container>
  );
};

export default Home;
