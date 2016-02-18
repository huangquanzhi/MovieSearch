import * as types from '../constants/index';

const initialState = {
    test: true,
};

export default function test(state = initialState, action = {}) {
    switch (action.type) {
        case types.TEST_ACTION:
            return {
                ...state,
                test: !state.test
            };
        default:
            return state;
    }
}
