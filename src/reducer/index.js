import {actions} from '../actions';
import evaluateur from "./evaluateur";

export const defaultState = {
    expression:"",
    memory: 0,
};


export function reducer(state, action) {

console.log("reducer", action)
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
            return {expression: ""};

        case actions.C:
            return {expression: state.expression.slice(0, -1)};

        case actions.EQUAL:
            return {expression: evaluateur(state.expression)};

        default:
            return state;
    }
}