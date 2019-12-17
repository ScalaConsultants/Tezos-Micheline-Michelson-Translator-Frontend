import { LibraryState } from "../library/types";
import { TranslatorState, TranslatorMessageState } from "../translator/types";
import { MessageState } from "../message/types";
import { AuthenticationState } from "../authentication/types";

export interface IState {
  library: LibraryState;
  message: MessageState;
  auth: AuthenticationState;
  translator: TranslatorState;
  translatorMessage: TranslatorMessageState;
  pending: boolean;
  error?: string;
}