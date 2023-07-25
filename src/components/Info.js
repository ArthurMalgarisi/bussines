import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from "@emotion/react";
import theme from '../theme/theme';

export default function Info () {
    return (
        <ThemeProvider theme={theme}>
            <div className='info'>
                <h3>Arthur Paulino Malgarisi Aguiar</h3>
                <h4> Frontend Developer</h4>
                <div className="buttons">
                    <Stack spacing={2} direction="row">
                        <Button href="https://mail.google.com/mail/u/0/#search/optativa?compose=GTvVlcSKkVTTRpwNpfQxjgcPbsRngbGPNPQMnmDkVwhPJfRfvbjXgFKsvxFCDhHrlllNhWbGLrZss" style={{width: '115px', height: '34px'}} color="secondary" variant="contained"startIcon={<FaEnvelope />}> Email</Button>
                        <Button href="https://www.linkedin.com/in/arthur-malgarisi-aguiar-624860237/"style={{width: '115px', height: '34px'}} variant="contained" disableElevation startIcon={<FaLinkedin />}>LinkedIn</Button>
                    </Stack>
                </div>
            </div>
        </ThemeProvider>
    )
}