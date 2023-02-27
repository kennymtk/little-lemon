import { useState } from "react";
import { Box, Drawer, Grid, IconButton, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import ComapnyLogo from "../assets/Logo.svg";
import MenuIcon from "@mui/icons-material/Menu";

import { links } from "./links";

const Nav = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

  const handleSidebar = () => {
    setOpenSidebar((prevState) => !prevState);
  };

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
          <img src={ComapnyLogo} alt="logo" />
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
        {isBelowMd && (
          <Box>
            <IconButton onClick={handleSidebar} aria-label="Navigation Bar">
              <MenuIcon />
            </IconButton>
          </Box>
        )}
      </Box>
      {/* below md: sidebar */}
      {isBelowMd && (
        <Drawer
          anchor="right"
          onClose={() => handleSidebar()}
          open={openSidebar}
          variant="temporary"
        >
          <Box p={4} mt={3}>
            <Grid container spacing={6} flexDirection={"column"} width={"30vw"}>
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
        </Drawer>
      )}
    </>
  );
};

export default Nav;
