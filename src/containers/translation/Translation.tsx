import React from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import Translator from "../../components/translator/Translator";

const Translation = () => {
  return (
    <Grid container spacing={1} className="Container">
      <Grid item xs={12} lg={12}>
        <h1>Translator</h1>
      </Grid>
      <Grid item xs={12} lg={12}>
        <Translator/>
      </Grid>
    </Grid>
  );
};

export default Translation;
