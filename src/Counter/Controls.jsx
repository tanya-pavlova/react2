import React from 'react';
import styles from './counter.module.css';

const Controls = ({ onIncrement, onDecrement }) => (
    <div className={styles.buttonContainer}>
        <button type="button" onClick={onIncrement} className={styles.buttons}>Увеличить на 1</button>
        <button type="button" onClick={onDecrement} className={styles.buttons}>Уменьшить на 1</button>
    </div>
);

export default Controls;