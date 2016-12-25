import React from 'react';
import Header       from './Header';
import Content      from './Content';

class App extends React.Component {

    render() {
        return (
            <div>
                <Header title = {this.props.headerTitle}/>
                <Content title = {this.props.contentTitle}
                         body = {this.props.contentBody}/>
            </div>
        );
    }
}

App.defaultProps = {
    headerTitle:    'Default HeaderTitle',
    contentTitle:   'Default ContentTitle',
    contentBody:    'Default ContentBody'
}

export default App;