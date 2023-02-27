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

const Main = (props) => {
  return (
    <Grid container alignItems={"center"} mb={6} spacing={3}>
      <Grid item xs={12} md={6}>
        <Card elevation={0}>
          <CardContent>
            <Typography variant="h4">Little Lemon</Typography>
            <Typography mb={4} color="text.secondary">
              Chicago
            </Typography>
            <Typography variant="body1" mb={4}>
              Little Lemon is a comtemporary restaurant with rich culinary
              heritage.
              <br /> It is designed to be a social restaurant with an open
              kitchen.
              <br /> Come and visit us!
            </Typography>
          </CardContent>
          <CardActions
            sx={{ justifyContent: { xs: "flex-start", md: "center" } }}
          >
            <Button size="small" variant="contained" href="/reservation">
              Reserve a Table
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia
            component="img"
            height="400"
            image={restaurantPic}
            alt="Restaurant environment"
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Main;
