import React from 'react';

class StateExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            header:  'Header Initial State',
            content: 'Content Initial State'
        };
    }

    updateHeader(text) {
        this.setState({
            header: text
        });
    }

    render() {
        return(
            <div>
                <h1>{this.state.header}</h1>
                <h2>{this.state.content}</h2>
                <button onClick = {this.updateHeader.bind(this, 'Header  has updated')}>Update</button>
            </div>
        );
    }

}

export default StateExample;