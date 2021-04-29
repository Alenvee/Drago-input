import { SUBMIT } from './actionTypes'

interface SubmitAction {
  type: typeof SUBMIT;
  value: string | null;
}

export type SubmitActionTypes = SubmitAction

export interface SystemState {
  form: {
    value: string | null
  }
}
