import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#C91C00' }
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#C91C00',
      }
    },
  },
});

export default theme;
