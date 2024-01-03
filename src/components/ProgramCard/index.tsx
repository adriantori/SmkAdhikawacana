import { Box, Typography, createTheme, useMediaQuery } from "@mui/material"
import { CardHomeProps } from "../../types"

const theme = createTheme();

const ProgramCard: React.FC<CardHomeProps> = ({imageUrl, description}) => {
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box sx={{mt:2}}>
            <img src={imageUrl} style={{width: isMobile ? "40vw" : isTablet ? "25vw" : "18vw", height: isMobile ? "40vw" : isTablet ? "25vw" : "18vw", borderRadius: "5px"}}/>
            <Box component="text" sx={{display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#FF9041", borderRadius: "10px", padding: "10px 0 10px 0"}}>
                <Typography sx={{fontSize: isTablet ? "0.8rem":"1.2rem", textAlign: "center", fontWeight: 600}}>
                    {description}
                </Typography>
            </Box>
        </Box>
    )
}

export default ProgramCard