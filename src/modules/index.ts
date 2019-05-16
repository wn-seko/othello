import { routerReducer } from 'react-router-redux'
import { ActionCreatorsMapObject, combineReducers } from 'redux'

// Action
export const actions = {}

// Reducer
const rootReducer = combineReducers({
  router: routerReducer
})

export type RootState = ReturnType<typeof rootReducer>

export type ActionUnion<T extends ActionCreatorsMapObject> = ReturnType<T[keyof T]>

export interface ErrorProps {
  code: string
  message: string
}

export type MessageLevel = 'error' | 'warning' | 'info' | 'success' | undefined

export interface MessageState {
  level: MessageLevel
  message: string
}

export const convertErrorPropsToMessageState = (error: ErrorProps) => ({
  level: 'error' as MessageLevel,
  message: error.message
})

export default rootReducer
