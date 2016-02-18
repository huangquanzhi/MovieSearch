import React, { Component } from 'react-native';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import createStore from './store/index';

const store = createAppStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}