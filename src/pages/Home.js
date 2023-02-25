import { Container, Grid } from "@mui/material";
import React from "react";
import { Nav, Main, Footer } from "../components";

const Home = () => {
  return (
    <Container maxWidth="lg, xl">
      <Grid container spacing={5}>
        <Nav />
        <Main />
        <Footer />
      </Grid>
    </Container>
  );
};

export default Home;
