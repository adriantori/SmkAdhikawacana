import { Box, Container, ThemeProvider, Typography, createTheme, useMediaQuery } from "@mui/material";
import { HomeCard } from "../../components";

const theme = createTheme();

const Phase1 = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box sx={{textAlign: "center"}}>
          <Typography variant="h4" sx={{fontWeight: 700, color: "#874AB1"}}>
            KENAPA HARUS SMEKDHIWA ?
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, mb: isMobile ? 4 : 10 }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus dignissimos molestiae molestias laborum dolorem quas natus, numquam temporibus reiciendis nostrum ullam. Perspiciatis quia veritatis nobis sunt, ullam quasi qui placeat?
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            gap: "20px",
            flexWrap: isTablet ? "wrap" : "nowrap",}}>
          <HomeCard imageUrl="https://placehold.co/300x300/000/31343C" description="lalallalal lalallala" />
          <HomeCard imageUrl="https://placehold.co/300x300/000/31343C" description="lalallalal lalallala" />
          <HomeCard imageUrl="https://placehold.co/300x300/000/31343C" description="lalallalal lalallala" />
          <HomeCard imageUrl="https://placehold.co/300x300/000/31343C" description="lalallalal lalallala" />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Phase1;
