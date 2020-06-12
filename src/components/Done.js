import React from 'react';
// <
export default class Done extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={{backgroundColor: 'lightgreen', borderRadius: '5px', margin: 5}}>
                <p style={{textDecoration: 'line-through', color: 'red', padding: 10}}>{this.props.description}</p>
                <button style={{margin: 5}} onClick={this.props.notDone}>Not Done</button>
                <button style={{margin: 5}} onClick={this.props.remove}>Remove</button>
            </div>
        )
    }
}