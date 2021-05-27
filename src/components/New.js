import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useGlobalContext } from './Context'
const useStyles = makeStyles((theme) => ({
  
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    searchform :{
      width: '90vw',
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      marginTop: '5rem',
      marginBottom: '3rem',
    },
    forminput: {
      width: '100%',
      border: 'none',
      borderBottom:'3px solid var(--clr-grey-8)',
      maxWidth: '600px',
      background: 'transparent',
      padding: '1rem',
      fontSize: '1rem',
      color: 'var(--clr-grey-3)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--spacing)',
      margintop: '1rem',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          margin: theme.spacing(1),
        },
      },
      textField: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
   
  }));
const New =()=>{
  const classes = useStyles();
  const { post } = useGlobalContext()

    return(
        <main>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {post.map((card, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Author : {card.author}
                                    </Typography>
                                    <Typography>
                                        {card.title}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        points {card.points}
                                    </Button>
                                    <Button size="small" color="primary">
                                        comments {card.num_comments}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
      </main>
    )
}

export default New