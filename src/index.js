import _ from 'lodash';
import React from 'react'
import ReactDOM from 'react-dom'

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');


    const App = () => (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
        >
            <h1>
                Hello World from <a href="https://www.polynique.com">Polynique</a>
            </h1>
        </div>
    )

    ReactDOM.render(<App />, element)

    return element;
}

document.body.appendChild(component());
