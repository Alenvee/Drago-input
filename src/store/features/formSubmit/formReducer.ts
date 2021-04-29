import { SUBMIT } from './actionTypes'
import { SubmitActionTypes } from './types'

interface FormState {
  value: string | null;
}

const initialState: FormState = {
  value: null,
};

export default (state = initialState, action: SubmitActionTypes): FormState => {
  switch (action.type) {
    case SUBMIT:
      return { ...state, value: action.value };
    default:
      return state;
  }
}
