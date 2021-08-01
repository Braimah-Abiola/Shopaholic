import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import React from 'react'

export default function Layout({children}) {
    return (
        <div>
            <Head>
                <title>Shopaholic</title>                
            </Head>
            <AppBar position="static">
                <Toolbar>
                    <Typography>Shopaholic</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
            <footer>
                <Typography>
                    All rights reserved. Shopaholic.
                </Typography>
            </footer>
        </div>
    )
}
