import { Box, Paper } from "@mui/material"



const HomeCard = ()=> {
    return (
        <Paper elevation={10} sx={{ width: "300px", height: "290px", backgroundColor: "transparent", display: "flex", flexDirection: "column", borderRadius: "20px", position:"relative"}}>
            <Box component="img" src="https://placehold.co/400x500/EEE/31343C" style={{ height: "100%", objectFit: "cover", borderTopLeftRadius: "20px", borderTopRightRadius: "20px"}} />
            <Box component="div" style={{ height: "60%", objectFit: "cover", borderRadius: "20px", backgroundColor: "transparent"}}>
                <h6>test</h6>
            </Box>
        </Paper>
    )
}

export default HomeCard