import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import './style.css';

const useStyles = makeStyles(
  createStyles({
    madeByScalac: {
      cursor: 'pointer',
      textAlign: 'center',
      fontSize: '10px',
      fontWeight: 'bold',
      position: 'fixed',
      right: '10px',
      width: '200px',
      '& img': {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        height: '20px',
        marginBottom: '5px'
      }
    }
  })
);

const ScalacLogo = () => {
  const classes = useStyles();
  const scalacUrl = "https://scalac.io";

  const goToScalac = () => {
    window.open(scalacUrl, "_blank");
  };

  return (
      <div className={classes.madeByScalac} onClick={goToScalac}>
        <img src="scalac.png" alt="Scalac" />
        made by Scalac with love ❤
      </div>
    );
};

export default ScalacLogo;
