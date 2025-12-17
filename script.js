const resultInput = document.getElementById('result');

function appendNumber(number) {
    resultInput.value += number;
}

function appendOperator(operator) {
    if (resultInput.value === '' && operator !== '-') return;
    const lastChar = resultInput.value.slice(-1);
    if (['+', '-', '*', '/', '%'].includes(lastChar) && operator !== '-') {
        resultInput.value = resultInput.value.slice(0, -1) + operator;
    } else {
        resultInput.value += operator;
    }
}

function clearResult() {
    resultInput.value = '';
}

function deleteLast() {
    resultInput.value = resultInput.value.slice(0, -1);
}

function calculateResult() {
    try {
        const result = eval(resultInput.value);
        resultInput.value = result;
    } catch (error) {
        resultInput.value = 'Error';
    }
}
