import { Box, Container, Typography } from "@mui/material";
import { HomeCard } from "../../components";



const Phase1 = () => {
  return (
    <Container sx={{mt: 5, mb: 5}}>
      <Box sx={{textAlign: "center"}}>
        <Typography variant="h4" sx={{fontWeight: 700, color: "#874AB1"}}>
          KENAPA HARUS SMEKDHIWA ?
        </Typography>
        <Typography variant="h6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus dignissimos molestiae molestias laborum dolorem quas natus, numquam temporibus reiciendis nostrum ullam. Perspiciatis quia veritatis nobis sunt, ullam quasi qui placeat?
        </Typography>
      </Box>
      <Box sx={{display: "flex", justifyContent: "space-around", flex: 1, gap: "20px"}}>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </Box>
    </Container>
  );
}

export default Phase1;
