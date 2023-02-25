import {
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Link,
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
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Little Lemon
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Chicago
            </Typography>
            <Typography variant="body2">
              Little Lemon is a restaurant located in America. Come and visit
              us!
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
            height="400"
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
