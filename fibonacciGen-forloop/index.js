function fibGen(n) {

    let output = [];

    for (var num = 0; num < n; num++) {
        if (num === 0 || num === 1) {
            output.push(num);
        } else {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }

    return output
}