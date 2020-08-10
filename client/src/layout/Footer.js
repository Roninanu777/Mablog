import React from 'react';
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";

export default function Footer() {
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="lg">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                &copy; 2019 Gistia
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}