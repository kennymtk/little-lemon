import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

import starter from "../assets/greek salad.jpg";
import mainCourse from "../assets/restauranfood.jpg";
import dessert from "../assets/lemon dessert.jpg";

const Menu = () => {
  return (
    <Box mb={6}>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
        >
          Specials
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {[
          {
            title: "Greek salad",
            subtitle:
              "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            media: starter,
            price: "$12.99",
          },
          {
            title: "Bruchetta",
            subtitle:
              "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            media: mainCourse,
            price: "$5.99",
          },
          {
            title: "Lemon Dessert",
            subtitle:
              "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            media: dessert,
            price: "$5.00",
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              display={"block"}
              width={"100%"}
              height={"100%"}
              sx={{
                textDecoration: "none",
              }}
            >
              <Card width={"100%"} height={"100%"} borderRadius={3}>
                <CardMedia
                  image={item.media}
                  title={item.title}
                  sx={{
                    height: 140,
                  }}
                />
                <CardContent>
                  <Typography variant={"h6"} fontWeight={500} align={"left"}>
                    {item.title}
                  </Typography>
                  <Typography align={"left"} variant={"body2"} mb={2}>
                    {item.price}
                  </Typography>
                  <Typography
                    align={"left"}
                    variant={"body2"}
                    color="textSecondary"
                  >
                    {item.subtitle}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Menu;
