import React from 'react';
import styles from '../styles/buttons.module.scss';

const LinkButtonColorMap = {
    "blue": styles['button--blue'],
    "red" : styles['button--red'],
    "gray": styles['button--gray'],
}

export default function CreateButtons(props) {
    let currentColor = props.color ? LinkButtonColorMap[props.color] : LinkButtonColorMap.blue;
    let Component = props.component || 'button';

    return <Component
        className={`${styles.button} ${currentColor}`}
        {...props}
        style = {{width: props.width}}
    >
        {props.children}
    </Component>
}
