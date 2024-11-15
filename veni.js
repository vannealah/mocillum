const domain = [1, 2, 3, 4, 5];

const result = domain.map(v => {
    if (v % 2 === 0) {
        return v / 2;
    } else {
        return v * 2;
    }
});

console.log(result); // Output: [2, 1, 6, 2, 10]
