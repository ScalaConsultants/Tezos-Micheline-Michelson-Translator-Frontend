import {TranslatorState} from "../../store/reducers/translator";

export interface IState {
  pending: boolean,
  translator: TranslatorState,
  error?: any
}

export enum Modes {
  MICHELINEMICHELSON = "michelinemichelson",
  MICHELSONMICHELINE = "michelsonmicheline"
}
