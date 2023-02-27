import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const BookingForm = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        fontWeight={700}
        mb={3}
      >
        Reservation Form
      </Typography>
      <Box maxWidth={400} margin={"0 auto"}>
        <form>
          <Box display="flex" flexDirection="column">
            <Box marginBottom={2}>
              <TextField
                label="Full name"
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
              />
            </Box>
            <Box marginBottom={2}>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
              />
            </Box>
            <Box my={2}>
              <label htmlFor="res-date">Choose date </label>
              <input type="date" id="res-date" />
            </Box>
            <Box my={2}>
              <label htmlFor="res-time">Choose time </label>
              <select id="res-time ">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
              </select>
            </Box>
            <Box my={2}>
              <label htmlFor="guests">Number of guests </label>
              <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
              />
            </Box>
            <Box my={2}>
              <label htmlFor="occasion">Occasion </label>
              <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Others</option>
              </select>
            </Box>
            <Box my={2}>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                fullWidth
              >
                Reserve now
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default BookingForm;
