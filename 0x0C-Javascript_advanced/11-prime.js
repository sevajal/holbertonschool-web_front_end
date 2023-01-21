function countPrimeNumbers() {
    let numberOfPrime = 0;
    for (let i = 2; i <= 100; i++) {
        let flag = 0;
    
        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
    
        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
            numberOfPrime += 1;
        }
    }
    return numberOfPrime;
}

let performance_before = performance.now();
for (let i = 0; i < 100; i++) {
    setTimeout(function() { countPrimeNumbers(); });
}
let performance_after = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${performance_after - performance_before} milliseconds.`);
