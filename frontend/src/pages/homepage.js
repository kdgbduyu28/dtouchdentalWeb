import { Box, Container, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/appbar";
import AppointmentList from "../components/appointmentlist";


export default function HomePage() {
    return (
        <>
        <ResponsiveAppBar />
        <Container maxWidth="xs">
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }} >
        <Typography variant="h3" color='white'>
            Appointments
        </Typography>
        <AppointmentList />

        </Box>
        </Container>
        
        </>
    );
};