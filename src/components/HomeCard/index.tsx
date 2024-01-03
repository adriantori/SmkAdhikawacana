import { Box, Paper, Typography, createTheme, useMediaQuery } from "@mui/material"
import { CardHomeProps } from "../../types"

const theme = createTheme();

const HomeCard: React.FC<CardHomeProps> = ({imageUrl, description})=> {
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Paper elevation={15} sx={{ width: isMobile ? "40vw" : isTablet ? "25vw" : "18vw", height: isMobile ? "40vw" : isTablet ? "25vw" : "18vw", backgroundColor: "transparent", display: "flex", flexDirection: "column-reverse", borderRadius: "20px", position:"relative", mt: "40px"}}>
            <Box component="img" src={imageUrl} style={{position: "absolute",height: "100%", width: "100%", objectFit: "cover", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", paddingBottom: "31%"}} />
            <Box component="div" style={{ height: "35%", borderRadius: "20px", backgroundColor: "white", zIndex: 1, justifyContent: "center", display: "flex", flexDirection: "column"}}>
                <Typography paragraph sx={{textAlign: "center", padding: "10px", fontSize: isTablet ? "0.8rem" : "1.2rem", fontWeight: 600}}>{description}</Typography>
            </Box>
        </Paper>
    )
}

export default HomeCard