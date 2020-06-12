import React from 'react';
// <
export default class Task extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: 'lightblue', borderRadius: '5px', margin: 5}}>
                <p style={{padding: 10}}>{this.props.description}</p>
                <button style={{margin: 5}} onClick={this.props.done}>Done</button>
                <button style={{margin: 5}} onClick={this.props.remove}>Remove</button>
            </div>
        )
    }
}