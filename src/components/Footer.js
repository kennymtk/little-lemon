import { Box, Grid, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { links } from "./links";

import logo from "../assets/Logo.svg";

const Footer = ({ openSidebar }) => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
        mb={4}
      >
        <Box
          display={"flex"}
          alignItems="baseline"
          component="a"
          underline="none"
          href="/"
          title="little lemon"
          height={{ xs: 28, md: 32 }}
          width={45}
        >
          <img src={logo} alt="logo" />
        </Box>
        {!isBelowMd && (
          <Box p={2}>
            <Grid container spacing={6}>
              {links.map((link, i) => (
                <Grid item key={i}>
                  <Link
                    href={link.href}
                    underline="none"
                    color={"primary.dark"}
                  >
                    {link.title}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Footer;
