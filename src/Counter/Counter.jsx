import React, { Component } from 'react';
import styles from './counter.module.css';
import Controls from './Controls';


class Counter extends Component {

    static defaultProps = {
        initialValue: 0,
    };

    state = {
        value: this.props.initialValue,
    };

    handleIncrement = () => {
        this.setState(prevState => ({
            value: prevState.value + 1
        }));
    };

    handleDecrement = () => {
        this.setState(prevState => ({
            value: prevState.value - 1
        }));
    };

    render() {
        return (
            <div className={styles.conterContainer}>
                <span className={styles.num}>{this.state.value}</span>

                <Controls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
            </div>
        );
    }
}





export default Counter;