import React from 'react'

export default class CircleNumber extends React.Component {
    render() {
        return (
            <span style={styles.circle}>
                4
            </span>
        )
    }
}

const styles = {
    circle: {
        width: '30px',
        height: '30px',
        lineHeight: '30px',
        borderRadius: '100%',
        textAlign: 'center',
        fontSize: '24px',
        padding: '5px',
        border: '2px solid #666'
    }
}