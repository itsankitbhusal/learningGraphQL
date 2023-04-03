import React from "react";
import { Container, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

const Home = () => {
  return (
    <Container>
      <Stack spacing={"1"} sx={{ border: 1, borderRadius: 1 }}>
        <div>
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{
              border: 1,
              borderRadius: 1,
              m: 2,
              px: 2,
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
              flexDirection: "row",
            }}
          >
            <h5>if it works don't touch it</h5>
            <h6>~Ankit</h6>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{
              border: 1,
              borderRadius: 1,
              m: 2,
              px: 2,
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
              flexDirection: "row",
            }}
          >
            <h5>if it works don't touch it</h5>
            <h6>~Ankit</h6>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{
              border: 1,
              borderRadius: 1,
              m: 2,
              px: 2,
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
              flexDirection: "row",
            }}
          >
            <h5>if it works don't touch it</h5>
            <h6>~Sagar</h6>
          </Box>
        </div>
      </Stack>
    </Container>
  );
};

export default Home;
