import {CounterState} from "../app/store";
import {Action, Dispatch} from "redux";
import {connect, ConnectedProps} from "react-redux";
import * as React from 'react';

interface State {
}

class Counter extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }


    render() {
        return (
            <p>
                Clicked: {this.props.currentCount} times
                {' '}
                <button onClick={() => this.props.onIncrement()}>
                    +
                </button>
                {' '}
                <button onClick={() => this.props.onDecrement()}>
                    -
                </button>
                {' '}
                <button onClick={() => {
                    if (this.props.currentCount % 2 !== 0) {
                        this.props.onIncrement()
                    }
                }}>
                    Increment if odd
                </button>
                {' '}
                <button onClick={() => setTimeout(this.props.onIncrement, 1000)}>
                    Increment async
                </button>
            </p>
        )
    }
}

const mapState = (state: CounterState) => ({
    currentCount: state.numState
});

const mapDispatch = (dispatch: Dispatch<Action>) => ({
    onIncrement: () => dispatch({type: 'INCREMENT'}),
    onDecrement: () => dispatch({type: 'DECREMENT'}),
});
const connector = connect(mapState, mapDispatch);
type Props = ConnectedProps<typeof connector>;

export default connector(Counter)
