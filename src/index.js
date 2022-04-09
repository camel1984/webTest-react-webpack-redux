import React from 'react'
import {createRoot} from 'react-dom/client';
import {createStore} from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('root')

const root = createRoot(rootEl);

const render = () => root.render(<Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({type: 'INCREMENT'})}
    onDecrement={() => store.dispatch({type: 'DECREMENT'})}
/>)

render();
store.subscribe(render)
