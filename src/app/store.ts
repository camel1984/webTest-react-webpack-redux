import {configureStore} from '@reduxjs/toolkit'

export interface CounterState {
    numState: number
}

interface ActionType {
    type: string
}

export const numState = (state = 0, action: ActionType) => {
    console.log("#############action: " + action.type)
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

export const store = configureStore({
    reducer: {
        numState
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
