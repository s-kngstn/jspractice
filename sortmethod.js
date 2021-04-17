let list1 = [10, 11, 29, 33, 6,  21, 7, 8];

let ascending = list1.sort(function(lowest, highest){
    return lowest-highest
});

let list2 = [90, 87, 5, 2, 10, 11, 29, 33, 6, 1, 21, 7, 8];

let descending = list2.sort((lowest, highest) => highest-lowest)

console.log(ascending);
console.log(descending);

// Highest value in list is easy to find. It's sorting to highest-to-lowest,
// then grabbing the first value in the descending array.
const highestValue = descending[0];
console.log(`Highest value: ${highestValue}`);
// Lowest value is also easy to find. It's sorting lowest-to-highest,
// then grabbing the first value from the ascending array.
const lowestValue = ascending[0];
console.log(`Lowest value: ${lowestValue}`);



// Alphabetical sorting is as easy as using Array.sort() or Array.reverse()
