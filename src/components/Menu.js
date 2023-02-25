import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

import starter from "../assets/greek salad.jpg";
import mainCourse from "../assets/restauranfood.jpg";
import dessert from "../assets/lemon dessert.jpg";

const Menu = () => {
  return (
    <Grid
      item
      lg={12}
      container
      spacing={3}
      sx={{ alignItems: "center", textAlign: "center" }}
    >
      <Grid item lg={2} />
      <Grid item lg={8} container sx={{ justifyContent: "space-between" }}>
        {/* <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Little Lemon
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Chicago
            </Typography>
            <Typography variant="body2" align="center" sx={{ py: 12 }}>
              Little Lemon is a restaurant. <br /> Come and visit us!
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small" variant="contained" href="/reservation">
              Reserve a Table
            </Button>
          </CardActions>
        </Card> */}
        <Grid item>
          <Card>
            <CardMedia
              component="img"
              height="195"
              image={starter}
              alt="Salad"
            />
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardMedia
              component="img"
              height="195"
              image={mainCourse}
              alt="Main Course"
            />
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardMedia
              component="img"
              height="195"
              image={dessert}
              alt="Dessert"
            />
          </Card>
        </Grid>
      </Grid>

      <Grid item lg={2} />
    </Grid>
  );
};

export default Menu;
