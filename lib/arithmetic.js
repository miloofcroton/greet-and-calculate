function add(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('give me numbers');
    }
    return num1 + num2;
}

function sub(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('give me numbers');
    }
    return num1 - num2;
}

function multiply(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('give me numbers');
    }
    return num1 * num2;
}

function divide(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('give me numbers');
    }
    if(num2 === 0) {
        throw new Error('can\'t divide by zero!');
    }
    return num1 / num2;
}


module.exports = {
    add,
    sub,
    multiply,
    divide
};
