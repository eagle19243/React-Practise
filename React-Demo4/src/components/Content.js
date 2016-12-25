import React from       'react';

class Content extends React.Component {
    render() {
        return (
            <div>
                <h1> {this.props.title} </h1>
                <p> {this.props.body} </p>
            </div>
        );
    }
}

Content.propTypes = {
    title:  React.PropTypes.string,
    body:   React.PropTypes.string.isRequired
}

export default Content;