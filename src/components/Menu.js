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
    <>
      <Grid item lg={12} container>
        <Grid item lg={2} />
        <Grid item lg={4}>
          <Typography variant="h4">Specials</Typography>
        </Grid>
        <Grid item lg={4} container sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained" href="/login">
            Online Menu
          </Button>
        </Grid>
        <Grid item lg={2} />
      </Grid>
      <Grid item lg={12} container spacing={3} sx={{ alignItems: "center" }}>
        <Grid item lg={2} />
        <Grid item lg={8} container sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                height="195"
                image={starter}
                alt="Salad"
              />
              <CardContent>
                <Typography display="inline" mr={1}>
                  Greek salad
                </Typography>
                <Typography display="inline">$12.99</Typography>
                <Typography variant="body2" mt={3}>
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                height="195"
                image={mainCourse}
                alt="Main Course"
              />
              <CardContent>
                <Typography display="inline" mr={1}>
                  Bruchetta
                </Typography>
                <Typography display="inline">$5.99</Typography>
                <Typography variant="body2" my={3}>
                  Our Bruschetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                height="195"
                image={dessert}
                alt="Dessert"
              />
              <CardContent>
                <Typography display="inline" mr={1}>
                  Lemon Dessert
                </Typography>
                <Typography display="inline">$5.00</Typography>
                <Typography variant="body2" mt={3}>
                  This comes straight from grandma’s recipe book, every last
                  ingredient has been sourced and is as authentic as can be
                  imagined.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid item lg={2} />
      </Grid>
    </>
  );
};

export default Menu;
