import React            from 'react';
import ReactDOM         from 'react-dom';
import {createStore}    from 'redux';

const INCREMENT = 'INCREMENT';

/*Action*/
function increase(diff) {
    return {
        type: INCREMENT,
        addBy: diff
    };
}

/*Reducer*/
const initialState = {
    value: 0
};

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + action.addBy
            });
        default:
            return state;
    }
}

const store = createStore(counterReducer);

/*App.js*/
class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    render() {

        let centerStyle = {
            position:           'fixed',
            top:                '50%',
            left:               '50%',
            transform:          'translate(-50%, -50%)',
            WebKitUserSelect:   'none',
            MozUserSelect:      'none',
            MsUserSelect:       'none',
            userSelect:         'none',
            cursor:             'pointer',
        };

        return (
            <div onClick = {this.onClick}
                 style = {centerStyle}>
                <h1>{this.props.store.getState().value}</h1>
            </div>
        );
    }

    onClick() {
        this.props.store.dispatch(increase(1));
    }
}

/*Rendering*/
const rootElement = document.getElementById('root');
const render = () => {
    const appElement = document.getElementById('app');
    ReactDOM.render(
        <App store = {store} />, 
        rootElement
    );
};

store.subscribe(render);

render();
