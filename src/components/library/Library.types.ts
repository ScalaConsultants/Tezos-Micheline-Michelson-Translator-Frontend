import {LibraryState} from "../../store/reducers/library";

export interface IState {
  pending: boolean,
  library: LibraryState,
  error?: any
}
