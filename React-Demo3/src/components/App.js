import React from 'react';

let text = 'React-Demo2';

class App extends React.Component {
    
    message() {
        alert("Hello " + text);
    }

    render() {
        let pStyle = {
            color: 'aqua',
            backgroundColor: 'black'
        };

        return (
            <div>
                <h1 style = {pStyle}> Hello React Skeleton</h1>
                <h2 style = {pStyle}> Welcome {text}</h2>
                <button onClick = {this.message} style = {pStyle}>Click ME</button>
            </div>
        );
    }
}

export default App;