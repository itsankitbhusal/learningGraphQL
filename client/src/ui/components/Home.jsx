import { Container } from "@mui/material";
import { Box, Stack } from "@mui/system";

import { useQuery } from "@apollo/client";
import { GET_ALL_QUOTES } from "../../gqloperations/queries";

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);
  data && console.log(data);

  // loading && <h1>Loading ...</h1>;
  // error && console.log(error.message);

  return (
    <Container>
      <Stack spacing={"1"} sx={{ border: 1, borderRadius: 1 }}>
        <div>
          {data &&
            data.quotes.map((quote) => {
              return (
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
                  <h5>{quote.name}</h5>
                  <h6>~{quote.user.email}</h6>
                </Box>
              );
            })}
        </div>
      </Stack>
    </Container>
  );
};

export default Home;
