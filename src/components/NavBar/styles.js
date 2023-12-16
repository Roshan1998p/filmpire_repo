import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
  toolbar: {
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '240px',
    [theme.breakpoints.down('sm')]: {
      //if mobile margin left will be 0
      marginLeft: '0',
      flexWrap: 'wrap',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2), // menu button will be removed for above SM
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));
