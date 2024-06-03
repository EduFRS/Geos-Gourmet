import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/logoII.jpg";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimateBackground/AnimateBackground";

const Hero = () => {
    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main, 
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile            
            paddingTop: "100px"
        },
        [theme.breakpoints.up('md')]: { // >= mobile            
            paddingTop: "0"
        }
    }))

    const StyledImg = styled("img")(() => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2} marginTop="-200px">
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center" >
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>                            
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={1}>Geos Gourmet</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">Brazileira Bakery</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">                                     
                                    <StyledButton onClick={() => console.log("Contact me!")}>
                                        <EmailIcon /><Typography>Contact me</Typography>
                                    </StyledButton>                                 
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">                                   
                                    <StyledButton onClick={() => console.log("Location!")}>
                                        <LocationOnIcon /><Typography>Location</Typography>   
                                    </StyledButton>                                 
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>                
            </StyledHero>
        </>
    )
};

export default Hero;
