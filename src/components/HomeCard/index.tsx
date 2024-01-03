import { Box, Paper, Typography } from "@mui/material"
import { CardHomeProps } from "../../types"



const HomeCard: React.FC<CardHomeProps> = ({imageUrl, description})=> {
    return (
        <Paper elevation={15} sx={{ width: "300px", height: "290px", backgroundColor: "transparent", display: "flex", flexDirection: "column-reverse", borderRadius: "20px", position:"relative", mt: "40px"}}>
            <Box component="img" src={imageUrl} style={{position: "absolute",height: "100%", width: "100%", objectFit: "cover", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", paddingBottom: "35%"}} />
            <Box component="div" style={{ height: "40%", borderRadius: "20px", backgroundColor: "white", zIndex: 1, justifyContent: "center", display: "flex", flexDirection: "column"}}>
                <Typography paragraph sx={{textAlign: "center", padding: "10px", fontSize: "1.2rem", fontWeight: 600}}>{description}</Typography>
            </Box>
        </Paper>
    )
}

export default HomeCard