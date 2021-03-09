function fibonacciGenerator(n) {
    // 1. Every number is the sum of the two previous numbers
    let output = [];
    let num = 0;
    while (num < n) {

        if (num === 0 || num === 1) {
            output.push(num);
        } else {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }

        num++;
    }

    return output;

}
