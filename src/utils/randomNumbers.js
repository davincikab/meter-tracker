const randomNumbers = (min, max, count) => {
    let numbers = [];
    let range = max - min;

    while(numbers.length < count) {
        let val = min + Math.floor(Math.random() * range);
        numbers.push(val)
    }

    return numbers;
}

export default randomNumbers;