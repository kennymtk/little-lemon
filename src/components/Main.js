import {
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import restaurantPic from "../assets/restaurant.jpg";

import React from "react";

const Main = () => {
  return (
    <Grid
      item
      lg={12}
      container
      spacing={3}
      sx={{ alignItems: "center", textAlign: "center" }}
    >
      <Grid item lg={2} />
      <Grid item lg={4}>
        <Card sx={{ maxHeight: "420px" }}>
          <CardContent>
            <Typography variant="h4" component="div">
              Little Lemon
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Chicago
            </Typography>
            <Typography variant="body1" align="center" sx={{ py: 12 }}>
              Little Lemon is a comtemporary restaurant with rich culinary
              heritage.
              <br /> It is designed to be a social restaurant with an open
              kitchen.
              <br /> Come and visit us!
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small" variant="contained" href="/reservation">
              Reserve a Table
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item lg={4}>
        <Card>
          <CardMedia
            component="img"
            height="420"
            image={restaurantPic}
            alt="Restaurant environment"
          />
        </Card>
      </Grid>
      <Grid item lg={2} />
    </Grid>
  );
};

export default Main;
