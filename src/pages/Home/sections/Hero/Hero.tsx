import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/logoII.jpg";
import LocationOnIcon from '@mui/icons-material/LocationOn';

import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimateBackground/AnimateBackground";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StyledButton from "../../../../components/StyledButton/StyledButton";

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

    const StyledIConWhats = styled("div")(() => ({
        [theme.breakpoints.up('xs')]: { // <= mobile            
            width: "8%",            
        },
        [theme.breakpoints.up('md')]: { // >= mobile            
            width: "15%",            
        },        
        color: "green"
    }))

    const StyledIConLocation = styled("div")(() => ({   
        [theme.breakpoints.up('xs')]: { // <= mobile            
            width: "7%",            
        },
        [theme.breakpoints.up('md')]: { // >= mobile            
            width: "7%",            
        },     
        color: "red"
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
                                <Grid item xs={12} md={4} display="flex" justifyContent="center" color="white">                                     
                                    <StyledButton onClick={() => console.log("Whatsapp")}>
                                  <StyledIConWhats><WhatsAppIcon /></StyledIConWhats>  
                                         +1(816) 699-4783
                                         </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={6} display="flex" justifyContent="center" color="white">                                   
                                <StyledButton onClick={() => console.log("Whatsapp")}>
                                <StyledIConLocation>
                                        <LocationOnIcon />
                                        </StyledIConLocation>
                                        12805 S MUR-LEN ROAD, OLATHE
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
