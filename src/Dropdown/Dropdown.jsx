import React, { Component } from 'react';
import styles from './dropdown.module.css';

class Dropdown extends Component {

    state = {
        visible: false,
    };

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
    };

    // show = () => {
    //     this.setState({ visible: true });
    // };

    // hide = () => {
    //     this.setState({ visible: false });
    // };

    render() {
        return (
            <div className={styles.DropdownContainer}>
                <div className={styles.Dropdown}>
                    <button type="button" className={styles.Dropdown__toggle} onClick={this.toggle}>{this.state.visible ? 'скрыть' : 'показать'}</button>

                    {this.state.visible && (<div className={styles.Dropdown__menu}>Выпадающее меню</div>)}

                </div>
            </div>

        );
    }
}

export default Dropdown;