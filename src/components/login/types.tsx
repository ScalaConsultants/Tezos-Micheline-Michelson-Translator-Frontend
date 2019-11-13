import { authState } from '../../store/authentication/types';

export interface IState {
    pending: boolean;
    auth: authState;
    error?: string;
}

export type FormValues = {
    login: string,
    password: string,
}