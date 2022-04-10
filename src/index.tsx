import * as React from 'react';
import {Provider} from 'react-redux'
import Counter from "./components/Counter";
import {store} from "./app/store";

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <Counter/>
    </Provider>
)
