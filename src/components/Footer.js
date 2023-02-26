import {
  Grid,
  Card,
  Link,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

import dishIcon from "../assets/Logo.svg";

const Footer = () => {
  return (
    <Grid item lg={12} container sx={{ alignItems: "center" }}>
      <Grid item lg={2} />
      <Grid item lg={2}>
        <Card elevation={0}>
          <CardMedia
            component="img"
            height="auto"
            image={dishIcon}
            alt="Dish Icon"
          />
        </Card>
      </Grid>

      <Grid
        item
        lg={1}
        container
        direction="column"
        sx={{ alignItems: "center" }}
      >
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
      </Grid>
      <Grid item lg={1} container direction="column">
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
      <Grid item lg={2}>
        <Card elevation={0} sx={{ minHeight: "148px" }}>
          <CardContent>
            <Typography variant="h5" mb={2}>
              Contact
            </Typography>
            <Typography variant="body2">
              Address: Little Lemon Building
              <br />
              Phone number: 1234-567
              <br />
              email: littlelemon@email.com
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={2}>
        <Card elevation={0} sx={{ minHeight: "148px" }}>
          <CardContent>
            <Typography variant="h5" mb={2}>
              Social Media
            </Typography>
            <Typography variant="body2">
              Facebook: Little Lemon
              <br />
              Instagram: littlelemon
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={2} />
    </Grid>
  );
};

export default Footer;
