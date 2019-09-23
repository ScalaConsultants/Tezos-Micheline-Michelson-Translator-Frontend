import React, {useEffect, useState} from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import * as TranslatorActions from "../../store/actions/translator";
import * as TranslatorType from "../../types/translator";
import Grid from "@material-ui/core/Grid/Grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import {TranslatorState} from "../../store/reducers/translator";
import HighlightedTextarea from "../highlightedTextArea/highlightedTextArea";

interface IState {
  pending: boolean,
  translator: TranslatorState,
  error?: any
}

const mapState = (state: IState) => ({
  translator: state.translator
});

const Translator = () => {
  const dispatch = useDispatch();
  const { translator } = useMappedState(mapState);
  const [currentMode, setCurrentMode] = useState<TranslatorType.ModesType>('michelinemichelson');
  const [micheline, setMicheline] = useState(translator.micheline);
  const [michelson, setMichelson] = useState(translator.michelson);

  useEffect(() => {
    setMichelson(translator.michelson);
  }, [translator.michelson]);

  useEffect(() => {
    setMicheline(translator.micheline);
  }, [translator.micheline]);

  const switchMode = (value?: TranslatorType.ModesType) => {
    if(value) setCurrentMode(value);
    else {
      if (currentMode === 'michelinemichelson') setCurrentMode('michelsonmicheline');
      else if (currentMode === 'michelsonmicheline') setCurrentMode('michelinemichelson');
    }
  };

  const translate = () => {
    console.log("Translating..." + micheline);

    if(currentMode === 'michelinemichelson') {
      dispatch({
        type: TranslatorActions.TRANSLATOR_FETCH_MICHELINE_TO_MICHELSON,
        payload: micheline
      });
    }

    else if(currentMode === 'michelsonmicheline') {
      dispatch({
        type: TranslatorActions.TRANSLATOR_FETCH_MICHELSON_TO_MICHELINE,
        payload: michelson
      });
    }
  };

  const reduxSetMicheline = (value: string) => {
    dispatch({
      type: TranslatorActions.TRANSLATOR_SET_MICHELINE,
      translation: value
    });

    if(value) switchMode('michelinemichelson');
  };

  const reduxSetMichelson = (value: string) => {
    dispatch({
      type: TranslatorActions.TRANSLATOR_SET_MICHELSON,
      translation: value
    });

    if(value) switchMode('michelsonmicheline');
  };

  return (
    <Grid container spacing={4} className="Container">
      <Grid container spacing={1} className="Container">
        <Grid item xs={4} lg={4}>
          <label className="CurrentMode">Mode: {TranslatorType.Labels[currentMode]}</label>
        </Grid>
        <Grid item xs={2} lg={2}>
          <Button variant="contained" color="primary" className="Button" onClick={() => switchMode()}>
            Switch
          </Button>
        </Grid>
        <Grid item xs={2} lg={2}>
          <Button variant="contained" color="primary" className="Button" onClick={() => translate()}>
            Translate
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={6} lg={6}>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={12}>
            <Fab aria-label="delete" onClick={() => reduxSetMicheline('')}>
              <DeleteIcon />
            </Fab>
          </Grid>
          <Grid item xs={12} lg={12}>
            <HighlightedTextarea
              label="Micheline"
              value={translator.micheline}
              onChange={reduxSetMicheline}
              className="Textfield"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} lg={6}>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={12}>
            <Fab aria-label="delete" onClick={() => reduxSetMichelson('')}>
              <DeleteIcon />
            </Fab>
          </Grid>
          <Grid item xs={12} lg={12}>
            <TextField
              id="outlined-multiline-static"
              label="Michelson"
              multiline
              rows="20"
              value={translator.michelson}
              onChange={(e) => {reduxSetMichelson(e.target.value)}}
              className="Textfield"
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={12}>
        <div className="Error">{translator.error}</div>
      </Grid>
    </Grid>
  );
};

export default Translator;
