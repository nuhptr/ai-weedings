import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { TextField } from "@mui/material"

const bull = (
    <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
        •
    </Box>
)

export default function CustomCard() {
    return (
        <Card sx={{ minWidth: 275, padding: 2, borderRadius: 3 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Ayana Wedding Collections
                </Typography>
                
                <Box component="form" sx={{ '& > :not(style)': { my: 1 }, borderRadius: 2 }}>
                <TextField 
                    fullWidth
                    label="Email"
                    variant="outlined"
                    type="email"
                    required 
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            height: 50,
                            borderRadius: 2
                        }
                    }}/>
                </Box>
            
                <Button variant="contained" 
                        fullWidth
                        sx={{
                            borderRadius: 2,
                            mt: 1.5,
                            height: 40
                        }}>
                Login
                </Button>
            
            </CardContent>
            
        </Card>
    )
}
