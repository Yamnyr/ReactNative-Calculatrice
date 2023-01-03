export const actions = {
    ADD_SYMBOL: "ADD_SYMBOL",
    EQUAL:"EQUAL",
    MS:"MEM_SAVE",
    MC:"MEM_CLEAR",
    MR:"MEM_RETRIEVE",
    AC:"ALL_CLEAR",
    C:"CLEAR",

};

export function addSymbol(key) {
    return {
        type: actions.ADD_SYMBOL,
        key: key,
    };
}

export function memorySave() {
    return {
        type: actions.MS,
    };
}

export function memoryClear() {
    return {
        type: actions.MC,
    };
}

export function memoryRetrieve() {
    return {
        type: actions.MR,
    };
}

export function equalSymbol() {
    return {
        type: actions.EQUAL,
    };
}
export function allClear() {
    return {
        type: actions.AC,
    };
}
export function clear() {
    return {
        type: actions.C,
    };
}