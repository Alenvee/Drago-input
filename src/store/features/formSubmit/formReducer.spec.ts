import { SUBMIT } from './actionTypes'
import formReducer from './formReducer'
import { SubmitActionTypes } from './types'

describe('features > formSubmit > formReducer', () => {
  it(`${SUBMIT} action is provided`, () => {
    const initialState = {
      value: "string",
    }

    const expectedState = {
      value: "string",
    }

    const action: SubmitActionTypes = {
      value: "string"
    }

    expect(formReducer(initialState, action)).toEqual(expectedState)
  })
})
