import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  createStyles({
    title: {
      color: 'ffffff',
    },
    l1: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '16px',
      lineHeight: '19px',
      letterSpacing: '0.15px'
    },
    l2: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '14.8px',
      lineHeight: '17px',
      letterSpacing: '0.15px',
      color: '#FF6868'
    },
    l3: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '8.8px',
      lineHeight: '18px',
      letterSpacing: '0.15px',
      color: '#FF6868'
    }
  })
);

const Title = () => {
  const classes = useStyles();

  return (
    <div className="Title">
      <div className="Title__l1">Micheline</div>
      <div className="Title__l2">Michelson</div>
      <div className="Title__l3">Translator v0.01</div>
    </div>
  );
};

export default Title;
