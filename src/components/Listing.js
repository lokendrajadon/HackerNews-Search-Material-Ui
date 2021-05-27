import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useGlobalContext } from './Context'
import SearchForm from './SearchForm'
import Stories from './Stories'
import Buttons from './Buttons'

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    }
}));
const Listing = () => {
    const classes = useStyles();
    return (
        <main>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <SearchForm />
                    <Buttons />
                </Container>
            </div>
            <Stories />
        </main>
    )
}

export default Listing