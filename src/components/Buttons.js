import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useGlobalContext } from './Context'

const useStyles = makeStyles((theme) => ({
    heroButtons: {
        marginTop: theme.spacing(4),
    }
}));
const Buttons = () => {
    const classes = useStyles();

    const { previousPage, nextPage, totalPageNumber, pageNumber } = useGlobalContext()
    return (
            <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                    <Grid item>
                        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                            <Button onClick={previousPage}>Prev</Button>
                            <Button>Page: {pageNumber} from {totalPageNumber}</Button>
                            <Button onClick={nextPage}>Next</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </div>    
    )
}

export default Buttons