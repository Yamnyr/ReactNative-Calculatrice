import {actions} from '../actions';
import evaluateur from "./evaluateur";

export function reducer(state = defaultState, action) {

    const defaultState = {
        expression:0,
        memory: 0,
    };

    switch (action.type) {
        case actions.ADD_SYMBOL:
            return {...state, expression: state.expression + action.key };

        case actions.MS:
            return {memory: state.expression};

        case actions.MC:
            return {memory:0};

        case actions.MR:
            return {expression : state.memory};

        case actions.AC:
            return {expression:0};

        case actions.C:
            return {expression: state.expression.slice(0, -1)};

        case actions.EQUAL:
            return {expression: evaluateur(state)};

        default:
            return state;
    }
}