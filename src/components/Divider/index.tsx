import { Box } from "@mui/material"

const Divider = () => {
    return(
        <Box sx={{mt:20, '@media (max-width: 600px)': {
            mt:10
          } }}>
        </Box>
    )
}

export default Divider