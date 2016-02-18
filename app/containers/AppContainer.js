'use strict';

import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import MovieContainer from './MovieContainer';
import { connect } from 'react-redux';

import * as actionsCreator from '../actions/index';

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;
        return (
            <MovieContainer
                state={state}
                { ...actions}
            />
        );
    }
}

export default connect(state => ({
        state: state
    }),
    (dispatch) => ({
        actions: bindActionCreators(actionsCreator, dispatch)
    })
)(AppContainer);