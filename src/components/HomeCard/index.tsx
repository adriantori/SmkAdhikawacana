import { CardContent, CardMedia, Paper, Typography } from "@mui/material"



const HomeCard = ()=> {
    return (
        <Paper elevation={10} sx={{width: "300px", height:"290px", borderRadius: "20px", background: "url(https://placehold.co/400x500/EEE/31343C)", backgroundRepeat: "no-repeat", objectFit: "cover"}}>
            <CardMedia sx={{height: "60%"}}/>
                <CardContent sx={{borderRadius: "15px", height: "40%", bgcolor: "white"}}>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                </CardContent> 
        </Paper>
    )
}

export default HomeCard