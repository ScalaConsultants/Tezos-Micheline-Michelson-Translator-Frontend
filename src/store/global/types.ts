import { LibraryState } from "../library/types";
import { TranslatorState } from "../translator/types";
import { MessageState } from "../message/types";
import { AuthenticationState } from "../authentication/types";

export interface IState {
  library: LibraryState;
  message: MessageState;
  auth: AuthenticationState;
  translator: TranslatorState;
  pending: boolean;
  error?: string;
}