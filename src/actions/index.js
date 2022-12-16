export const actions = {
    ADD_SYMBOL: "ADD_SYMBOL",
    EQUAL:"EQUAL",
    MS:"MEM_SAVE",
    MC:"MEM_CLEAR",
    MR:"MEM_RETRIEVE"

};

export function addSymbol(key) {
    return {
        type: actions.ADD_SYMBOL,
        key: key,
    };
}

export function memorySave(result) {
    return {
        type: actions.MS,
        result: result,
    };
}

export function memoryClear(RESULT) {
    return {
        type: actions.MC,
        result: result,
    };
}

export function memoryRetrieve() {
    return {
        type: actions.MR,
        result: result,
    };
}

export function equalSymbol(int1, int2) {
    return {
        type: actions.EQUAL,
        int1: int1,
        int2: int2
    };
}