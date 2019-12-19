import { LibraryState } from "../library/types";
import { AdminLibraryState } from "../adminLibrary/types";
import { TranslatorState, TranslatorMessageState } from "../translator/types";
import { MessageState } from "../message/types";
import { AuthenticationState } from "../authentication/types";

export interface IState {
  library: LibraryState;
  adminLibrary: AdminLibraryState;
  message: MessageState;
  auth: AuthenticationState;
  translator: TranslatorState;
  translatorMessage: TranslatorMessageState;
  pending: boolean;
  error?: string;
}
