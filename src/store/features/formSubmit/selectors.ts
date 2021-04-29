import { SystemState } from './types'

export const submitValue = (state: SystemState): string | null => {
    return state.form.value;
};
