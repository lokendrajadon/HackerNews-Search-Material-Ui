import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useGlobalContext } from './Context'
const useStyles = makeStyles((theme) => ({
  textField: {
      '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
      },
  }

}));
const SearchForm = () => {
  const classes = useStyles();
  const { searchInput, setSearchInput } = useGlobalContext()
  return (
    <>
      <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
        Search Hacker News
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
          <form className={classes.textField} noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
              <TextField id="standard-basic" label="Search..." value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)} />
          </form>
      </Typography>
    </>
  )
}

export default SearchForm
