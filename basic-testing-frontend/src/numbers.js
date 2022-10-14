function cleanedNumber(value) {
    let result

    try {
        const numbers = [];
        for (const numberInput of numberInputs) {
            validateStringNotEmpty(numberInput);
            const number = transformToNumber(numberInput);
            validateNumber(number);
            numbers.push(number);
        }
        result = add(numbers).toString();
    } catch (error) {
        result = error.message;
    }

    return result
}

export default cleanedNumber